import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Zap, TrendingUp, Smartphone, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "No Seed Phrases",
    description: "Never worry about losing access to your funds. Our email-based authentication powered by Privy ensures your wallet is always recoverable."
  },
  {
    icon: Users,
    title: "Social-Fi Integration",
    description: "Get the latest trends, token calls, and Web3 insights directly in your wallet. No more endless scrolling on social media."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built specifically for Solana's high-speed blockchain. Execute trades and transfers in milliseconds."
  },
  {
    icon: TrendingUp,
    title: "Real-time Insights",
    description: "Access comprehensive market data, portfolio analytics, and trending tokens all in one place."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for mobile users who want to manage their crypto on the go with an intuitive interface."
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your assets are protected with industry-leading security protocols and multi-layer encryption."
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Cellar</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of crypto wallets with revolutionary security and social features.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-morphism rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-cellar-cyan to-cellar-cyan-light rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
