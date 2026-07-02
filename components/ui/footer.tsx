import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon, NpmIcon } from "@/components/ui/icons";
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
  {
    href: profile.links.npm,
    icon: null,
    customIcon: NpmIcon,
    label: "npm",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-6">
          {/* Copyright */}
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
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
                  className="group flex items-center gap-2 text-sm text-stone-500 hover:text-foreground transition-colors"
                >
                  {IconComponent ? (
                    <IconComponent className="w-4 h-4 text-accent" />
                  ) : CustomIcon ? (
                    <CustomIcon className="w-4 h-4 text-accent" />
                  ) : null}
                  <span className="group-hover:underline decoration-accent underline-offset-4">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
