import { motion } from "motion/react";


  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

export default function Material() {
    return(
        <section className="py-24 px-30">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                <img src="./item/item4.png" className="scale-130 hover:scale-140 object-cover transition-all duration-300" alt="" />
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <p className="text-sm tracking-[0.3em] mb-4" style={{ color: '#655546' }}>
                PREMIUM MATERIALS
              </p>
              <h2 className="mb-8" style={{ 
                fontFamily: "'Cormorant', serif",
                fontSize: '3rem',
                color: '#655546'
              }}>
                Fabrics that Feel Divine
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Premium Silk Blend',
                    description: 'Luxuriously soft with a gentle sheen, perfect for special occasions'
                  },
                  {
                    title: 'Organic Cotton',
                    description: 'Breathable and lightweight, ideal for everyday comfort'
                  },
                  {
                    title: 'Modal Fabric',
                    description: 'Smooth and drapeable with excellent moisture-wicking properties'
                  },
                  {
                    title: 'Chiffon',
                    description: 'Elegant and flowing, adds sophisticated movement to your style'
                  }
                ].map((material, index) => (
                  <div key={index} className="border-l-2 border-[#D2C6B6] pl-6">
                    <h4 className="cormorant text-2xl text-primary mb-1">
                      {material.title}
                    </h4>
                    <p style={{ color: '#655546', opacity: 0.7 }}>
                      {material.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}