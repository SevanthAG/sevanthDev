import { profile } from "@/lib/profile";

export function AboutPanel() {
  return (
    <div className="about">
      <p className="about__lede">{profile.about}</p>

      <dl className="spec">
        {profile.facts.map((fact) => (
          <div className="spec__row" key={fact.key}>
            <dt className="spec__key">{fact.key}</dt>
            <dd className="spec__val">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="about__sub">
        <h3 className="section-label">education</h3>
        <ul className="edu-list">
          {profile.education.map((entry) => (
            <li className="edu" key={entry.institution}>
              <span className="edu__degree">{entry.degree}</span>
              <span className="edu__meta">
                {entry.year} · {entry.score}
              </span>
              <span className="edu__inst">{entry.institution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
