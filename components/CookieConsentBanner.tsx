import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

const CONSENT_COOKIE_NAME = 'user_cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

const CookieConsentCard = () => {
   const [isVisible, setIsVisible] = useState(false);

  const handleAccept = () => {
     Cookies.set(CONSENT_COOKIE_NAME, 'accepted', {
      expires: COOKIE_EXPIRY_DAYS,
      sameSite: 'Strict'
    });
    setIsVisible(false);
     console.log('Analytics enabled! Implement your script loading here.');
   };
   const handleReject = () => {
     Cookies.set(CONSENT_COOKIE_NAME, 'rejected', {
      expires: COOKIE_EXPIRY_DAYS,
      sameSite: 'Strict'
    });
     setIsVisible(false);
    console.log('Non-essential services blocked.');
  };

  useEffect(() => {
     const userConsent = Cookies.get(CONSENT_COOKIE_NAME);
    if (!userConsent) {
      setIsVisible(true);
    }
  }, []);

   if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0  right-0 z-[1000] p-4 sm:p-6 flex justify-center pointer-events-none">
      <div className="bg-white  shadow-2xl rounded-[12px] p-6 max-w-lg w-full pointer-events-auto">
        <h3 className="text-[28px] leading-[36.4px] tracking-[-0.42px] font-inter font-bold mb-3 text-[#030B1D]">
          Cookie Statement
        </h3>
        <p className="text-[#1A1A1A] leading-[25px] font-normal font-dm-sans text-[14px] mb-4">
          We take your privacy seriously and only process your personal
          information in line with Zambian data protection laws and applicable
          regulations. By using Sunga, you consent to how we handle your data.
        </p>
        <p className="text-[#000000] leading-[25px] font-medium font-dm-sans text-[14.6px] mb-4">
          Our website also uses cookies to improve your experience. You can
          adjust your preferences below. Please read our
          <Link
            href="/privacy-policy"
            className="text-primary hover:underline transition duration-150 ml-1 "
          >
            Cookie Policy
          </Link> {' '}
          for more information.
        </p>
        <div className="flex flex-col gap-3 justify-center  mt-6">
          <Button
            onClick={handleAccept}
            className="px-4 py-2 text-sm rounded-[12px] !font-red-hat-display !font-semibold text-white bg-primary transition duration-150"
          >
            Accept Cookies
          </Button>
          <Button
            onClick={handleReject}
            className="px-4 py-2 text-sm rounded-[12px] !font-red-hat-display !font-semibold  bg-[#FFE8D4] text-[#1A1A1A] hover:bg-gray-100 transition duration-150"
          >
            Disable Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentCard;
