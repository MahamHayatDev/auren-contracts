import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Heart,
  Layers3,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/reveal";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We learn about your space, vision and requirements.",
  },
  {
    number: "02",
    title: "Explore",
    description: "We select furniture styles, materials and finishes.",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "We bring every detail together with care.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We work towards a space that looks and functions beautifully.",
  },
];

const values = [
  {
    number: "01",
    title: "Purposeful Design",
    description: "Furniture that combines beauty with everyday function.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Quality & Detail",
    description: "Thoughtful materials and carefully considered finishes.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Client Focus",
    description: "Solutions shaped around each client's requirements.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Lasting Value",
    description: "Timeless designs made to remain relevant.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">

      {/* PAGE INTRO */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pt-24">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
            ABOUT AUREN CONTRACTS
          </p>

          <h1 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
            Thoughtful furniture.
            <br />
            Meaningful spaces.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#77736D]">
            Creating considered furniture solutions for hospitality,
            workplaces and contemporary living.
          </p>
        </Reveal>
      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
                WHO WE ARE
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Furniture with purpose. Spaces with character.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#77736D]">
                AUREN CONTRACTS is a conceptual commercial furniture brand
                focused on bringing together thoughtful design, quality
                and functionality.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#77736D]">
                From hotels and restaurants to offices and residential
                developments, we believe every space deserves furniture
                that complements the way people use it.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#9C7A4F] pb-2 text-sm hover:gap-5 transition-all"
              >
                Discuss a project <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
                alt="Elegant contemporary living space"
                className="h-[260px] w-full object-cover md:h-[340px]"
              />

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900"
                alt="Modern interior design"
                className="mt-12 h-[260px] w-full object-cover md:h-[340px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* THIRD IMAGE */}
      <section className="px-6 md:px-10">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800"
            alt="Contemporary commercial workspace"
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
        </Reveal>
      </section>

      {/* PHILOSOPHY */}
      <section className="mt-20 bg-[#25262A] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C5A77D]">
                OUR PHILOSOPHY
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Good design goes beyond appearance.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-l border-[#9C7A4F] pl-7">
              <p className="text-sm leading-8 text-white/65">
                We believe successful interiors balance comfort,
                functionality and visual character. Every detail
                contributes to the experience of a space.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs tracking-widest text-[#C5A77D]">
                <Building2 size={20} />
                SPACES WITH PURPOSE
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
            HOW WE WORK
          </p>

          <h2 className="mb-14 max-w-2xl font-serif text-4xl md:text-5xl">
            From first ideas to finished spaces.
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <Reveal key={item.number}>
              <div className="border-t border-[#D7CFC2] pt-7">
                <p className="font-serif text-4xl text-[#9C7A4F]">
                  {item.number}
                </p>
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#77736D]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#EEE9E0] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
              WHAT MATTERS TO US
            </p>

            <h2 className="mb-14 font-serif text-4xl md:text-5xl">
              The values behind our work.
            </h2>
          </Reveal>

          <div className="grid gap-px bg-[#DED6C9] sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.number}>
                  <div className="h-full bg-[#F7F4EE] p-8 transition hover:bg-white md:p-10">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl text-[#9C7A4F]">
                        {value.number}
                      </span>
                      <Icon size={24} className="text-[#9C7A4F]" />
                    </div>

                    <h3 className="mt-8 font-serif text-2xl">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#77736D]">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8E1D4] px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
            YOUR NEXT PROJECT
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl md:text-6xl">
            Let&apos;s create spaces that work beautifully.
          </h2>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#25262A] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#9C7A4F]"
          >
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

    </main>
  );
}