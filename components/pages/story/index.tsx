import { motion } from 'framer-motion';

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

export default function Story() {
  return (
    <section id='our_strory' className="container flex flex-col lg:flex-row gap-[32px] lg:gap-[72px] py-20 lg:py-24 justify-center items-center overflow-hidden">
      <motion.div
        className="lg:w-1/2 flex flex-col gap-12 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-start gap-[32px] lg:gap-8"
        >
          <h1 className="relative w-full lg:text-[62px]  text-3xl font-bold transition-all font-red-hat-display duration-300 ease-in-out lg:leading-[100%] tracking-[-2px]">
            The Sunga Story.{' '}
          </h1>
          <div>
            {' '}
            <p className="font-normal lg:text-[20px] text-base leading-[140%] text-[#1F2226]">
              Sunga makes saving easy and rewarding for every Zambian. We
              believe financial freedom starts with small, consistent steps that
              help you stay in control and build confidence along the way.{' '}
            </p>
            <br />
            <p className="font-normal lg:text-[20px] text-base leading-[140%] text-[#1F2226] max-w-3xl">
              Whether you’re saving for school fees, farming, your business, or
              your next big goal, Sunga gives you the tools to make it happen.
              With Sunga, every kwacha saved brings you closer to the life you
              want.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="font-bold lg:text-[28px] text-xl leading-[140%] text-[#181816]"
        >
          Our mission is to help everyone build better money habits through
          small, consistent actions.
        </motion.p>
      </motion.div>
    </section>
  );
}
