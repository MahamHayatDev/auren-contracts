import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Sofa,
  Ruler,
  Truck,
  Lightbulb,
  PackageCheck,
} from "lucide-react";
import Reveal from "@/components/reveal";

const services = [
  {
    number: "01",
    title: "Furniture Procurement",
    description:
      "Carefully considered furniture sourcing to meet your project's design, functionality and budget requirements.",
    icon: Sofa,
  },
  {
    number: "02",
    title: "Space Planning",
    description:
      "Thoughtful furniture layouts that make the most of available space while supporting comfort and movement.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Bespoke Furniture",
    description:
      "Individual furniture concepts developed around specific dimensions, materials, finishes and project needs.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Project Coordination",
    description:
      "Organised coordination of furniture requirements, selections and project details from start to finish.",
    icon: ClipboardList,
  },
  {
    number: "05",
    title: "Delivery & Installation",
    description:
      "Coordinated delivery and installation planning to help bring selected furniture solutions into your space.",
    icon: Truck,
  },
  {
    number: "06",
    title: "Complete Furniture Solutions",
    description:
      "A considered approach to bringing furniture selections together across larger commercial and residential projects.",
    icon: PackageCheck,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">

      {/* HERO */}
      <section className="border-b border-[#E5DED3]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              WHAT WE DO
            </p>

            <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Considered services.
              <br />
              Better spaces.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#77736D] md:text-base">
              From furniture selection to project coordination, we bring
              together the services that help spaces work beautifully.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[#25262A] px-7 py-4 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-[#9C7A4F]"
            >
              Discuss Your Requirements <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 lg:py-24">
        <Reveal>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
              Our Approach
            </p>

            <h2 className="max-w-lg font-serif text-3xl leading-tight md:text-4xl">
              Everything your space needs, thoughtfully considered.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="text-sm leading-8 text-[#77736D]">
              Every project has different requirements. Our approach brings
              together furniture sourcing, design considerations and project
              coordination to help create functional and welcoming spaces.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#77736D]">
              Whether you are furnishing a hotel, restaurant, office or
              residential development, we focus on understanding your needs
              before exploring suitable solutions.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-[#EEE9E0] px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
                Our Services
              </p>

              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A complete approach to furniture solutions.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-px bg-[#D7CFC2] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number}>
                  <div className="group h-full bg-[#F7F4EE] p-7 transition duration-300 hover:bg-white md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-[#9C7A4F]">
                        {service.number}
                      </span>

                      <Icon
                        size={24}
                        strokeWidth={1.2}
                        className="text-[#9C7A4F]"
                      />
                    </div>

                    <h3 className="mt-9 font-serif text-xl md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#77736D]">
                      {service.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs uppercase tracking-widest text-[#9C7A4F]">
                      Explore <ArrowRight size={15} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 lg:py-24">
        <Reveal>
          <div className="min-h-[350px] overflow-hidden md:min-h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400"
              alt="Interior furniture and design"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
              From Concept To Completion
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              One considered process. Every important detail.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#77736D]">
              Successful furniture projects require more than selecting
              beautiful pieces. They require planning, coordination and
              attention to the details that make a space functional.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#77736D]">
              Our service approach is built around bringing these elements
              together with your project's objectives in mind.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#9C7A4F] pb-2 text-sm transition hover:gap-5"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-[#25262A] px-6 py-20 text-center text-[#F7F4EE] md:py-24">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#C5A77D]">
            Let's Work Together
          </p>

          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
            Have a project in mind? Let's talk.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
            Tell us about your space, your requirements and what you would
            like to achieve.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#E8E1D4] px-7 py-4 text-xs uppercase tracking-[0.15em] text-[#25262A] transition hover:bg-[#9C7A4F] hover:text-white"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

    </main>
  );
}