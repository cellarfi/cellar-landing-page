import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'wouter'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [location] = useLocation()

  const isActive = (path: string) => location === path

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 glass-morphism'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            {/* <div className='w-8 h-8 bg-gradient-to-br from-cellar-cyan to-cellar-cyan-light rounded-lg flex items-center justify-center'> */}
            {/* </div> */}
            <img src='/cellar.svg' alt='Cellar' className='w-5 h-5' />
            <span className='text-xl font-bold gradient-text'>ellar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection('home')}
              className='text-white hover:text-cellar-cyan transition-colors duration-300'
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className='text-white hover:text-cellar-cyan transition-colors duration-300'
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('rewards')}
              className='text-white hover:text-cellar-cyan transition-colors duration-300'
            >
              Rewards
            </button>
            <Link
              href='/download'
              className='text-white hover:text-cellar-cyan transition-colors duration-300'
            >
              Download
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className='text-white hover:text-cellar-cyan transition-colors duration-300'
            >
              About
            </button>
          </div>

          {/* Desktop CTA */}
          <div className='flex items-center space-x-4'>
            <Link
              href='/download'
              className='hidden md:block px-6 py-2 bg-gradient-to-r from-cellar-cyan/80 to-cellar-cyan-light/80 text-white rounded-lg hover:shadow-lg transition-all duration-300 border border-cellar-cyan/30'
            >
              Get Started
            </Link>
            <button
              className='md:hidden text-cellar-cyan'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden bg-cellar-navy-light border-t border-gray-700 mt-4'
            >
              <div className='px-6 py-4 space-y-4'>
                <button
                  onClick={() => scrollToSection('home')}
                  className='block text-white hover:text-cellar-cyan transition-colors duration-300'
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className='block text-white hover:text-cellar-cyan transition-colors duration-300'
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('rewards')}
                  className='block text-white hover:text-cellar-cyan transition-colors duration-300'
                >
                  Rewards
                </button>
                <Link
                  href='/download'
                  className='block text-white hover:text-cellar-cyan transition-colors duration-300'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download
                </Link>
                <button
                  onClick={() => scrollToSection('about')}
                  className='block text-white hover:text-cellar-cyan transition-colors duration-300'
                >
                  About
                </button>
                <Link
                  href='/download'
                  className='w-full px-6 py-2 bg-gradient-to-r from-cellar-cyan/80 to-cellar-cyan-light/80 text-white rounded-lg block text-center border border-cellar-cyan/30'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
