import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'wouter'

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing or using Cellar, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
    },
    {
      title: 'Description of Service',
      description:
        'Cellar is a non-custodial cryptocurrency wallet application that provides:',
      list: [
        'Secure wallet functionality without seed phrases',
        'Email-based authentication through Privy',
        'Social-fi features and community insights',
        'Real-time market data and trends',
        'Token swapping and trading capabilities',
      ],
    },
    {
      title: 'User Responsibilities',
      description: 'As a user of Cellar, you agree to:',
      list: [
        'Provide accurate and complete information',
        'Maintain the security of your account credentials',
        'Comply with all applicable laws and regulations',
        'Use the service responsibly and ethically',
        'Not engage in fraudulent or malicious activities',
      ],
    },
    {
      title: 'Risks and Disclaimers',
      description:
        'Cryptocurrency and blockchain technology involve inherent risks:',
      list: [
        'Market volatility can result in significant losses',
        'Blockchain transactions are irreversible',
        'Regulatory changes may affect service availability',
        'Technical issues may temporarily disrupt services',
        'Third-party service dependencies may cause interruptions',
      ],
    },
    {
      title: 'Intellectual Property',
      content:
        'All content, features, and functionality of Cellar, including but not limited to text, graphics, logos, and software, are owned by Cellar and protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our express written permission.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'To the maximum extent permitted by law, Cellar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or investments, arising from your use of our services.',
    },
    {
      title: 'Termination',
      content:
        'We reserve the right to terminate or suspend your access to Cellar at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users or our services.',
    },
    {
      title: 'Changes to Terms',
      content:
        'We may update these Terms and Conditions from time to time. We will notify users of any material changes through the app or email. Your continued use of Cellar after changes are posted constitutes acceptance of the new terms.',
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
            Terms and Conditions
          </h1>

          <div className='bg-cellar-navy-light rounded-2xl p-8 mb-8'>
            <p className='text-gray-300 mb-6'>
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p className='text-gray-300'>
              Welcome to Cellar. These Terms and Conditions govern your use of
              our wallet application and services. By using Cellar, you agree to
              these terms.
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
                {section.content && (
                  <p className='text-gray-300'>{section.content}</p>
                )}
                {section.description && (
                  <p className='text-gray-300 mb-4'>{section.description}</p>
                )}
                {section.list && (
                  <ul className='space-y-3 text-gray-300'>
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div
              className='glass-morphism rounded-2xl p-8'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
                Contact Information
              </h2>
              <p className='text-gray-300'>
                For questions about these Terms and Conditions, please contact
                us:
              </p>
              <div className='mt-4 space-y-2 text-gray-300'>
                <p>
                  <strong>Email:</strong> legal@cellarfi.com
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
