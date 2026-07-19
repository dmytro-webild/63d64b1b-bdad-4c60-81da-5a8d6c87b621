import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesMediaGrid from "@/components/sections/features/FeaturesMediaGrid";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";

export default function Home2Page() {
  return (
    <div className="min-h-svh bg-background text-foreground flex flex-col">
      <main className="flex-grow">
        <HeroSplit
          tag="United Team Dispatch"
          title="Reliable Amazon Relay Dispatch Services"
          description="Maximize your earnings and minimize downtime. Our professional dispatchers handle the load management so you can focus on driving."
          primaryButton={{ text: "Get Started", href: "#contact" }}
          secondaryButton={{ text: "Learn More", href: "#about" }}
          imageSrc="https://picsum.photos/seed/921821162/1200/800"
          textAnimation="slide-up"
        />

        <FeaturesMediaGrid
          tag="Our Services"
          title="Everything you need to keep moving"
          description="Comprehensive dispatch solutions tailored for Amazon Relay carriers across the United States."
          textAnimation="fade-blur"
          items={[
            {
              title: "24/7 Load Booking",
              description: "Our team works around the clock to secure the best loads and keep your trucks moving without interruption.",
              imageSrc: "https://picsum.photos/seed/1998908035/1200/800"
            },
            {
              title: "Route Optimization",
              description: "We plan the most efficient routes to maximize your profitability and reduce empty miles.",
              imageSrc: "https://picsum.photos/seed/1455271756/1200/800"
            },
            {
              title: "Dedicated Support",
              description: "Get a dedicated dispatcher who understands your preferences and business goals.",
              imageSrc: "https://picsum.photos/seed/1738517660/1200/800"
            },
            {
              title: "Performance Tracking",
              description: "Detailed analytics and reporting to help you track your earnings and fleet performance.",
              imageSrc: "https://picsum.photos/seed/921311085/1200/800"
            }
          ]}
        />

        <TestimonialMarqueeCards
          tag="Carrier Success"
          title="Trusted by carriers nationwide"
          description="See what our partners have to say about working with United Team."
          textAnimation="slide-up"
          testimonials={[
            {
              name: "James Wilson",
              role: "Owner Operator",
              quote: "Since partnering with United Team, my gross revenue has increased by 30%. They handle all the Amazon Relay headaches.",
              imageSrc: "https://picsum.photos/seed/890099658/1200/800"
            },
            {
              name: "Robert Martinez",
              role: "Fleet Owner",
              quote: "The 24/7 support is incredible. Whenever my drivers have an issue at a facility, the dispatch team resolves it immediately.",
              imageSrc: "https://picsum.photos/seed/937687634/1200/800"
            },
            {
              name: "Sarah Thompson",
              role: "Logistics Manager",
              quote: "Their route optimization has significantly reduced our deadhead miles. Highly recommend their services.",
              imageSrc: "https://picsum.photos/seed/1647443482/1200/800"
            },
            {
              name: "David Chen",
              role: "Independent Carrier",
              quote: "Professional, reliable, and always looking out for my best interests. The best dispatch service I've used.",
              imageSrc: "https://picsum.photos/seed/491708269/1200/800"
            }
          ]}
        />
      </main>
    </div>
  );
}