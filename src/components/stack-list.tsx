import { profile } from "@/lib/profile";
import { SkillChips } from "@/components/skill-chips";

export function StackList() {
  return (
    <div className="stack-list">
      {profile.stack.map((group) => (
        <article className="stack-group" key={group.title}>
          <div className="stack-group__head">
            <h3 className="stack-group__title">{group.title}</h3>
            <p className="stack-group__meta">{group.items.length} items</p>
          </div>
          <SkillChips skills={group.items.map((name) => ({ name }))} />
        </article>
      ))}
    </div>
  );
}
