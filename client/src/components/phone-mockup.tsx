import { motion } from "framer-motion";
import { Wifi, Battery, Signal, Search, Maximize2, ArrowUp, ArrowDown, RefreshCw, TrendingUp } from "lucide-react";

export default function PhoneMockup() {
  return (
    <motion.div 
      className="relative max-w-sm mx-auto"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="bg-cellar-navy-light rounded-3xl p-2 shadow-2xl">
        <div className="bg-cellar-navy rounded-2xl p-4 space-y-4">
          {/* Status bar */}
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>2:07</span>
            <div className="flex space-x-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3 h-3" />
            </div>
          </div>
          
          {/* User header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div>
                <div className="text-xs text-gray-400">@mira</div>
                <div className="text-sm font-semibold">Mira</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Search className="w-4 h-4 text-gray-400" />
              <Maximize2 className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* Portfolio card */}
          <motion.div 
            className="bg-gradient-to-br from-cellar-cyan to-cellar-navy-light rounded-xl p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xs text-gray-300 mb-1">Total Portfolio Value</div>
            <div className="text-2xl font-bold">$131.38</div>
            <div className="text-xs text-green-400">$2.17 (1.63%)</div>
            <div className="text-xs text-gray-400 mt-2">HplNc...1Z1q</div>
          </motion.div>
          
          {/* Quick Actions */}
          <div>
            <div className="text-sm font-semibold mb-3">Quick Actions</div>
            <div className="grid grid-cols-4 gap-3">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-cellar-navy-light rounded-xl flex items-center justify-center mb-2">
                  <ArrowUp className="w-4 h-4 text-cellar-cyan" />
                </div>
                <div className="text-xs">Send</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-cellar-navy-light rounded-xl flex items-center justify-center mb-2">
                  <ArrowDown className="w-4 h-4 text-cellar-cyan" />
                </div>
                <div className="text-xs">Receive</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-cellar-navy-light rounded-xl flex items-center justify-center mb-2">
                  <RefreshCw className="w-4 h-4 text-cellar-cyan" />
                </div>
                <div className="text-xs">Swap</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-cellar-navy-light rounded-xl flex items-center justify-center mb-2">
                  <TrendingUp className="w-4 h-4 text-cellar-cyan" />
                </div>
                <div className="text-xs">Trade</div>
              </motion.div>
            </div>
          </div>
          
          {/* Tokens */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-semibold">Your Tokens</div>
              <div className="text-xs text-cellar-cyan">View All</div>
            </div>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center justify-between"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">$</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">USD Coin</div>
                    <div className="text-xs text-gray-400">100.54 USDC</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">$100.53</div>
                  <div className="text-xs text-green-400">+0.00%</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center justify-between"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">SOL</div>
                    <div className="text-xs text-gray-400">0.09 SOL</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">$16.27</div>
                  <div className="text-xs text-red-400">-3.36%</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
