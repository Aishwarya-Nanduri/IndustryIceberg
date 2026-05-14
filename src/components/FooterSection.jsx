import logo from "../assets/logo.png";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <div className="bg-bg-main" id="footer">
      <section className="px-[5%] mb-16">
        <div className="py-24 px-8 text-center bg-bg-surface border border-text-primary/5 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary mb-6 block">
              Let's work together
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-10 max-w-3xl mx-auto text-text-primary leading-tight tracking-tight">
              Ready to elevate your pharma operations?
            </h2>
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-text-primary text-bg-main rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-xl active:scale-95 group">
              Schedule a Demo <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="px-[5%] py-20 border-t border-text-primary/5 bg-bg-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-[1400px] mx-auto mb-20">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Industry Iceberg" className="h-10 mb-8" />
            <p className="text-text-secondary text-lg leading-relaxed opacity-70 max-w-sm">
              Powering intelligent & compliant decisions across pharma and life sciences with cutting-edge AI technology.
            </p>
          </div>

          {/* LINKS GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary">Company</h3>
              <ul className="space-y-3">
                {['Who We Are', 'Our Vision', 'Contact Us', 'Careers'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-secondary opacity-60 hover:opacity-100 hover:text-accent-primary transition-all inline-block hover:translate-x-1">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary">Products</h3>
              <ul className="space-y-3">
                {['Compliance Loop', 'CompliSense', 'VeritaScribe', 'Live LMS', 'ECTD AI'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-secondary opacity-60 hover:opacity-100 hover:text-accent-primary transition-all inline-block hover:translate-x-1">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary">Services</h3>
              <ul className="space-y-3">
                {['Site Selection', 'Video Creation', 'AI Solutions', 'Enterprise LLM'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-secondary opacity-60 hover:opacity-100 hover:text-accent-primary transition-all inline-block hover:translate-x-1">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-bold text-text-primary">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-text-secondary group">
                <Mail size={20} className="text-accent-primary mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">info@industryiceberg.com</p>
              </div>
              <div className="flex items-start gap-4 text-text-secondary group">
                <Phone size={20} className="text-accent-primary mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">+91 91541 69469</p>
              </div>
              <div className="flex items-start gap-4 text-text-secondary group">
                <MapPin size={20} className="text-accent-primary mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  5th floor, Rama Enclave, Miyapur <br />
                  Hyderabad, India 500049
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-text-primary/5 flex flex-col md:row items-center justify-between gap-6 text-sm text-text-secondary opacity-50">
          <p>© 2026 IndustryIceberg. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}