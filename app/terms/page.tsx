import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">Dr. Fill Terms of Service</h1>
        
        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By using Dr. Fill, you agree to be bound by these Terms of Service. If you don't agree to these terms, please do not use the Extension.
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Dr. Fill is an AI-powered Chrome extension designed to assist users in filling out forms. It uses OpenAI's language models to provide context-aware suggestions.
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You are responsible for maintaining the confidentiality of your OpenAI API key.</li>
            <li>You agree not to use the Extension for any unlawful purposes.</li>
            <li>You will not attempt to reverse engineer or modify the Extension.</li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All rights, title, and interest in and to the Extension are and will remain the exclusive property of Dr. Fill and its licensors.
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
          <p className="mb-4">
            The Extension is provided "as is" without warranty of any kind. We do not guarantee that the Extension will be error-free or uninterrupted.
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            Dr. Fill shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the Extension.
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Please review these Terms periodically for changes.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            By using Dr. Fill, you acknowledge that you have read and understood these Terms and agree to be bound by them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
