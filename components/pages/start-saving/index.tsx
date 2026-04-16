import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Pattern from '@/assets/images/start-saving/pattern.svg';
import saving_target from '@/assets/images/start-saving/saving_targetd.svg';
import saving_target_h from '@/assets/images/start-saving/saving_target.svg';
import savings_box from '@/assets/images/start-saving/savings_box.svg';
import savings_vault from '@/assets/images/start-saving/saving_vault.svg';
import flex_bag from '@/assets/images/start-saving/flex_bag.svg';
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

const list = [
  {
    label: 'Flexible Saving',
    title: 'Flex Bag',
    desc: 'Deposit anytime, withdraw twice a month for free, and earn daily interest.',
    image: {
      default: flex_bag,
      hover: flex_bag
    },
    colors: {
      default: {
        bg: '#FFFFFF',
        text: '#1A1A1A',
        tagbg: '#F3F3F3',
        tagtext: '#000000'
      },
      hover: {
        bg: '#FFD57A',
        text: '#1A1A1A',
        tagbg: '#FFF7D9',
        tagtext: '#000000'
      }
    }
  },
  {
    label: 'Everyday Saver',
    title: 'Savings Box',
    desc: 'Set recurring deposit or save when you can. One free withdrawal per quarter.',
    image: {
      default: savings_box,
      hover: savings_box
    },
    colors: {
      default: {
        bg: '#FFFFFF',
        text: '#1A1A1A',
        tagbg: '#F3F3F3',
        tagtext: '#000000'
      },
      hover: {
        bg: '#66D6A3',
        text: '#1A1A1A',
        tagbg: '#E9FFF4',
        tagtext: '#000000'
      }
    }
  },
  {
    label: 'Locked for Growth',
    title: 'Saving Vault',
    desc: 'Lock your funds for 30-365 days for higher interest. Ideal for long-term goals.',
    image: {
      default: savings_vault,
      hover: savings_vault
    },
    colors: {
      default: {
        bg: '#FFFFFF',
        text: '#1A1A1A',
        tagbg: '#F3F3F3',
        tagtext: '#000000'
      },
      hover: {
        bg: '#1A1A1A',
        text: '#FFFFFF',
        tagbg: '#F2F2F2',
        tagtext: '#1A1A1A'
      }
    }
  },
  {
    label: 'Goal Saver',
    title: 'Saving Target',
    desc: 'Create group or personal goals and save together..',
    image: {
      default: saving_target,
      hover:  saving_target_h
    },
    colors: {
      default: {
        bg: '#FFFFFF',
        text: '#1A1A1A',
        tagbg: '#F3F3F3',
        tagtext: '#000000'
      },
      hover: {
        bg: '#FF7A00',
        text: '#FFFFFF',
        tagbg: '#FFF5EC',
        tagtext: '#000000'
      }
    }
  }
];

export default function StartSaving() {
  const [autoHoverIndex, setAutoHoverIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [manualHoverIndex, setManualHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (!isHovering) {
      interval = setInterval(() => {
        setAutoHoverIndex((prevIndex) => (prevIndex + 1) % list.length);
      }, 3000); // Change card every 3 seconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHovering]);

  return (
    <section className=" bg-[#F8FAFD]" id="start_saving">
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
            <h1 className="relative w-full lg:text-[62px]  text-3xl font-bold transition-all font-red-hat-display duration-300 ease-in-out lg:leading-[100%] tracking-[-2px]">
              Start Saving the <br className="flex lg:hidden" /> Way You Want{' '}
            </h1>
            <p className="font-normal lg:text-[20px] text-base leading-[140%] text-[#1F2226]">
              No matter your goal, Sunga gives you simple, flexible plans to{' '}
              <br className="lg:flex hidden" /> help you save better and stay
              consistent.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 grid-cols-1 gap-[40px] group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {list.map((item, idx) => (
            (() => {
              const isActive =
                (isHovering && manualHoverIndex === idx) ||
                (!isHovering && autoHoverIndex === idx);

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onMouseEnter={() => setManualHoverIndex(idx)}
                  onMouseLeave={() => setManualHoverIndex(null)}
                  className="lg:rounded-[20px] rounded-[20px] flex flex-col cursor-pointer lg:py-[60px] py-[0px] overflow-hidden px-[0px] lg:px-[40px] bg-center bg-cover !pb-0 justify-between items-start gap-[10px] transition-colors duration-300"
                  style={
                    {
                      backgroundColor: isActive
                        ? item.colors.hover.bg
                        : item.colors.default.bg,
                      color: isActive
                        ? item.colors.hover.text
                        : item.colors.default.text,
                      backgroundImage: `url(${Pattern.src})`
                    } as React.CSSProperties
                  }
                >
                  <div className="flex flex-col gap-[10px] w-full lg:py-[0px] py-[40.83px] px-[27.22px] lg:px-[0px] !pb-0 ">
                    <div
                      className="lg:rounded-[50px] py-[8px] px-[24px] rounded-[50px] lg:text-[20px] text-[16px] w-fit leading-[140%] font-semibold font-red-hat-display transition-colors duration-300"
                      style={{
                        backgroundColor: isActive
                          ? item.colors.hover.tagbg
                          : item.colors.default.tagbg,
                        color: isActive
                          ? item.colors.hover.tagtext
                          : item.colors.default.tagtext
                      }}
                    >
                      {item.label}
                    </div>
                    <h1 className="text-inherit lg:text-[30px] text-[24px] leading-[140%] font-bold font-red-hat-display">
                      {item.title}
                    </h1>
                    <p className="text-inherit leading-[140%] text-[16px] lg:text-[20px] font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <Image
                    src={isActive ? item.image.hover : item.image.default}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-[100%] lg:h-[241px] h-[150px] object-contain object-bottom mx-auto"
                    priority={idx < 2}
                  />
                </motion.div>
              );
            })()
          ))}
        </motion.div>
      </section>
    </section>
  );
}