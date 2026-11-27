import Link from "next/link";
import Reveal from "@/components/reveal";

const collections = [
  {
    title: "Seating",
    description: "Comfortable seating for hospitality and workspaces.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=85&w=800",
  },
  {
    title: "Tables & Desks",
    description: "Functional surfaces with timeless design.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=800",
  },
  {
    title: "Bedroom Furniture",
    description: "Thoughtful pieces for restful interiors.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=800",
  },
  {
    title: "Storage Solutions",
    description: "Practical storage with a refined finish.",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=85&w=800",
  },
  {
    title: "Outdoor Furniture",
    description: "Furniture designed for open-air environments.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=800",
  },
  {
    title: "Bespoke Furniture",
    description: "Made-to-order solutions for individual spaces.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=800",
  },
];

const services = [
  {
    number: "01",
    title: "Furniture Supply",
    description: "Commercial and residential furniture selected for different spaces and requirements.",
  },
  {
    number: "02",
    title: "Transportation & Delivery",
    description: "Coordinated transportation and safe delivery directly to your project location.",
  },
  {
    number: "03",
    title: "Furniture Installation",
    description: "On-site installation and positioning of furniture within your space.",
  },
  {
    number: "04",
    title: "Assembly & Fixing",
    description: "Furniture assembly, fitting and fixing to ensure every piece is properly installed.",
  },
  {
    number: "05",
    title: "Bespoke Furniture",
    description: "Custom furniture solutions developed around your design preferences and project needs.",
  },
  {
    number: "06",
    title: "Space Planning",
    description: "Practical furniture layouts designed around comfort, movement and functionality.",
  },
  {
    number: "07",
    title: "Interior Furnishing",
    description: "Coordinated furniture selection to create cohesive and thoughtfully furnished interiors.",
  },
  {
    number: "08",
    title: "Project Coordination",
    description: "Support throughout furniture supply, delivery and installation stages.",
  },
];

const industries = [
  {
    title: "Hotels & Hospitality",
    slug: "hotels-hospitality",
    description: "Welcoming and comfortable environments for hotels, guest rooms and hospitality spaces.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=85&w=900",
  },
  {
    title: "Restaurants & Cafes",
    slug: "restaurants-cafes",
    description: "Thoughtfully selected furniture for dining environments, cafes and restaurants.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=900",
  },
  {
    title: "Corporate Workspaces",
    slug: "corporate-workspaces",
    description: "Functional and refined furniture for productive office environments.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=900",
  },
  {
    title: "Residential Developments",
    slug: "residential-developments",
    description: "Comfortable and elegant solutions for contemporary living.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=900",
  },
  {
    title: "Serviced Apartments",
    slug: "serviced-apartments",
    description: "Functional furniture for extended-stay accommodation and serviced living.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=900",
  },
  {
    title: "Education & Public Spaces",
    slug: "education-public-spaces",
    description: "Practical furniture concepts for learning environments and shared interiors.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=900",
  },
];

const projects = [
  {
    name: "The Grand Residence",
    category: "Hospitality Concept",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=85&w=1000",
  },
  {
    name: "The Modern Workspace",
    category: "Commercial Concept",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1000",
  },
  {
    name: "The Dining Collective",
    category: "Restaurant Concept",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1000",
  },
];

const reasons = [
  {
    number: "01",
    title: "Thoughtful Selection",
    description: "Furniture chosen with attention to quality, comfort and design.",
  },
  {
    number: "02",
    title: "Functional Design",
    description: "Solutions that consider how people use and experience a space.",
  },
  {
    number: "03",
    title: "Complete Solutions",
    description: "From furniture supply and transportation to installation and fixing.",
  },
  {
    number: "04",
    title: "Attention to Detail",
    description: "A considered approach to materials, finishes and overall appearance.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section
        className="relative flex min-h-[650px] items-center bg-cover bg-center px-6 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.35), rgba(20,20,20,0.55)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=2000')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl py-28 text-white">
          <Reveal>
            <p className="mb-7 text-xs uppercase tracking-[0.35em]">
              Commercial Furniture Specialists
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
              Furniture for
              <br />
              spaces that work.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/85 md:text-base">
              Thoughtfully selected furniture solutions for hotels,
              restaurants, workspaces and residential developments.
              From supply and transportation to professional installation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/furniture"
                className="bg-[#9C7A4F] px-8 py-4 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                Explore Furniture
              </Link>

              <Link
                href="/contact"
                className="border border-white px-8 py-4 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                Start a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}

      <section className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              About Auren
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#25262A] md:text-6xl">
              Spaces deserve furniture with purpose.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-4 md:pt-12">
              <p className="text-base leading-8 text-gray-600">
                At AUREN CONTRACTS, we believe furniture should do more
                than fill a room. It should support the way people live,
                work and experience a space.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                From hospitality environments to contemporary
                workspaces, we bring thoughtful furniture solutions
                together with functionality and timeless design.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[#9C7A4F] pb-2 text-sm"
              >
                Discover our approach →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="bg-[#F7F4EE] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              Our Collections
            </p>

            <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
              <h2 className="font-serif text-4xl text-[#25262A] md:text-6xl">
                Designed for every space.
              </h2>

              <Link
                href="/furniture"
                className="border-b border-[#9C7A4F] pb-2 text-sm"
              >
                Explore all furniture →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((item) => (
              <Reveal key={item.title}>
                <Link href="/furniture" className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between border-b border-[#D8D0C3] pb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-[#25262A]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <span className="ml-3 text-xl text-[#9C7A4F]">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-[#25262A] px-6 py-24 text-[#F7F4EE] md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B99A72]">
              What We Offer
            </p>

            <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
              <h2 className="max-w-2xl font-serif text-4xl md:text-6xl">
                Complete furniture solutions.
              </h2>

              <Link
                href="/services"
                className="border-b border-[#B99A72] pb-2 text-sm"
              >
                Discover our services →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-x-12 md:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.number}>
                <div className="border-t border-white/20 py-8">
                  <div className="flex gap-6">
                    <span className="text-xs text-[#B99A72]">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY AND SPECIALIST SERVICES */}

      <section className="bg-[#F7F4EE] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              More Than Furniture Supply
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[#25262A] md:text-6xl">
              More than a delivery. A finished space.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-600">
              From urgent furniture requirements to complete room
              installations, we support projects beyond the point
              of purchase. Our services bring together delivery,
              clearance, installation and specialist furniture solutions.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12">
            <Reveal>
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=85"
                    alt="Furniture delivery transportation"
                    className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="md:px-8">
                  <span className="text-xs text-[#9C7A4F]">01</span>

                  <h3 className="mt-4 font-serif text-3xl text-[#25262A] md:text-4xl">
                    Rapid Delivery & Response
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-gray-600">
                    When timelines are tight, getting furniture to
                    the right place matters. We coordinate responsive
                    delivery solutions for urgent commercial and
                    residential furniture requirements.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    <li>— Priority delivery arrangements</li>
                    <li>— Nationwide delivery coordination</li>
                    <li>— Flexible delivery and installation scheduling</li>
                    <li>— Support for urgent project requirements</li>
                  </ul>

                  <Link href="/contact" className="mt-8 inline-block border-b border-[#9C7A4F] pb-2 text-sm">
                    Discuss delivery requirements →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-8 border-t border-[#D8D0C3] pt-12 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1 md:px-8">
                  <span className="text-xs text-[#9C7A4F]">02</span>

                  <h3 className="mt-4 font-serif text-3xl text-[#25262A] md:text-4xl">
                    Removals & Clearances
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-gray-600">
                    Preparing a property for its next occupant?
                    We can coordinate furniture removals, collection
                    and clearance alongside the delivery of replacement
                    furniture, helping simplify the entire process.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    <li>— Residential and commercial removals</li>
                    <li>— Furniture collection and removal</li>
                    <li>— Property clearance coordination</li>
                    <li>— Responsible disposal arrangements</li>
                  </ul>

                  <Link href="/services" className="mt-8 inline-block border-b border-[#9C7A4F] pb-2 text-sm">
                    Explore removal services →
                  </Link>
                </div>

                <div className="order-1 overflow-hidden md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=85&w=1000"
                    alt="Furniture moving and room preparation"
                    className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-8 border-t border-[#D8D0C3] pt-12 md:grid-cols-2 md:items-center">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1000"
                    alt="Specialist furniture in a contemporary interior"
                    className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="md:px-8">
                  <span className="text-xs text-[#9C7A4F]">03</span>

                  <h3 className="mt-4 font-serif text-3xl text-[#25262A] md:text-4xl">
                    Specialist & Secure Furniture
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-gray-600">
                    For supported accommodation and specialist
                    environments, we can help source furniture
                    designed with durability, practical functionality
                    and safety requirements in mind.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    <li>— Secure furniture options</li>
                    <li>— Anti-ligature furniture specifications</li>
                    <li>— Durable and tamper-resistant fittings</li>
                    <li>— Solutions for specialist environments</li>
                  </ul>

                  <Link href="/contact" className="mt-8 inline-block border-b border-[#9C7A4F] pb-2 text-sm">
                    Discuss specialist requirements →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="bg-[#E8E1D4] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              Industries We Serve
            </p>

            <h2 className="mb-12 font-serif text-4xl text-[#25262A] md:text-6xl">
              Spaces we furnish.
            </h2>
          </Reveal>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <Reveal key={item.slug}>
                <Link
                  href={`/industries/${item.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 border-t border-[#B9AA96] pt-5">
                    <span className="text-xs text-[#9C7A4F]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 font-serif text-3xl text-[#25262A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#9C7A4F] transition group-hover:gap-5">
                      Explore Furniture →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              Selected Work
            </p>

            <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
              <h2 className="font-serif text-4xl text-[#25262A] md:text-6xl">
                Projects & spaces.
              </h2>

              <Link href="/projects" className="border-b border-[#9C7A4F] pb-2 text-sm">
                View all projects →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.name}>
                <Link href="/projects" className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-widest text-[#9C7A4F]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#25262A]">
                    {project.name}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500">
            The projects shown are illustrative concepts created for this
            website demonstration.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-[#F7F4EE] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              The Auren Approach
            </p>

            <h2 className="mb-14 max-w-3xl font-serif text-4xl text-[#25262A] md:text-6xl">
              Thoughtful choices. Better spaces.
            </h2>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <Reveal key={reason.number}>
                <div className="border-t border-[#CFC5B7] pt-6">
                  <span className="text-xs text-[#9C7A4F]">
                    {reason.number}
                  </span>

                  <h3 className="mt-5 font-serif text-2xl text-[#25262A]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="bg-[#E8E1D4] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C7A4F]">
              The Experience
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#25262A] md:text-6xl">
              Good spaces begin with thoughtful details.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-gray-600">
              Every furniture decision contributes to the atmosphere,
              comfort and functionality of a space. Our approach starts
              with understanding what each environment needs.
            </p>

            <Link href="/reviews" className="mt-8 inline-block border-b border-[#9C7A4F] pb-2 text-sm">
              Explore the experience →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}

      <section className="bg-[#25262A] px-6 py-28 text-center text-[#F7F4EE] md:px-16">
        <Reveal>
          <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#B99A72]">
            Let's Work Together
          </p>

          <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight md:text-7xl">
            Let's create spaces that make an impression.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-400">
            Tell us about your next project. We'd love to explore
            how AUREN CONTRACTS can help.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block bg-[#9C7A4F] px-9 py-4 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
          >
            Request a Quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}