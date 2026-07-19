import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesBentoGrid from "@/components/sections/features/FeaturesBentoGrid";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/signup" }}
      />

      <main className="flex-grow">
        <HeroBillboard
          tag="Welcome Back"
          title="Build Faster, Scale Better"
          description="The ultimate platform for modern teams to collaborate, design, and ship products at lightning speed."
          primaryButton={{ text: "Start Free Trial", href: "/signup" }}
          secondaryButton={{ text: "View Demo", href: "/demo" }}
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
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
              imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            },
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your performance with our powerful analytics engine.",
              imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            },
            {
              title: "Seamless Integrations",
              description: "Connect with all your favorite tools with just a few clicks.",
              imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
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
              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            },
            {
              name: "Michael Chen",
              role: "Product Manager",
              quote: "The intuitive interface and powerful features make it a breeze to manage our product roadmap.",
              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            },
            {
              name: "Emily Rodriguez",
              role: "Design Lead",
              quote: "Finally, a tool that understands the needs of designers and developers alike.",
              imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
            }
          ]}
        />

        <ContactCta
          tag="Ready to start?"
          text="Join thousands of satisfied users and take your business to the next level today."
          primaryButton={{ text: "Get Started Now", href: "/signup" }}
          secondaryButton={{ text: "Talk to Sales", href: "/contact" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Webild"
        copyright="© 2024 Webild Inc. All rights reserved."
        columns={[
          {
            title: "Product",
            items: [
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Changelog", href: "/changelog" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}