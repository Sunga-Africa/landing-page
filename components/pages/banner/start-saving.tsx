import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PlayStoreIcon from '@/assets/images/mage_playstore.svg';
import AppStoreIcon from '@/assets/images/mdi_apple.svg';
import CTA_Sections from '@/assets/images/CTA_Sections.png';
import QRCode from '@/assets/images/QRCode.png';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function StartSaving() {

  return (
    <section
      style={{ backgroundImage: `url(${CTA_Sections.src})` }}
      className=" bg-center bg-cover h-full flex items-center justify-center "
    >
      <section className="container lg:h-auto h-full flex flex-col justify-between lg:flex-row gap-[19px] lg:gap-[120px] py-20 lg:py-24 ">
        <motion.div
          className="flex flex-row gap-12 lg:w-[50%] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-start text-left gap-[32px]"
          >
            <h1 className="relative w-full lg:text-[40px]  text-3xl font-black transition-all font-red-hat-display duration-300 ease-in-out lg:leading-[100%] tracking-[-2px]">
              Start Saving in <br className="lg:flex hidden" /> Minutes
            </h1>
            <p className="font-normal lg:text-[20px] text-base leading-[140%] font-dm-sans ">
              Thousands of Zambians are already growing their money with Sunga.
              Join them today and take control of your financial future. It only
              takes a few minutes to begin.
            </p>
            <div className="flex items-center lg:w-auto w-full lg:justify-start justify-center gap-[16px]">
              <Button
                size="lg"
                className="text-base  px-[16px] text-primary bg-white"
              >
                Grow with Sunga
              </Button>
              <Button className=" !h-auto p-[10px] rounded-full hover:bg-[#FFF5EC] bg-[#FFF5EC] text-primary">
                <Image
                  src={AppStoreIcon.src}
                  alt="image"
                  width={32}
                  height={32}
                  className="w-fit h-[32px] object-contain object-bottom "
                />{' '}
              </Button>
              <Button className=" !h-auto p-[10px] rounded-full hover:bg-[#FFF5EC] bg-[#FFF5EC] text-primary">
                <Image
                  src={PlayStoreIcon.src}
                  alt="image"
                  width={32}
                  height={32}
                  className="w-fit h-[32px] object-contain object-bottom "
                />{' '}
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <Image
          src={QRCode.src}
          alt="image"
          width={392}
          height={392}
          className="w-fit lg:h-[392px] h-[233.5px] object-contain object-bottom lg:mx-0 mx-auto"
        />{' '}
      </section>
    </section>
  );
}
