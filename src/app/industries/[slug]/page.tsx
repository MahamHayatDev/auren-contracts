import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

const galleries: Record<
  string,
  {
    title: string;
    description: string;
    images: { title: string; image: string }[];
  }
> = {
  "hotels-hospitality": {
    title: "Hotels & Hospitality",
    description:
      "Explore furniture concepts for hotel bedrooms, welcoming reception areas, elegant lounges and comfortable guest environments.",
    images: [
      {
        title: "Hotel Bedroom",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=85&w=1100",
      },
      {
        title: "Hotel Reception",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1100",
      },
      {
        title: "Guest Lounge",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1100",
      },
      {
        title: "Luxury Suite",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1100",
      },
    ],
  },

  "restaurants-cafes": {
    title: "Restaurants & Cafes",
    description:
      "Discover furniture ideas for restaurant dining rooms, cafe seating, social spaces and contemporary hospitality interiors.",
    images: [
      {
        title: "Restaurant Interior",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1100",
      },
      {
        title: "Dining Area",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=85&w=1100",
      },
      {
        title: "Cafe Seating",
        image:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=1100",
      },
      {
        title: "Contemporary Dining",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=85&w=1100",
      },
    ],
  },

  "corporate-workspaces": {
    title: "Corporate Workspaces",
    description:
      "Furniture concepts for productive offices, collaborative areas, meeting rooms and contemporary workplaces.",
    images: [
      {
        title: "Modern Office",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1100",
      },
      {
        title: "Meeting Room",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1100",
      },
      {
        title: "Collaborative Space",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1100",
      },
      {
        title: "Office Lounge",
        image:
          "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=85&w=1100",
      },
    ],
  },

  "residential-developments": {
    title: "Residential Developments",
    description:
      "Explore considered furniture arrangements for living rooms, bedrooms, dining spaces and contemporary homes.",
    images: [
      {
        title: "Contemporary Living Room",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1100",
      },
      {
        title: "Modern Bedroom",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1100",
      },
      {
        title: "Living Space",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1100",
      },
      {
        title: "Dining Interior",
        image:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=85&w=1100",
      },
    ],
  },

  "serviced-apartments": {
    title: "Serviced Apartments",
    description:
      "Furniture ideas for welcoming extended-stay accommodation, practical living areas and comfortable bedrooms.",
    images: [
      {
        title: "Apartment Living Room",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1100",
      },
      {
        title: "Apartment Bedroom",
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=85&w=1100",
      },
      {
        title: "Apartment Interior",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1100",
      },
      {
        title: "Apartment Dining",
        image:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=85&w=1100",
      },
    ],
  },

  "education-public-spaces": {
    title: "Education & Public Spaces",
    description:
      "Practical furniture concepts for learning environments, shared spaces, libraries and public interiors.",
    images: [
      {
        title: "Learning Environment",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1100",
      },
      {
        title: "Collaborative Area",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1100",
      },
      {
        title: "Shared Workspace",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1100",
      },
      {
        title: "Contemporary Interior",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1100",
      },
    ],
  },
};

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = galleries[slug];

  if (!industry) {
    return (
      <main className="min-h-screen bg-[#F7F4EE] px-6 py-32 text-center">
        <h1 className="font-serif text-4xl">Industry not found.</h1>
        <Link
          href="/industries"
          className="mt-8 inline-block border-b border-[#9C7A4F] pb-2"
        >
          Back to Industries
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F4EE] text-[#25262A]">
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/industries"
            className="mb-12 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#9C7A4F]"
          >
            <ArrowLeft size={15} /> All Industries
          </Link>

          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              Furniture & Interior Concepts
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
              {industry.title}
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-gray-600 md:text-base">
              {industry.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#EEE9E0] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              Furniture Inspiration
            </p>

            <h2 className="mb-12 font-serif text-4xl md:text-5xl">
              Spaces and furnishing ideas.
            </h2>
          </Reveal>

          <div className="grid gap-9 sm:grid-cols-2">
            {industry.images.map((item, index) => (
              <Reveal key={item.title}>
                <div className="group overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[430px]"
                    />
                  </div>

                  <div className="flex items-center justify-between border-b border-[#CFC5B7] py-5">
                    <h3 className="font-serif text-2xl">
                      {item.title}
                    </h3>

                    <span className="text-xs text-[#9C7A4F]">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-xs leading-6 text-gray-500">
            Images are illustrative furnishing and interior concepts
            for this website demonstration, not verified completed projects.
          </p>
        </div>
      </section>

      <section className="bg-[#25262A] px-6 py-24 text-center text-white md:px-16">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#B99A72]">
            Have a Project in Mind?
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl md:text-6xl">
            Let's create a space that works beautifully.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/60">
            Tell us about your furniture requirements and the
            environment you want to create.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#E8E1D4] px-8 py-4 text-xs uppercase tracking-widest text-[#25262A] transition hover:bg-[#9C7A4F] hover:text-white"
          >
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}