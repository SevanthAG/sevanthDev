import { profile } from "@/lib/profile";

export function CredentialList() {
  return (
    <div className="ext-list">
      {profile.credentials.map((item) => (
        <article className="ext" key={item.title}>
          <h3 className="ext__title">{item.title}</h3>
          {item.href ? (
            <a className="ext__meta" href={item.href}>
              {item.date}
            </a>
          ) : (
            <span className="ext__meta">{item.date}</span>
          )}
          <p className="ext__body">{item.issuer}</p>
        </article>
      ))}
    </div>
  );
}
