import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Color() {
  const headerVariants: Variants = {
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

  const rowVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
   <>
   <div className="border-2 border-primary/40 w-full bg-foreground flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-25 gap-6 md:gap-8 lg:gap-11 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-30">
      <motion.div 
        className="flex flex-col justify-center items-center gap-2 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <h1 className="cormorant text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Colors that Inspire</h1>
        <div className="flex flex-col items-center px-4">
          <h3 className="playfair text-primary text-sm sm:text-base">A refined selection of timeless shades, each chosen to complement your natural elegance.</h3>
        </div>
      </motion.div>
    <div className="flex flex-col gap-4 md:gap-6 w-full md:px-25">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={rowVariants}
      >
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#ECE3DA] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Caramel</h5>
        </motion.div>
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#9E9CAB] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Grey</h5>
        </motion.div>
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#D89E86] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Bright Orange</h5>
        </motion.div>
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#A9A396] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Dessert Sage</h5>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={rowVariants}
      >
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#E4D2D4] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Fushia</h5>
        </motion.div>
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#683639] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Rose Smoked</h5>
        </motion.div>
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#092355] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Navy</h5>
        </motion.div>
        <motion.div 
          className="bg-white p-2 rounded-sm flex flex-col items-center justify-center gap-2"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-[#0D0E15] w-full aspect-[1.2] rounded-xs"></div>
          <h5 className="playfair text-base sm:text-lg md:text-xl text-primary">Charcoal</h5>
        </motion.div>
      </motion.div>
    </div>
   </div>
   </>
  );
}