import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

const projects = [
  {
    number: "01",
    category: "HOSPITALITY",
    title: "The Contemporary Hotel",
    location: "London, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=85&w=1400",
  },
  {
    number: "02",
    category: "WORKSPACE",
    title: "The Modern Office",
    location: "Manchester, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1400",
  },
  {
    number: "03",
    category: "RESTAURANT",
    title: "The Dining Room",
    location: "Birmingham, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=85&w=1400",
  },
  {
    number: "04",
    category: "RESIDENTIAL",
    title: "The Private Residence",
    location: "Surrey, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400",
  },
  {
    number: "05",
    category: "HOSPITALITY",
    title: "The Boutique Stay",
    location: "Edinburgh, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400",
  },
  {
    number: "06",
    category: "SERVICED APARTMENTS",
    title: "The Urban Apartment",
    location: "London, United Kingdom",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1400",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">

      {/* PAGE INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
            OUR PROJECTS
          </p>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Spaces brought
              <br />
              to life.
            </h1>

            <p className="max-w-lg text-base leading-8 text-[#77736D]">
              Explore a collection of conceptual interiors showcasing how
              thoughtful furniture choices can shape hospitality,
              workplace and residential environments.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECT GALLERY */}
      <section className="bg-[#EEE9E0] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-14 sm:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <article className="group">
                <div className="relative h-[330px] overflow-hidden md:h-[430px]">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />

                  <span className="absolute left-5 top-5 bg-[#F7F4EE] px-4 py-2 font-serif text-xl">
                    {project.number}
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-[#D7CFC2] py-7">
                  <div>
                    <p className="mb-3 text-xs tracking-[0.2em] text-[#9C7A4F]">
                      {project.category}
                    </p>

                    <h2 className="font-serif text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm text-[#77736D]">
                      {project.location}
                    </p>
                  </div>

                  <ArrowRight
                    size={22}
                    className="mt-5 text-[#9C7A4F] transition group-hover:translate-x-2"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
            YOUR PROJECT COULD BE NEXT
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Have a space in mind?
            <br />
            Let's talk about it.
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