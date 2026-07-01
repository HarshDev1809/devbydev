import { Mail, Phone, MapPin, Package } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { TooltipIconLink } from "@/components/ui/tooltip-icon-link";
import { profile } from "@/lib/data/profile";

const contactLinks = [
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    href: `tel:${profile.phone}`,
    label: "Phone",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    href: "#",
    label: profile.location,
    icon: <MapPin className="w-5 h-5" />,
    external: false,
  },
  {
    href: profile.links.linkedin,
    label: "LinkedIn",
    icon: <LinkedInIcon className="w-5 h-5" />,
  },
  {
    href: profile.links.github,
    label: "GitHub",
    icon: <GitHubIcon className="w-5 h-5" />,
  },
  {
    href: profile.links.npm,
    label: "npm",
    icon: <Package className="w-5 h-5" />,
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl bg-white border border-stone-200 mx-auto max-w-5xl mt-8 px-8 py-16 md:px-16 md:py-24"
    >
      {/* Subtle accent decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          {profile.title}
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-stone-900 mb-6">
          {profile.name}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed mb-10">
          {profile.pitch}
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-1">
          {contactLinks.map((link) => (
            <TooltipIconLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              external={link.external !== false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
