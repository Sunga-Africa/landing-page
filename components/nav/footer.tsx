import FacebookIcon from '@/assets/icons/facebook';
import InstagramIcon from '@/assets/icons/instagram';
import LinkedInIcon from '@/assets/icons/linkedIn';
import XIcon from '@/assets/icons/x';
import Link from 'next/link';
import Logo from '@/assets/images/sunga-logo.png';
import Image from 'next/image';

const Footer = ({
  iconsColor,
  className
}: {
  iconsColor?: string;
  className?: string;
}) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {' '}
      <div className="container mt-8 mb-15">
        <div
          className={` lg:py-[42px] flex flex-col justify-center font-medium lg:text-lg text-[14px] text-[#000000] gap-3 ${className}`}
        >
          <div className="flex lg:flex-row flex-col justify-between  gap-4 lg:pb-10 pb-4 items-start ">
            <div className="flex flex-col  gap-4 lg:pb-10 pb-4 items-start ">
              <div className="text-2xl font-bold">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="sunga-web"
                    width={500}
                    height={500}
                    className="lg:h-[36.27px] h-[31.74px] w-full"
                  />
                </Link>
              </div>
              <div className="text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-[#1A1A1A] font-normal">
                Have a question or want to learn more about Sunga? We are <br />{' '}
                here to help. Reach out anytime or join our community online.
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center pt-4 lg:pt-10 gap-[19px]">
              <div className="flex lg:w-auto w-full justify-between items-start gap-[39px]">
                <div className="flex flex-col justify-between items-start gap-[7px] lg:gap-[40px]">
                  <span className="text-[#000000] font-sans font-semibold leading-[28px] tracking-[1%] text-[12px] lg:text-[20px]">
                    About
                  </span>
                  <div className="text-left flex flex-col gap-[7px] lg:gap-[18px] text-black">
                    <Link
                      href="/"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      Our story{' '}
                    </Link>
                    <Link
                      href="/"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      Contact Us{' '}
                    </Link>
                  </div>
                </div>{' '}
                <div className="flex flex-col justify-between items-start gap-[7px] lg:gap-[40px]">
                  <span className="text-[#000000] font-sans font-semibold leading-[28px] tracking-[1%] text-[12px] lg:text-[20px]">
                    Support{' '}
                  </span>
                  <div className="text-left flex flex-col gap-[7px] lg:gap-[18px] text-black">
                    <Link
                      href="/privacy-policy"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      Privacy policy
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      Terms and Conditions{' '}
                    </Link>
                    {/* <Link
                      href="/"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      Customer Support{' '}
                    </Link>
                    <Link
                      href="/"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      Legal{' '}
                    </Link> */}
                    <Link
                      href="/faqs"
                      className="text-[#1A1A1A] font-normal font-sans leading-[24px] text-[12px] lg:text-[16px]"
                    >
                      FAQ{' '}
                    </Link>
                  </div>
                </div>{' '}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center border-t border-[#D4D4D8] items-start pt-4 lg:pt-10 gap-3">
            <span className="text-[#64748B] font-sans font-normal leading-[24px] text-[12px] lg:text-[16px]">
              {currentYear} Sunga Africa
            </span>
            <div
              className={`text-right flex items-center justify-end gap-5 text-[#94A3B8] ${iconsColor}`}
            >
              <Link href={'https://www.facebook.com/ sungahq'}>
                <FacebookIcon />
              </Link>
              <Link href={'https://x.com/ sungahq?s=21'}>
                <XIcon />
              </Link>
              <Link
                href={
                  'https://www.instagram.com/ sungahq?igsh=MW5hM3F4MGd4a2UzNw=='
                }
              >
                <InstagramIcon />
              </Link>
              <Link href={'https://www.linkedin.com/company/ sungainc/'}>
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
