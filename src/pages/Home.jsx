import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pharma from "../assets/hero_img.png";
import { products, services } from "../data/cardsdata";
import FooterSection from "../components/FooterSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const getCards = () => {
    if (activeTab === "products") return products;
    if (activeTab === "services") return services;
    return [...products, ...services];
  };

  return (
    <div className="bg-bg-main min-h-screen relative font-sans selection:bg-accent-primary/30">
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between h-screen min-h-175 px-[5%] overflow-hidden gap-12 pt-24 lg:pt-0" id="hero">
        {/* Animated Glow */}
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-accent-gradient opacity-10 blur-[150px] pointer-events-none -z-10 animate-pulse"></div>

        <div className="flex-1 z-10 max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-accent-primary font-accent text-xl lg:text-2xl mb-4 block tracking-wide">Leading the future</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.2] mb-8 text-text-primary tracking-tight">
              Built on <span className="text-gradient-accent">Pharma.</span><br />
              Powered by <span className="text-gradient-accent">AI.</span>
            </h1>

            <div className="space-y-6 mb-12 border-l-4 border-accent-primary pl-8 mx-auto lg:mx-0 max-w-xl text-left">
              <p className="text-xl text-text-secondary leading-relaxed font-medium">
                IndustryIceberg builds AI-driven platforms that automate complex workflows and ensure compliance across regulated industries.
              </p>
              <p className="text-base text-text-secondary opacity-70 leading-relaxed hidden md:block">
                Accelerating pharma operations with domain expertise and measurable impact through advanced AI-powered solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <button
                className="px-10 py-4 bg-text-primary text-bg-main rounded-full font-bold text-lg transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-text-primary/20 active:scale-95"
                onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </button>
              <button
                className="px-10 py-4 bg-transparent border-2 border-text-primary/10 text-text-primary rounded-full font-bold text-lg transition-all hover:bg-text-primary/5 hover:border-text-primary active:scale-95"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                Our Solutions
              </button>
            </div>
          </motion.div>
        </div>

        {/* HERO IMAGE */}
        <motion.div
          className="flex-1 flex justify-center items-center z-10 w-full lg:w-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative group p-3 lg:p-6 bg-white/5 backdrop-blur-sm border border-accent-primary/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] hover:border-accent-primary/30 transition-all duration-700">
            <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-10 rounded-[2.5rem] transition-opacity duration-700"></div>
            <img
              src={pharma}
              alt="Pharma AI"
              className="max-w-full h-auto rounded-[1.8rem] max-h-[35vh] lg:max-h-[55vh] object-contain relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </section>

      {/* =========================
          FEATURES SECTION
      ========================= */}
      <section className="relative py-32 px-[5%] bg-bg-accent/30 rounded-[5rem] mx-4 lg:mx-10 mb-32 overflow-hidden border border-text-primary/5" id="features">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary mb-6 block">
            Excellence in Innovation
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-text-primary tracking-tight leading-tight">
            Intelligent <span className="text-gradient-accent">Pharma</span> Solutions
          </h2>
          <p className="text-xl text-text-secondary opacity-60 max-w-2xl mx-auto leading-relaxed">
            IndustryIceberg delivers comprehensive AI-driven solutions designed to meet the rigorous demands of the enterprise pharma landscape.
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-bg-surface border border-text-primary/5 rounded-full shadow-xl">
            {['all', 'products', 'services'].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 capitalize ${activeTab === tab
                    ? "bg-text-primary text-bg-main shadow-lg"
                    : "text-text-secondary hover:bg-text-primary/5"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Solutions' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURE CARDS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          <AnimatePresence mode="popLayout">
            {getCards().map((item, index) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-bg-surface p-12 rounded-[3rem] border border-text-primary/5 hover:border-accent-primary/20 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-primary bg-accent-primary/10 px-4 py-1.5 rounded-full">
                      {item.side}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-text-primary/5 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black mb-6 text-text-primary group-hover:text-accent-primary transition-colors duration-500 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-base text-text-secondary leading-relaxed opacity-70 mb-12 line-clamp-3 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>

                  <div 
                    className="inline-flex items-center gap-3 text-sm font-black text-text-primary cursor-pointer group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/details/${item.title.toLowerCase().replace(/\s+/g, "-")}`);
                    }}
                  >
                    <span className="relative">
                      Explore Solution
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-primary transition-all duration-300 group-hover/btn:w-full"></span>
                    </span>
                    <div className="w-8 h-8 rounded-full border border-text-primary/20 flex items-center justify-center group-hover/btn:bg-text-primary group-hover/btn:text-bg-main transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <FooterSection />
    </div>
  );
}

