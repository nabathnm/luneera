import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Footer() {
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

  const itemVariants: Variants = {
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

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return(
    <>
    <motion.div 
      className="w-full py-12 md:pt-16 lg:pt-20 bg-foreground px-4 sm:px-8 md:px-16 lg:px-25 relative border-t-2 border-primary/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0 max-w-7xl mx-auto">
        
        {/* Left Section - Stay Up To Date */}
        <motion.div 
          className="w-full lg:w-50 flex flex-col items-center lg:items-start text-center lg:text-left gap-3"
          variants={itemVariants}
        >
          <h3 className="cormorant font-bold text-2xl sm:text-3xl text-primary">Stay Up To Date</h3>
          <p className="playfair text-primary text-sm sm:text-base">Breathable fabrics designed for all-day wear without compromise</p>
          <div className="flex gap-2 mt-2">
            <motion.div 
              custom={0}
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 bg-white rounded-full cursor-pointer flex items-center justify-center"
            >
            <a href="https://www.tiktok.com/en//">
            <svg className="scale-125" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4775 0.44043C10.5692 1.38095 10.9518 2.27376 11.5791 2.99023V2.98926C12.3013 3.82245 13.1613 4.21457 13.835 4.39746C14.1198 4.47477 14.3733 4.51408 14.5723 4.53516V6.61914C13.3434 6.53912 12.1583 6.11816 11.1533 5.39648L10.4551 4.89551V11.7764C10.4551 14.5495 8.21073 16.7938 5.44824 16.7939C2.86685 16.7939 0.44043 14.7025 0.44043 11.7764C0.440644 8.89484 2.87842 6.61023 5.75391 6.77832V8.86328C4.04395 8.67875 2.52756 10.0333 2.52734 11.7764C2.52734 13.4004 3.85657 14.7068 5.45703 14.707C6.21427 14.7075 6.94247 14.4136 7.4873 13.8877C8.03215 13.3618 8.35162 12.6445 8.37793 11.8877V0.44043H10.4775Z" stroke="#655546" stroke-width="0.881029"/>
            </svg>
            </a>

            </motion.div>
            <motion.div 
              custom={1}
              variants={socialVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 bg-white rounded-full cursor-pointer flex items-center justify-center"
            >
            <a href="https://www.instagram.com/">
            <svg className='scale-115 mt-0.5' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.24871 13.1629C10.287 13.1629 11.2827 12.7505 12.0168 12.0163C12.751 11.2822 13.1634 10.2865 13.1634 9.24822C13.1634 8.20997 12.751 7.21424 12.0168 6.48009C11.2827 5.74594 10.287 5.3335 9.24871 5.3335C8.21046 5.3335 7.21473 5.74594 6.48058 6.48009C5.74643 7.21424 5.33398 8.20997 5.33398 9.24822C5.33398 10.2865 5.74643 11.2822 6.48058 12.0163C7.21473 12.7505 8.21046 13.1629 9.24871 13.1629Z" stroke="#655546" stroke-width="0.880812" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.44043 13.1633V5.33383C0.44043 4.03602 0.955983 2.79137 1.87367 1.87367C2.79137 0.955983 4.03602 0.44043 5.33383 0.44043H13.1633C14.4611 0.44043 15.7057 0.955983 16.6234 1.87367C17.5411 2.79137 18.0567 4.03602 18.0567 5.33383V13.1633C18.0567 14.4611 17.5411 15.7057 16.6234 16.6234C15.7057 17.5411 14.4611 18.0567 13.1633 18.0567H5.33383C4.03602 18.0567 2.79137 17.5411 1.87367 16.6234C0.955983 15.7057 0.44043 14.4611 0.44043 13.1633Z" stroke="#655546" stroke-width="0.880812"/>
            <path d="M14.6309 3.87614L14.6403 3.86572" stroke="#655546" stroke-width="1.46802" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Center Logo - Desktop: Absolute, Mobile: Normal Flow */}
        <motion.div 
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-20 order-first"
          variants={logoVariants}
        >
          <h2 className="cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-primary whitespace-nowrap">Luneera.id</h2>
        </motion.div>

        {/* Right Section - Navigate */}
        <motion.div 
          className="w-full lg:w-50 flex flex-col items-center lg:items-end text-center lg:text-right gap-3"
          variants={itemVariants}
        >
          <h3 className="cormorant font-bold text-2xl sm:text-3xl text-primary">Navigate</h3>
          <div className="flex flex-col gap-2 playfair text-primary text-sm sm:text-base">
            <motion.a 
              href="#"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
              className="hover:text-primary/70 transition-colors"
            >
              Home
            </motion.a>
            <motion.a 
              href="https://shopee.co.id/"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
              className="hover:text-primary/70 transition-colors"
            >
              Collection
            </motion.a>
            <motion.a 
              href="https://wa.me/6281234329585"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
              className="hover:text-primary/70 transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Copyright Section */}
    <motion.div 
      className="w-full py-3 md:py-4 flex justify-center bg-foreground border-t-2 border-primary/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-primary playfair text-xs sm:text-sm md:text-base text-center px-4">
        ©Luneera.id 2026. All rights reserved.
      </p>
    </motion.div>
    </>
  )
}