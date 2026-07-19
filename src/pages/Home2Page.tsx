import React from "react";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesBentoGrid from "@/components/sections/features/FeaturesBentoGrid";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function Home2Page() {
  return (
    <div className="min-h-svh bg-background text-foreground flex flex-col">
      <main className="flex-grow">
        <HeroBillboard
          tag="Welcome Back"
          title="Build Faster, Scale Better"
          description="The ultimate platform for modern teams to collaborate, design, and ship products at lightning speed."
          primaryButton={{ text: "Start Free Trial", href: "/signup" }}
          secondaryButton={{ text: "View Demo", href: "/demo" }}
          imageSrc="https://picsum.photos/seed/1667031550/1200/800"
          textAnimation="fade-blur"
        />

        <FeaturesBentoGrid
          tag="Features"
          title="Everything you need to succeed"
          description="Powerful tools designed to help your team do their best work, all in one place."
          textAnimation="slide-up"
          features={[
            {
              title: "Real-time Collaboration",
              description: "Work together with your team in real-time, no matter where you are.",
              imageSrc: "https://picsum.photos/seed/1400275347/1200/800"
            },
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your performance with our powerful analytics engine.",
              imageSrc: "https://picsum.photos/seed/870068746/1200/800"
            },
            {
              title: "Seamless Integrations",
              description: "Connect with all your favorite tools with just a few clicks.",
              imageSrc: "https://picsum.photos/seed/368816039/1200/800"
            },
            {
              title: "Enterprise Security",
              description: "Bank-grade security to keep your data safe and compliant.",
              imageSrc: "https://picsum.photos/seed/1906947971/1200/800"
            }
          ]}
        />

        <TestimonialMarqueeCards
          tag="Testimonials"
          title="Loved by teams worldwide"
          description="See what our customers have to say about their experience with our platform."
          textAnimation="fade"
          testimonials={[
            {
              name: "Sarah Jenkins",
              role: "CTO at TechCorp",
              quote: "This platform has completely transformed how our engineering team operates. Highly recommended!",
              imageSrc: "https://picsum.photos/seed/1145585956/1200/800"
            },
            {
              name: "Michael Chen",
              role: "Product Manager",
              quote: "The intuitive interface and powerful features make it a breeze to manage our product roadmap.",
              imageSrc: "https://picsum.photos/seed/293054984/1200/800"
            },
            {
              name: "Emily Rodriguez",
              role: "Design Lead",
              quote: "Finally, a tool that understands the needs of designers and developers alike.",
              imageSrc: "https://picsum.photos/seed/1568067520/1200/800"
            }
          ]}
        />

        <ContactCta
          tag="Ready to start?"text="Join thousands of satisfied users and take your business to the next level today."
          primaryButton={{ text: "Get Started Now", href: "/signup" }}
          secondaryButton={{ text: "Talk to Sales", href: "/contact" }}
          textAnimation="slide-up"
        />
      </main>
    </div>
  );
}