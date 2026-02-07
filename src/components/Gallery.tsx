import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Gallery() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.25
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants: Variants = {
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

  return(
    <>
    <motion.div 
      className="w-full px-4 sm:px-8 md:px-16 lg:px-25 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-20 2xl:px-62.5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-6 max-w-7xl mx-auto">
        <motion.div 
          className="w-full sm:w-3/4 md:w-2/3 lg:w-79 h-auto lg:h-119.5 bg-foreground overflow-hidden order-1 lg:order-1"
          variants={imageVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <img className="select-none pointer-events-none w-full h-full object-cover" src="./gallery2.png" alt="Gallery 2" />
        </motion.div>

        <motion.div 
          className="w-full lg:w-79 text-primary flex flex-col items-center gap-3 md:gap-4 lg:gap-2 lg:mt-14 px-4 order-2 lg:order-2"
          variants={textVariants}
        >
          <h2 className="cormorant text-2xl sm:text-3xl md:text-4xl font-bold">Luneera.id</h2>
          <p className="text-center playfair w-80 text-sm sm:text-base leading-relaxed">
            Simplicity is the keynote of all true elegance. Comes with a unique texture and soft earthy colors, this Luneera collection is ready to perfect your polite appearance. Appear confident without having to overdo it.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="w-full sm:w-3/4 md:w-2/3 lg:w-79 h-auto lg:h-119.5 bg-foreground overflow-hidden order-3 lg:order-3"
          variants={imageVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <img className="select-none pointer-events-none w-full h-full object-cover" src="./gallery1.png" alt="Gallery 1" />
        </motion.div>
      </div>
    </motion.div>
    </>
  )
}