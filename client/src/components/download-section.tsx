import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Smartphone, Lock, Zap } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const handleDownload = (platform: string) => {
    toast({
      title: "Coming Soon!",
      description: `Cellar for ${platform} will be available soon. Join our newsletter for updates.`,
    });
  };

  return (
    <section id="download" className="py-20" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already made the switch to secure, social-powered crypto experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/download">
            <motion.div 
              className="bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light rounded-2xl p-1 hover-lift cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-cellar-navy rounded-2xl px-8 py-4 flex items-center space-x-4">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Download for</div>
                  <div className="text-lg font-semibold">iOS</div>
                </div>
              </div>
            </motion.div>
          </Link>
          
          <Link href="/download">
            <motion.div 
              className="bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light rounded-2xl p-1 hover-lift cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-cellar-navy rounded-2xl px-8 py-4 flex items-center space-x-4">
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Download for</div>
                  <div className="text-lg font-semibold">Android</div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Mobile First</h3>
            <p className="text-gray-400">Optimized for iOS and Android devices</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold mb-2">100% Secure</h3>
            <p className="text-gray-400">Bank-level security for your assets</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Built for Solana's high-speed network</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
