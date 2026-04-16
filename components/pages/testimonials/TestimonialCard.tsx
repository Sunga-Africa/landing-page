import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

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

interface TestimonialCardProps {
  title: string;
  desc: string;
  image: StaticImageData;
}

export function TestimonialCard({ title, desc, image }: TestimonialCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="lg:rounded-[24px] bg-white lg:py-[40px] py-[32px] px-[24px] rounded-[20px] flex flex-col justify-between items-start gap-[32px]"
    >
      {/* <span className="text-[#DADADA] lg:text-[18px] text-[14px] lg:text-right w-full leading-[144%] font-dm-sans font-normal">
        Wednesday, 5th of October 2025 by 03:08 AM
      </span> */}
      <div className="flex gap-[14px]">
        <Image
          src={image}
          alt={title}
          width={30}
          height={30}
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-[12px]">
          <h1 className="lg:text-[13px] text-[13px] leading-[144%] text-[#464F59] !font-medium font-dm-sans">
            {title}
          </h1>
          <p className="leading-[144%] text-[12px] lg:text-[14px] font-normal font-dm-sans text-[#535353]">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
