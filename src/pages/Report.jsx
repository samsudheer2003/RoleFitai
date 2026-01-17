import { useLocation } from "react-router-dom";
import SkillGrid from "../components/SkillGrid";
import ActivityCard from "../components/ActivityCard";
import RoleGap from "../components/RoleGap";

export default function Report() {
  const { state } = useLocation();
  const data = state;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Candidate Report</h1>

      <ActivityCard activity={data.profile.activity} />
      <SkillGrid skills={data.skill_confidence} />
      <RoleGap matched={data.matched_skills} missing={data.missing_skills} />
    </div>
  );
}
