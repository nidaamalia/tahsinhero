import { motion } from 'motion/react';
import { Heart, Star, Apple, ExternalLink, Code } from 'lucide-react';

export default function TentangPage() {
  return (
    <div className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-deep-blue tracking-tight">
          Tahsin <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-deep-gold">Hero</span>
        </h1>
      </div>

      {/* Section A: Header & Profil */}
      <section className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto bg-soft-blue rounded-full flex items-center justify-center border-4 border-white shadow-sm overflow-hidden relative">
          {/* Placeholder for @mamakcoding photo */}
          <Heart className="text-deep-blue" size={40} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-deep-blue tracking-tight">Tentang Mamak Coding</h1>
          <p className="text-slate-500 font-medium mt-3 text-sm leading-relaxed bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            Halo Bunda! Saya <span className="font-bold text-deep-blue">@mamakcoding</span>. Tahsin Hero dibuat dengan cinta untuk membantu Ananda belajar makhraj dan sifat huruf dengan cara yang menyenangkan, tanpa tekanan, dan penuh imajinasi.
          </p>
        </div>
      </section>

      {/* Section B: Keluarga Aplikasi */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 px-2">
          <Code className="text-deep-gold" size={20} />
          <h2 className="text-lg font-black text-slate-800">Keluarga Aplikasi</h2>
        </div>

        {/* Doa Generator */}
        <motion.div whileHover={{ y: -2 }} className="bg-white rounded-3xl p-5 border-b-4 border-slate-100 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-warm-sand text-deep-gold rounded-2xl flex items-center justify-center shrink-0">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Doa Generator</h3>
              <p className="text-xs text-slate-500 mt-0.5">Custom doa harian jadi lebih mudah!</p>
            </div>
          </div>
          <a 
            href="https://doa.webmedia.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-3 bg-slate-50 text-deep-blue rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-soft-blue transition-colors border border-slate-200"
          >
            Kunjungi Situs <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Aima Nutriplan */}
        <motion.div whileHover={{ y: -2 }} className="bg-white rounded-3xl p-5 border-b-4 border-slate-100 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-sage-green text-green-700 rounded-2xl flex items-center justify-center shrink-0">
              <Apple size={24} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Aima Nutriplan (MPASI)</h3>
              <p className="text-xs text-slate-500 mt-0.5">Solusi nutrisi & menu MPASI Ananda.</p>
            </div>
          </div>
          <a 
            href="https://www.aimanutriplan.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-3 bg-slate-50 text-green-700 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-sage-green/30 transition-colors border border-slate-200"
          >
            Kunjungi Situs <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>

      {/* Section C: Kontak & WebMedia */}
      <section className="pt-6 pb-2 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Powered by</p>
        <p className="text-sm font-black text-slate-300 mt-1">WebMedia.id</p>
      </section>
    </div>
  );
}
