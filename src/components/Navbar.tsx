import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="border-b-2 border-primary/40 fixed top-0 left-0 right-0 px-4 sm:px-8 md:px-16 lg:px-25 h-16 md:h-18 flex items-center bg-white z-50 justify-between shadow-sm ">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl cormorant text-primary font-bold">Luneera.id</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center playfair text-primary text-lg lg:text-xl">
          <a href="#" className="hover:text-primary/70 transition-colors duration-200">Home</a>
          <a href="https://shopee.co.id/" className="hover:text-primary/70 transition-colors duration-200">Collection</a>
          <a href="#" className="hover:text-primary/70 transition-colors duration-200">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-0.5 bg-primary block mb-1.5"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-7 h-0.5 bg-primary block mb-1.5"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-0.5 bg-primary block"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-40 shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 playfair text-primary text-2xl">
          <motion.a
            href="#"
            custom={0}
            variants={linkVariants}
            onClick={closeMenu}
            className="hover:text-primary/70 transition-colors duration-200"
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            custom={1}
            variants={linkVariants}
            onClick={closeMenu}
            className="hover:text-primary/70 transition-colors duration-200"
          >
            Collection
          </motion.a>
          <motion.a
            href="https://wa.me/6281234329585"
            custom={2}
            variants={linkVariants}
            onClick={closeMenu}
            className="hover:text-primary/70 transition-colors duration-200"
          >
            Contact
          </motion.a>
        </div>
      </motion.div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
          className="md:hidden fixed inset-0 bg-black/30 z-30"
        />
      )}
    </>
  );
}