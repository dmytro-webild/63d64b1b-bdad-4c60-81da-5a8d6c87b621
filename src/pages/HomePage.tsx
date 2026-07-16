import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      tag="United Team Logistics"
      title="Professional Amazon Relay Dispatch Services Across the United States"
      description="United Team provides reliable 24/7 Amazon Relay dispatch services, helping carriers and owner-operators maximize revenue through strategic load planning, route optimization, rate negotiation, and dedicated support."
      primaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/call-center-senior-agent-providing-guidance-help-customers-using-ai_482257-126049.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="partners" data-section="partners">
    <SectionErrorBoundary name="partners">
          <SocialProofMarquee
      tag="Our Partners"
      title="Trusted by Carriers"
      description="We are proud to partner with leading logistics companies to drive excellence."
      names={[
        "Mansur Logistics Inc",
        "REM Express LLC",
        "Dale & R Inc",
        "Nodir Trucking Corporation",
        "Global Freight Solutions",
        "Prime Route Logistics",
        "Elite Express Partners",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="Founded on October 1, 2023, United Team was built with one mission: to deliver honest, transparent, and professional dispatch services that help carriers succeed."
      author="United Team Founders"
      role="Management Team"
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-wearing-trucker-hat_23-2149432362.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesTaggedCards
      tag="Core Services"
      title="Dispatch Services"
      description="Professional support for every aspect of your fleet operations."
      items={[
        {
          tag: "Relay",
          title: "Amazon Relay Dispatch",
          description: "Expert management of Amazon Relay loads.",
          primaryButton: {
            text: "Learn More",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/save-front-side_187299-44781.jpg",
        },
        {
          tag: "Support",
          title: "24/7 Operations",
          description: "Around the clock dispatcher support.",
          primaryButton: {
            text: "Get Support",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/customer-service-24-hours-7-days-support_53876-120656.jpg",
        },
        {
          tag: "Revenue",
          title: "Rate Negotiation",
          description: "Maximize every load revenue effectively.",
          primaryButton: {
            text: "Negotiate Rates",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/rate-contract-shaking-hands-graphic-heart_1134-1180.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesRevealCardsBento
      tag="Process"
      title="Our Dispatch Workflow"
      description="A streamlined approach to efficient logistics."
      items={[
        {
          title: "Carrier Onboarding",
          description: "Simple and fast digital setup.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/office-hardware_1098-14352.jpg",
        },
        {
          title: "Load Planning",
          description: "Strategic route optimization.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-relaxed-freelance-worker-listening-music-headphones-working-with-laptop-portrait-young-specialists-international-corporation-spending-time-light-cozy-office_197531-3785.jpg",
        },
        {
          title: "Rate Negotiation",
          description: "Best possible market rates.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/employees-coworker-with-disability-looking-figures-inclusive-office_482257-126236.jpg",
        },
        {
          title: "Dispatch Monitoring",
          description: "Proactive real-time tracking.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-walking-with-colleague-outside-office-building_107420-74360.jpg",
        },
        {
          title: "Delivery Tracking",
          description: "Automated status updates.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-employee-sending-text-messages-smartphone-work-chatting-social-media-coworking-space-sitting-workplace-desk-office-worker-chatting-telephone-typing-cellphone_482257-51244.jpg",
        },
        {
          title: "Performance Reports",
          description: "Detailed operational insights.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/call-center-staff-member-providing-step-by-step-guidance-customer_482257-125975.jpg",
        },
        {
          title: "Continuous Support",
          description: "Long-term partnership focus.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-care-office-cleaning_23-2149374449.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="operations" data-section="operations">
    <SectionErrorBoundary name="operations">
          <MetricsSimpleCards
      tag="Live Operations"
      title="Operational Performance"
      description="Real-time metrics showing our dispatch impact."
      metrics={[
        {
          value: "127",
          description: "Loads Booked Weekly",
        },
        {
          value: "42,350",
          description: "Miles Planned",
        },
        {
          value: "31",
          description: "Active Drivers",
        },
        {
          value: "24/7",
          description: "Operational Status",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Leadership"
      title="Meet The Founders"
      description="Built by logistics experts."
      members={[
        {
          name: "Ismatov Temur",
          role: "Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1551.jpg",
        },
        {
          name: "Subkhonov Umed",
          role: "Co-Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-volunteers-with-boxes_23-2149196099.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Trust"
      title="What Our Partners Say"
      description="We build lasting relationships through excellence."
      testimonials={[
        {
          name: "John Doe",
          role: "CEO",
          company: "Mansur Logistics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-handsome-business-leader-cafe_1262-3537.jpg",
        },
        {
          name: "Jane Smith",
          role: "Fleet Manager",
          company: "REM Express",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-working-call-center_23-2149288227.jpg",
        },
        {
          name: "Alex Rivera",
          role: "Owner",
          company: "Dale & R Inc",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-working-logistic_23-2148886807.jpg",
        },
        {
          name: "Sarah Lee",
          role: "Dispatch",
          company: "Nodir Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-happy-corporate-woman-suit-stands-street-smiles-poses-near-office_1258-193986.jpg",
        },
        {
          name: "David Kim",
          role: "Owner-Op",
          company: "Road Stars",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-asian-woman-business-owner-glasses-sitting-cafe-with-notebook-smiling-camera_1258-199055.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Common Questions"
      title="Frequently Asked Questions"
      description="Get clear answers about our services."
      items={[
        {
          question: "What is Amazon Relay Dispatch?",
          answer: "Professional coordination for Amazon loads.",
        },
        {
          question: "How fast can I start?",
          answer: "Within 24 hours of onboarding.",
        },
        {
          question: "Are you 24/7?",
          answer: "Yes, dispatch support is constant.",
        },
        {
          question: "Do you work with owner-operators?",
          answer: "Yes, we focus on owner-operators.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Start Today"
      text="Ready to scale your fleet operations?"
      primaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
