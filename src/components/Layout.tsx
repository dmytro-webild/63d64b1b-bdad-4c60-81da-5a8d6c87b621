import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Send, MessageCircle } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Process",
    "href": "#process"
  },
  {
    "name": "Operations",
    "href": "#operations"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Office",
    "href": "#office"
  },
  {
    "name": "Partners",
    "href": "#partners"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="United Team"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "GET STARTED",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="United Team © 2026"
      copyright="All Rights Reserved"
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",
        },
        {
          icon: Send,
          href: "https://t.me/un1tedteam",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
