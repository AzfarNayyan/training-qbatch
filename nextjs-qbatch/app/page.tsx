import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Amazing
            <br />
            Digital Products
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-100">
            We design and develop modern web applications using React,
            Next.js, and TypeScript to help businesses grow faster.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold text-blue-600">150+</h2>
            <p className="text-gray-600 mt-2">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">50+</h2>
            <p className="text-gray-600 mt-2">Clients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">10+</h2>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="text-gray-600 mt-2">Support</p>
          </div>

        </div>
      </section>
    </main>
  );
}
