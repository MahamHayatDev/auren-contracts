import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

const industries = [
  {
    number: "01",
    title: "Hotels & Hospitality",
    description:
      "Welcoming and comfortable environments for hotels, guest rooms, reception areas and hospitality spaces.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=85&w=1200",
  },
  {
    number: "02",
    title: "Restaurants & Cafes",
    description:
      "Thoughtfully selected furniture for dining environments, cafes, restaurants and social spaces.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=85&w=1200",
  },
  {
    number: "03",
    title: "Corporate Workspaces",
    description:
      "Practical and inspiring furniture solutions for offices, meeting rooms and collaborative environments.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1200",
  },
  {
    number: "04",
    title: "Residential Developments",
    description:
      "Considered furniture solutions for apartments, private residences and contemporary living environments.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1200",
  },
  {
    number: "05",
    title: "Serviced Apartments",
    description:
      "Comfortable and functional furniture selections for extended-stay accommodation and serviced living.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200",
  },
  {
    number: "06",
    title: "Education & Public Spaces",
    description:
      "Durable and practical furniture concepts for learning environments, shared areas and public interiors.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1200",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">

      {/* HERO */}
      <section
        className="relative flex min-h-[650px] items-center bg-cover bg-center md:min-h-[750px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=2200)",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 text-white md:px-10">
          <p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#E5CBA5]">
            INDUSTRIES WE SERVE
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
            Furniture for
            <br />
            every environment.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
            From hospitality and workplaces to residential developments,
            we explore furniture solutions shaped around the way spaces are used.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-4 border border-white/70 px-8 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#25262A]"
          >
            Discuss Your Industry <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10 lg:py-32">
        <Reveal>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
              Different Spaces. Different Needs.
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Understanding how every environment works.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="text-base leading-8 text-[#77736D]">
              A hotel lobby, a restaurant and a modern workplace all serve
              different purposes. Each environment requires its own balance
              of comfort, functionality and visual character.
            </p>

            <p className="mt-5 text-base leading-8 text-[#77736D]">
              We consider the people who use each space, its daily demands
              and the atmosphere it aims to create when exploring suitable
              furniture solutions.
            </p>
          </div>
        </Reveal>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="bg-[#EEE9E0] px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
                Our Industries
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Spaces we help bring to life.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#77736D]">
                Explore the environments where thoughtful furniture choices
                can make a meaningful difference.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Reveal key={industry.number}>
                <div className="group">
                  <div className="relative h-[330px] overflow-hidden md:h-[390px]">
                    <div
                      className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${industry.image})`,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <span className="absolute left-6 top-6 bg-[#F7F4EE] px-4 py-2 font-serif text-xl">
                      {industry.number}
                    </span>

                    <h3 className="absolute bottom-7 left-6 right-6 font-serif text-3xl text-white">
                      {industry.title}
                    </h3>
                  </div>

                  <div className="border-b border-[#D7CFC2] py-6">
                    <p className="text-sm leading-7 text-[#77736D]">
                      {industry.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#9C7A4F] transition hover:gap-5"
                    >
                      Discuss Your Project <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="relative mx-6 my-24 overflow-hidden md:mx-10 lg:my-32">
        <Reveal>
          <div
            className="relative flex min-h-[480px] items-center bg-cover bg-center md:min-h-[600px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=2000)",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 max-w-3xl px-8 py-20 text-white md:px-16">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#E5CBA5]">
                One Thoughtful Philosophy
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Different environments. One considered approach.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/80">
                Whatever the setting, we believe successful furniture
                solutions begin with understanding the people and purpose
                behind every space.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-[#25262A] px-6 py-24 text-center text-[#F7F4EE] md:py-32">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C5A77D]">
            Have A Project In Mind?
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Let's find the right solution for your space.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65">
            Tell us about your industry, your environment and your furniture
            requirements.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#E8E1D4] px-8 py-4 text-xs uppercase tracking-[0.18em] text-[#25262A] transition hover:bg-[#9C7A4F] hover:text-white"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

    </main>
  );
}