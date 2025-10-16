import styles from '../../components/policy.module.css';

const Privacy = () => {
  return (
      <section className={styles.privacy}>
        <div className="max-w-3xl mx-auto px-6 text-white font-sans leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-6">Last updated: October 2025</p>
          <p className="mb-6">
            At Playk, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
          <p className="mb-6">
            - We do not collect personal data through forms or sign-ups.<br/>
            - We use Google Analytics to gather anonymous data about website traffic, user interactions, and site performance.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">2. Cookies</h2>
          <p className="mb-6">
            - Google Analytics uses cookies to help us understand website usage.<br/>
            - You can manage cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">3. Use of Information</h2>
          <p className="mb-6">
            - Data collected is used solely for improving the website and analyzing visitor trends.<br/>
            - We do not sell, share, or trade your personal information with third parties.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">4. External Links</h2>
          <p className="mb-6">
            - The Site contains links to social media and messaging platforms. We are not responsible for their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights (EU GDPR & NZ Privacy)</h2>
          <p className="mb-6">
            - If you are in the EU, you have rights to access, correct, or delete any personal information processed.<br/>
            - Residents of New Zealand have rights under the Privacy Act to access and correct personal data.<br/>
            - Since we do not collect personal data via forms, these rights are minimal but you may opt out of Google Analytics tracking via your browser.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">6. Data Security</h2>
          <p className="mb-6">
            - We take reasonable measures to protect anonymous user data collected via analytics.<br/>
            - No sensitive personal information is stored on this Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 ">7. Changes to this Policy</h2>
          <p>
            - We may update this Privacy Policy from time to time. Updates will be posted on this page.
          </p>
        </div>
      </section>
  );
};

export default Privacy;
