"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">1. General</h2>
              <p>
                This website is operated by PixelPro Studios Pte. Ltd. We take your privacy seriously and are committed to protecting your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">2. Browsing</h2>
              <p>
                If you are browsing this website, we do not collect information that can identify you personally. Basic analytics data may be captured to improve site performance, but this does not include personally identifiable information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">3. Data Sharing</h2>
              <p>
                If you choose to contact us, submit a form, or send us an email containing personal information, you consent to PixelPro using that information for the purpose of responding to your enquiry or delivering the requested services. We may share your data with service providers directly involved in your project, but only when necessary and always in compliance with the Personal Data Protection Act (PDPA). We do not sell, rent, or disclose your personal data to unauthorised third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">4. Data Retention</h2>
              <p>
                For your convenience, we may retain information you previously provided so that you do not need to resubmit the same details. If any information becomes outdated, please update us so we can provide accurate service. Personal data will be kept only for as long as required to fulfil the purpose for which it was collected.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">5. External Links</h2>
              <p>
                Our website may contain links to external websites or third-party platforms. These sites have their own privacy practices, which may differ from ours. PixelPro is not responsible for the content or privacy policies of external websites, and we encourage you to review the privacy statements of those sites before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">6. Your Rights</h2>
              <p>
                If you wish to access, update, or request the removal of your personal data from our records, you may email us at any time at{" "}
                <a href="mailto:support@pixelprostudios.sg" className="text-brand-platinum hover:text-brand-off-white underline transition-colors">
                  support@pixelprostudios.sg
                </a>
                . We will process your request in accordance with PDPA requirements.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
