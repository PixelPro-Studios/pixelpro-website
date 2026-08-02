import type { FaqItem } from "@/lib/faqs";

type FaqSectionProps = {
  title?: string;
  faqs: FaqItem[];
};

export default function FaqSection({
  title = "Frequently asked questions",
  faqs,
}: FaqSectionProps) {
  return (
    <section className="mt-24 max-w-3xl mx-auto" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-display text-brand-off-white text-center mb-10"
      >
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b border-white/10 pb-3"
          >
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 py-4 text-left text-brand-off-white font-medium text-lg hover:text-brand-silver transition-colors [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden
                className="shrink-0 text-brand-silver/70 group-open:rotate-45 transition-transform text-2xl leading-none"
              >
                +
              </span>
            </summary>
            <p className="pb-4 text-brand-off-white/75 leading-relaxed font-light">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
