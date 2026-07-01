interface TagProps {
  label: string;
  variant?: "default" | "accent";
}

export function Tag({ label, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-lg ${
        variant === "accent"
          ? "bg-accent/10 text-accent"
          : "bg-stone-100 text-stone-700"
      }`}
    >
      {label}
    </span>
  );
}
