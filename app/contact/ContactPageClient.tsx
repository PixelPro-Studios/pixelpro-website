"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import posthog from "posthog-js";

export default function ContactPage() {
  const [firstFormSubmitted, setFirstFormSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);


  useEffect(() => {
    // Listen for Tally form submission events
    const handleMessage = (event: MessageEvent) => {
      // Validate origin for security (Tally forms are served from tally.so)
      if (!event.origin.includes("tally.so")) {
        return;
      }

      // Check if the message contains the form submission event
      if (typeof event.data === "string" && event.data.includes("Tally.FormSubmitted")) {
        try {
          const data = JSON.parse(event.data);
          
          // Check for both 'event' and 'type' properties (Tally may use either)
          if (data.event === "Tally.FormSubmitted" || data.type === "Tally.FormSubmitted") {
            // Check if it's the first form (Bza7LN)
            if (data.payload?.formId === "Bza7LN") {
              setFirstFormSubmitted((prev) => {
                if (!prev) {
                  posthog.capture('contact_form_submitted', { form_id: data.payload?.formId });
                  posthog.capture('quote_form_viewed');
                  return true;
                }
                return prev;
              });
            }
          }
        } catch (error) {
          // If parsing fails, try checking if it's a simple string match
          if (event.data.includes("Tally.FormSubmitted")) {
            setFirstFormSubmitted((prev) => {
              if (!prev) {
                return true;
              }
              return prev;
            });
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses for urgent inquiries",
      action: "Message Us",
      href: "https://wa.me/6588605489",
      detail: "+65 8860 5489",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Request for detailed quotes and documentation",
      action: "Send Email",
      href: "mailto:hello@pixelprostudios.sg",
      detail: "hello@pixelprostudios.sg",
    },
    {
      icon: Phone,
      title: "Book a Call",
      description: "Schedule a consultation with our team",
      action: "Book Now",
      href: "https://cal.com/pixelpro/consultation",
      detail: "Schedule Online",
    },
  ];

  const workingHours = [
    { day: "Monday - Sunday", hours: "9:00 AM - 10:00 PM" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-display text-brand-off-white">
            Get in touch.
          </h1>
          <p className="text-xl text-brand-silver max-w-2xl mx-auto">
            Ready to bring your event to life? Reach out and let's create a one-of-a-kind experience together.
          </p>
        </div>

        {/* Main Content - Form and Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Widgets (Desktop) / Bottom (Mobile) */}
          <div className="order-2 md:order-1 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Link
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => posthog.capture('contact_method_clicked', { method: method.title, href: method.href })}
                  >
                    <div className="bg-brand-charcoal/30 border border-white/5 rounded-3xl p-6 hover:bg-brand-charcoal/50 hover:border-white/10 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-brand-silver/10 rounded-full flex items-center justify-center group-hover:bg-brand-silver/20 transition-colors flex-shrink-0">
                          <method.icon className="w-7 h-7 text-brand-silver" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-display text-brand-off-white mb-1">
                            {method.title}
                          </h3>
                          <p className="text-brand-silver/70 text-sm mb-1">
                            {method.description}
                          </p>
                          <p className="text-brand-off-white font-medium text-sm">
                            {method.detail}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <ArrowRight className="w-5 h-5 text-brand-silver group-hover:text-brand-off-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="bg-brand-charcoal/30 border border-white/5 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-7 h-7 text-brand-silver" />
                  <h2 className="text-2xl font-display text-brand-off-white">
                    Working Hours
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-white/5 last:border-0"
                    >
                      <span className="text-brand-off-white font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-brand-silver">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-brand-silver/70 text-sm">
                    For urgent after-hours requests, please WhatsApp us and we'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Tally Form (Desktop) / Top (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <div className="bg-white rounded-3xl p-6 h-auto md: p-8">
              {!firstFormSubmitted ? (
                <iframe
                  ref={iframeRef}
                  data-tally-src="https://tally.so/embed/Bza7LN?transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                  key="first-form"
                />
              ) : (
                <iframe
                  ref={iframeRef}
                  src="https://tally.so/embed/obEMg1?transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Get a Faster Quote"
                  key="second-form"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-brand-silver max-w-3xl mx-auto leading-relaxed">
            Whether you need AV systems, photography, videography, or talent services, 
            we're here to make your event seamless and unforgettable. Get in touch today 
            and let's discuss how we can bring your vision to life.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}

