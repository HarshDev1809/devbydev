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
      className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 flex flex-col justify-center min-h-screen"
    >
      <div className="max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-bold text-stone-900 leading-tight mb-8">
          Hi,<br />
          I&apos;m <span className="text-accent">{profile.name}</span><br />
          {profile.title}
        </h1>

        {/* <a
          href={`mailto:${profile.email}`}
          className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-10 text-lg transition-colors"
        >
          Contact
        </a> */}
      </div>
    </section>
  );
}
