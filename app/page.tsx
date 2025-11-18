import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanonsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Page = async () => {
  let companions: any[] = [];
  let recentSessionsCompanions: any[] = [];

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.length > 0 ? (
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        ) : (
          <p>No companions available</p>
        )}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
