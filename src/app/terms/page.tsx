import styles from '../../components/policy.module.css';

const Terms = () => {
  return (
      <section className={styles.privacy}>
        <div className="max-w-3xl mx-auto px-6 text-white font-sans leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="mb-6">Welcome to Playk!</p>
          <p className="mb-6">
            By accessing or using this website (the "Site"), you agree to comply with these Terms of Service. If you do not agree, please do not use the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">1. Use of the Site</h2>
          <p className="mb-6">
            The Site is intended for informational and portfolio purposes only. You may view, share, and interact with the content provided. You agree not to misuse the Site or engage in any activity that may harm the website or other users.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
          <p className="mb-6">
            All content, including images, text, and designs, are the intellectual property of Playk unless otherwise stated. You may not reproduce, distribute, or create derivative works without prior permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">3. External Links</h2>
          <p className="mb-6">
            The Site may contain links to external social media and messaging platforms. We are not responsible for the content or privacy practices of these external services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">4. Limitation of Liability</h2>
          <p className="mb-6">
            Playk is not liable for any damages arising from the use or inability to use the Site. The content is provided "as is" without warranties of any kind.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">5. Changes to Terms</h2>
          <p className="mb-6">
            We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">6. Governing Law</h2>
          <p>
            These Terms are governed by the laws of your location and international privacy and online commerce standards.
          </p>
        </div>
      </section>
  );
};

export default Terms;

