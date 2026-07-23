import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/team";

export default function TeamPage() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Team
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}
      </div>

    </section>
  );
}
