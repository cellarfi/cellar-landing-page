import { motion, useInView } from 'framer-motion'
import { Download, Plus, Shield, Zap } from 'lucide-react'
import { useRef } from 'react'
// import homeScreenImage from "@assets/image_1753983161645.png";

export default function NativeAppSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id='native-app'
      className='py-20 bg-gradient-to-r from-cellar-navy to-cellar-navy-light'
      ref={ref}
    >
      <div className='container mx-auto px-6'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Native <span className='gradient-text'>App Experience</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Add Cellar to your home screen for instant access. Works like a
            native app without app store downloads.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-2xl font-bold mb-6'>
              Add to Home Screen in 4 Steps
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0'>
                  1
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Open in Browser</h4>
                  <p className='text-gray-400'>Open any dapp in Cellar</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0'>
                  2
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Tap Share Button</h4>
                  <p className='text-gray-400'>
                    Tap the three dots in the top right corner of the dapp
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0'>
                  3
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Add to Home Screen</h4>
                  <p className='text-gray-400'>
                    Select "Add to Home Screen" option
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0'>
                  4
                </div>
                <div>
                  <h4 className='font-semibold mb-2'>Launch Like Native App</h4>
                  <p className='text-gray-400'>
                    Tap the dapp icon on your home screen anytime
                  </p>
                </div>
              </div>
            </div>

            {/* <div className='mt-8 p-6 glass-morphism rounded-xl'>
              <div className='flex items-center space-x-3 mb-3'>
                <Home className='w-5 h-5 text-cellar-cyan' />
                <span className='font-semibold text-cellar-cyan'>Pro Tip</span>
              </div>
              <p className='text-sm text-gray-300'>
                The web app works offline for basic wallet functions and syncs
                when you're back online. Perfect for checking balances on the
                go!
              </p>
            </div> */}
          </motion.div>

          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='relative max-w-sm mx-auto'>
              <img
                src={'/shortcuts.png'}
                alt='Mobile home screen with dapp shortcuts'
                className='rounded-3xl shadow-2xl border border-gray-600'
              />
              <div className='absolute -bottom-4 -right-4 bg-cellar-cyan rounded-full p-3'>
                <Plus className='w-6 h-6 text-white' />
              </div>
            </div>

            {/* <div className='mt-6 text-center'>
              <p className='text-sm text-gray-400'>
                Cellar icon alongside your favorite apps
              </p>
            </div> */}
          </motion.div>
        </div>

        <motion.div
          className='max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className='glass-morphism rounded-xl p-6 text-center'>
            <Zap className='w-8 h-8 text-cellar-cyan mx-auto mb-3' />
            <h4 className='font-semibold mb-2'>Instant Launch</h4>
            <p className='text-sm text-gray-400'>
              Opens directly without browser navigation
            </p>
          </div>

          <div className='glass-morphism rounded-xl p-6 text-center'>
            <Shield className='w-8 h-8 text-cellar-cyan mx-auto mb-3' />
            <h4 className='font-semibold mb-2'>Secure Access</h4>
            <p className='text-sm text-gray-400'>
              Same security as native apps with PWA technology
            </p>
          </div>

          <div className='glass-morphism rounded-xl p-6 text-center'>
            <Download className='w-8 h-8 text-cellar-cyan mx-auto mb-3' />
            <h4 className='font-semibold mb-2'>No App Store</h4>
            <p className='text-sm text-gray-400'>
              Works without Play Store installation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
