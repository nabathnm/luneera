import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
   <div className="w-full bg-foreground py-12 md:py-16 lg:py-20 flex items-center justify-center px-4 sm:px-8 md:px-16 border-y-2 border-primary/40">
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-21 max-w-7xl w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-col items-center justify-center gap-2"
        variants={itemVariants}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4257 24.5544L22.9702 19.0098C23.2606 18.7194 23.4917 18.3762 23.6633 17.9801C23.8349 17.5841 23.9207 17.1616 23.9207 16.7128C23.9207 15.8151 23.6039 15.0494 22.9702 14.4158C22.3365 13.7821 21.5709 13.4653 20.6732 13.4653C20.1715 13.4653 19.6765 13.6105 19.188 13.9009C18.6996 14.1914 18.1121 14.6798 17.4257 15.3663C16.6336 14.627 16.0131 14.1254 15.5643 13.8613C15.1155 13.5973 14.6534 13.4653 14.1782 13.4653C13.2805 13.4653 12.5148 13.7821 11.8811 14.4158C11.2475 15.0494 10.9307 15.8151 10.9307 16.7128C10.9307 17.1616 11.0165 17.5841 11.1881 17.9801C11.3597 18.3762 11.5907 18.7194 11.8811 19.0098L17.4257 24.5544ZM30.7326 19.4059L19.4059 30.7326C19.089 31.0494 18.7326 31.287 18.3366 31.4454C17.9405 31.6038 17.5445 31.683 17.1484 31.683C16.7524 31.683 16.3564 31.6038 15.9603 31.4454C15.5643 31.287 15.2079 31.0494 14.891 30.7326L0.910888 16.7524C0.62046 16.462 0.396038 16.1253 0.237623 15.7425C0.0792076 15.3597 0 14.957 0 14.5346V3.1683C0 2.29702 0.31023 1.55115 0.930689 0.930689C1.55115 0.31023 2.29702 0 3.1683 0H14.5346C14.957 0 15.3663 0.0858082 15.7623 0.257425C16.1584 0.429041 16.5016 0.660063 16.792 0.950491L30.7326 14.9306C31.0494 15.2475 31.2804 15.6039 31.4256 15.9999C31.5708 16.396 31.6434 16.792 31.6434 17.1881C31.6434 17.5841 31.5708 17.9735 31.4256 18.3564C31.2804 18.7392 31.0494 19.089 30.7326 19.4059ZM17.1484 28.5147L28.4751 17.1881L14.495 3.1683H3.1683V14.495L17.1484 28.5147ZM7.12868 9.50491C7.78875 9.50491 8.3498 9.27389 8.81185 8.81185C9.27389 8.3498 9.50491 7.78875 9.50491 7.12868C9.50491 6.46862 9.27389 5.90757 8.81185 5.44552C8.3498 4.98348 7.78875 4.75246 7.12868 4.75246C6.46862 4.75246 5.90757 4.98348 5.44552 5.44552C4.98348 5.90757 4.75246 6.46862 4.75246 7.12868C4.75246 7.78875 4.98348 8.3498 5.44552 8.81185C5.90757 9.27389 6.46862 9.50491 7.12868 9.50491Z" fill="#655546"/>
          </svg>
        </div>
        <div className="w-full sm:w-60 flex flex-col items-center gap-2 px-4">
          <h6 className="text-xl sm:text-2xl font-bold cormorant text-primary">Premium Quality</h6>
          <p className="playfair text-primary text-center text-sm sm:text-base">Top-tier fabrics engineered for durability, breathability, and everyday luxury</p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center gap-2"
        variants={itemVariants}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.33661 31.683V22.1781H3.80197C2.74586 22.1781 1.84818 21.8085 1.10891 21.0692C0.369635 20.33 0 19.4323 0 18.3762C0 17.6105 0.21122 16.9042 0.633661 16.2574C1.0561 15.6105 1.61055 15.1287 2.29702 14.8118L12.6732 10.2178V9.18808C11.7227 8.84485 10.9571 8.27059 10.3762 7.46532C9.79534 6.66004 9.50491 5.75575 9.50491 4.75246C9.50491 3.43233 9.96696 2.31022 10.891 1.38613C11.8151 0.462044 12.9372 0 14.2574 0C15.5775 0 16.6996 0.462044 17.6237 1.38613C18.5478 2.31022 19.0098 3.43233 19.0098 4.75246H15.8415C15.8415 4.30361 15.6897 3.92738 15.3861 3.62375C15.0824 3.32012 14.7062 3.1683 14.2574 3.1683C13.8085 3.1683 13.4323 3.32012 13.1287 3.62375C12.825 3.92738 12.6732 4.30361 12.6732 4.75246C12.6732 5.2013 12.825 5.57754 13.1287 5.88117C13.4323 6.18479 13.8085 6.33661 14.2574 6.33661C14.7062 6.33661 15.0824 6.48842 15.3861 6.79205C15.6897 7.09568 15.8415 7.47192 15.8415 7.92076V10.2178L26.2177 14.8118C26.9042 15.1287 27.4586 15.6105 27.8811 16.2574C28.3035 16.9042 28.5147 17.6105 28.5147 18.3762C28.5147 19.4323 28.1451 20.33 27.4058 21.0692C26.6666 21.8085 25.7689 22.1781 24.7128 22.1781H22.1781V31.683H6.33661ZM3.80197 19.0098H6.33661V17.4257H22.1781V19.0098H24.7128C24.8976 19.0098 25.0494 18.9438 25.1682 18.8118C25.287 18.6798 25.3464 18.5082 25.3464 18.297C25.3464 18.1649 25.3134 18.0527 25.2474 17.9603C25.1814 17.8679 25.0824 17.7953 24.9504 17.7425L14.2574 12.99L3.56434 17.7425C3.43233 17.7953 3.33332 17.8679 3.26731 17.9603C3.20131 18.0527 3.1683 18.1649 3.1683 18.297C3.1683 18.5082 3.22771 18.6798 3.34652 18.8118C3.46533 18.9438 3.61715 19.0098 3.80197 19.0098ZM9.50491 28.5147H19.0098V20.594H9.50491V28.5147Z" fill="#655546"/>
          </svg>
        </div>
        <div className="w-full sm:w-60 flex flex-col items-center gap-2 px-4">
          <h6 className="text-xl sm:text-2xl font-bold cormorant text-primary">Comfortable</h6>
          <p className="playfair text-primary text-center text-sm sm:text-base">Experience all-day comfort with materials that adapt to your lifestyle.</p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center gap-2"
        variants={itemVariants}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
          <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.1683 31.683C2.29702 31.683 1.55115 31.3728 0.93069 30.7524C0.31023 30.1319 0 29.386 0 28.5147V3.1683C0 2.29702 0.31023 1.55115 0.93069 0.93069C1.55115 0.31023 2.29702 0 3.1683 0H22.1781C23.0494 0 23.7953 0.31023 24.4157 0.93069C25.0362 1.55115 25.3464 2.29702 25.3464 3.1683V28.5147C25.3464 29.386 25.0362 30.1319 24.4157 30.7524C23.7953 31.3728 23.0494 31.683 22.1781 31.683H3.1683ZM3.1683 28.5147H22.1781V3.1683H19.0098V14.2574L15.0494 11.8811L11.0891 14.2574V3.1683H3.1683V28.5147Z" fill="#655546"/>
          </svg>
        </div>
        <div className="w-full sm:w-60 flex flex-col items-center gap-2 px-4">
          <h6 className="text-xl sm:text-2xl font-bold cormorant text-primary">Sustainable</h6>
          <p className="playfair text-primary text-center text-sm sm:text-base">Designed with sustainability in mind — better for you, better for the earth.</p>
        </div>
      </motion.div>
    </motion.div>
   </div>
   </>
    )
}