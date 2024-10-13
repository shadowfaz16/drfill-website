

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Dr. Fill</h1>
          <p className="text-xl">Your AI-powered form filling assistant</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold">What is Dr. Fill?</h2>
            <p className="text-lg">
              Dr. Fill is a revolutionary Chrome extension that leverages the power of AI to help you fill out forms faster and more accurately than ever before. Using advanced RAG (Retrieval-Augmented Generation) technology and OpenAI&apos;s language models, Dr. Fill taps into your personal knowledge base to provide context-aware suggestions for form fields.
            </p>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>AI-powered form filling</li>
                <li>Personalized suggestions based on your knowledge base</li>
                <li>Seamless integration with Chrome</li>
                <li>Privacy-focused design</li>
              </ul>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-semibold">Benefits of Dr. Fill</h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p>Dramatically reduce the time spent on filling out repetitive forms.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Increase Accuracy</h3>
                <p>Minimize errors with AI-assisted suggestions tailored to your information.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
                <p>Enjoy suggestions that improve over time as it learns from your data.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Enhanced Privacy</h3>
                <p>Your data stays on your device, ensuring your information remains private.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105"
          >
            Get Dr. Fill Now
          </a>
          <p className="mt-4 text-sm opacity-75">
            Experience the future of form filling today!
          </p>
        </footer>
      </div>
    </div>
  );
}
