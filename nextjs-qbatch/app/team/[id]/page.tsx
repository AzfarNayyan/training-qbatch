import Image from "next/image";
import { notFound } from "next/navigation";
import { team } from "@/lib/team";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TeamMemberPage({ params }: Props) {
  const { id } = await params;

  const member = team.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-36"></div>

        <div className="-mt-20 flex justify-center">
          <Image
            src={member.image}
            alt={member.name}
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-lg"
            priority
          />
        </div>

        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {member.name}
          </h1>

          <p className="text-xl text-blue-600 mt-2 font-medium">
            {member.role}
          </p>

          <p className="text-gray-600 mt-4">
            {member.email}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-600">5+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-600">40+</h3>
              <p className="text-gray-600 text-sm">Projects</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-600">100%</h3>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
