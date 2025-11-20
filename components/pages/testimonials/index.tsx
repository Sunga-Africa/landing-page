import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PlayStoreIcon from '@/assets/images/mage_playstore.svg';
import AppStoreIcon from '@/assets/images/mdi_apple.svg';
import grace_phiri from '@/assets/images/testimonal_user/grace_phiri.png';
import joseph_mwila from '@/assets/images/testimonal_user/joseph_mwila.png';
import kelvin_banda from '@/assets/images/testimonal_user/kelvin_banda.png';
import tendai_zulu from '@/assets/images/testimonal_user/tendai_zulu.png';
import { TestimonialCard } from './TestimonialCard';

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

export default function Testimonials() {
  const list = [
    {
      title: 'Joseph Mwila',
      desc: `I save with Sunga every month for my shop stock. It's easy to add money when I can, and I can see my savings grow little by little. I feel more in control of my business finances now.`,
      image: joseph_mwila
    },
    {
      title: 'Grace Phiri',
      desc: `Sunga helps me save for my school fees without stress. I don't have to worry about forgetting to put money aside, and it keeps me motivated to reach my goals.`,
      image: grace_phiri
    },
    {
      title: 'Kelvin Banda',
      desc: `I use the Savings Vault to lock my money and earn higher interest. Now I can plan for the next farming season with confidence, knowing my savings are safe and growing.`,
      image: kelvin_banda
    },
    {
      title: 'Tendai Zulu',
      desc: `Saving with friends using the Savings Target is fun and motivating. We track our progress together, and it pushes us to reach our goals faster than we could alone.`,
      image: tendai_zulu
    }
  ];
  return (
    <section className=" bg-[#F8FAFD]">
      <section className="container lg:h-[80vh] h-fit flex flex-col-reverse lg:flex-row gap-12 lg:gap-[120px] py-12 lg:py-24 ">
        {/* Scrolling Testimonials Column */}
        <div
          className="relative flex-1 h-[500px] lg:h-auto overflow-hidden 
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-24 before:bg-gradient-to-b before:from-[#F8FAFD] before:to-transparent before:z-10
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-[#F8FAFD] after:to-transparent after:z-10"
        >
          <motion.div
            className="flex flex-col gap-[24px]"
            animate={{ y: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 40, // Adjust duration to control speed
              repeat: Infinity
            }}
          >
            {/* Render list twice for a seamless loop */}
            <div className="flex flex-col justify-start gap-[24px]">
              {list.map((item, idx) => (
                <TestimonialCard key={idx} {...item} />
              ))}
            </div>
            <div className="flex flex-col justify-start gap-[24px]">
              {list.map((item, idx) => (
                <TestimonialCard key={`duplicate-${idx}`} {...item} />
              ))}
            </div>
          </motion.div>
        </div>
        {/* Content Column */}
        <motion.div
          className="flex flex-col gap-12 lg:w-[50%] text-black"
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
              See How Zambians Are Reaching <br className="lg:flex hidden" />{' '}
              Their Money Goals
            </h1>
            <p className="font-normal lg:text-[20px] text-base leading-[140%] font-dm-sans text-[#2E3539] ">
              Real stories from people across Zambia who are saving, growing,
              and achieving more with Sunga. Join the movement and start
              building your own success story.
            </p>
            <div className="flex items-center gap-[16px]">
              <Button size="lg" className="text-base  px-[16px] text-white">
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
      </section>
    </section>
  );
}
