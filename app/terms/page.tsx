"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <p>
              These T&Cs refer to all our services. In the following terms & conditions "the Photographer", "the Videographer" and "the Designer" shall mean any photographer, videographer and designer representing PixelPro Studios Pte. Ltd. "The Client" shall be those persons defined as the person or organisation to whom the invoice is addressed (whether or not the Client is acting for a third party). The "produced work" shall mean any edited or unedited photographs, videos, or designs captured or made in each project, consisting of, but not limited to, those produced during the whole process of each project by any representative of PixelPro Studios Pte. Ltd. The term "event" refers to all projects that involve photography and/or videography, whether personal or non-personal. It is agreed that the following terms set out the total agreement made between the parties and that no variation or modification of this contract shall be effective unless agreed by both parties in writing. By hiring PixelPro Studios Pte. Ltd. for any services, the Client acknowledges and agrees to these Terms and Conditions, regardless of whether a signed agreement is provided. This acceptance will be deemed effective upon the Client's engagement of services and/or payment of the deposit.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">1. RIGHTS</h2>
                <p>The Client hereby allows PixelPro Studios Pte. Ltd. to display any produced work, including any behind the scenes coverage, covered by this contract and to generally promote the business in advertising, brochures, magazine articles, websites, social media, sample albums etc. with the produced work.</p>
                <p className="mt-3">PixelPro Studios Pte. Ltd. reserves the right to discuss an appropriate schedule for any long term projects with the Client.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">2. OWNERSHIP</h2>
                <p>All original recordings, photographs and edited computer files will remain the property of the Videographer/Photographer/Designer. PixelPro Studios Pte. Ltd. will not be solely responsible for the storage and maintenance of the original and edited media, including video and sound recordings, photographic, and digital files.</p>
                <p className="mt-3">In accordance with Chapter 13 of the Intellectual Property Law and the Copyright Act (Chapter 63), the copyright of the produced work is assigned to PixelPro Studios Pte. Ltd. However, the Client is granted a non-exclusive, non-transferable license to use the produced work for the agreed purposes, as outlined in the contract. Full ownership of the produced work remains with PixelPro Studios Pte. Ltd., unless otherwise agreed in writing.</p>
                <p className="mt-3">Any produced work whether stored digitally or otherwise and any computer program including any source or object code, computer files or printed documentation relating to such produced work is protected by Intellectual Property Law and Copyright Act. The Client is allowed to use the produced work for the intended purpose as agreed in the contract. However, the Client is not permitted to sell any produced work in this contract nor redistribute it to others for a different purpose.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">3. LICENSE</h2>
                <p>The property and any copyright or other intellectual property rights in all material produced by PixelPro Studios Pte. Ltd. in performance of the goods/services belong to PixelPro Studios Pte. Ltd., but the Client shall be entitled to use the produced work supplied under this contract solely for personal use, subject to payment in full of all sums payable under this contract.</p>
                <p className="mt-3">The use of non-copyright-free music within the Client's video shall only be used for private viewings. The Phonographic Performance License used in the supplied videos is not permissible for public performances unless otherwise stated.</p>
                <p className="mt-3">The use of copyrighted music within the Client's video shall be licensed by the Client themselves, and PixelPro Studios Pte. Ltd. will require an official license of the music in order to commence on the project unless otherwise stated.</p>
                <p className="mt-3">If the Client requests PixelPro Studios Pte. Ltd. to process licenses, the license will be in PixelPro Studios' name, and terms of use will vary depending on the specific music licenses.</p>
                <p className="mt-3">PixelPro Studios Pte. Ltd. shall be granted artistic licence in relation to the poses photographed and the locations used. The Photographer and/or Videographer's judgement regarding the locations/poses shall be deemed correct. Due to the vagaries of the weather and the willingness of subjects it may not be possible to capture all the images requested.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">4. COVERAGE & REPRODUCTIONS</h2>
                <p>Any produced work taken during the course of the event will be at the discretion of the Photographer, Videographer and/or Designer, although every effort will be made to comply with the Client's requirements.</p>
                <p className="mt-3">For a booking involving a sensitive event or at certain venues, the Photographer and/or Videographer's movements are sometimes restricted by the official in charge. The area from which the Photographer and/or Videographer is able to cover the event may not be the Photographer and/or Videographer's choice and he cannot accept responsibility for any obstructed view should this be the case.</p>
                <p className="mt-3">It is the sole responsibility of the Client to secure permission of the venue to set up video equipment and record with or without flash.</p>
                <p className="mt-3">Although PixelPro Studios Pte. Ltd. will endeavour to fulfil the requirements of the agreed package, sometimes this may not be possible due to reasons explained within these Terms and Conditions. The Client must accept any limitations in the produced work if any.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">5. EVENT ARRANGEMENTS</h2>
                <p>The details of the event arrangements are to be agreed beforehand in email or hardcopy. The Client shall notify PixelPro Studios Pte. Ltd. of any changes to these details in email or hardcopy at least 5 days in advance. PixelPro Studios Pte. Ltd. cannot be held liable for delays or disruption in their delivery of the service until any changes are received, and acknowledged in email or hardcopy.</p>
                <p className="mt-3">The details of the event are to be arranged by the Client, and PixelPro Studios Pte. Ltd. cannot be held liable for any late or cancelled events. In the situation that an event is cancelled, PixelPro Studios Pte. Ltd. reserves the right to postpone or cancel the project.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">6. ON THE EVENT DAY</h2>
                <p>The Photographer and/or Videographer are the only authorised and official Photographer and/or Videographer for your event day.</p>
                <p className="mt-3">The Photographer and/or Videographer will abide by all rules of the facility and/or directions of the staff/facility coordinator with regard to video set-up and will not be held responsible for the absence of certain shots due to such rules and/or directions, or due to interference by event guests or vendors, including other Photographer and/or Videographers who are not working for PixelPro Studios Pte. Ltd.</p>
                <p className="mt-3">The Client acknowledges that videography requires reasonable lighting and controllable audio environments, and that production may be compromised if either of these cannot be achieved.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">7. EDITING & POST PRODUCTIONS</h2>
                <p>Whilst every effort will be made by the Photographer, Videographer and/or Designer to supply the Client with a satisfactory product based upon the Photographer, Videographer and/or Designer advertised style, and to the specified requirements agreed beforehand, all editing and post-production will be carried out at the Photographer, Videographer and/or Designer discretion.</p>
                <h3 className="text-xl font-display font-semibold text-brand-platinum mt-4 mb-2">Post Processing</h3>
                <p>All images and video will be adjusted for exposure, brightness, contrast, sharpness, etc. The Photographer, Videographer, and/or Designer's professional judgement will be used to make corrections, and these will be considered final unless otherwise specified.</p>
                <h3 className="text-xl font-display font-semibold text-brand-platinum mt-4 mb-2">Prints / Reorders</h3>
                <p>All prints and reorders shall be treated as an extension of this contract and no responsibility for error will be accepted unless orders are given in writing.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">8. FORCE MAJEURE (BEYOND CONTROL)</h2>
                <p>The Photographer, Videographer and/or Designer shall not be liable in the event of bad weather or unforeseen circumstances, including illness, from preventing him/her from completing the work.</p>
                <p className="mt-3">In the event of a lockdown or government-imposed restrictions (e.g., due to COVID-19 or other public health concerns), all projects will be cancelled, and PixelPro Studios Pte. Ltd. will not be held liable for any cancellations. There will be no refunds.</p>
                <p className="mt-3">In the event of equipment failure beyond the Photographer, Videographer and/or Designer's control, including theft of equipment or material, the Photographer, Videographer and/or Designer is not liable for refund or compensation but will try to appease the Client using any available recorded material. In the highly unlikely event of a total failure of produced work, liability shall be limited to a refund of monies paid other than the deposits.</p>
                <p className="mt-3">The Photographer, Videographer and/or Designer reserves the right to cease filming or editing if situations arise that are unfit to continue, eg. grounds of safety, mistreatment, offensive or abusive behaviour, or unacceptable working conditions. In these instances, the Photographer, Videographer and/or Designer is not liable for refund or compensation.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">9. CANCELLATION</h2>
                <p>Deposits are non-refundable unless cancellation is done by the Photographer, Videographer and/or Designer. If cancellation is done by the Client, any money paid other than deposits shall be returned. However, if the Client cancels within one month prior to the event, the Photographer, Videographer and/or Designer is entitled to invoice the Client for loss of earnings unless a suitable solution is agreed.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">10. LIMITATION OF LIABILITY</h2>
                <p>PixelPro Studios Pte. Ltd. shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data, or revenue, arising out of or in connection with the services provided, even if PixelPro Studios Pte. Ltd. has been advised of the possibility of such damages. Liability under this contract is limited to the amount paid by the Client for the services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">11. LIABILITY & REFUND</h2>
                <p>The Client's payments covers/pays for labour and presentation media in the production of the agreed produced work. Every effort is taken by the Photographer, Videographer and/or Designer to provide the Client with the agreed product, and dissatisfaction of its contents, although regrettable, will be deemed subjective and is therefore not open for interpretation by the Client as grounds for refunds or compensation, for which the Photographer, Videographer and/or Designer is not liable.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">12. INDEMNITY</h2>
                <p>The Client agrees to indemnify and hold harmless PixelPro Studios Pte. Ltd., its employees, contractors, and representatives, from and against any and all claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to the Client's use of the produced work, or any breach of these Terms and Conditions by the Client.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">13. ACCIDENT & DAMAGE</h2>
                <p>The Photographer and/or Videographer cannot be held responsible for any personal injury/accident or damage during a video shoot. The Client is free to take up their own insurance, there are many insurance policies available.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">14. PAYMENTS</h2>
                <p>A non-refundable deposit of 50% of the total package cost is required to confirm the Client's booking. This deposit will be deducted from the total package cost. If the Client fails to pay the 50% deposit without cancelling the project at least 3 days before the event/start date, they will be responsible for paying the full amount of the total package cost. The remaining balance must be paid within 15 days after the first viewing of any produced work shown to the Client, with the first day being counted as the day the work is shown. The finished product cannot be delivered until the remaining balance is paid in full.</p>
                <p className="mt-3">In the event of late payment for any project, the Client agrees to pay interest on the overdue amount at a rate of 10% per day for each day the payment is late. This late payment interest will not be waived, and interest will be compounded daily until the outstanding amount is fully paid.</p>
                <p className="mt-3">Upon collection, a preview of the finished product will be shown to the Client. A complete viewing of the product is not necessary, but by paying the balance and collecting the product, the Client agrees that the general picture and sound quality are satisfactory.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">15. CORRECTIONS</h2>
                <p>PixelPro Studios Pte. Ltd. allows the Client to request for up to 2 renders before the collection of the final product. In the case where a storyboard has been presented to and agreed on by the Client, requesting for additional retakes or resequencing of the agreed storyboard will be seen as a new job/contract and is therefore chargeable.</p>
                <p className="mt-3">After collection of the agreed video, any requests for alterations will be undertaken free of charge and at the discretion of the Videographer/Photographer (eg. Spelling mistakes that are not the fault of the Videographer/Photographer) and shall be limited to one revised video. Further corrections will be seen as a new job/contract and are therefore chargeable.</p>
                <p className="mt-3">The Client has 7 days from the date of collection to return the video for any corrections or alterations to be undertaken free of charge.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">16. RETURNS POLICY</h2>
                <p>Please read the above sections: 11. LIABILITY & REFUND and 15. CORRECTIONS.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">17. PERSONAL DATA PROTECTION ACT (PDPA) COMPLIANCE</h2>
                <p>PixelPro Studios Pte. Ltd. is committed to protecting the privacy of the Client's personal data in accordance with the Personal Data Protection Act 2012 (PDPA). By entering into this agreement, the Client consents to PixelPro Studios Pte. Ltd. collecting, using, disclosing, and/or processing the Client's personal data for the purposes of providing the services, including communications, invoicing, and delivering the final product. PixelPro Studios Pte. Ltd. will not disclose the Client's personal data to third parties without prior consent unless required by law.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">18. ENTIRE AGREEMENT</h2>
                <p>These Terms and Conditions constitute the entire agreement between the Client and PixelPro Studios Pte. Ltd. concerning the services provided, and supersede any prior or contemporaneous oral or written agreements. Any modifications to this agreement must be in writing and signed by both parties.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">19. GOVERNING LAW</h2>
                <p>This agreement shall be governed by the laws of Singapore. Any disputes arising from this agreement will be subject to the exclusive jurisdiction of the courts of Singapore.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-brand-off-white mb-3">20. SEVERABILITY</h2>
                <p>If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to reflect the parties' intention as closely as possible while remaining enforceable. The remaining provisions shall remain in full force and effect.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

