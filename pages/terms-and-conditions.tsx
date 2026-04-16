import Head from 'next/head';
import HomeLayout from '@/layouts/HomeLayout';
 import { motion } from 'framer-motion';
import TermsAndConditions from '@/components/pages/terms-and-conditions';

export default function TermsAndConditionsPage() {
  const metadata = {
    title: 'Terms & Conditions | Sunga',
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
        <meta
          property="og:image"
          content="https://sunga-website.sfo3.cdn.digitaloceanspaces.com/og-image/og-sunga-min.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sunga.africa/terms-and-conditions"
        />
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
                Terms & Conditions{' '}
              </h1>{' '}
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-[#1F2226] font-bold mb-[12px] lg:text-[24px] leading-[100%] text-[20px]">
                <span className="font-normal">For</span> SUNGA TECHNOLOGIES
                LIMITED
              </h1>
              <p className="text-primary lg:text-[20px] leading-[100%] text-[14px]">
                Last Updated 1st Nov, 2025
              </p>
            </motion.div>
            <motion.p
              className="text-[#1F2226] lg:text-[20px] leading-[150%] font-normal font-dm-sans text-[14px]"
              variants={itemVariants}
            >
              These Terms and Conditions (“Terms”) constitute a legally binding
              agreement between you (“User”, “you”) and Sunga Technologies
              Limited (Sunga), a company duly registered in the Republic of
              Zambia (“the Company”, “we”, “our”, “us”) including its
              successors, affiliates, and assignees, governing your access to
              and use of the Sunga mobile application, website, and all related
              products and services (collectively, “the Platform”).
            </motion.p>

            <motion.p
              className="text-[#1F2226] lg:text-[20px] leading-[150%] font-normal font-dm-sans text-[14px]"
              variants={itemVariants}
            >
              Your use of and access to the Services are subject at all times to
              these Terms and our Privacy Policy. Please read these Terms and
              our Privacy Policy carefully. By using or accessing the Services,
              you represent that you have read and understand these Terms and
              our Privacy Policy and you agree to be bound by these Terms and
              our Privacy Policy. If you do not agree to all the terms and
              conditions of these Terms and our Privacy Policy, do not use or
              access the Services.
            </motion.p>

            <TermsAndConditions />
          </motion.div>
        </motion.div>
      </HomeLayout>
    </>
  );
}
