import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dr. Fill Privacy Policy</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>Dr. Fill ("the Extension") is committed to protecting your privacy. This Privacy Policy outlines how we handle any personal information we may collect when you use the Extension.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Personal Data: Dr. Fill does not collect, store, or transmit any personal data from users.</li>
          <li className="mb-2">API Key Storage: Users may provide their OpenAI API key, which is stored locally on their device using Chrome's secure storage. This key is used exclusively for communicating with the OpenAI API to generate input data and is not transmitted to any third parties other than OpenAI.</li>
          <li className="mb-2">OpenAI API Communication: The Extension communicates with the OpenAI API to generate context-appropriate input data for form fields. No personal user data is sent during these communications.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p>OpenAI API: Dr. Fill utilizes the OpenAI API to generate data for autofilling forms. Users should refer to OpenAI's Privacy Policy for information on how they handle data: <a href="https://openai.com/policies/privacy-policy" className="text-blue-600 hover:underline">OpenAI Privacy Policy</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Local Storage: The Extension securely stores the OpenAI API key using Chrome's storage.local API.</li>
          <li className="mb-2">No Data Sharing: No data collected by the Extension is shared with third parties.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Control</h2>
        <p>API Key Management: Users can delete or update their OpenAI API key at any time via the Extension's options page.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at [your email address].</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
