import { useParams, useNavigate } from "react-router-dom";
import { products, services } from "../data/cardsData";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function CardDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const allCards = [...products, ...services];

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

  const card = allCards.find(
    (item) => slugify(item.title) === slug
  );

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-main p-10">
        <div className="text-center">
          <h1 className="text-4xl font-black text-text-primary mb-4">Solution not found</h1>
          <p className="text-text-secondary mb-8">Please check the URL or return to the home page.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-text-primary text-bg-main rounded-full font-bold transition-all hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main pt-32 pb-20 px-[5%] selection:bg-accent-primary/30">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-all mb-10 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold">Back</span>
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-bg-surface border border-text-primary/5 rounded-[3rem] shadow-2xl overflow-hidden"
      >
        <div className="p-8 md:p-16">
          <header className="mb-12 border-b border-text-primary/10 pb-12">
            <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 ${
              card.side.toLowerCase() === 'product' 
              ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20' 
              : 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20'
            }`}>
              {card.side}
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-text-primary mb-6 leading-tight tracking-tight">
              {card.title}
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed opacity-80">
              {card.desc}
            </p>
          </header>

          <div className="space-y-10">
            {typeof card.content === "string" && card.content && (
              <p className="text-lg text-text-secondary leading-relaxed">{card.content}</p>
            )}

            {typeof card.content === "object" && card.content && (
              <div className="space-y-12">
                {card.content.heading && <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{card.content.heading}</h2>}
                {card.content.intro && <p className="text-lg text-text-secondary leading-relaxed">{card.content.intro}</p>}

                {card.content.sections?.map((sec, i) => (
                  <div key={i} className="space-y-4">
                    <h3 className="text-xl font-bold text-text-primary flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-accent-primary rounded-full"></span>
                      {sec.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed opacity-80 pl-4.5 border-l border-text-primary/10">{sec.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}