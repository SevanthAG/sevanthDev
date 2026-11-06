import { SiteNav } from "@/components/site-nav";
import { HeroSplit } from "@/components/hero-split";
import { Section } from "@/components/section";
import { AboutPanel } from "@/components/about-panel";
import { WorkList } from "@/components/work-list";
import { ProjectList } from "@/components/project-list";
import { StackList } from "@/components/stack-list";
import { CredentialList } from "@/components/credential-list";
import { BeyondList } from "@/components/beyond-list";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="shell">
        <HeroSplit />

        <Section id="about" cmd="about" index={1}>
          <AboutPanel />
        </Section>

        <Section id="work" cmd="work" index={2}>
          <WorkList />
        </Section>

        <Section id="projects" cmd="projects" index={3}>
          <ProjectList />
        </Section>

        <Section id="stack" cmd="stack" index={4}>
          <StackList />
        </Section>

        <Section id="credentials" cmd="credentials" index={5}>
          <CredentialList />
        </Section>

        <Section id="beyond" cmd="beyond" index={6}>
          <BeyondList />
        </Section>
      </main>
      <div className="shell">
        <SiteFooter />
      </div>
    </>
  );
}
