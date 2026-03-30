import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import createAccount from '@/assets/images/how-sunga-works/CreateAccount.png';
import choosePlan from '@/assets/images/how-sunga-works/ChooseSavingsPlan.png';
import saveAndEarn from '@/assets/images/how-sunga-works/Save&Earn.png';
import withdraw from '@/assets/images/how-sunga-works/Withdrawal.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define fixed step width and gap for consistent calculation
const STEP_WIDTH = 600;
const STEP_GAP = 20;
const STEP_ITEM_TOTAL_WIDTH = STEP_WIDTH + STEP_GAP;

const HowSungaWorks = () => {
   const SCROLL_DURATION_HEIGHT = 3400;

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
        image: choosePlan
      },
      {
        title: 'Save & Earn',
        description:
          'Top up anytime through MTN, Airtel, Zamtel, or your bank and watch your money grow with confidence.',
        image: saveAndEarn
      },
      {
        title: 'Withdraw',
        description: 'Access your funds when your plan allows.',
        image: withdraw
      }
    ],
    []
  );

  const [activeStep, setActiveStep] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);
  const scrollStepsRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [contentPadding, setContentPadding] = useState(0);

  // 1. Calculate Window Height and Initial Content Padding on Mount/Resize
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      if (scrollStepsRef.current) {
        // PADDING = (Container Width / 2) - (Step Item Total Width / 2)
        const containerWidth = scrollStepsRef.current.clientWidth;
        // Calculation to center the first step item
        setContentPadding(containerWidth / 2 - STEP_WIDTH / 2);
      }
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // 2. Scroll Synchronization Logic (MODIFIED)
  const syncScroll = useCallback(() => {
    const component = componentRef.current;
    const stepsContainer = scrollStepsRef.current;

    if (!component || !stepsContainer || windowHeight === 0) return;

    const componentTop = component.offsetTop;
    const scrollY = window.scrollY;
    const verticalProgress = Math.min(
      SCROLL_DURATION_HEIGHT,
      Math.max(0, scrollY - componentTop)
    );
    // ------------------------------------

    const totalStepsContentWidth =
      features.length * STEP_ITEM_TOTAL_WIDTH - STEP_GAP;
    // Max scrollable width
    const maxHorizontalScroll = totalStepsContentWidth - STEP_WIDTH;

    // Normalize vertical progress (0 to 1)
    const normalizedProgress = verticalProgress / SCROLL_DURATION_HEIGHT;

    // Target scrollLeft position
    const targetScrollLeft = normalizedProgress * maxHorizontalScroll;

    // Apply horizontal scroll
    stepsContainer.scrollLeft = targetScrollLeft;

    // Active Step Tracking Logic
    const stepScrollDistance = maxHorizontalScroll / (features.length - 1);

    const newActiveStep = Math.min(
      features.length - 1,
      Math.round(targetScrollLeft / stepScrollDistance)
    );

    setActiveStep(newActiveStep);
  }, [windowHeight, features.length]);
  // ... (end of syncScroll)

  // 3. Scroll Listener & SSR Fix
  useEffect(() => {
    if (windowHeight === 0) return;

    window.addEventListener('scroll', syncScroll);
    syncScroll();

    return () => {
      window.removeEventListener('scroll', syncScroll);
    };
  }, [syncScroll, windowHeight]);

  // Handle SSR: Fix for 'window is not defined'
  if (windowHeight === 0) {
    return (
      <div
        style={{ height: `${SCROLL_DURATION_HEIGHT}px` }} // Safe height for SSR
        aria-hidden="true"
      >
        {/* Placeholder to reserve space during server rendering */}
      </div>
    );
  }

  const componentTotalHeight = `${SCROLL_DURATION_HEIGHT + windowHeight}px`;

  // Calculate progress bar width based on active step

  return (
    <div style={{ height: componentTotalHeight }} ref={componentRef} id="howSungaWorks">
      <section className="sticky top-0 bg-white pt-10 pb-24 sm:pt-20 w-full overflow-hidden">
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
            {/* ... image block ... */}
            <div className="relative lg:block hidden w-full max-w-2xl mx-auto lg:mx-0 h-64 sm:h-96 lg:h-[400px]">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeStep === index ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={feature.image.src}
                    alt={feature.title}
                    layout="fill"
                    objectFit="contain"
                    className="object-top"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Scrollable Steps (MODIFIED) */}
          <div className="lg:flex hidden justify-center max-w-max mx-auto mt-10 lg:mt-10 w-full">
            <div
              ref={scrollStepsRef}
              className="relative overflow-x-hidden hide-scrollbar"
              style={{
                paddingLeft: `${contentPadding}px`,
                paddingRight: `${contentPadding}px`
              }}
            >
              <div
                className="flex pt-10 !pl-72"
                style={{
                  width: `${features.length * STEP_ITEM_TOTAL_WIDTH}px`
                }}
              >
                {/* Progress Bar Line (MODIFIED) */}
                <div
                  className="absolute top-1/2 h-0.5 bg-[#1A1A1A] -translate-y-1/2"
                  style={{
                    top: '65px', // Positioned vertically relative to the step number
                    left: `${STEP_WIDTH / 2}px`,
                    width: `${(features.length - 1) * STEP_ITEM_TOTAL_WIDTH}px`
                  }}
                >
                  <div
                    className="h-full bg-primary transition-all duration-300 ease-linear"
                    style={{
                      width: `${(activeStep / (features.length - 1)) * 90}%`
                    }}
                  ></div>
                </div>

                {/* Steps Mapping (Unchanged) */}
                {features.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2"
                    style={{
                      width: `${STEP_WIDTH}px`,
                      marginRight:
                        index < features.length - 1 ? `${STEP_GAP}px` : '0'
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-start">
                      {/* Step Circle */}
                      <div
                        className={`size-[50px] z-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                          activeStep >= index
                            ? 'bg-primary border-2 border-primary-dark text-white'
                            : 'bg-[#F5F5F5] text-[#1A1A1A]'
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>
                    {/* Step Content */}
                    <motion.div
                      animate={{
                        opacity: activeStep === index ? 1 : 0.5
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-full flex flex-col gap-[32px] items-start"
                    >
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

export default HowSungaWorks;
