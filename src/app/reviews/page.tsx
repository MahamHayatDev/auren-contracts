import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/reveal";

const reviews = [
  {
    quote:
      "The furniture selection brought together exactly the atmosphere we wanted for our hospitality space. Every detail felt considered.",
    name: "Olivia Bennett",
    role: "Hospitality Project Manager",
    project: "Hotel Interiors",
  },
  {
    quote:
      "A thoughtful approach to furniture and space planning. The overall concept balanced practicality with a beautiful visual direction.",
    name: "James Carter",
    role: "Commercial Property Consultant",
    project: "Office Environment",
  },
  {
    quote:
      "The attention to materials, finishes and functionality made the entire design direction feel cohesive and well considered.",
    name: "Charlotte Williams",
    role: "Interior Design Consultant",
    project: "Residential Development",
  },
  {
    quote:
      "We appreciated the focus on understanding the needs of the space before exploring suitable furniture solutions.",
    name: "Daniel Thompson",
    role: "Restaurant Director",
    project: "Restaurant Interiors",
  },
  {
    quote:
      "A refined furniture concept with a strong balance between comfort, design and everyday functionality.",
    name: "Sophie Mitchell",
    role: "Property Development Manager",
    project: "Serviced Apartments",
  },
  {
    quote:
      "The approach was organised, considered and focused on the details that make an interior feel complete.",
    name: "Alexander Reed",
    role: "Business Owner",
    project: "Commercial Interiors",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
            CLIENT EXPERIENCES
          </p>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Words that
              <br />
              mean something.
            </h1>

            <p className="max-w-lg text-base leading-8 text-[#77736D]">
              Discover the values behind meaningful furniture solutions:
              thoughtful design, attention to detail and an understanding
              of every space.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-6 md:px-10">
        <Reveal>
          <div
            className="relative flex min-h-[350px] items-end bg-cover bg-center md:min-h-[480px]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1800)",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative max-w-2xl p-8 text-white md:p-14">
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#E5CBA5]">
                THE AUREN APPROACH
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Every detail contributes to the bigger picture.
              </h2>
            </div>
          </div>
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 text-center">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
                Testimonials
              </p>

              <h2 className="font-serif text-4xl md:text-6xl">
                Experiences & perspectives.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77736D]">
                A collection of sample testimonials for this conceptual
                brand experience.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px bg-[#DED6C9] sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.name}>
                <article className="h-full bg-[#EEE9E0] p-8 md:p-10">
                  <div className="flex gap-1 text-[#9C7A4F]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  <p className="mt-8 font-serif text-2xl leading-relaxed">
                    “{review.quote}”
                  </p>

                  <div className="mt-10 border-t border-[#D7CFC2] pt-6">
                    <p className="font-medium">{review.name}</p>

                    <p className="mt-2 text-xs text-[#77736D]">
                      {review.role}
                    </p>

                    <p className="mt-3 text-xs uppercase tracking-widest text-[#9C7A4F]">
                      {review.project}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#25262A] px-6 py-24 text-center text-[#F7F4EE] md:py-32">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C5A77D]">
            START A CONVERSATION
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Let's create something meaningful together.
          </h2>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#E8E1D4] px-8 py-4 text-xs uppercase tracking-[0.18em] text-[#25262A] transition hover:bg-[#9C7A4F] hover:text-white"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

    </main>
  );
}