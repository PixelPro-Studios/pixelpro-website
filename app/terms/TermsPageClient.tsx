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
          <h1 className="text-5xl md:text-7xl font-display text-brand-off-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-brand-silver text-lg">2026 Version</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8">
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">1. DEFINITIONS & ACCEPTANCE OF TERMS</h2>
                <p className="text-justify">These Terms & Conditions ("T&Cs") refer to all services provided by PixelPro Studios Pte. Ltd. ("PixelPro"), including but not limited to audio visual services, stage setup and staging infrastructure, photography services, videography services, and entertainment or talent services. In the following T&Cs, "the Photographer", "the Videographer", "the Designer", "the AV Crew", and "the Stage Crew" shall mean any photographer, videographer, designer, technician, or crew member representing PixelPro Studios Pte. Ltd.</p>
                <p className="mt-3 text-justify">"The Client" shall refer to the person, organisation, or authorised representative to whom the quotation or invoice is addressed, whether or not the Client is acting on behalf of a third party.</p>
                <p className="mt-3 text-justify">"The Produced Work" shall mean any edited or unedited photographs, videos, audio recordings, designs, layouts, stage diagrams, digital files, or any other creative or technical output captured, created, or delivered by any representative of PixelPro Studios Pte. Ltd. This includes all material generated throughout the entire duration of the project or event.</p>
                <p className="mt-3 text-justify">"The Event" refers to all projects or engagements that involve any PixelPro services, whether personal, commercial, or organisational, including but not limited to photography, videography, audio visual deployment, stage setup, live operations, and entertainment activities.</p>
                <p className="mt-3 text-justify">It is agreed that the following Terms set out the full and complete agreement between the parties, and that no variation, modification, or waiver of these Terms shall be effective unless agreed upon by both parties in writing.</p>
                <p className="mt-3 text-justify">By engaging PixelPro Studios Pte. Ltd. for any Services, whether through written confirmation, verbal confirmation, or payment of a deposit or invoice, the Client acknowledges and agrees to these Terms & Conditions. Such acceptance is deemed effective immediately upon the Client's confirmation of services and/or payment of any required deposit.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">2. RIGHTS</h2>
                <p className="text-justify">The Client hereby grants PixelPro Studios Pte. Ltd. the full right to use, display, reproduce, publish, or distribute any Produced Work created under this agreement for the purpose of promoting PixelPro's business. This includes, but is not limited to, usage in portfolios, advertising materials, brochures, social media platforms, websites, sample albums, showcases, proposals, presentations, behind-the-scenes content, and any other promotional or marketing medium.</p>
                <p className="mt-3 text-justify">PixelPro Studios Pte. Ltd. retains the discretion to discuss and determine appropriate timelines, schedules, or release plans for long-term or multi-phase projects, where necessary, in consultation with the Client.</p>
                <p className="mt-3 text-justify">Unless otherwise agreed in writing, PixelPro Studios Pte. Ltd. is under no obligation to withhold Produced Work from promotional usage. Should the Client require confidentiality or non-disclosure of specific footage, images, or project details, such arrangements must be communicated in advance and agreed upon in writing.</p>
                <p className="mt-3 text-justify">Nothing in this section shall require PixelPro to seek additional approval for the continued use of Produced Work that has already been displayed, published, or incorporated into promotional materials.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">3. OWNERSHIP</h2>
                <p className="text-justify">All original recordings, photographs, video footage, audio files, designs, graphics, layouts, stage diagrams, digital project files, and any edited versions of such material shall remain the sole property of PixelPro Studios Pte. Ltd. PixelPro is not obligated to store, archive, or maintain any original or edited files beyond the delivery of the agreed final product, unless otherwise stated in writing.</p>
                <p className="mt-3 text-justify">In accordance with applicable Intellectual Property Laws and the Copyright Act (Chapter 63), all copyright to the Produced Work is owned by PixelPro Studios Pte. Ltd. The Client is granted a non-exclusive, non-transferable licence to use the Produced Work strictly for the specific purposes agreed upon in the contract or scope of work. Full ownership of the Produced Work is not transferred to the Client unless expressly agreed upon in writing and accompanied by an ownership buyout fee (where applicable).</p>
                <p className="mt-3 text-justify">Any Produced Work—whether stored digitally, physically, or in any other format—and any software, code, project files, or supporting documentation used in the creation of such work are protected under Intellectual Property Law. The Client may not sell, reproduce, edit, remix, distribute, or license the Produced Work for purposes outside the agreed scope without written permission from PixelPro Studios Pte. Ltd.</p>
                <p className="mt-3 text-justify">Any unauthorised use, modification, or distribution of the Produced Work constitutes a breach of these Terms and may result in legal action.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">4. LICENCE</h2>
                <p className="text-justify">The copyright and all associated intellectual property rights in the Produced Work created by PixelPro Studios Pte. Ltd. remain owned by PixelPro in accordance with the Copyright Act (Chapter 63). Upon full payment of all fees due under this contract, the Client is granted a limited, non-exclusive, non-transferable licence to use the Produced Work solely for the purposes agreed upon in writing.</p>
                <p className="mt-3 text-justify">Unless otherwise stated, this licence does not permit the Client to sell, modify, edit, redistribute, or commercially monetise the Produced Work, nor to grant sublicences to any third party. Any use outside the agreed purpose must be approved by PixelPro Studios Pte. Ltd. in writing and may incur additional licensing fees.</p>
                
                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">Use of Music in Videos</h3>
                <p className="text-justify">Where copyrighted or non-copyright-free music is requested for use in a produced video:</p>
                <ol className="list-decimal ml-6 mt-2 space-y-2">
                  <li>The Client is responsible for obtaining the necessary music licence (e.g., from COMPASS, RIPS, or the copyright owner), unless otherwise agreed in writing.</li>
                  <li>PixelPro requires proof of a valid licence before incorporating copyrighted music into any video, unless an exemption is granted.</li>
                  <li>If PixelPro procures the licence on the Client's behalf, the licence will be issued under PixelPro's name, and usage will be restricted by that licence's terms.</li>
                </ol>
                <p className="mt-3 text-justify">Videos containing unlicensed copyrighted music may only be used for private, non-commercial viewing and may not be published online, broadcast, or shown publicly unless appropriate public performance rights are secured.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">Public Playback of Music, Background Music, or Event Music</h3>
                <p className="text-justify">If the Client wishes to play music publicly during an event (e.g., through speakers, AV systems, DJs, or performances), the Client is responsible for obtaining the required licences, such as those issued by:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>COMPASS (Composers and Authors Society of Singapore)</li>
                  <li>RIPS (Recording Industry Performance Singapore)</li>
                </ul>
                <p className="mt-3 text-justify">This applies to background music, DJ music, walk-in music, performance tracks, commercial songs, and any music not categorised as royalty-free.</p>
                <p className="mt-3 text-justify">PixelPro provides equipment only and does not supply public performance licences unless explicitly arranged in advance.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">Movie Screenings, Film Clips, or Broadcast Content on LED Wall / Projection</h3>
                <p className="text-justify">For any movie, drama, series, sports broadcast, recorded event, or commercial film content requested by the Client to be displayed on an LED wall, projector, or screen:</p>
                <ol className="list-decimal ml-6 mt-2 space-y-2">
                  <li>The Client is solely responsible for obtaining the appropriate Public Screening Licence or Broadcast Rights, including but not limited to licences from studios, distributors, or authorised agencies.</li>
                  <li>PixelPro will not source, provide, or distribute any copyrighted film or media unless the Client presents written evidence of an approved licence.</li>
                  <li>PixelPro reserves the right to decline playback of any media that appears to violate copyright law.</li>
                </ol>
                <p className="mt-3 text-justify">Unauthorised public screenings may constitute an infringement under the Copyright Act (Chapter 63), for which the Client assumes full responsibility.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">Artistic Licence</h3>
                <p className="text-justify">PixelPro Studios Pte. Ltd. retains artistic licence in selecting angles, poses, compositions, colours, lighting, and creative direction for photography, videography, design, stage presentation, AV programming, and overall production. PixelPro's professional judgement shall be deemed correct, and while best efforts will be made to meet the Client's preferences, the nature of live events may impose creative limitations.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">5. COVERAGE & REPRODUCTIONS</h2>
                <p className="text-justify">All Produced Work captured or created during the Event shall be at the professional discretion of PixelPro Studios Pte. Ltd. While PixelPro will make every reasonable effort to fulfil the Client's requested coverage, the Client acknowledges that the final scope of what can be captured is subject to on-ground conditions, cooperation of subjects, venue rules, technical feasibility, lighting conditions, sound environment, and weather.</p>
                <p className="mt-3 text-justify">For events held in sensitive or restricted venues (e.g., religious venues, schools, government buildings, auditoriums, performance halls), the movement, positioning, lighting setup, audio cabling, or equipment placement of the Photographer, Videographer, AV Crew, or Stage Crew may be limited by venue staff, security personnel, or officiants in charge. PixelPro cannot be held responsible for any restricted access or obstructed views arising from such limitations.</p>
                <p className="mt-3 text-justify">It is the Client's responsibility to ensure that all required permissions, passes, permits, or venue approvals have been obtained to allow PixelPro to carry out photography, videography, AV installation, stage setup, or content playback. PixelPro shall not be liable for delays or inability to capture or execute specific shots, angles, recordings, or AV tasks due to insufficient permissions or venue restrictions.</p>
                <p className="mt-3 text-justify">Although PixelPro strives to deliver the coverage indicated in the agreed package or scope of work, the Client understands that certain conditions may affect the final output, including but not limited to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>guest or crowd obstruction</li>
                  <li>last-minute programme changes</li>
                  <li>low or inconsistent lighting</li>
                  <li>poor audio environment</li>
                  <li>restricted shooting zones</li>
                  <li>time constraints</li>
                  <li>delayed venue access</li>
                  <li>safety considerations for crew and equipment</li>
                </ul>
                <p className="mt-3 text-justify">In such cases, the Client must accept that certain shots, recordings, or deliverables may be limited or unavailable.</p>
                <p className="mt-3 text-justify">PixelPro shall not be responsible for missed moments or incomplete coverage caused by circumstances beyond its control, including interference by guests, vendors, other photographers/videographers, or third-party AV providers not engaged by PixelPro.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">6. EVENT ARRANGEMENTS</h2>
                <p className="text-justify">All details of the Event—including venue, date, timings, programme flow, technical requirements, staging layout, and any special requests—must be confirmed with PixelPro Studios Pte. Ltd. in writing, whether via email, WhatsApp, SMS, or signed documentation. The Client shall notify PixelPro of any changes to these details at least 5 days in advance, unless otherwise agreed. PixelPro shall not be held liable for delays, missed coverage, or reduced service quality arising from changes that are communicated late or not acknowledged in writing.</p>
                <p className="mt-3 text-justify">The Client is responsible for ensuring that all Event arrangements are accurate, complete, and feasible, including but not limited to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>providing accurate venue access times for setup and teardown</li>
                  <li>ensuring the availability of loading bays, parking, and access routes for crew and equipment</li>
                  <li>providing necessary stage dimensions, power outlet locations, floor plans, and seating layouts</li>
                  <li>ensuring the venue permits photography, videography, audio recording, staging, lighting installation, and equipment placement</li>
                  <li>securing all required approvals from venue management or relevant authorities</li>
                </ul>
                <p className="mt-3 text-justify">PixelPro shall not be liable for any delay, cancellation, obstruction, or inability to set up equipment caused by inaccurate information provided by the Client, delayed venue access, or restrictions imposed by the venue.</p>
                <p className="mt-3 text-justify">In the event that the Client postpones, delays, or restructures the Event programme, PixelPro may adjust its coverage or technical operations accordingly, but cannot guarantee the fulfilment of every requested shot, scene, or AV requirement.</p>
                <p className="mt-3 text-justify">If the Event is cancelled by the Client, PixelPro reserves the right to treat the project as a cancellation under Section 10: Cancellation, with all applicable fees and forfeitures.</p>
                <p className="mt-3 text-justify">PixelPro may postpone or cancel its participation in the Event if circumstances arise that jeopardise crew safety, equipment integrity, or lawful operation. This includes (but is not limited to):</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>unsafe or non-compliant electrical setups</li>
                  <li>unstable staging or rigging</li>
                  <li>venue hazards</li>
                  <li>unauthorised or illegal activities on-site</li>
                  <li>refusal by the Client or venue to follow safety recommendations</li>
                </ul>
                <p className="mt-3 text-justify">In such situations, PixelPro shall not be held liable for any losses, disruptions, or reduced coverage.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">7. ON THE EVENT DAY</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. shall be the sole authorised provider of photography, videography, AV operations, and stage services for the Event unless otherwise agreed in writing. The Client agrees that additional photographers, videographers, AV operators, or stage personnel not engaged by PixelPro may interfere with PixelPro's workflow and coverage, and PixelPro shall not be held responsible for any disruptions or missed moments arising from such interference.</p>
                <p className="mt-3 text-justify">PixelPro will abide by all venue rules, safety regulations, and directives from venue staff, coordinators, or authorities with regard to camera placement, lighting positions, cabling routes, audio capture, stage setup, and equipment deployment. If restrictions limit PixelPro's ability to capture certain angles, shots, or sequences—or to set up AV or staging equipment as intended—the Client acknowledges that PixelPro cannot be held liable for these limitations.</p>
                <p className="mt-3 text-justify">The Client further agrees that:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Adequate time must be provided for setup, testing, sound check, lighting adjustment, LED wall calibration, stage assembly, and any other technical preparation required.</li>
                  <li>Reasonable working space must be allocated for crew, equipment, and safe movement.</li>
                  <li>Guests, vendors, performers, or organisers must not obstruct designated crew areas, cable paths, or equipment zones.</li>
                  <li>PixelPro may pause or modify operations if conditions are unsafe, excessively crowded, or pose risk to crew or equipment.</li>
                </ul>
                <p className="mt-3 text-justify">The Client acknowledges that photography and videography require suitable lighting and manageable audio environments. If the Event includes dim lighting, coloured lighting, haze, loud environments, poor acoustics, or inconsistent stage conditions, the Client accepts that the resulting footage or images may reflect these environmental limitations.</p>
                <p className="mt-3 text-justify">For AV and stage services, the Client must ensure:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Access to stable and safe electrical supply</li>
                  <li>No unauthorised adjustments to equipment by guests or third parties</li>
                  <li>No movement, unplugging, or tampering with LED panels, speakers, mixers, lighting, or staging assets</li>
                  <li>Clear instructions regarding cue timings, programme flow, performances, and playback requirements</li>
                </ul>
                <p className="mt-3 text-justify">PixelPro reserves the right to cease operations temporarily or completely if:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>The environment becomes unsafe</li>
                  <li>Equipment faces risk of damage</li>
                  <li>Instructions from venue authorities require it</li>
                  <li>Abuse, harassment, or unreasonable behaviour is directed at crew members</li>
                </ul>
                <p className="mt-3 text-justify">In such cases, PixelPro shall not be liable for missed coverage, reduced deliverables, or Event disruptions.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">8. EDITING & POST-PRODUCTION</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. will make every reasonable effort to supply the Client with a final product that reflects PixelPro's advertised style and the requirements agreed upon prior to the Event. All editing, colour grading, audio balancing, sequencing, design work, motion graphics, music placement, and creative refinement shall be carried out at the sole professional discretion of PixelPro's photographers, videographers, designers, or editors.</p>
                
                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">8.1 Editing Style</h3>
                <p className="text-justify">The Client acknowledges that PixelPro's creative decisions—including but not limited to colour tones, contrast levels, cropping, pacing, transitions, sound design, and story flow—constitute PixelPro's signature professional style. While PixelPro will take the Client's preferences into account, the final editorial direction shall remain at PixelPro's discretion.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">8.2 Post-Processing Scope</h3>
                <p className="text-justify">All photographs and videos will undergo standard professional adjustments such as exposure correction, colour balancing, sharpness, clarity, noise reduction, audio cleanup, and other refinements considered appropriate by PixelPro.</p>
                <p className="mt-3 text-justify">For videos, standard editing includes cutting, sequencing, basic titles, colour grading, sound balancing, and export of the agreed final versions. Advanced editing—such as animations, complex motion graphics, visual effects, multi-camera stitching, audio reconstruction, or extensive retouching—is not included unless specified in the quotation.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">8.3 Deliverable Format</h3>
                <p className="text-justify">PixelPro will deliver photos, videos, or digital designs in standard formats suitable for viewing and online sharing unless otherwise agreed (e.g., JPEG, MP4, PNG, PDF). Raw files—such as unedited photos, raw video footage, project files, or layered design files—will not be provided unless explicitly included in the contract and may incur additional fees.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">8.4 Revisions and Creative Limitations</h3>
                <p className="text-justify">While every effort will be made to achieve coverage requested by the Client, the Client acknowledges that:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Certain shots, angles, or audio elements may not be achievable due to real-time Event conditions.</li>
                  <li>Environmental factors (lighting, noise, crowd behaviour, weather, venue rules) directly affect the final output.</li>
                  <li>PixelPro cannot guarantee the availability of specific scenes or moments if they do not occur, are obstructed, or are missed due to factors beyond PixelPro's control.</li>
                </ul>
                <p className="mt-3 text-justify">PixelPro shall not be held responsible for the absence of shots, footage, or audio that could not be captured despite reasonable professional effort.</p>

                <h3 className="text-xl font-display text-brand-platinum mt-4 mb-2">8.5 Storage & Archiving</h3>
                <p className="text-justify">PixelPro is not obligated to store or retain unedited or edited files beyond the delivery of the final agreed product. Long-term storage or retrieval requests may incur additional fees and are subject to file availability.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">9. FORCE MAJEURE (BEYOND CONTROL)</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. shall not be held liable for any failure to perform its obligations under this agreement where such failure is caused by circumstances beyond its reasonable control. These circumstances include but are not limited to illness, injury, severe weather, natural disasters, power outages, government restrictions, venue-imposed limitations, equipment theft, or any other event that makes it unsafe or impracticable to proceed.</p>
                <p className="mt-3 text-justify">In the event of government-imposed restrictions or mandatory closures, including public health measures, lockdowns, or venue shutdowns, PixelPro reserves the right to cancel or postpone the project. In such situations, refunds will not be provided unless otherwise agreed in writing.</p>
                <p className="mt-3 text-justify">If equipment fails due to causes outside of PixelPro's control such as electrical faults from the venue, sudden hardware malfunction, or interference by third parties, PixelPro shall make reasonable efforts to recover or deliver any available material. However, PixelPro shall not be liable for compensation beyond the amounts already paid excluding deposits.</p>
                <p className="mt-3 text-justify">PixelPro also reserves the right to cease filming, photography, AV operations, or stage work at any time if the working conditions become unsafe, hostile, unprofessional, or violate the instructions of venue authorities. Examples include physical danger, abusive behaviour, harassment, or any circumstance that threatens the safety of crew or equipment. In such cases, PixelPro shall not be responsible for incomplete coverage and no refunds shall be issued.</p>
                <p className="mt-3 text-justify">In the unlikely event of total loss of produced work due to events outside of PixelPro's direct control, liability shall be limited to a refund of the amount paid excluding the non-refundable deposit. This limitation reflects industry practice and the unpredictable nature of live event environments.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">10. CANCELLATION</h2>
                <p className="text-justify">All deposits paid to PixelPro Studios Pte. Ltd. are strictly non-refundable unless the cancellation is initiated by PixelPro. If the Client chooses to cancel the project for any reason, only payments made beyond the deposit may be refunded, and only if the cancellation falls outside the protected period described below.</p>
                <p className="mt-3 text-justify">If the Client cancels the Event or project within one month of the scheduled date, PixelPro is entitled to invoice the Client for loss of earnings. This may include the remaining balance of the agreed package or a reasonable compensation amount reflecting the time blocked, crew assigned, and opportunities lost. PixelPro may waive or reduce this charge at its discretion if an alternative arrangement is mutually agreed upon.</p>
                <p className="mt-3 text-justify">In situations where the Client fails to proceed with the project but does not formally cancel it at least three days before the event or start date, PixelPro reserves the right to treat this as a full cancellation. The Client will be responsible for paying the full amount of the package, as resources, crew, and equipment would already have been allocated.</p>
                <p className="mt-3 text-justify">If PixelPro is required to cancel the project due to circumstances within its control, all payments received, including deposits, shall be refunded in full. This excludes cancellations covered under Section 9 (Force Majeure), where refunds may not apply.</p>
                <p className="mt-3 text-justify">The Client acknowledges that planning, scheduling, and resource allocation begin upon confirmation of the project. For this reason, cancellations have a direct impact on PixelPro's business operations. The terms in this section ensure fairness and reflect the industry norms for media production and event-related services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">11. LIMITATION OF LIABILITY</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. shall not be liable for any indirect, incidental, special, punitive, exemplary, or consequential damages arising out of or relating to the services provided. This includes but is not limited to loss of profits, loss of revenue, loss of data, business interruption, reputational harm, emotional distress, or any other damages that are not a direct and immediate result of PixelPro's actions.</p>
                <p className="mt-3 text-justify">Liability under this agreement shall be strictly limited to the total amount paid by the Client for the specific services in question. This limitation reflects standard practice in the media production and event services industry, where outcomes depend heavily on environmental, technical, and situational factors beyond the service provider's control.</p>
                <p className="mt-3 text-justify">PixelPro shall not be held responsible for the failure of any equipment, materials, or deliverables if such failure is caused by factors outside PixelPro's reasonable control. Examples include venue electrical faults, third-party interference, environmental hazards, client-provided equipment, or venue-imposed restrictions.</p>
                <p className="mt-3 text-justify">PixelPro is also not liable for the loss of opportunities or perceived value arising from missed shots, incomplete footage, limited coverage, technical imperfections, or creative decisions taken during production or editing, so long as PixelPro has acted in good faith and with reasonable professional skill.</p>
                <p className="mt-3 text-justify">No action or claim may be brought by the Client against PixelPro after a period of six months from the date of delivery of the final product. This limitation encourages timely communication and ensures that all parties raise concerns while materials and records remain accessible.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">12. REFUND POLICY</h2>
                <p className="text-justify">The Client acknowledges that payments made to PixelPro Studios Pte. Ltd. cover the time, labour, expertise, equipment preparation, and production processes required to carry out the agreed services. These processes begin long before the Event day itself, which is why refunds are strictly regulated.</p>
                <p className="mt-3 text-justify">Dissatisfaction with the creative style, editing choices, artistic decisions, or subjective quality of the Produced Work does not constitute valid grounds for a refund. PixelPro's professional judgement is relied upon throughout the project and is part of the service the Client has engaged.</p>
                <p className="mt-3 text-justify">Refunds will only be considered in situations where PixelPro fails to deliver the agreed final product due to a reason solely attributable to PixelPro and not caused by environmental conditions, venue restrictions, client actions, third-party interference, or circumstances covered under Section 9 (Force Majeure). In such cases, PixelPro's total liability shall not exceed the amount paid by the Client, excluding the non-refundable deposit.</p>
                <p className="mt-3 text-justify">If the Client delays the project, modifies the scope without notice, withholds necessary information, restricts PixelPro's access, or otherwise prevents PixelPro from fulfilling the agreed work, no refund shall be issued. In such situations, the Client remains responsible for the full payment.</p>
                <p className="mt-3 text-justify">Once the final product has been delivered, accepted, or downloaded by the Client, refunds will not be granted under any circumstance. Acceptance may be indicated through written confirmation, verbal confirmation, payment of the remaining balance, or any form of use of the delivered materials.</p>
                <p className="mt-3 text-justify">This section should be read together with Section 10 (Cancellation) and Section 15 (Corrections), which outline additional conditions relating to refunds, revisions, and deliverables.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">13. INDEMNITY</h2>
                <p className="text-justify">The Client agrees to indemnify and hold harmless PixelPro Studios Pte. Ltd., including its employees, contractors, agents, and representatives, from any claims, liabilities, damages, losses, costs, or expenses arising out of the Client's use of the Produced Work or any breach of these Terms and Conditions.</p>
                <p className="mt-3 text-justify">This indemnity applies to situations including but not limited to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>the Client's misuse, alteration, or unauthorised distribution of the Produced Work</li>
                  <li>infringement of copyright or intellectual property rights resulting from media, music, or content supplied by the Client</li>
                  <li>injuries or incidents occurring at the Event that are not caused by PixelPro</li>
                  <li>damage to venue property, equipment, or staging caused by the Client or its guests</li>
                  <li>claims initiated by third parties due to the Client's instructions, content requests, or behaviour during the Event</li>
                  <li>unauthorised playback of copyrighted music, films, or media provided by the Client without the necessary licences</li>
                  <li>loss or damage to PixelPro's equipment caused by guests, vendors, performers, or third parties under the Client's control</li>
                </ul>
                <p className="mt-3 text-justify">The Client further agrees to reimburse PixelPro for any legal fees and expenses incurred in defending against such claims.</p>
                <p className="mt-3 text-justify">This indemnity remains in effect even after completion of the services and delivery of the final product.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">14. ACCIDENT & DAMAGE</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. shall not be held responsible for any personal injury, accident, or loss that occurs during the Event unless such injury or loss is directly caused by the proven negligence of PixelPro. The Client is encouraged to obtain appropriate insurance coverage for the Event, including public liability insurance, since event environments involve inherent risks that cannot always be controlled.</p>
                <p className="mt-3 text-justify">The Client acknowledges that AV equipment, staging structures, lighting fixtures, cabling, and photography or videography equipment require safe operating conditions. PixelPro reserves the right to modify or halt operations if the environment is unsafe or if guests, performers, or third-party vendors are behaving in a way that endangers themselves, the crew, or the equipment.</p>
                <p className="mt-3 text-justify">The Client shall be responsible for any loss of or damage to PixelPro's equipment caused by the Client, its guests, vendors, performers, contractors, or any third parties under the Client's supervision. This includes damage caused by mishandling, spills, tampering, unauthorised adjustments, or deliberate interference.</p>
                <p className="mt-3 text-justify">PixelPro shall not be liable for accidents or injuries resulting from:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>unsafe venue conditions</li>
                  <li>inadequate crowd control</li>
                  <li>guest behaviour or misconduct</li>
                  <li>third-party equipment or structures</li>
                  <li>environmental factors such as weather, terrain, or venue infrastructure</li>
                </ul>
                <p className="mt-3 text-justify">If PixelPro's equipment is damaged due to circumstances attributable to the Client or third parties under the Client's authority, the Client agrees to compensate PixelPro for repair or replacement costs. PixelPro may invoice the Client for these costs, and payment shall be due under the same terms as project payment.</p>
                <p className="mt-3 text-justify">This clause is intended to ensure a safe and professional working environment for all parties and reflects standard industry practice for event and production services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">15. PAYMENTS</h2>
                <p className="text-justify">A non-refundable deposit of 50 percent of the total project cost is required to confirm the Client's booking. This deposit represents PixelPro's commitment of time, resources, and scheduling, and will be deducted from the total project fee.</p>
                <p className="mt-3 text-justify">If the Client fails to pay the required deposit and does not formally cancel the project at least three days before the Event or project start date, the Client will remain responsible for the full project fee. This applies even if the Client later decides not to proceed, as PixelPro would have allocated crew, equipment, and time for the booking.</p>
                <p className="mt-3 text-justify">The remaining balance must be paid within 7 days after the first presentation or delivery of any Produced Work. The first presentation may include an online review link, on-site viewing, digital delivery, or any method where the Client is given access to preview the work. By making the final payment, the Client acknowledges that the overall image, video, or audio quality is satisfactory.</p>
                <p className="mt-3 text-justify">The final product will not be released, exported in full resolution, or delivered in its final form until all outstanding balances are paid in full. This includes photographs, videos, design files, AV recordings, or any other deliverables.</p>
                <p className="mt-3 text-justify">Late payments will incur interest at a rate of 10 percent per day on the outstanding amount. Interest will be compounded daily and shall not be waived under any circumstances. This reflects the administrative and operational burden caused by overdue accounts, particularly for event-based businesses where equipment and manpower are heavily scheduled in advance.</p>
                <p className="mt-3 text-justify">PixelPro reserves the right to suspend ongoing work, withhold drafts, pause editing, or decline further services until outstanding payments are made. Any such suspension caused by non-payment does not release the Client from their contractual obligations.</p>
                <p className="mt-3 text-justify">All payments made to PixelPro are considered binding and non-refundable except where stated under Section 12 (Refund Policy).</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">16. CORRECTIONS</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. allows the Client to request up to two rounds of corrections or revisions before the final product is delivered. These revisions may include adjustments to sequencing, colour grading, audio balancing, titles, subtitles, or minor design refinements. Requests must remain reasonable and consistent with the original scope of work.</p>
                <p className="mt-3 text-justify">If a storyboard, shot list, mood board, or production plan has been approved by the Client, any request for additional reshoots, major restructuring, or significant alteration of the agreed concept will be treated as a new project or add-on contract. Such work will incur additional charges at PixelPro's discretion.</p>
                <p className="mt-3 text-justify">Once the final product has been delivered and accepted, PixelPro may permit minor corrections at no additional cost. This includes small spelling errors, text updates, or simple adjustments that do not require a re-edit of the full project. Only one revised video, image set, or deliverable will be provided under this courtesy correction policy.</p>
                <p className="mt-3 text-justify">Requests for further revisions beyond what is described above will be considered chargeable work. PixelPro will inform the Client of any additional fees before commencing further corrections.</p>
                <p className="mt-3 text-justify">The Client has seven days from the date of delivery or collection to submit revision requests. After this period, PixelPro is not obligated to provide free corrections. Additional revisions after the seven-day window will be billed according to PixelPro's prevailing rates.</p>
                <p className="mt-3 text-justify">This section ensures that both parties maintain clear expectations regarding editing workload, creative boundaries, and production timelines.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">17. RETURNS POLICY</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. provides services that are customised, labour-intensive, and event-specific. As such, all delivered products, including photographs, videos, design files, stage diagrams, and AV-related deliverables, are considered final and non-returnable.</p>
                <p className="mt-3 text-justify">The Client acknowledges that once services have been rendered and the final product has been delivered, no returns or exchanges of the Produced Work will be accepted. This includes situations where the Client has changed personal preferences, creative expectations, or stylistic tastes after the work has been completed.</p>
                <p className="mt-3 text-justify">This policy should be read together with Section 12 (Refund Policy) and Section 16 (Corrections), which outline the conditions under which corrections or refunds may be applicable. Outside of those clearly stated scenarios, no returns, replacements, or reworks will be provided.</p>
                <p className="mt-3 text-justify">All work delivered by PixelPro is based on the professional skill, preparation, and artistic judgement exercised during the Event and post-production. Because these services cannot be "returned" in a traditional sense, the Client agrees that returns do not apply to creative output of this nature.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">18. PERSONAL DATA PROTECTION ACT (PDPA) COMPLIANCE</h2>
                <p className="text-justify">PixelPro Studios Pte. Ltd. is committed to protecting the personal data of its Clients in accordance with the Personal Data Protection Act 2012 (PDPA). By engaging PixelPro's services, the Client consents to PixelPro collecting, using, storing, and processing personal data for purposes directly related to the fulfilment of the agreed services.</p>
                <p className="mt-3 text-justify">Such purposes include, but are not limited to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>communicating with the Client regarding project details, scheduling, and deliverables</li>
                  <li>preparing quotations, invoices, contracts, and administrative records</li>
                  <li>coordinating crew, equipment, and talent for the Event</li>
                  <li>delivering the final photographs, videos, designs, or AV-related materials</li>
                  <li>using selected Produced Work for portfolio or promotional purposes unless otherwise restricted under Section 2 (Rights)</li>
                </ul>
                <p className="mt-3 text-justify">PixelPro will not disclose the Client's personal data to third parties without prior consent, unless such disclosure is required by law or necessary for the completion of the project. Examples include sharing limited information with contractors, crew members, or authorised vendors who are directly involved in the project delivery.</p>
                <p className="mt-3 text-justify">PixelPro takes reasonable steps to safeguard personal data through secure storage systems and controlled access measures. However, the Client acknowledges that no method of transmission or storage is completely free from risk, and PixelPro shall not be held liable for unauthorised access, loss, or disclosure beyond what is reasonably preventable.</p>
                <p className="mt-3 text-justify">The Client may request to access, update, or withdraw consent for the use of their personal data by submitting a written request to PixelPro. Withdrawal of consent may affect PixelPro's ability to continue providing services, and the Client remains responsible for any fees incurred up to that point.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">19. ENTIRE AGREEMENT</h2>
                <p className="text-justify">These Terms and Conditions constitute the entire agreement between the Client and PixelPro Studios Pte. Ltd. regarding the services to be provided. They supersede any prior verbal or written discussions, proposals, quotations, emails, or understandings relating to the same subject matter.</p>
                <p className="mt-3 text-justify">No representation, warranty, or promise shall be binding on either party unless it is expressly stated within these Terms or provided in writing and agreed upon by both parties. Any amendment, waiver, or modification of this agreement must be made in writing and signed or formally acknowledged by both the Client and PixelPro.</p>
                <p className="mt-3 text-justify">The Client acknowledges that they have not relied on any statement, description, or assurance not expressly included in these Terms, and that these Terms reflect the full and complete understanding of the obligations and expectations between both parties.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">20. GOVERNING LAW</h2>
                <p className="text-justify">This agreement shall be governed by and interpreted in accordance with the laws of the Republic of Singapore. Any disputes, claims, or disagreements arising out of or relating to these Terms and Conditions, the services provided, or the conduct of either party shall be submitted to the exclusive jurisdiction of the courts of Singapore.</p>
                <p className="mt-3 text-justify">The Client agrees that all legal proceedings shall take place in Singapore, regardless of where the Event is held or where the Client is located. This ensures consistency in interpretation and enforcement of these Terms.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display text-brand-off-white mb-3">21. SEVERABILITY</h2>
                <p className="text-justify">If any provision within these Terms and Conditions is found to be invalid, unlawful, or unenforceable by a court of competent jurisdiction, that provision shall be interpreted in a manner that most closely reflects the original intent while remaining enforceable. If such interpretation is not possible, the provision shall be deemed severed from this agreement.</p>
                <p className="mt-3 text-justify">The remaining provisions of these Terms and Conditions shall continue in full force and effect and shall not be affected by the removal of the invalid or unenforceable clause.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
