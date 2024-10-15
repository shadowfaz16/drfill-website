"use client"
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import drfill from '../assets/dancing-Fill.gif'
import extension from '../assets/extension.png'

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-sans">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
        <div className="mt-8 flex justify-center">
              <Image
                src={drfill}
                alt="Dr. Fill Mascot"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
            </div>
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
            <div className="mt-8">
              <Image
                src={extension}
                alt="Dr. Fill Chrome Extension"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}