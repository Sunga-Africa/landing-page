import React from "react";
import Image from 'next/image';
import BirthdaySurpriseIcon from "@/assets/images/learn/emoji_with_explosion_birthday_surprise_firecracker.svg";
import Button from '@/components/form/button';
interface SuccessScreenProps {
   title?: string;
  message?: string;
  image?: string;
  closeModal?: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
 title,
  message,
  image = BirthdaySurpriseIcon,
   closeModal,
 }) => {
  return (
    <div className="flex flex-col gap-[12px] bg-white w-full px-[24px] py-[40px]">
      <Image
        width={100}
        height={100}
        src={image}
        alt="bootcamp-image"
        className="w-[160px] h-[160px] object-contain mx-auto"
      />
      <div className="flex flex-col items-center justify-center text-center gap-[12px]">
        <h1 className="text-[#464749] text-[24px] font-semibold tracking-[-1.6%] leading-[26px]">
          {title}{' '}
        </h1>
        <p className="text-[#6E6E6E] text-[16px] font-medium w-[60%] text-center leading-[22px]">
          {message}
        </p>
      </div>
      <Button
        type="button"
        onClick={() => closeModal && closeModal()}
        name="Dismiss"
        className="bg-[#06222B] w-full text-[#9FD702] p-3 rounded-full font-semibold"
      />
    </div>
  );
};

export default SuccessScreen;
