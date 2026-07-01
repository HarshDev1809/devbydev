"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { type ReactNode } from "react";

interface TooltipIconLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}

export function TooltipIconLink({
  href,
  label,
  icon,
  external = true,
}: TooltipIconLinkProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-stone-500 hover:text-accent hover:bg-accent/10"
            aria-label={label}
          >
            {icon}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded-lg bg-stone-900 px-3 py-1.5 text-sm text-white shadow-lg"
            sideOffset={8}
          >
            {label}
            <Tooltip.Arrow className="fill-stone-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
