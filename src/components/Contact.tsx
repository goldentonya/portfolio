import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "24808904-f5c3-455b-8bda-a420985754e5",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Transmission sent", description: "Thanks for reaching out — I'll be in touch soon." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: "Something went wrong", description: data.message || "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
              ✦ Transmission ✦
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-wide">
              Let's connect
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Open to opportunities in product, growth, and experimentation roles. Let's discuss how I can help your team make smarter, data-driven decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
            <form
              onSubmit={handleSubmit}
              className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 md:p-8 space-y-4 shadow-[0_0_30px_hsl(199_90%_55%/0.08)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    maxLength={255}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Subject"
                  maxLength={150}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message"
                  rows={6}
                  maxLength={2000}
                  required
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full font-medium group shadow-[0_0_15px_hsl(199_90%_55%/0.2)]">
                <Send size={16} className="mr-2 transition-transform group-hover:translate-x-0.5" />
                {submitting ? "Sending..." : "Send Transmission"}
              </Button>
            </form>

            <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 md:p-8 space-y-6 shadow-[0_0_30px_hsl(199_90%_55%/0.08)]">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 tracking-wide">
                  Direct Channels
                </h3>
                <p className="text-sm text-muted-foreground">Reach out through any of these.</p>
              </div>

              <a
                href="mailto:goldentonya33@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="p-2 rounded-md bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-text-tertiary">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                    goldentonya33@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/tonyagolden/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="p-2 rounded-md bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                  <Linkedin size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-text-tertiary">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    /in/tonyagolden
                  </p>
                </div>
              </a>

              <a href="tel:7646149979" className="flex items-start gap-3 group">
                <div className="p-2 rounded-md bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-text-tertiary">Phone</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    764-614-9979
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-2 text-sm text-text-tertiary pt-4 border-t border-primary/10">
                <MapPin size={14} />
                <span>Tampa, FL</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
