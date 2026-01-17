import ProfileInput from "../components/ProfileInput";
import { analyzeGithub } from "../api/githubApi";

export default function Home() {
  const handleAnalyze = async (url, role) => {
    const data = await analyzeGithub(url, role);
    console.log("BACKEND RESPONSE:", data);
    alert("Analysis successful! Check console.");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #020617, #020617)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "20px",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        RoleFitAI – GitHub Analyzer
      </h1>

      {/* CARD */}
      <ProfileInput onAnalyze={handleAnalyze} />
    </div>
  );
}
