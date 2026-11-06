import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="foot">
      <ul className="foot__spread">
        {profile.socials.map((item) => (
          <li key={item.label}>
            <a className="foot__link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="foot__note">
        <span className="foot__note-mark">$</span> echo &quot;built by{" "}
        {profile.name}&quot; · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
