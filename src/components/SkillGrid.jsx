export default function SkillGrid({ skills }) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(skills).map(([skill, score]) => (
          <div
            key={skill}
            className={`p-4 rounded text-white ${
              score > 70
                ? "bg-green-500"
                : score > 40
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            <p className="font-bold">{skill}</p>
            <p>{score}%</p>
          </div>
        ))}
      </div>
    );
  }
  