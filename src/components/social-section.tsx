import { motion, useInView } from 'framer-motion'
import { Flame, MessageCircle, Zap } from 'lucide-react'
import { useRef } from 'react'

const trendingTokens = [
  {
    symbol: 'PUMP',
    name: 'Community-driven meme token showing strong momentum',
    change: '+24.5%',
    positive: true,
    color: 'bg-green-500',
  },
  {
    symbol: 'ANI',
    name: 'Gaming token with upcoming NFT drop announcement',
    change: '+12.8%',
    positive: true,
    color: 'bg-purple-500',
  },
  {
    symbol: 'WOLF',
    name: 'DeFi protocol experiencing temporary correction',
    change: '-3.2%',
    positive: false,
    color: 'bg-blue-500',
  },
]

export default function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      className='py-20 bg-gradient-to-r from-cellar-navy to-cellar-navy-light relative overflow-hidden'
      ref={ref}
    >
      <div className='absolute inset-0'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-cellar-cyan opacity-5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='gradient-text'>Social-Fi</span> Made Simple
            </h2>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
              Stay ahead of the market with real-time social insights,
              community-driven token calls, and trending discussions - all
              integrated seamlessly into your wallet experience.
            </p>

            <div className='space-y-6'>
              <motion.div
                className='flex items-start space-x-4'
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className='w-8 h-8 bg-cellar-cyan rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <Flame className='w-4 h-4 text-white' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    Trending Tokens
                  </h3>
                  <p className='text-gray-400'>
                    Discover hot tokens before they explode with
                    community-driven insights.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-start space-x-4'
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className='w-8 h-8 bg-cellar-cyan rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <MessageCircle className='w-4 h-4 text-white' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    Community Calls
                  </h3>
                  <p className='text-gray-400'>
                    Share and receive token calls directly from trusted
                    community members.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-start space-x-4'
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className='w-8 h-8 bg-cellar-cyan rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <Zap className='w-4 h-4 text-white' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    Instant Updates
                  </h3>
                  <p className='text-gray-400'>
                    Get real-time updates without endless scrolling on social
                    platforms.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <img
            src='/trending.jpeg'
            alt='Social Section'
            className='w-full h-full object-cover'
          />
          <motion.div
            className='relative hidden'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='glass-morphism rounded-3xl p-8'>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3 mb-6'>
                  <div className='w-10 h-10 bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light rounded-full'></div>
                  <div>
                    <div className='font-semibold'>Trending Now</div>
                    <div className='text-sm text-gray-400'>
                      Latest community insights
                    </div>
                  </div>
                </div>

                <div className='space-y-3'>
                  {trendingTokens.map((token, index) => (
                    <motion.div
                      key={token.symbol}
                      className='bg-cellar-navy-light rounded-xl p-4'
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center space-x-2'>
                          <div
                            className={`w-6 h-6 ${token.color} rounded-full`}
                          ></div>
                          <span className='font-medium'>{token.symbol}</span>
                        </div>
                        <span
                          className={`text-sm ${
                            token.positive ? 'text-green-400' : 'text-red-400'
                          }`}
                        >
                          {token.change}
                        </span>
                      </div>
                      <p className='text-sm text-gray-300'>{token.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
