import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";
import { mailHref, profile } from "@/lib/profile";
import { CtaChip } from "@/components/cta-chip";
import { NowList } from "@/components/now-list";
import { SkillChips } from "@/components/skill-chips";
import { PixelatedProfile } from "@/components/pixel-profile";

const SOCIAL_ICONS: Record<string, IconType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  leetcode: SiLeetcode,
  mail: GoMail,
};

export function HeroSplit() {
  return (
    <section
      className="hero reveal"
      id="top"
      style={{ "--i": 0 } as React.CSSProperties}
    >
      <figure className="hero__figure">
        <PixelatedProfile />
      </figure>
      <div className="hero__identity">
        <div className="hero__heading">
          <div className="hero__title">
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__role">{profile.role}</p>
          </div>
          <div className="hero__status-block">
            <p
              className={`hero__status hero__status--${
                profile.status ? "accent" : "orange hero__status--struck"
              }`}
            >
              <span className="hero__status-text">open to work</span>
            </p>
          </div>
        </div>
        <p className="hero__lede">{profile.lede}</p>
        <NowList items={profile.now} />
        <SkillChips skills={profile.skills} />
        <div className="hero__divider" aria-hidden="true" />
        <div className="hero__contact">
          <ul className="hero__socials">
            {profile.socials.map((item) => {
              const Icon = item.icon ? SOCIAL_ICONS[item.icon] : null;
              return (
                <li key={item.label}>
                  <a
                    className="hero__social"
                    href={item.href}
                    aria-label={item.label}
                  >
                    {Icon ? <Icon className="hero__social-icon" /> : item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hero__actions">
            <CtaChip href={mailHref}>say hello</CtaChip>
            <CtaChip href={profile.resume} variant="ghost">
              resume
            </CtaChip>
          </div>
        </div>
      </div>
    </section>
  );
}
