import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Style() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return(
    <>
    <motion.div 
      className="px-4 sm:px-8 md:px-16 lg:px-25 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-30 flex flex-col justify-center items-center gap-4 md:gap-16 lg:gap-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Section 1 - Top Images */}
      <motion.div 
        className="flex flex-col md:flex-row gap-4 md:gap-7 w-full justify-center"
        variants={sectionVariants}
      >
        <motion.div 
          className="bg-foreground overflow-hidden"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img className="select-none pointer-events-none w-full h-auto object-cover" src="./style1.png" alt="Style 1" />
        </motion.div>
        <div className="flex flex-col gap-4 md:gap-7">
          <motion.div 
            className="bg-foreground overflow-hidden"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img className="select-none pointer-events-none w-full h-auto object-cover" src="./style2.png" alt="Style 2" />
          </motion.div>
          <motion.div 
            className="bg-foreground overflow-hidden"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img className="select-none pointer-events-none w-full h-auto object-cover" src="./style3.png" alt="Style 3" />
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2 - Bottom Grid */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-6 md:gap-7 w-full max-w-7xl"
        variants={sectionVariants}
      >
        {/* Left Column - Large Images */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 md:gap-7 w-full lg:w-1/2 2xl:pl-25"
          variants={gridVariants}
        >
          <motion.div 
            className="w-full sm:w-1/2 h-64 sm:h-80 md:h-96 lg:h-174 bg-foreground overflow-hidden"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img className="select-none pointer-events-none w-full h-full object-cover" src="style4.png" alt="Style 4" />
          </motion.div>
          <motion.div 
            className="w-full sm:w-1/2 h-64 sm:h-72 md:h-88 lg:h-159 bg-foreground overflow-hidden"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img className="select-none pointer-events-none w-full h-full object-cover" src="style5.png" alt="Style 5" />
          </motion.div>
        </motion.div>

        {/* Right Column - Text + Grid */}
        <motion.div 
          className="flex flex-col justify-between w-full lg:w-1/2 gap-8 px-12"
          variants={gridVariants}
        >
          {/* Text Section */}
          <motion.div 
            className="flex flex-col gap-2 text-center lg:text-left"
            variants={imageVariants}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-primary cormorant font-bold">New Styles For a</h3>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-primary cormorant font-bold">Modern Look</h3>
            </div>
            <p className="text-primary playfair text-sm sm:text-base">Premium hijab designed to accompany your every step — comfortable, graceful and meaningful.</p>
          </motion.div>

          {/* Small Grid Images */}
          <motion.div 
            className="flex flex-col gap-4 md:gap-5.5 items-center"
            variants={gridVariants}
          >
            <div className="flex gap-4 md:gap-5.5 w-full">
              <motion.div 
                className="md:w-51 md:h-63 w-full h-63 bg-foreground overflow-hidden "
                variants={imageVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./style6.png" alt="Style 6" />
              </motion.div>
              <motion.div 
                className="md:w-51 md:h-63 w-full h-63 bg-foreground overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./style7.png" alt="Style 7" />
              </motion.div>
            </div>
            <div className="flex gap-4 md:gap-5.5 w-full">
              <motion.div 
                className="md:w-51 md:h-63 w-full h-63 bg-foreground overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./style8.png" alt="Style 8" />
              </motion.div>
              <motion.div 
                className="md:w-51 md:h-63 w-full h-63 bg-foreground overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./style9.png" alt="Style 9" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  )
}