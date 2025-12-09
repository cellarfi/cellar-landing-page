import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Shield } from 'lucide-react'
import { Link } from 'wouter'

export default function Support() {
  const supportOptions = [
    {
      icon: <Mail className='w-8 h-8 text-cellar-cyan' />,
      title: 'Email Support',
      description:
        'Get in touch with our support team for detailed assistance.',
      action: 'support@cellar.so',
      link: 'mailto:support@cellar.so',
    },
    // {
    //   icon: <MessageCircle className='w-8 h-8 text-cellar-cyan' />,
    //   title: 'Community',
    //   description: 'Join our community to ask questions and share feedback.',
    //   action: 'Join Discord',
    //   link: 'https://discord.gg/cellarfi', // Placeholder, assuming they might have one or I'll just leave it generic
    // },
    {
      icon: <Shield className='w-8 h-8 text-cellar-cyan' />,
      title: 'Privacy & Security',
      description: 'Learn how we protect your data and assets.',
      action: 'View Privacy Policy',
      link: '/privacy',
    },
  ]

  const faqs = [
    {
      question: 'How do I recover my account?',
      answer:
        'Cellar uses Privy for secure authentication. You can recover your account using the email or social login method you originally used to sign up.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use industry-leading encryption and security measures. Your private keys are never stored on our servers.',
    },
    {
      question: 'How do I report a bug?',
      answer:
        'Please email us at support@cellarfi.com with details about the issue, including your device model and app version.',
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
            Support Center
          </h1>

          <div className='bg-cellar-navy-light rounded-2xl p-8 mb-12'>
            <p className='text-xl text-gray-300'>
              Need help? We're here for you. Choose one of the options below or
              browse our frequently asked questions.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 mb-16'>
            {supportOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.link}
                className='glass-morphism rounded-2xl p-6 hover:bg-white/5 transition-colors duration-300'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className='mb-4'>{option.icon}</div>
                <h3 className='text-xl font-bold mb-2'>{option.title}</h3>
                <p className='text-gray-400 mb-4 text-sm'>
                  {option.description}
                </p>
                <span className='text-cellar-cyan font-semibold text-sm'>
                  {option.action} &rarr;
                </span>
              </motion.a>
            ))}
          </div>

          <div className='space-y-8'>
            <h2 className='text-3xl font-bold mb-8'>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className='glass-morphism rounded-2xl p-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <h3 className='text-xl font-bold mb-3 text-cellar-cyan'>
                  {faq.question}
                </h3>
                <p className='text-gray-300'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
