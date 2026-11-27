import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#25262A] px-6 py-16 text-[#F7F4EE]">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-3xl tracking-widest">
            AUREN CONTRACTS
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Furniture for spaces that work. Thoughtfully selected solutions
            for commercial and residential environments.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-widest text-[#9C7A4F]">
            Explore
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/about">About Us</Link>
            <Link href="/furniture">Furniture</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Our Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-widest text-[#9C7A4F]">
            Get in Touch
          </h3>
          <p className="text-sm leading-7 text-gray-300">
            London, United Kingdom
            <br />
            hello@aurencontracts.co.uk
            <br />
            +44 20 7946 0123
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-gray-700 pt-6 text-xs text-gray-500">
        <p>© 2026 AUREN CONTRACTS. All rights reserved.</p>
        <p className="mt-2">Demo project. All content is fictional.</p>
      </div>
    </footer>
  );
}