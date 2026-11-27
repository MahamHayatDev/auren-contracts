"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import Reveal from "@/components/reveal";

const collections = [
  {
    number: "01",
    title: "Seating",
    description:
      "Chairs, sofas and lounge seating for hospitality, workplaces and residential environments.",
    image:
      "https://images.unsplash.com/photo-1598300056393-4aac492f4344?q=85&w=1200",
    products: [
      {
        name: "Accent Lounge Chair",
        description:
          "An upholstered accent chair designed for living rooms, hotel suites and reception areas.",
        image:
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=85&w=1000",
      },
      {
        name: "Contemporary Sofa",
        description:
          "A comfortable sofa for lounges, living rooms and welcoming hospitality spaces.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=85&w=1000",
      },
      {
        name: "Upholstered Dining Chair",
        description:
          "A refined dining chair suitable for restaurants, cafes and residential dining rooms.",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?q=85&w=1000",
      },
      {
        name: "Lounge Armchair",
        description:
          "Relaxed individual seating for hotel lounges, reading corners and living spaces.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=85&w=1000",
      },
    ],
  },

  {
    number: "02",
    title: "Tables & Desks",
    description:
      "Dining tables, coffee tables, meeting tables and functional work desks.",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=85&w=1200",
    products: [
      {
        name: "Dining Table",
        description:
          "A spacious dining table designed for restaurants, dining rooms and hospitality environments.",
        image:
          "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=85&w=1000",
      },
      {
        name: "Coffee Table",
        description:
          "A contemporary centrepiece for living rooms, hotel lounges and seating areas.",
        image:
          "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=85&w=1000",
      },
      {
        name: "Office Work Desk",
        description:
          "A practical workspace desk designed for professional offices and home working.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1000",
      },
      {
        name: "Bedside Side Table",
        description:
          "A compact occasional table suitable for bedrooms, lounges and reading corners.",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=85&w=1000",
      },
    ],
  },

  {
    number: "03",
    title: "Bedroom Furniture",
    description:
      "Beds, bedside tables, wardrobes and bedroom furniture for comfortable and organised spaces.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1200",
    products: [
      {
        name: "Upholstered Bed",
        description:
          "A comfortable upholstered bed designed to create a relaxing and elegant bedroom.",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=85&w=1000",
      },
      {
        name: "Bedside Table",
        description:
          "A practical bedside table for keeping everyday essentials close and organised.",
        image:
          "https://www.waseeh.com/cdn/shop/files/subsist-nightstand-bedside-table-with-drawer-furniture-waseeh-pakistan-6881504.jpg?v=1784141354",
      },
      {
        name: "Bedroom Wardrobe",
        description:
          "A spacious wardrobe offering organised clothing storage for bedrooms and hotel suites.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=85&w=1000",
      },
      {
        name: "Bedroom Dresser",
        description:
          "A bedroom dresser providing useful storage and a dedicated space for personal essentials.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1000",
      },
    ],
  },

  {
    number: "04",
    title: "Storage Solutions",
    description:
      "Cabinetry, shelving, wardrobes and sideboards for practical and organised interiors.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=85&w=1200",
    products: [
      {
        name: "Display Cabinet",
        description:
          "A stylish cabinet for displaying decorative objects, accessories and collections.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=85&w=1000",
      },
      {
        name: "Open Wall Shelving",
        description:
          "Open shelves for books, decorative accessories and everyday storage.",
        image:
          "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=85&w=1000",
      },
      {
        name: "Storage Sideboard",
        description:
          "A versatile sideboard for dining rooms, living areas and hospitality interiors.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1000",
      },
      {
        name: "Built-in Storage",
        description:
          "Integrated cabinetry designed to maximise available space and reduce clutter.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1000",
      },
    ],
  },

  {
    number: "05",
    title: "Outdoor Furniture",
    description:
      "Garden seating, patio tables, loungers and furniture for terraces and exterior spaces.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200",
    products: [
      {
        name: "Outdoor Lounge Sofa",
        description:
          "Comfortable outdoor sofa seating for patios, gardens and hotel terraces.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1000",
      },
      {
        name: "Garden Dining Table",
        description:
          "An outdoor dining table for garden restaurants, patios and open-air dining areas.",
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1000",
      },
      {
        name: "Outdoor Lounge Chair",
        description:
          "Individual outdoor seating for balconies, terraces and garden relaxation areas.",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1000",
      },
      {
        name: "Patio Dining Chairs",
        description:
          "Practical seating designed for outdoor dining and hospitality environments.",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1000",
      },
    ],
  },

  {
    number: "06",
    title: "Bespoke Furniture",
    description:
      "Custom furniture concepts developed around individual project requirements and interior designs.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1200",
    products: [
      {
        name: "Custom Reception Desk",
        description:
          "A made-to-measure reception desk designed for hotels, offices and commercial spaces.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1000",
      },
      {
        name: "Bespoke Dining Table",
        description:
          "A custom dining table developed around specific dimensions, materials and finishes.",
        image:
          "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=85&w=1000",
      },
      {
        name: "Custom Upholstered Seating",
        description:
          "Tailored seating designed around the comfort and style requirements of a project.",
        image:
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=85&w=1000",
      },
      {
        name: "Custom Cabinetry",
        description:
          "Individual storage and cabinetry solutions designed to complement an interior layout.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1000",
      },
    ],
  },
];

export default function FurniturePage() {
  const [selectedCollection, setSelectedCollection] = useState<
    (typeof collections)[number] | null
  >(null);

  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">
      {/* PAGE INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
            AUREN CONTRACTS / OUR COLLECTION
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Furniture for every kind of space.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#77736D]">
            Explore our furniture collections, from comfortable seating and
            elegant tables to bedroom essentials, storage and bespoke designs.
          </p>
        </Reveal>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-[#EEE9E0] px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
                Explore Our Collections
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Considered solutions for every space.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#77736D]">
                Select a collection to explore its furniture pieces and details.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((item) => (
              <Reveal key={item.number}>
                <div className="group">
                  <button
                    onClick={() => setSelectedCollection(item)}
                    className="block w-full cursor-pointer text-left"
                  >
                    <div className="relative h-[300px] overflow-hidden md:h-[350px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute left-5 top-5 bg-[#F7F4EE] px-4 py-2 font-serif text-xl">
                        {item.number}
                      </div>
                    </div>

                    <div className="border-b border-[#D7CFC2] py-7">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl md:text-3xl">
                          {item.title}
                        </h3>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9BBA8] transition duration-300 group-hover:bg-[#25262A] group-hover:text-white">
                          <ArrowRight
                            size={19}
                            className="transition group-hover:translate-x-1"
                          />
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-[#77736D]">
                        {item.description}
                      </p>

                      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#9C7A4F]">
                        Explore Collection
                      </p>
                    </div>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION DETAIL POPUP */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 p-4 md:p-8"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCollection.title}
            className="mx-auto my-6 max-w-6xl bg-[#F7F4EE] p-6 md:my-10 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-10 flex items-start justify-between gap-5">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
                  COLLECTION {selectedCollection.number}
                </p>

                <h2 className="font-serif text-4xl md:text-6xl">
                  {selectedCollection.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77736D]">
                  {selectedCollection.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedCollection(null)}
                aria-label="Close collection"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D7CFC2] transition hover:bg-[#25262A] hover:text-white"
              >
                <X size={21} />
              </button>
            </div>

            <div className="mb-10 border-t border-[#D7CFC2]" />

            <div className="grid gap-8 sm:grid-cols-2">
              {selectedCollection.products.map((product, index) => (
                <div key={product.name} className="group">
                  <div className="h-[280px] overflow-hidden md:h-[350px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="border-b border-[#D7CFC2] py-6">
                    <p className="mb-3 text-xs tracking-[0.2em] text-[#9C7A4F]">
                      0{index + 1}
                    </p>

                    <h3 className="font-serif text-2xl md:text-3xl">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#77736D]">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#D7CFC2] pt-8 md:flex-row md:items-center">
              <div>
                <h3 className="font-serif text-2xl">
                  Interested in this collection?
                </h3>

                <p className="mt-2 text-sm text-[#77736D]">
                  Tell us about your furniture requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#25262A] px-7 py-4 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-[#9C7A4F]"
              >
                Make an Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* BESPOKE SECTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10 lg:py-32">
        <Reveal>
          <div className="min-h-[400px] overflow-hidden md:min-h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400"
              alt="Bespoke interior furniture"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9C7A4F]">
              Beyond The Collection
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Furniture shaped around your project.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#77736D]">
              Some spaces require something more individual. Our bespoke
              furniture approach considers specific dimensions, materials,
              finishes and functional requirements.
            </p>

            <p className="mt-5 text-base leading-8 text-[#77736D]">
              We explore possibilities that complement your design vision
              while keeping the practical needs of your environment in mind.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#9C7A4F] pb-2 text-sm transition hover:gap-5"
            >
              Discuss Bespoke Furniture <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-[#25262A] px-6 py-24 text-center text-[#F7F4EE] md:py-32">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C5A77D]">
            Let's Talk Furniture
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Find the right furniture for your next project.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65">
            Tell us about your space and requirements. Let's explore the
            possibilities together.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#E8E1D4] px-8 py-4 text-xs uppercase tracking-[0.18em] text-[#25262A] transition hover:bg-[#9C7A4F] hover:text-white"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}