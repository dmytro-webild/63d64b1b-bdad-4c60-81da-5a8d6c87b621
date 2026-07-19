import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Send } from "lucide-react";
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
        <footer data-section="footer" aria-label="Site footer" className="relative w-full py-20">
          <div className="flex flex-col w-content-width mx-auto px-10 pb-5 rounded-lg card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-10">
              <div>
                <h3 className="font-bold text-lg mb-4">United Team</h3>
                <p className="text-accent">Amazon Relay Dispatch Services</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Head Office</h3>
                <p className="text-accent">Dagbitskiy Street</p>
                <p className="text-accent">Samarqand, Uzbekistan</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <p className="text-accent">Email: uniteddispatch24@gmail.com</p>
                <p className="text-accent">Phone: +1 (513) 653-4606</p>
                <p className="text-accent">Instagram: @ut_logistics</p>
                <p className="text-accent">Telegram: @un1tedteam</p>
                <p className="text-accent">WhatsApp: @UT1TemurIsmatov</p>
              </div>
            </div>
            <div className="font-semibold py-5 text-center text-4xl md:text-6xl lg:text-8xl">United Team © 2026</div>
            <div className="h-px w-full mb-5 bg-foreground/50" />
            <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
              <span className="text-base opacity-75">All Rights Reserved</span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" className="flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text cursor-pointer">
                  <Instagram className="size-4" strokeWidth={1.5} />
                </a>
                <a href="https://t.me/un1tedteam" className="flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text cursor-pointer">
                  <Send className="size-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
