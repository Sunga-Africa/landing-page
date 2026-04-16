'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';
import classNames from 'classnames';
 
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


const faqData = [
  {
    id: 1,
    name: 'General',
    description: `
     <div class="mt-3">
        <b>What is Sunga?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Sunga is a digital savings platform that helps you save money consistently, earn interest, and reach your financial goals with ease.
        </p>
    </div>
     <div class="mt-3">
        <b>Who can use Sunga?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Anyone with a valid mobile number and supported identification can use Sunga.        
        </p>
    </div>
      <div class="mt-3">
        <b>Do you have a Mobile App?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Yes! The mobile app is available ONLY on Android and iOS.
        </p>
        <p class="text-[#1F2226] lg:text-[14px] mt-1 leading-[150%] font-normal font-dm-sans text-[14px]" >
         <a href="https://play.google.com/store/apps/details?id=com.sunga" target="_blank" class="text-[#FF7A00] font-bold"> CLICK TO DOWNLOAD </a> for iOS
        </p>
         <p class="text-[#1F2226] lg:text-[14px] mt-1 leading-[150%] font-normal font-dm-sans text-[14px]" >
         <a href="https://play.google.com/store/apps/details?id=com.sunga" target="_blank" class="text-[#FF7A00] font-bold"> CLICK TO DOWNLOAD </a> for Android
        </p>
    </div>      
                `,
    status: false
  },
  {
    id: 2,
    name: 'Account & Verification',
    description: `
   <div class="mt-3">
        <b>How do I create an account?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Download the Sunga app, sign up with your mobile number, and follow the onboarding steps.      
        </p>
    </div>
     <div class="mt-3">
        <b>Why do I need to verify my account?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Verification helps keep your account secure and enables withdrawals.     
        </p>
    </div>
     <div class="mt-3">
        <b>My verification failed. What should I do?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          You can resubmit your details directly from the app or contact support if the issue persists.      
        </p>
    </div>
    `,
    status: false
  },
  {
    id: 3,
    name: 'Savings Plans',
    description: `
   <div class="mt-3">
        <b>What savings plans are available on Sunga?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         You can save using Flex Bag, Saving Box, and Target Saving plans.    
        </p>
    </div>
     <div class="mt-3">
        <b>Can I have multiple savings goals?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Yes. You can create and manage multiple savings goals at the same time.   
        </p>
    </div>
     <div class="mt-3">
        <b>Can I break a savings plan?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Some plans allow early withdrawals. Penalties or restrictions may apply depending on the plan type.     
        </p>
    </div>
        `,
    status: false
  },
  {
    id: 4,
    name: 'Adding Money',
    description: ` 
   <div class="mt-3">
        <b>How can I add money to my Sunga account?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         You can fund your account using Mobile Money, debit card, or bank transfer.   
        </p>
    </div>
     <div class="mt-3">
        <b>What is autosave?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Autosave automatically saves money for you based on your chosen schedule. 
        </p>
    </div>
     <div class="mt-3">
        <b>My autosave did not run. What should I do?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          You can retry autosave from the Help section or check your autosave history.   
        </p>
    </div>
    `,
    status: false
  },
  {
    id: 5,
    name: 'Withdrawals',
    description: `
   <div class="mt-3">
        <b>How do I withdraw my money?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Go to your savings plan or wallet and select Withdraw to start the process. 
        </p>
    </div>
     <div class="mt-3">
        <b>How long do withdrawals take?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Most withdrawals are processed within a few minutes. Some may take longer depending on the method used.
        </p>
    </div>
     <div class="mt-3">
        <b>Why is my withdrawal pending?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
          Withdrawals may be pending due to verification checks or network delays.
        </p>
    </div>
    `,
    status: false
  },
  {
    id: 6,
    name: 'Interest & Earnings',
    description: `
   <div class="mt-3">
        <b>Does Sunga pay interest?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Yes. You earn interest on eligible savings plans.
        </p>
    </div>
     <div class="mt-3">
        <b>When is interest added?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Interest is applied based on the rules of your selected savings plan.
        </p>
    </div>
        `,
    status: false
  },
  {
    id: 7,
    name: 'Security',
    description: `
    <div class="mt-3">
        <b>How secure is Sunga?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Sunga uses industry standard security measures to protect your data and funds.
        </p>
    </div>
     <div class="mt-3">
        <b>Can I enable biometrics?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Yes. You can enable fingerprint or face authentication from Security Settings.
        </p>
    </div>
      `,
    status: false
  },
  {
    id: 8,
    name: 'Support',
    description: `
    <div class="mt-3">
        <b>How can I contact Sunga support?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         You can reach support through in app chat or email from the Help section.
        </p>
    </div>
     <div class="mt-3">
        <b>What are support hours?</b>
        <p class="text-[#1F2226] lg:text-[14px]  leading-[150%] font-normal font-dm-sans text-[14px]" >
         Support is available during business hours, with limited support on weekends.
        </p>
    </div>

    `,
    status: false
  }
];
 
export default function FAQs() {

  return (
    <div className="relative flex lg:flex-row flex-col gap-[20px] lg:justify-center text-[#000000] justify-center bg-fixed items-center lg:py-[10px]  py-[10px] bg-cover bg-no-repeat bg-center ">
        <FAQsSection items={faqData} />
     </div>
  );
}

const FAQsSection = ({ items }: { items: any }) => {
  const [faqs, setFaqs] = useState<any[]>(items);

  React.useEffect(() => {
    setFaqs(items.map((item: any) => ({ ...item, status: false })));
  }, [items]);

  const toggleFaq = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, status: !faq.status } : faq
      )
    );
  };

  return (
    <motion.div
      className="flex flex-col justify-center  w-full gap-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col justify-center w-full gap-6">
        {faqs.map((item: any) => (
          <motion.div
            key={item.id}
            onClick={() => toggleFaq(item.id)}
            className={`flex flex-col gap-[12px] rounded-[12px] lg:py-[40px] lg:px-[40px] py-[24px] px-[14px] cursor-pointer bg-[#F8FAFD] text-[#000000]`}
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div className="lg:font-bold font-bold lg:tracking-[-1.5%] font-dm-sans text-[#1A1A1A] lg:leading-[100%] text-[14px] lg:text-[20px]">
                {item.name}
              </div>
              <div>
                <CaretRight
                  className={classNames({
                    'rotate-90': item.status
                  })}
                  size={18}
                />
              </div>
            </div>

            {item.status && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:text-[14px] text-[14px] leading-[150%] font-normal text-[#1F2226] tracking-[0%]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
          <div className="flex flex-col justify-center w-full gap-4">
        <h4 className="text-[20px] text-[#1F2226] leading-[150%] font-dm-sans font-normal">
          CONTACT INFORMATION
        </h4>
        <p className="text-[#1F2226] lg:text-[20px] leading-[140%] font-normal font-dm-sans text-[14px]">
          For questions or complaints: <br /> <b>Sunga Technologies Limited</b>
        </p>
        <p className="text-[#1F2226] lg:text-[20px] leading-[140%] font-normal font-dm-sans text-[14px]">
          Email: <a href="mailto:hello@sunga.africa" className='text-primary'>hello@sunga.africa</a> <br /> Address:Lusaka, Zambia
        </p>
      </div>
    </motion.div>
  );
};
