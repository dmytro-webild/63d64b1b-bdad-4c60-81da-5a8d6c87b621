import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesMediaGrid from "@/components/sections/features/FeaturesMediaGrid";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Home 2"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroSplit
          tag="Welcome to Home 2"
          title="Build faster with our new platform"
          description="The ultimate tool for modern teams to collaborate and ship products at lightning speed. Experience the next generation of workflow management."
          primaryButton={{ text: "Start for free", href: "/contact" }}
          secondaryButton={{ text: "Book a demo", href: "/about" }}
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          textAnimation="slide-up"
        />

        <FeaturesMediaGrid
          tag="Features"
          title="Everything you need to scale"
          description="Powerful features designed to help you grow your business without the growing pains."
          textAnimation="fade-blur"
          items={[
            {
              title: "Real-time Collaboration",
              description: "Work together with your team in real-time, no matter where they are located.",
              imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your performance with our comprehensive analytics dashboard.",
              imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Automated Workflows",
              description: "Save time by automating repetitive tasks and focusing on what truly matters.",
              imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Bank-grade Security",
              description: "Rest easy knowing your data is protected by enterprise-level security protocols.",
              imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
            }
          ]}
        />

        <TestimonialMarqueeCards
          tag="Testimonials"
          title="Loved by innovative teams"
          description="See what our customers have to say about their experience building with us."
          textAnimation="slide-up"
          testimonials={[
            {
              name: "Sarah Jenkins",
              role: "CTO at TechCorp",
              quote: "This platform has completely transformed how our engineering team operates. We ship 3x faster now.",
              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
            },
            {
              name: "Michael Chen",
              role: "Product Manager",
              quote: "The analytics features alone are worth the investment. It gives us clarity we never had before.",
              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
            },
            {
              name: "Elena Rodriguez",
              role: "Design Lead",
              quote: "Finally, a tool that understands the balance between powerful features and an intuitive interface.",
              imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
            },
            {
              name: "David Smith",
              role: "Founder",
              quote: "We evaluated dozens of solutions, and this was by far the most comprehensive and reliable.",
              imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
            }
          ]}
        />
      </main>

      <FooterSimple
        brand="Home 2"
        copyright="© 2024 Home 2 Inc. All rights reserved."
        columns={[
          {
            title: "Product",
            items: [
              { label: "Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Changelog", href: "#" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About", href: "/about" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}