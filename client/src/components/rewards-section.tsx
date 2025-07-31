import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, ArrowUpRight, Users, MessageCircle, Heart, RefreshCw, Coins } from "lucide-react";
import rewardsImage from "@assets/image_1753983801801.png";

const activities = [
  {
    icon: RefreshCw,
    title: "Token Swaps",
    description: "Earn points for every swap transaction",
    points: "5-20 points"
  },
  {
    icon: MessageCircle,
    title: "Social Posts",
    description: "Share insights and token calls",
    points: "10 points"
  },
  {
    icon: Heart,
    title: "Likes & Comments",
    description: "Engage with community content",
    points: "2-5 points"
  },
  {
    icon: Users,
    title: "Referrals",
    description: "Invite friends to join Cellar",
    points: "50 points"
  }
];

export default function RewardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rewards" className="py-20 bg-gradient-to-r from-cellar-navy-light to-cellar-navy relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-green-400 opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide">Cellar Rewards</h3>
                <div className="flex items-center space-x-2">
                  <img src={rewardsImage} alt="Rewards points" className="h-6" />
                  <span className="text-sm text-gray-400">Your current balance</span>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Earn <span className="gradient-text">Rewards</span> for Everything You Do
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Every activity on Cellar earns you reward points. From swapping tokens to engaging with the community, 
              your participation is rewarded and can be redeemed for tokens through our rewards program.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  className="glass-morphism rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-400 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{activity.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{activity.description}</p>
                      <div className="text-xs text-green-400 font-medium">{activity.points}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="glass-morphism rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Coins className="w-6 h-6 text-cellar-cyan" />
                  <div>
                    <h4 className="font-semibold">Redeem for Tokens</h4>
                    <p className="text-sm text-gray-400">Convert points to CELLAR tokens</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cellar-cyan" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-morphism rounded-3xl p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Start Earning Today</h3>
                <p className="text-gray-400">Join thousands earning rewards on Cellar</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-cellar-navy rounded-lg">
                  <span className="text-sm">Daily Active Users</span>
                  <span className="text-green-400 font-semibold">+10 pts</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-cellar-navy rounded-lg">
                  <span className="text-sm">Weekly Trading Volume</span>
                  <span className="text-green-400 font-semibold">+25 pts</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-cellar-navy rounded-lg">
                  <span className="text-sm">Community Contribution</span>
                  <span className="text-green-400 font-semibold">+15 pts</span>
                </div>
              </div>

              <motion.div 
                className="mt-6 p-4 bg-gradient-to-r from-green-400 to-green-600 rounded-xl text-white"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm opacity-90">Total Earned This Week</div>
                <div className="text-2xl font-bold">50 Points</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}