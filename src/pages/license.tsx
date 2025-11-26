import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'wouter'

export default function License() {
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

          <h1 className='text-4xl font-bold mb-8 gradient-text'>MIT License</h1>

          <div className='bg-cellar-navy-light rounded-2xl p-8 mb-8'>
            <p className='text-gray-300 mb-6'>
              <strong>Copyright © 2025 Cellar</strong>
            </p>
            <p className='text-gray-300'>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
          </div>

          <motion.div
            className='glass-morphism rounded-2xl p-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
              Conditions
            </h2>
            <p className='text-gray-300 mb-4'>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
          </motion.div>

          <motion.div
            className='glass-morphism rounded-2xl p-8 mt-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
              Disclaimer
            </h2>
            <p className='text-gray-300'>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </motion.div>

          <motion.div
            className='glass-morphism rounded-2xl p-8 mt-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
              What This Means
            </h2>
            <p className='text-gray-300 mb-4'>
              The MIT License is a permissive free software license. It allows
              you to:
            </p>
            <ul className='space-y-3 text-gray-300 list-disc list-inside mb-4'>
              <li>Use the software commercially</li>
              <li>Modify the software</li>
              <li>Distribute the software</li>
              <li>Sublicense the software</li>
              <li>Use the software privately</li>
            </ul>
            <p className='text-gray-300'>
              The only requirement is that you include the original copyright
              notice and license text in any copies or substantial portions of
              the software.
            </p>
          </motion.div>

          <motion.div
            className='glass-morphism rounded-2xl p-8 mt-8 hidden'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className='text-2xl font-bold mb-4 text-cellar-cyan'>
              Contact
            </h2>
            <p className='text-gray-300 mb-4'>
              For questions about this license or licensing terms, please
              contact us:
            </p>
            <div className='space-y-2 text-gray-300'>
              <p>
                <strong>Email:</strong> legal@cellarfi.com
              </p>
              <p>
                <strong>Support:</strong> support@cellarfi.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
