import { profile } from "@/lib/profile";
import type { Point } from "@/lib/types";

function PointList({ items }: { items: Point[] }) {
  return (
    <>
      {items.map((item) => (
        <article className="point" key={item.title}>
          <h3 className="point__title">{item.title}</h3>
          <p className="point__meta">{item.meta}</p>
          <p className="point__body">{item.description}</p>
        </article>
      ))}
    </>
  );
}

export function BeyondList() {
  return (
    <div className="beyond">
      <div className="beyond__col">
        <h3 className="beyond__head">leadership</h3>
        <PointList items={profile.leadership} />
      </div>
      <div className="beyond__col">
        <h3 className="beyond__head">achievements</h3>
        <PointList items={profile.achievements} />
      </div>
    </div>
  );
}
