import { motion } from 'framer-motion'
import { Download, Play } from 'lucide-react'
import { Link } from 'wouter'

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-20 left-10 w-64 h-64 bg-cellar-cyan opacity-10 rounded-full blur-3xl'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute bottom-20 right-10 w-80 h-80 bg-cellar-cyan-light opacity-5 rounded-full blur-3xl'
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      <div className='container mx-auto px-6 text-center relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              The Future of
              <span className='gradient-text block'>Solana Wallets</span>
            </h1>

            <motion.p
              className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              No seed phrases. No lost funds. Just secure, social-powered crypto
              experiences powered by email authentication and cutting-edge Web3
              insights.
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href='/download'>
                <motion.div
                  className='px-8 py-4 bg-gradient-to-r from-cellar-cyan/80 to-cellar-cyan-light/80 text-white rounded-xl text-lg font-semibold hover-lift inline-block border border-cellar-cyan/30'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className='w-5 h-5 mr-2 inline' />
                  Download Now
                </motion.div>
              </Link>
              <motion.button
                className='px-8 py-4 glass-morphism text-white rounded-xl text-lg font-semibold hover-lift'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className='w-5 h-5 mr-2 inline' />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Premium App Showcase */}
            <motion.div
              className='relative max-w-6xl mx-auto mt-16'
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              {/* Background Elements */}
              <div className='absolute inset-0 bg-gradient-to-r from-cellar-cyan/5 via-transparent to-cellar-cyan/5 rounded-3xl blur-3xl'></div>

              {/* Floating Elements */}
              <div className='absolute -top-20 -left-20 w-40 h-40 bg-cellar-cyan/10 rounded-full blur-2xl animate-pulse'></div>
              <div className='absolute -bottom-20 -right-20 w-60 h-60 bg-cellar-cyan-light/10 rounded-full blur-2xl animate-pulse delay-1000'></div>

              {/* Main Content Container */}
              <div className='relative flex flex-col lg:flex-row items-center justify-between gap-12 px-8'>
                {/* Left Side - Features Preview */}
                <motion.div
                  className='flex flex-col space-y-6 lg:w-1/2'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className='glass-morphism rounded-2xl p-6 border border-cellar-cyan/20'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                      <span className='text-sm text-cellar-cyan font-medium'>
                        LIVE PORTFOLIO
                      </span>
                    </div>
                    <div className='text-2xl font-bold text-white'>$61.52</div>
                    <div className='text-sm text-gray-400'>+12.5% today</div>
                  </div>

                  <div className='glass-morphism rounded-2xl p-6 border border-cellar-cyan/20'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <div className='w-8 h-8 bg-cellar-cyan/20 rounded-lg flex items-center justify-center'>
                        <span className='text-cellar-cyan text-sm'>🍃</span>
                      </div>
                      <span className='text-sm text-cellar-cyan font-medium'>
                        REWARDS EARNED
                      </span>
                    </div>
                    <div className='text-xl font-bold text-white'>
                      19.00 Points
                    </div>
                    <div className='text-sm text-gray-400'>Ready to redeem</div>
                  </div>
                </motion.div>

                {/* Center - Premium Phone Mockup */}
                <img
                  src={'/app.png'}
                  alt='Cellar Solana Wallet App Interface'
                  className='w-full h-auto lg:w-1/3 xl:w-[40%]'
                />
                <motion.div
                  className='relative lg:w-1/3 hidden'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  {/* Premium Frame Effect */}
                  <div className='relative'>
                    {/* Glow Ring */}
                    <div className='absolute -inset-4 bg-gradient-to-r from-cellar-cyan/20 via-cellar-cyan-light/20 to-cellar-cyan/20 rounded-[3rem] blur-xl animate-pulse'></div>

                    {/* Metallic Frame */}
                    <div className='relative bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-0.5 rounded-[2.5rem] shadow-2xl border border-gray-600/50'>
                      {/* Screen Bezel */}
                      <div className='bg-black rounded-[2rem] p-0.5'>
                        {/* Actual Screenshot */}
                        <div className='relative overflow-hidden rounded-[1.5rem]'>
                          <img
                            src={'/app.png'}
                            alt='Cellar Solana Wallet App Interface'
                            className='w-full h-auto'
                          />
                          {/* Screen Reflection Effect */}
                          <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[1.5rem]'></div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full'></div>
                    </div>

                    {/* Floating UI Elements */}
                    <motion.div
                      className='absolute -top-8 -right-8 glass-morphism rounded-xl p-3 border border-cellar-cyan/30'
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className='text-xs text-cellar-cyan font-semibold'>
                        SECURE
                      </span>
                    </motion.div>

                    <motion.div
                      className='absolute -bottom-6 -left-6 glass-morphism rounded-xl p-3 border border-cellar-cyan/30'
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <span className='text-xs text-cellar-cyan font-semibold'>
                        NO SEEDS
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Social Features */}
                <motion.div
                  className='flex flex-col space-y-6 lg:w-1/2'
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className='glass-morphism rounded-2xl p-6 border border-cellar-cyan/20'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <div className='w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center'>
                        <span className='text-orange-400 text-sm'>🔥</span>
                      </div>
                      <span className='text-sm text-cellar-cyan font-medium'>
                        TRENDING NOW
                      </span>
                    </div>
                    <div className='text-lg font-bold text-white'>BONK</div>
                    <div className='text-sm text-green-400'>+24.7% today</div>
                  </div>

                  <div className='glass-morphism rounded-2xl p-6 border border-cellar-cyan/20'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <div className='w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center'>
                        <span className='text-purple-400 text-sm'>👥</span>
                      </div>
                      <span className='text-sm text-cellar-cyan font-medium'>
                        SOCIAL FEED
                      </span>
                    </div>
                    <div className='text-sm text-white'>Share your wins</div>
                    <div className='text-sm text-gray-400'>
                      Connect with traders
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
