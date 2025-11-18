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

  try {
    // Add error handling for database calls
    companions = (await getAllCompanions({ limit: 3 })) || [];
    console.log("Companions loaded:", companions.length);
  } catch (error) {
    console.error("Error loading companions:", error);
    // Use fallback data
    companions = [];
  }

  try {
    const sessions = await getRecentSessions(10);
    recentSessionsCompanions = sessions?.flat() ?? [];
    console.log("Recent sessions loaded:", recentSessionsCompanions.length);
  } catch (error) {
    console.error("Error loading recent sessions:", error);
    // Use fallback data
    recentSessionsCompanions = recentSessions || [];
  }

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
