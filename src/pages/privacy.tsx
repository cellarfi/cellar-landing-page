import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'wouter'

export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        {
          label: 'Email Address',
          description:
            'Used for account creation and recovery through Privy authentication',
        },
        {
          label: 'Wallet Data',
          description:
            'Transaction history, token balances, and blockchain interactions',
        },
        {
          label: 'Usage Analytics',
          description: 'App performance metrics and feature usage statistics',
        },
        {
          label: 'Device Information',
          description: 'Operating system, device type, and app version',
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain wallet functionality',
        'Enable secure account recovery without seed phrases',
        'Deliver personalized social-fi content and insights',
        'Improve app performance and user experience',
        'Comply with legal and regulatory requirements',
      ],
    },
    {
      title: 'Data Security',
      description:
        'We implement industry-leading security measures to protect your information:',
      content: [
        'End-to-end encryption for all sensitive data',
        'Secure authentication through Privy infrastructure',
        'Regular security audits and vulnerability assessments',
        'Multi-layer protection against unauthorized access',
      ],
    },
    {
      title: 'Third-Party Services',
      description:
        'We use trusted third-party services to enhance our application:',
      content: [
        {
          label: 'Privy',
          description: 'Secure authentication and account recovery',
        },
        {
          label: 'Solana Network',
          description: 'Blockchain transactions and data',
        },
        {
          label: 'Analytics Providers',
          description: 'App performance and usage insights',
        },
      ],
    },
    {
      title: 'Your Rights',
      description: 'You have the right to:',
      content: [
        'Access your personal information',
        'Request correction of inaccurate data',
        'Delete your account and associated data',
        'Opt-out of non-essential communications',
        'Export your wallet data',
      ],
    },
  ]

  return (
    <div className='min-h-screen pt-20 bg-cellar-navy text-white'>
      <div className='container mx-auto px-6 py-12 max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href='/'
            className='inline-flex items-center text-cellar-cyan hover:text-cellar-cyan-light transition-colors duration-300 mb-8'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Home
          </Link>

          <h1 className='text-4xl font-bold mb-8 gradient-text'>
            Privacy Policy
          </h1>

          <div className='bg-cellar-navy-light rounded-2xl p-8 mb-8'>
            <p className='text-gray-300 mb-6'>
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p className='text-gray-300'>
              At Cellar, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, and protect your data when
              you use our wallet application.
            </p>
          </div>

          <div className='space-y-8'>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className='glass-morphism rounded-2xl p-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
                  {section.title}
                </h2>
                {section.description && (
                  <p className='text-gray-300 mb-4'>{section.description}</p>
                )}
                <ul className='space-y-3 text-gray-300'>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          <strong>{item.label}:</strong> {item.description}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              className='glass-morphism rounded-2xl p-8'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
                Contact Us
              </h2>
              <p className='text-gray-300'>
                If you have any questions about this Privacy Policy or your
                data, please contact us at:
              </p>
              <div className='mt-4 space-y-2 text-gray-300'>
                <p>
                  <strong>Email:</strong> privacy@cellarfi.com
                </p>
                <p>
                  <strong>Support:</strong> support@cellarfi.com
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
