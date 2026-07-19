import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cls } from "@/lib/utils";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";
import DropdownMenu from "@/components/ui/DropdownMenu";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    fleetSize: "",
    serviceNeeded: "",
    contactMethod: "",
    message: ""
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handleOpen as EventListener);
    return () => window.removeEventListener("open-contact-modal", handleOpen as EventListener);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Simulate API call for email submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        fleetSize: "",
        serviceNeeded: "",
        contactMethod: "",
        message: ""
      });
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-[24px] shadow-2xl border border-border flex flex-col"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-card/95 backdrop-blur border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Contact United Team</h2>
                <p className="text-sm text-accent mt-1">Have questions or ready to start dispatching? Fill out the form below.</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-foreground/5 text-accent hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                  <p className="text-accent">Thank you! Your message has been sent successfully. Our team will contact you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Logistics LLC"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Fleet Size</Label>
                      <DropdownMenu
                        options={[
                          { label: "Owner Operator", value: "Owner Operator" },
                          { label: "2–5 Trucks", value: "2-5 Trucks" },
                          { label: "6–20 Trucks", value: "6-20 Trucks" },
                          { label: "20+ Trucks", value: "20+ Trucks" }
                        ]}
                        value={formData.fleetSize}
                        onChange={(val) => setFormData({ ...formData, fleetSize: val })}
                        placeholder="Select fleet size"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Service Needed</Label>
                      <DropdownMenu
                        options={[
                          { label: "Amazon Relay Dispatch", value: "Amazon Relay Dispatch" },
                          { label: "Dedicated Dispatcher", value: "Dedicated Dispatcher" },
                          { label: "Route Optimization", value: "Route Optimization" },
                          { label: "General Inquiry", value: "General Inquiry" }
                        ]}
                        value={formData.serviceNeeded}
                        onChange={(val) => setFormData({ ...formData, serviceNeeded: val })}
                        placeholder="Select service"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Contact Method</Label>
                    <div className="flex flex-wrap gap-4">
                      {["Email", "Phone", "WhatsApp"].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                            className="w-4 h-4 text-primary-cta border-border focus:ring-primary-cta"
                          />
                          <span className="text-sm text-foreground">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded">
                      <AlertCircle className="w-4 h-4" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-4 pt-4 border-t border-border">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 text-sm font-medium text-foreground hover:bg-foreground/5 rounded transition-colors cursor-pointer"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center min-w-[140px] px-6 py-2.5 text-sm font-medium text-primary-cta-text bg-gradient-to-r from-primary-cta to-blue-600 hover:opacity-90 rounded shadow-lg shadow-primary-cta/20 transition-all disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
