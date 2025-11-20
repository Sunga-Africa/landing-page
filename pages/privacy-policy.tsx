import Head from 'next/head';
import HomeLayout from '@/layouts/HomeLayout';
 import { motion } from 'framer-motion';
import FAQs from '@/components/pages/faqs';

export default function Privacy() {
  const metadata = {
    title: 'Privacy Policy | Sunga',
    description: ''
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
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
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunga.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sunga - Empowering Zambian's Financial Future"
        />
        <meta
          name="twitter:description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
        <meta name="twitter:image" content="" />
        <meta
          name="description"
          content="Save, grow, and reach your goals with ease. Take charge of your money with Sunga."
        />
      </Head>

      <HomeLayout>
        <motion.div
          className="container mx-auto py-6 px-4 lg:py-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="col-span-5 flex font-medium flex-col lg:gap-8 gap-[24px] !font-dm-sans"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-[12px] lg:gap-[24px]"
              variants={itemVariants}
            >
              <h1 className="text-[24px] leading-[120%] lg:text-[72px] lg:leading-[100%] tracking-[-2px] font-red-hat-display font-bold text-[#000000]">
                Privacy Policy
              </h1>{' '}
              <p className="text-[#969696] lg:text-[16px] text-[10px]">
                Updated on SEPTEMBER 30, 2024
              </p>
            </motion.div>

            <motion.p
              className="text-[#1F2226] lg:text-[20px] leading-[150%] font-normal font-dm-sans text-[14px]"
              variants={itemVariants}
            >
              <b>This privacy policy </b>(this &rdquo;Privacy Policy&quot;)
              explains how personal information is collected, used, stored, and
              disclosed by Sunga Technologies Limited, (&quot;Sunga,&ldquo;
              &#34;we,&quot; &quot;us,&ldquo; and &quot;our&quot;).
            </motion.p>

            <motion.p
              className="text-[#1F2226] lg:text-[20px] leading-[150%] font-normal font-dm-sans text-[14px]"
              variants={itemVariants}
            >
              The provisions contained in this Privacy Policy supersede all
              previous notices and statements regarding our privacy practices
              with respect to our services.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h1 className="text-[#1F2226] font-bold mb-[12px] lg:text-[24px] leading-[100%] text-[20px]">
                IMPORTANT INFORMATION AND WHO WE ARE
              </h1>
              <p className="text-[#4141FF] lg:text-[20px] leading-[100%] text-[14px]">
                Last Updated Nov, 2025
              </p>
            </motion.div>
                <FAQs />
          </motion.div>
        </motion.div>
      </HomeLayout>
    </>
  );
}
