import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Collection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return(
    <>
    <div className="w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-25 gap-6 md:gap-8 lg:gap-11 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-30">
      <motion.div 
        className="flex flex-col justify-center items-center gap-2 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <h1 className="cormorant text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Our Signature Collection</h1>
        <div className="flex flex-col items-center px-4">
          <h3 className="playfair text-primary text-sm sm:text-base">A selection of collections that represent the character of our brand — are simple, elegant and timeless.</h3>
          <h3 className="playfair text-primary text-sm sm:text-base">Designed to be easy to combine and comfortable to wear all day.</h3>
        </div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:flex w-full gap-4 md:gap-8 lg:gap-17 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
          className="h-64 sm:h-80 md:h-94.5 w-full lg:w-63 bg-foreground overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./collection1.png" alt="Collection 1" />
        </motion.div>
        <motion.div 
          className="h-64 sm:h-80 md:h-94.5 w-full lg:w-63 bg-foreground overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./collection2.png" alt="Collection 2" />
        </motion.div>
        <motion.div 
          className="h-64 sm:h-80 md:h-94.5 w-full lg:w-63 bg-foreground overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./collection3.png" alt="Collection 3" />
        </motion.div>
        <motion.div 
          className="h-64 sm:h-80 md:h-94.5 w-full lg:w-63 bg-foreground overflow-hidden"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img className="select-none pointer-events-none scale-101 w-full h-full object-cover" src="./collection4.png" alt="Collection 4" />
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}