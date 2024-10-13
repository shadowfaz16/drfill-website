"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Shield, Zap } from 'lucide-react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-sans">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dr. Fill
          </motion.h1>
          <motion.p 
            className="text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your AI-powered form filling assistant
          </motion.p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section className="space-y-8">
            <h2 className="text-4xl font-semibold">What is Dr. Fill?</h2>
            <p className="text-xl leading-relaxed">
              Dr. Fill is a revolutionary Chrome extension that leverages the power of AI to help you fill out forms faster and more accurately than ever before. Using advanced RAG technology and OpenAI&apos;s language models, Dr. Fill taps into your personal knowledge base to provide context-aware suggestions for form fields.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Key Features:</h3>
              <ul className="space-y-4">
                {[
                  "AI-powered form filling",
                  "Personalized suggestions based on your knowledge base",
                  "Seamless integration with Chrome",
                  "Privacy-focused design"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-green-400" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-4xl font-semibold">Benefits of Dr. Fill</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Save Time", description: "Dramatically reduce the time spent on filling out repetitive forms.", icon: Clock },
                { title: "Increase Accuracy", description: "Minimize errors with AI-assisted suggestions tailored to your information.", icon: CheckCircle },
                { title: "Personalized Experience", description: "Enjoy suggestions that improve over time as it learns from your data.", icon: Zap },
                { title: "Enhanced Privacy", description: "Your data stays on your device, ensuring your information remains private.", icon: Shield }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <benefit.icon className="text-4xl mb-4 text-yellow-300" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center">
          <motion.a
            href="#"
            className="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="relative z-10">Get Dr. Fill Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '0%' : '-100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <p className="mt-6 text-lg opacity-75">
            Experience the future of form filling today!
          </p>
        </footer>
      </div>
    </div>
  )
}