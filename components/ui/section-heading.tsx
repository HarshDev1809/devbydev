interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-stone-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-stone-500">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
