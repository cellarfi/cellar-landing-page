import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Download, Smartphone, Shield, Zap, Users, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import PhoneMockup from "@/components/phone-mockup";

export default function DownloadPage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download Starting Soon!",
      description: "Cellar for Android will be available soon. We'll notify you when it's ready.",
    });
  };

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "You're on the list!",
      description: "We'll email you as soon as Cellar for Android is available.",
    });
    setEmail("");
  };

  const features = [
    {
      icon: Shield,
      title: "No Seed Phrases",
      description: "Secure email-based authentication"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for Solana's speed"
    },
    {
      icon: Users,
      title: "Social-Fi Integration",
      description: "Get trending token insights"
    }
  ];

  const requirements = [
    "Android 8.0 (API level 26) or higher",
    "2GB RAM minimum, 4GB recommended",
    "100MB free storage space",
    "Internet connection required"
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "DeFi Trader",
      comment: "Finally, a wallet that doesn't make me worry about losing my seed phrase!",
      rating: 5
    },
    {
      name: "Sarah Kumar",
      role: "Crypto Investor", 
      comment: "The social features help me discover tokens before they moon.",
      rating: 5
    },
    {
      name: "Miguel Santos",
      role: "NFT Collector",
      comment: "Smooth, fast, and secure. Everything I need in a Solana wallet.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-cellar-navy text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center text-cellar-cyan hover:text-cellar-cyan-light transition-colors duration-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Download <span className="gradient-text">Cellar</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get the most advanced Solana wallet for Android. Secure, social, and seed-phrase free.
            </p>
            
            <div className="space-y-4 mb-8">
              <motion.button 
                onClick={handleDownload}
                className="w-full sm:w-auto bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light text-white px-8 py-4 rounded-xl text-lg font-semibold hover-lift animate-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-6 h-6 mr-3 inline" />
                Download for Android
              </motion.button>
              <p className="text-sm text-gray-400">
                Coming soon to Google Play Store
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Open Source</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-cellar-navy-light to-cellar-navy">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Cellar for Android?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-morphism rounded-2xl p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-cellar-cyan to-cellar-cyan-light rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                System Requirements
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Cellar is optimized to run smoothly on most modern Android devices.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-cellar-cyan flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-morphism rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <Smartphone className="w-16 h-16 text-cellar-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Android Optimized</h3>
                <p className="text-gray-300">
                  Built specifically for Android with Material Design principles and smooth performance.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">App Size:</span>
                  <span className="text-white font-medium">~25MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Last Updated:</span>
                  <span className="text-white font-medium">Coming Soon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Version:</span>
                  <span className="text-white font-medium">1.0.0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-cellar-navy to-cellar-navy-light">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Beta Users Say
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-morphism rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be the First to Know
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get notified as soon as Cellar for Android is available for download.
            </p>
            
            <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-cellar-navy-light border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cellar-cyan transition-colors duration-300"
                required
              />
              <motion.button 
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light text-white rounded-xl font-semibold hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </form>
            
            <p className="text-sm text-gray-400 mt-4">
              We'll only email you when the app is ready. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}