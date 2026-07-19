import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarPremium from '@/components/custom/NavbarPremium';
import ContactModal from '@/components/custom/ContactModal';
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
    "name": "Benefits",
    "href": "#process"
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
  },
  { name: "Home2", href: "/home2" },

];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarPremium
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3GRpdvQoJFjolu5kC3kYNdQAvbt/uploaded-1784463454654-a2x049hk.png"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <ContactModal />
      <SectionErrorBoundary name="footer">
        <footer className="w-full bg-background py-12 border-t border-border mt-auto">
          <div className="w-content-width mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-foreground">United Team</h3>
                <p className="text-accent text-sm leading-relaxed">
                  Professional Amazon Relay Dispatch Services helping carriers across the United States with reliable dispatch support, efficient load management, and 24/7 communication.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary-cta transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://t.me/un1tedteam" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary-cta transition-colors duration-300">
                    <Send className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/UT1TemurIsmatov" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary-cta transition-colors duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                <nav className="flex flex-col gap-2">
                  {["Home", "About", "Services", "FAQ", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                      className="text-accent hover:text-primary-cta transition-colors duration-300 text-sm w-fit"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-foreground">Contact</h4>
                <div className="flex flex-col gap-3 text-sm">
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <a href="mailto:uniteddispatch24@gmail.com" className="text-accent hover:text-primary-cta transition-colors duration-300">
                      uniteddispatch24@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">United States</p>
                    <a href="tel:+15136534606" className="text-accent hover:text-primary-cta transition-colors duration-300">
                      +1 (513) 653-4606
                    </a>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Uzbekistan</p>
                    <a href="tel:+998917081443" className="text-accent hover:text-primary-cta transition-colors duration-300">
                      +998 91 708 14 43
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-foreground">Head Office</h4>
                <div className="text-sm">
                  <a 
                    href="https://maps.google.com/?q=Dagbitskiy+Street,+Samarqand,+Uzbekistan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary-cta transition-colors duration-300 flex flex-col gap-1"
                  >
                    <span>Dagbitskiy Street</span>
                    <span>Samarqand, Uzbekistan</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-accent text-sm">
                © 2026 United Team. All Rights Reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-accent">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-cta transition-colors duration-300">Instagram</a>
                <span></span>
                <a href="https://t.me/un1tedteam" target="_blank" rel="noopener noreferrer" className="hover:text-primary-cta transition-colors duration-300">Telegram</a>
                <span></span>
                <a href="https://wa.me/UT1TemurIsmatov" target="_blank" rel="noopener noreferrer" className="hover:text-primary-cta transition-colors duration-300">WhatsApp</a>
              </div>
            </div>
          </div>
        </footer>
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
