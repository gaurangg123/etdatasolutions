import Hero from '@/components/sections/Hero';
import MissionStatement from '@/components/sections/MissionStatement';
import Snapshot from '@/components/sections/Snapshot';
import KeyOfferings from '@/components/sections/KeyOfferings';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTABanner from '@/components/ui/CTABanner';
import SnapController from '@/components/ui/SnapController';

export default function HomePage() {
  return (
    <>
      <SnapController />
      <Hero />
      <MissionStatement />
      <Snapshot />
      <KeyOfferings />
      <WhyChooseUs />
      <div className="snap-section">
        <CTABanner />
      </div>
    </>
  );
}
