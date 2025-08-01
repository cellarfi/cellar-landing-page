import { SiDiscord, SiGithub, SiTelegram, SiX } from 'react-icons/si'
import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className='bg-cellar-navy-light py-12 border-t border-gray-700'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <img src='/cellar.svg' alt='Cellar' className='w-5 h-5' />
              <span className='text-xl font-bold gradient-text'>ellar</span>
            </div>
            <p className='text-gray-400 mb-4'>
              The future of secure, social-powered Solana wallets.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-cellar-cyan transition-colors duration-300'
              >
                <SiX className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cellar-cyan transition-colors duration-300'
              >
                <SiDiscord className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cellar-cyan transition-colors duration-300'
              >
                <SiTelegram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-cellar-cyan transition-colors duration-300'
              >
                <SiGithub className='w-5 h-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('features')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('download')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Download
                </button>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Bug Report
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-8 mt-8 text-center'>
          <p className='text-gray-400'>
            © 2024 Cellar. All rights reserved. Built for the Solana ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}
