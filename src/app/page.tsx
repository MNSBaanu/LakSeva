import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedProviders from '@/components/home/FeaturedProviders';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <HowItWorks />
      <FeaturedProviders />
      <CallToAction />
    </main>
  );
}
