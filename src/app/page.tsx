import { BentoGrid } from '@/components/bento/bento-grid';
import { BentoCard } from '@/components/bento/bento-card';
import { Dock } from '@/components/shared/dock';
import { HeroModule } from '@/components/bento/modules/hero-module';
import { StatsModule } from '@/components/bento/modules/stats-module';
import { TechStackModule } from '@/components/bento/modules/tech-stack-module';
import { AvatarModule } from '@/components/bento/modules/avatar-module';
import { TimelineModule } from '@/components/bento/modules/timeline-module';
import { ScrollReveal } from '@/components/animation/scroll-reveal';

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 lg:p-12 pb-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <BentoGrid>
            {/* Hero Module - Large */}
            <BentoCard colSpan={7} rowSpan={2}>
              <HeroModule />
            </BentoCard>

            {/* Avatar Module - Animated with Mobile Ecosystem icons */}
            <BentoCard colSpan={5} rowSpan={2} className="flex items-center justify-center relative overflow-visible">
              <AvatarModule />
            </BentoCard>

            {/* Stats Module - Left Top */}
            <BentoCard colSpan={4}>
              <StatsModule />
            </BentoCard>

            {/* Featured Projects Slider - Right (Spans 2 rows) */}
            <BentoCard colSpan={8} rowSpan={2} className="flex items-center justify-center text-center">
              <p className="text-muted">Featured Projects Slider<br /><span className="text-xs">(Next Phase)</span></p>
            </BentoCard>

            {/* Tech Stack Module - Left Bottom */}
            <BentoCard colSpan={4}>
              <TechStackModule />
            </BentoCard>

            {/* Timeline Module - Full width at bottom */}
            <BentoCard colSpan={12}>
              <TimelineModule />
            </BentoCard>
          </BentoGrid>
        </ScrollReveal>
      </div>

      <Dock />
    </main>
  );
}
