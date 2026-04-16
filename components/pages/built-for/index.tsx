import { motion } from 'framer-motion';
import bank from '@/assets/images/built-for/Bank.svg';
import DeviceMobileSpeaker from '@/assets/images/built-for/DeviceMobileSpeaker.svg';
import HandArrowDown from '@/assets/images/built-for/HandArrowDown.svg';
import Users from '@/assets/images/built-for/Users.svg';
import Image from 'next/image';

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

export default function BuiltFor() {
  const list = [
    {
      title: 'Earn Interest on Every Kwacha',
      desc: 'Your savings do not just sit still — they grow. Every kwacha you save earns you more over time.',
      image: HandArrowDown
    },
    {
      title: 'Bank Level Security',
      desc: 'Your money and information are protected with the same trusted systems used by top financial institutions.',
      image: bank
    },
    {
      title: 'Easy to Use on Any Smartphone',
      desc: 'No complicated steps or tech skills needed. Sunga works smoothly on any phone, anywhere in Zambia.',
      image: DeviceMobileSpeaker
    },
    {
      title: 'Built for Zambians, by Zambians',
      desc: 'Made with real people in mind, Sunga understands your goals, your hustle, and your way of life.',
      image: Users
    }
  ];
  return (
    <section className=" bg-[#FFFFFF]">
      <section className="container  flex flex-col gap-12 lg:gap-24 py-20 lg:py-24 justify-center items-center overflow-hidden">
        <motion.div
          className="flex flex-col gap-12 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center text-center gap-6"
          >
            <h1 className="relative w-full lg:text-[62px]  text-3xl font-bold transition-all font-red-hat-display duration-300 ease-in-out lg:leading-[140%] tracking-[-2px]">
              Built for the Way You Save,
              <br className="lg:flex hidden" /> Spend, and Live
            </h1>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 grid-cols-1 gap-[64px]"
        >
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`lg:rounded-[20px] rounded-[20px] lg:pl-[24px] flex flex-col bg-center bg-cover !pb-0 justify-between items-start gap-[16px]`}
            >
              <Image
                src={item.image}
                alt="image"
                width={100}
                height={100}
                className="w-fit h-[32px] object-contain object-bottom "
              />
              <h1
                className={` lg:text-[21px] text-[20px] leading-[100%] tracking-[-4%] !font-semibold font-inter`}
              >
                {item.title}
              </h1>
              <p
                className={` leading-[150%] text-[16px] lg:text-[16px] font-normal lg:w-[80%] text-[#6C747D]`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
