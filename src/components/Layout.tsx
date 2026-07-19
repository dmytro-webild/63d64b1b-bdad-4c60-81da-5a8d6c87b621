import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Send, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";
import { motion } from "framer-motion";

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
        <footer data-section="footer" aria-label="Site footer" className="relative w-full py-20 bg-background overflow-hidden">
          <div className="w-content-width mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Column 1: About */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                <h3 className="font-bold text-2xl mb-6 text-foreground">United Team</h3>
                <p className="text-accent mb-8 leading-relaxed">
                  Professional Amazon Relay Dispatch Services helping carriers maximize profits with experienced dispatchers, reliable communication, and 24/7 dispatch support across the United States.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://instagram.com/ut_logistics" className="flex items-center justify-center size-10 rounded-full bg-card shadow-sm text-foreground hover:bg-primary-cta hover:text-primary-cta-text hover:scale-110 transition-all duration-300">
                    <Instagram className="size-5" />
                  </a>
                  <a href="https://t.me/un1tedteam" className="flex items-center justify-center size-10 rounded-full bg-card shadow-sm text-foreground hover:bg-primary-cta hover:text-primary-cta-text hover:scale-110 transition-all duration-300">
                    <Send className="size-5" />
                  </a>
                  <a href="https://wa.me/15136534606" className="flex items-center justify-center size-10 rounded-full bg-card shadow-sm text-foreground hover:bg-primary-cta hover:text-primary-cta-text hover:scale-110 transition-all duration-300">
                    <MessageCircle className="size-5" />
                  </a>
                </div>
              </motion.div>

              {/* Column 2: Quick Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <h3 className="font-bold text-xl mb-6 text-foreground">Quick Links</h3>
                <ul className="flex flex-col gap-4">
                  {['Home', 'About', 'Services', 'Why Choose Us', 'FAQ', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-accent hover:text-primary-cta hover:translate-x-1 transition-all duration-300 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3: Contact */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col"
              >
                <h3 className="font-bold text-xl mb-6 text-foreground">Contact</h3>
                <ul className="flex flex-col gap-5">
                  <li>
                    <a href="mailto:uniteddispatch24@gmail.com" className="flex items-start gap-3 text-accent hover:text-primary-cta transition-colors duration-300 group">
                      <Mail className="size-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span>uniteddispatch24@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+15136534606" className="flex items-start gap-3 text-accent hover:text-primary-cta transition-colors duration-300 group">
                      <Phone className="size-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span>+1 (513) 653-4606</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-accent">
                    <MapPin className="size-5 mt-0.5 shrink-0" />
                    <span>Dagbitskiy Street<br/>Samarkand, Uzbekistan</span>
                  </li>
                  <li className="flex items-start gap-3 text-accent">
                    <Clock className="size-5 mt-0.5 shrink-0" />
                    <span>Available 24/7</span>
                  </li>
                </ul>
              </motion.div>

              {/* Column 4: Office Location */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col"
              >
                <h3 className="font-bold text-xl mb-6 text-foreground">Office</h3>
                <a href="https://maps.app.goo.gl/SxVepsSyJfRCzcNH7" target="_blank" rel="noopener noreferrer" className="block w-full h-[220px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-4 relative group">
                  <iframe 
                    src="https://maps.google.com/maps?q=Dagbitskiy+Street,+Samarkand,+Uzbekistan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none group-hover:opacity-90 transition-opacity duration-300"
                  ></iframe>
                  <div className="absolute inset-0 bg-transparent cursor-pointer"></div>
                </a>
                <div className="text-accent">
                  <p className="font-semibold text-foreground mb-1">Head Office</p>
                  <p>Dagbitskiy Street</p>
                  <p>Samarkand, Uzbekistan</p>
                </div>
              </motion.div>

            </div>

            {/* Bottom Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <p className="text-accent text-sm">© 2026 United Team. All Rights Reserved.</p>
              <div className="flex items-center gap-6 text-sm text-accent">
                <a href="#" className="hover:text-primary-cta transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-primary-cta transition-colors duration-300">Terms of Service</a>
              </div>
            </motion.div>
          </div>
        </footer>
      </SectionErrorBoundary>
    </StyleProvider>
  );
}