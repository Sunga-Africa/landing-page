import { useMemo } from 'react';
import createAccount from '@/assets/images/how-sunga-works/create-account.png';
// import choosePlan from '@/assets/images/how-sunga-works/choose-plan.png';
// import saveAndEarn from '@/assets/images/how-sunga-works/save-and-earn.png';
// import withdraw from '@/assets/images/how-sunga-works/withdraw.png';
import { motion } from 'framer-motion';
const HowSungaWorksMobileView = () => {
 
  const features = useMemo(
    () => [
      {
        title: 'Create Your Account',
        description:
          'Sign up in minutes using your phone number or email. It is fast, simple, and secure.',
        image: createAccount
      },
      {
        title: 'Choose a Savings Plan',
        description:
          'Pick the plan that matches your goals. Whether you want flexibility, steady growth, or group saving, Sunga has you covered.',
        image: createAccount
      },
      {
        title: 'Save & Earn',
        description:
          'Top up anytime through MTN, Airtel, Zamtel, or your bank and watch your money grow with confidence.',
        image: createAccount
      },
      {
        title: 'Withdraw',
        description: 'Access your funds when your plan allows.',
        image: createAccount
      }
    ],
    []
  );

  return (
    <div className="lg:hidden w-full flex">
      <section className="sticky top-0 bg-white pt-10 pb-24 sm:pt-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="text-left lg:text-left flex flex-col gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-bold font-red-hat-display leading-tight text-[#1F2226] tracking-[-2px]">
                How Sunga Works <br className="hidden sm:inline" />
                Step by Step
              </h2>
              <p className="text-lg lg:text-[20px] leading-relaxed font-dm-sans font-normal text-[#1F2226] max-w-xl mx-auto lg:mx-0">
                Saving has never been this easy. Follow these simple steps and
                take the first move toward your goals.
              </p>
            </div>
          </div>

          <div className="flex justify-center max-w-max mx-auto mt-10 lg:mt-10 w-full">
            <div className="relative ">
              <div className="flex flex-col gap-[40px] pt-10 ">
                {/* The vertical line connecting the steps */}
                <div
                  className="absolute left-[24px] w-0.5 bg-[#E0E0E0]"
                  style={{
                    top: '65px',
                    height: 'calc(100% - 130px)'
                  }}
                ></div>

                {features.map((step, index) => (
                  <div key={index} className="flex flex-row gap-2">
                    <div className="relative z-10 flex flex-col items-start">
                      <div
                        className={`size-[50px] z-10 bg-[#F5F5F5] text-[#1A1A1A] rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 `}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <motion.div className="w-full flex flex-col gap-[7px] items-start">
                      <h3 className="text-2xl lg:text-[24px] leading-[121%] font-red-hat-display font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-base lg:text-[20px] leading-[140%] font-normal text-gray-700">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowSungaWorksMobileView;
