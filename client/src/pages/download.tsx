import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Download, Smartphone, Shield, Zap, Users, CheckCircle, Star, FileDown, Calendar, Info, Home, Plus, Share } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import PhoneMockup from "@/components/phone-mockup";
import homeScreenImage from "@assets/image_1753983161645.png";

export default function DownloadPage() {
  const [email, setEmail] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("latest");
  const { toast } = useToast();

  const versions = [
    {
      id: "latest",
      version: "1.2.0",
      date: "2024-01-15",
      size: "28.5 MB",
      description: "Latest stable release with enhanced security and social features",
      changes: [
        "Improved social-fi token discovery",
        "Enhanced wallet security protocols", 
        "Bug fixes and performance improvements",
        "New trending tokens widget"
      ],
      downloadUrl: "/downloads/cellar-1.2.0.apk",
      isRecommended: true
    },
    {
      id: "beta",
      version: "1.3.0-beta",
      date: "2024-01-20",
      size: "29.1 MB", 
      description: "Beta release with experimental features",
      changes: [
        "New DeFi integration features",
        "Advanced portfolio analytics",
        "Experimental NFT gallery",
        "Performance optimizations"
      ],
      downloadUrl: "/downloads/cellar-1.3.0-beta.apk",
      isRecommended: false
    },
    {
      id: "stable",
      version: "1.1.5",
      date: "2024-01-10",
      size: "27.8 MB",
      description: "Previous stable release",
      changes: [
        "Core wallet functionality",
        "Basic social features",
        "Email authentication",
        "Initial Solana integration"
      ],
      downloadUrl: "/downloads/cellar-1.1.5.apk",
      isRecommended: false
    }
  ];

  const handleDownload = (versionId: string) => {
    const version = versions.find(v => v.id === versionId);
    if (version) {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = version.downloadUrl;
      link.download = `cellar-${version.version}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started!",
        description: `Downloading Cellar ${version.version} (${version.size})`,
      });
    }
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
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Kumar",
      role: "Crypto Investor", 
      comment: "The social features help me discover tokens before they moon.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Miguel Santos",
      role: "NFT Collector",
      comment: "Smooth, fast, and secure. Everything I need in a Solana wallet.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
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
                onClick={() => handleDownload(selectedVersion)}
                className="w-full sm:w-auto bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light text-white px-8 py-4 rounded-xl text-lg font-semibold hover-lift animate-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-6 h-6 mr-3 inline" />
                Download APK ({versions.find(v => v.id === selectedVersion)?.version})
              </motion.button>
              <p className="text-sm text-gray-400">
                Direct APK download • Not on Play Store yet
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

      {/* Version Selection Section */}
      <section className="py-20 bg-gradient-to-r from-cellar-navy-light to-cellar-navy">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Choose Your Version
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {versions.map((version, index) => (
              <motion.div
                key={version.id}
                className={`glass-morphism rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedVersion === version.id 
                    ? 'ring-2 ring-cellar-cyan bg-cellar-cyan bg-opacity-5' 
                    : 'hover:bg-white hover:bg-opacity-5'
                } ${version.isRecommended ? 'relative' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedVersion(version.id)}
              >
                {version.isRecommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedVersion === version.id 
                        ? 'bg-cellar-cyan border-cellar-cyan' 
                        : 'border-gray-400'
                    }`}></div>
                    <h3 className="text-xl font-bold">v{version.version}</h3>
                  </div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {version.date}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{version.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm font-semibold text-cellar-cyan">What's New:</div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {version.changes.slice(0, 3).map((change, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-cellar-cyan mt-0.5 mr-2 flex-shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                  <div className="text-sm text-gray-400">Size: {version.size}</div>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(version.id);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-cellar-cyan to-cellar-cyan-light text-white rounded-lg text-sm font-semibold hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileDown className="w-4 h-4 mr-2 inline" />
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto mt-12 glass-morphism rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-cellar-cyan mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Installation Instructions</h3>
                <ol className="text-gray-300 space-y-2 text-sm">
                  <li>1. Download the APK file to your Android device</li>
                  <li>2. Go to Settings → Security → Enable "Unknown Sources" or "Install from Unknown Sources"</li>
                  <li>3. Open the downloaded APK file and follow the installation prompts</li>
                  <li>4. Launch Cellar and sign up with your email address</li>
                </ol>
                <p className="text-xs text-gray-400 mt-4">
                  Note: You may need to temporarily disable Google Play Protect during installation.
                </p>
              </div>
            </div>
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
              
              <div className="mt-6 p-4 bg-cellar-navy-light rounded-xl">
                <h4 className="text-sm font-semibold text-cellar-cyan mb-2">APK Installation Requirements:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Enable "Unknown Sources" in device settings</li>
                  <li>• Allow installation from external sources</li>
                  <li>• Temporarily disable Google Play Protect if needed</li>
                </ul>
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

      {/* DApp Shortcut Feature */}
      <section className="py-20 bg-gradient-to-r from-cellar-navy to-cellar-navy-light">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Native App Experience
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Add to Home Screen for Instant Access</h3>
              <p className="text-lg text-gray-300 mb-8">
                Create a native app-like experience by adding Cellar directly to your home screen. 
                Access your wallet instantly without opening a browser.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Open in Browser</h4>
                    <p className="text-gray-400">Visit cellarfi.com on your mobile browser</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Tap Share Button</h4>
                    <p className="text-gray-400">Find the share/menu button in your browser</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Add to Home Screen</h4>
                    <p className="text-gray-400">Select "Add to Home Screen" option</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cellar-cyan rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Launch Like Native App</h4>
                    <p className="text-gray-400">Tap the Cellar icon on your home screen anytime</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 glass-morphism rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Home className="w-5 h-5 text-cellar-cyan" />
                  <span className="font-semibold text-cellar-cyan">Pro Tip</span>
                </div>
                <p className="text-sm text-gray-300">
                  The web app works offline for basic wallet functions and syncs when you're back online.
                  Perfect for checking balances on the go!
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-sm mx-auto">
                <img 
                  src={homeScreenImage} 
                  alt="Mobile home screen with dapp shortcuts"
                  className="rounded-3xl shadow-2xl border border-gray-600"
                />
                <div className="absolute -bottom-4 -right-4 bg-cellar-cyan rounded-full p-3">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Cellar icon alongside your favorite apps
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-cellar-cyan mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Instant Launch</h4>
              <p className="text-sm text-gray-400">Opens directly without browser navigation</p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-cellar-cyan mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Secure Access</h4>
              <p className="text-sm text-gray-400">Same security as native apps with PWA technology</p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6 text-center">
              <Download className="w-8 h-8 text-cellar-cyan mx-auto mb-3" />
              <h4 className="font-semibold mb-2">No App Store</h4>
              <p className="text-sm text-gray-400">Works without Play Store installation</p>
            </div>
          </motion.div>
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
                <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cellar-cyan"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
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