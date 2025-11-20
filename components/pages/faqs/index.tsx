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
    name: 'APPLICATION OF THIS PRIVACY POLICY',
    description: ``,
    status: false
  },
  {
    id: 2,
    name: 'GUIDING PRINCIPLE',
    description: ``,
    status: false
  },
  {
    id: 3,
    name: 'LAWFUL BASIS FOR USE OF YOUR PERSONAL INFORMATION',
    description: ``,
    status: false
  },
  {
    id: 4,
    name: 'INFORMATION WE COLLECT AND HOW WE COLLECT IT',
    description: ``,
    status: false
  },
  {
    id: 5,
    name: 'FACE DATA COLLECTION AND USE',
    description: ``,
    status: false
  },
  {
    id: 6,
    name: 'COOKIES',
    description: ``,
    status: false
  },
  {
    id: 7,
    name: 'INFORMATION YOU SHARE SOCIALLY',
    description: ``,
    status: false
  },
  {
    id: 8,
    name: 'SECURITY AND STORAGE OF YOUR PERSONAL INFORMATION',
    description: ``,
    status: false
  },
  {
    id: 9,
    name: 'PROTECTING CHILDREN’S PRIVACY',
    description: ``,
    status: false
  },
  {
    id: 10,
    name: 'LINKS TO THIRD-PARTY WEBSITES',
    description: ``,
    status: false
  },
  {
    id: 11,
    name: 'DATA SECURITY AND RETENTION',
    description: ``,
    status: false
  },
  {
    id: 12,
    name: 'INTERNATIONAL TRANSFERS',
    description: ``,
    status: false
  },
  {
    id: 13,
    name: 'GRIEVANCE REDRESS PROCEDURE',
    description: ``,
    status: false
  },
  {
    id: 14,
    name: 'CHAGES TO OUR PRIVACY POLICY',
    description: ``,
    status: false
  },
  {
    id: 15,
    name: 'HOW CAN I CONTACT SUNGA?',
    description: ``,
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
    </motion.div>
  );
};
