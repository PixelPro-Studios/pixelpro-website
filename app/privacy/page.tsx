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
                This is a PixelPro Studios Pte. Ltd. website. Thank you for examining our privacy statement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">2. Browsing</h2>
              <p>
                If you are only browsing this website, we do not capture data that allows us to identify you individually.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">3. Data Sharing</h2>
              <p>
                If you choose to make an application or send us an e-mail for which you provide us with personally identifiable data, we may share necessary data with other Government agencies, so as to serve you in a most efficient and effective way, unless such sharing is prohibited by legislation. We will NOT share your personal data with non-Government entities, except where such entities have been authorised to carry out specific Government services. We will comply with the Personal Data Protection Act (PDPA).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">4. Data Retention</h2>
              <p>
                For your convenience, we may also display to you data you had previously supplied us. This will speed up processes and save you the trouble of repeating previous submissions. Should the data be out-of-date, please supply us the latest data. We will retain your personal data only as necessary for the effective delivery of services to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">5. External Links</h2>
              <p>
                This site may contain links to non-Government sites whose data protection and privacy practices may differ from ours. We are not responsible for the content and privacy practices of these other websites and encourage you to consult the privacy notices of those sites.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about our Privacy Policy or how we handle your personal data, please contact us at{" "}
                <a href="mailto:hello@pixelprostudios.com" className="text-brand-silver hover:text-brand-off-white underline transition-colors">
                  hello@pixelprostudios.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

