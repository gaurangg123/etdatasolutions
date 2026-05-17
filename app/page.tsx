import Hero from '@/components/sections/Hero';
import MissionStatement from '@/components/sections/MissionStatement';
import Snapshot from '@/components/sections/Snapshot';
import KeyOfferings from '@/components/sections/KeyOfferings';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTABanner from '@/components/ui/CTABanner';

export default function HomePage() {
  return (
    <>
      <section className="snap-section"><Hero /></section>
      <section className="snap-section"><MissionStatement /></section>
      <section className="snap-section"><Snapshot /></section>
      <section className="snap-section"><KeyOfferings /></section>
      <section className="snap-section"><WhyChooseUs /></section>
      <section className="snap-section snap-loose"><CTABanner /></section>
    </>
  );
}
