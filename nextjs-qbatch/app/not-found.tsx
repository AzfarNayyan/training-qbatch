import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-6xl font-bold text-blue-600">
        404
      </h1>

      <p className="mt-4 text-gray-600">
        Page not found.
      </p>

      <Link
        href="/"
        className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        Back to Home
      </Link>

    </section>
  );
}
