import Link from "next/link";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-[#F7F4EE] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[#25262A] md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600">
          {description}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block border-b border-[#9C7A4F] pb-2 text-sm"
        >
          Discuss a project →
        </Link>
      </div>
    </section>
  );
}