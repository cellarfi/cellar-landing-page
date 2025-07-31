import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Link } from "wouter";
import appScreenshot from "@assets/Screenshot_1753983467_1753983497597.png";

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-cellar-cyan opacity-10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-cellar-cyan-light opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of
              <span className="gradient-text block">Solana Wallets</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              No seed phrases. No lost funds. Just secure, social-powered crypto experiences powered by email authentication and cutting-edge Web3 insights.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/download">
                <motion.div 
                  className="px-8 py-4 bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light text-white rounded-xl text-lg font-semibold hover-lift animate-glow inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2 inline" />
                  Download Now
                </motion.div>
              </Link>
              <motion.button 
                className="px-8 py-4 glass-morphism text-white rounded-xl text-lg font-semibold hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2 inline" />
                Watch Demo
              </motion.button>
            </motion.div>
            
            {/* App Screenshot */}
            <motion.div
              className="max-w-sm mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative">
                <img 
                  src={appScreenshot} 
                  alt="Cellar Solana Wallet App Interface"
                  className="rounded-3xl shadow-2xl border border-gray-600 mx-auto hover-lift"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-cellar-cyan/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
