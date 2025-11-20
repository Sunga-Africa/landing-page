import { motion, TargetAndTransition } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import ladiesImg from '@/assets/images/hero-section/ladies.png';
import mobileLadiesImg from '@/assets/images/hero-section/mobile-ladies.png';
import tagOneImg from '@/assets/images/hero-section/tag-one.png';
import tagTwoImg from '@/assets/images/hero-section/tag-two.png';
import tagThreeImg from '@/assets/images/hero-section/tag-three.png';

const animation = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  floating: (custom: number): TargetAndTransition => ({
    y: ['0rem', '-0.75rem', '0rem'],
    transition: {
      delay: custom,
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror'
    }
  })
} as const;

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden [background:linear-gradient(360deg,#FFFFFF_0%,#FF7A00_323.81%)]">
      <motion.div
        className="container z-20 flex flex-col items-center justify-end sm:justify-center text-center text-black mx-auto h-full min-h-screen pt-36 pb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animation.container}
      >
        <motion.div
          variants={animation.item}
          className="relative flex flex-col items-center gap-6"
        >
          <h1 className="relative w-full lg:text-[97px]  text-3xl font-bold transition-all !font-red-hat-display duration-300 ease-in-out lg:leading-[100%] tracking-[-2px]">
            Empowering <br className="lg:hidden flex" /> Zambian’s{' '}
            <br className="lg:flex hidden" /> Financial{' '}
            <br className="lg:hidden flex" /> Future
          </h1>
          <p className="font-normal lg:text-[28px] text-base leading-[140%] text-[#181816] max-w-3xl">
            Save, grow, and reach your goals with ease.
            <br className="lg:flex hidden" /> Take charge of your money with
            Sunga.{' '}
          </p>
          <Button size="lg" className="text-base  px-[16px] text-white">
            Start Saving Today
          </Button>
        </motion.div>
        <motion.div
          variants={animation.item}
          className="relative w-full max-w-[622px] mt-8"
        >
          <motion.div
            className="absolute lg:-left-80 -left-20 lg:top-68 top-60 w-full h-[68.24px] lg:w-full lg:h-[90px]"
            animate={animation.floating(0)}
            custom={0}
          >
            <Image
              src={tagOneImg}
              alt=""
              width={622}
              height={663}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <picture>
            <source media="(min-width: 1024px)" srcSet={ladiesImg.src} />
            <source media="(max-width: 1023px)" srcSet={mobileLadiesImg.src} />
            <Image
              width={622}
              height={663}
              alt="Two smiling Zambian women looking at a smartphone."
              src={ladiesImg}
              className="w-full h-auto object-contain object-bottom"
              priority
            />
          </picture>
          <motion.div
            className="absolute lg:left-[70px] left-60 lg:top-[150px] top-40 h-fit w-full object-right "
            animate={animation.floating(0.5)}
            custom={0.5}
          >
            <Image
              src={tagTwoImg}
              alt=""
              width={500}
              height={500}
              className="w-fit h-[55px] lg:w-full object-right object-contain lg:h-[90px]"
            />
          </motion.div>
          <motion.div
            className="absolute lg:left-[150px] left-52 lg:top-72 top-55 w-full h-fit object-right  "
            animate={animation.floating(1)}
            custom={1}
          >
            <Image
              src={tagThreeImg}
              alt=""
              width={500}
              height={500}
              className="w-fit h-[55px] lg:w-full object-right object-contain lg:h-[90px]"
            />
          </motion.div>
         </motion.div>
      </motion.div>
    </section>
  );
}
