export default function SkillBar({ name, percent, color }) {
  return (
    <div className="mb-4">
      {/* NOM + % COTE A COTE */}
      <div className="mb-1 fw-semibold">
        {name} {percent}%
      </div>

      <div className="progress" style={{ height: "8px" }}>

        <div
          className={`progress-bar bg-${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
