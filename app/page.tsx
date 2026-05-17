import Hero from '@/components/sections/Hero';
import MissionStatement from '@/components/sections/MissionStatement';
import Snapshot from '@/components/sections/Snapshot';
import KeyOfferings from '@/components/sections/KeyOfferings';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTABanner from '@/components/ui/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <Snapshot />
      <KeyOfferings />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
