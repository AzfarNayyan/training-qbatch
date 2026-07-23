import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">

      <Image
        src={member.image}
        alt={member.name}
        width={120}
        height={120}
        className="rounded-full mx-auto mb-4"
      />

      <h2 className="text-2xl font-bold text-gray-800">
        {member.name}
      </h2>

      <p className="text-gray-500 mb-5">
        {member.role}
      </p>

      <Link
        href={`/team/${member.id}`}
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Profile
      </Link>
    </div>
  );
}
