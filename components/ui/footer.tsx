import { Mail, Phone, Package } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data/profile";

const footerLinks = [
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  { href: `tel:${profile.phone}`, icon: Phone, label: "Phone" },
  {
    href: profile.links.linkedin,
    icon: null,
    customIcon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: profile.links.github,
    icon: null,
    customIcon: GitHubIcon,
    label: "GitHub",
  },
  { href: profile.links.npm, icon: Package, label: "npm" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Contact links */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => {
              const IconComponent = link.icon;
              const CustomIcon = "customIcon" in link ? link.customIcon : null;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-stone-500 hover:text-accent hover:bg-accent/5"
                >
                  {IconComponent ? (
                    <IconComponent className="w-4 h-4" />
                  ) : CustomIcon ? (
                    <CustomIcon className="w-4 h-4" />
                  ) : null}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Harsh Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
