export default function RoleGap({ matched, missing }) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Matched Skills</h3>
          {matched.map((s) => (
            <p key={s}>✔ {s}</p>
          ))}
        </div>
  
        <div>
          <h3 className="font-bold">Missing Skills</h3>
          {missing.map((s) => (
            <p key={s}>✖ {s}</p>
          ))}
        </div>
      </div>
    );
  }
  