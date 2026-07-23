
const services = [
  "Web Development",
  "Mobile Applications",
  "Cloud Solutions",
  "UI/UX Design",
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white shadow rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold">
              {service}
            </h2>
          </div>
        ))}
      </div>

    </section>
  );
}
