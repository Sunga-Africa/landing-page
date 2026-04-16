import HomeLayout from '@/layouts/HomeLayout';
import Head from 'next/head';
import HeroSection from '@/components/pages/home/hero-section';
import Story from '@/components/pages/story'
import HowSungaWorks from '@/components/pages/how-sunga-works'
import HowSungaWorksMobileView from '@/components/pages/how-sunga-works/mobile-view'
import StartSaving from '@/components/pages/start-saving'
import BuiltFor from '@/components/pages/built-for'
import Testimonials from '@/components/pages/testimonials'
import StartSavingBanner from '@/components/pages/banner/start-saving';
// import { motion } from 'framer-motion';
  
export default function Home() {
  const metadata = {
    title: 'Home | Sunga',
    description: ''
  };

  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta
          property="og:title"
          content="Sunga - Empowering Zambian's Financial Future"
        />
        <meta
          property="og:description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
        <meta
          property="og:image"
          content="https://sunga-website.sfo3.cdn.digitaloceanspaces.com/og-image/og-sunga-min.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunga.africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sunga - Empowering Zambian's Financial Future"
        />
        <meta
          name="twitter:description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
        <meta
          name="twitter:image"
          content="https://sunga-website.sfo3.cdn.digitaloceanspaces.com/og-image/tw-sunga-min.jpg"
        />
        <meta
          name="description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
      </Head>
      <HomeLayout>
        <HeroSection />
        <Story />
        <div className="lg:block hidden w-full">
          <HowSungaWorks />
        </div>
        <div className="block lg:hidden w-full">
          <HowSungaWorksMobileView />
        </div>
        <StartSaving />
        <BuiltFor />
        <Testimonials />
        <StartSavingBanner />
      </HomeLayout>
    </>
  );
}
