import { Upload, ArrowRight, FileUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClubSection() {
  return (
    <section
      id="club"
      className="w-full bg-[#071330] py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="scroll-stopper-heading"
    >
      {/* Dynamic Background Accents & Radial Glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ══════════════════════════════════════════════════════
              LEFT SIDE: The Movement (Span 7 Columns)
          ══════════════════════════════════════════════════════ */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-amber-400 font-body font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400/30" aria-hidden="true" />
              <span>Rejoignez le mouvement</span>
            </div>

            {/* Massive Display Headline */}
            <h2
              id="scroll-stopper-heading"
              className="font-heading font-black text-white text-4xl sm:text-6xl lg:text-[68px] leading-[1.06] tracking-tight mt-4"
            >
              L'ENS Tétouan ne se limite pas aux amphis.
            </h2>

            {/* Subtext */}
            <p className="font-body text-blue-100/80 text-base sm:text-lg lg:text-xl max-w-xl mt-6 leading-relaxed">
              APEX est construit par les étudiants, pour les étudiants. Plus de 1200 membres
              centralisent le savoir et font vibrer le campus. Votre place est avec nous.
            </p>

            {/* Massive Primary Gold Action */}
            <Link
              to="/club"
              className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-body font-bold text-base sm:text-lg px-8 py-4 sm:px-9 sm:py-4.5 rounded-2xl mt-9 transition-all duration-200 hover:scale-105 shadow-2xl hover:shadow-amber-400/20 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              aria-label="Postuler au Club APEX"
            >
              <span>Postuler au Club APEX</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT SIDE: The Interactive Dropzone (Span 5 Columns)
          ══════════════════════════════════════════════════════ */}
          <div className="col-span-1 lg:col-span-5 relative">
            {/* Glassmorphism Floating Overlap Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              
              {/* Pulsing Upload Icon Block */}
              <div className="inline-flex items-center justify-center bg-blue-600/50 border border-blue-400/30 p-4 rounded-2xl mb-6 shadow-inner relative group">
                <Upload className="w-8 h-8 text-white animate-bounce-subtle" strokeWidth={2.2} aria-hidden="true" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
                </span>
              </div>

              {/* Card Title */}
              <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl leading-snug">
                Vous avez un ancien examen ?
              </h3>

              {/* Card Subtext */}
              <p className="font-body text-blue-100/90 text-sm sm:text-[15px] mt-3 leading-relaxed">
                Ne gardez pas vos TDs pour vous. Aidez la prochaine promotion en partageant vos documents en un clic.
              </p>

              {/* Bright White CTA */}
              <button
                type="button"
                className="w-full bg-white hover:bg-slate-100 text-slate-950 font-body font-bold text-base px-6 py-3.5 sm:py-4 rounded-xl mt-8 transition-all duration-150 flex justify-center items-center gap-2.5 shadow-xl hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="Uploader un document"
              >
                <FileUp className="w-5 h-5 text-apex-blue" strokeWidth={2.2} aria-hidden="true" />
                <span>Uploader un document</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
