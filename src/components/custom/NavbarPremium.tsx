import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cls } from "@/lib/utils";

interface NavbarPremiumProps {
  logoImageSrc: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

export default function NavbarPremium({ logoImageSrc, navItems, ctaButton }: NavbarPremiumProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const languages = [
    { code: "EN", label: "English", flag: "🇬🇧" },
    { code: "RU", label: "Русский", flag: "🇷🇺" },
    { code: "UZ", label: "O'zbek", flag: "🇺🇿" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === "#" || href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-[1280px] px-4 md:px-0 transition-all duration-300"
      >
        <div 
          className={cls(
            "mx-auto flex items-center justify-between px-6 md:px-8 transition-all duration-300",
            "bg-[rgba(255,255,255,0.88)] border border-[rgba(30,50,120,0.08)]",
            scrolled ? "h-[70px] backdrop-blur-[24px] shadow-[0_16px_48px_rgba(30,60,150,0.1)]" : "h-[78px] backdrop-blur-[18px] shadow-[0_12px_40px_rgba(30,60,150,0.08)]",
            "rounded-[24px]"
          )}
        >
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img src={logoImageSrc} alt="United Team" className="w-[170px] h-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-[32px]">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="relative group text-[15px] font-medium text-foreground hover:text-primary-cta transition-colors duration-250"
              >
                {item.name}
                <span 
                  className={cls(
                    "absolute -bottom-1 left-0 w-full h-[2px] bg-primary-cta rounded-full transition-transform duration-250 origin-left",
                    activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-black/5 transition-colors text-sm font-medium text-foreground"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden py-1"
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-black/5 transition-colors text-left"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <a
              href={ctaButton.href}
              onClick={(e) => handleNavClick(e, ctaButton.href)}
              className="px-[28px] py-[16px] rounded-[16px] bg-primary-cta text-primary-cta-text font-medium text-sm transition-all duration-250 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(20,20,143,0.25)]"
            >
              {ctaButton.text}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <img src={logoImageSrc} alt="United Team" className="w-[150px] h-auto object-contain" />
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-2 text-foreground bg-black/5 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-semibold text-foreground"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="h-px w-full bg-black/10 my-4" />
              
              <div className="flex flex-col gap-4">
                <p className="text-sm text-accent font-medium uppercase tracking-wider">Language</p>
                <div className="flex gap-2">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={cls(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        currentLang === lang.code ? "bg-primary-cta text-primary-cta-text" : "bg-black/5 text-foreground"
                      )}
                    >
                      {lang.flag} {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-black/10">
              <a
                href={ctaButton.href}
                onClick={(e) => handleNavClick(e, ctaButton.href)}
                className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary-cta text-primary-cta-text font-semibold text-lg"
              >
                {ctaButton.text}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
