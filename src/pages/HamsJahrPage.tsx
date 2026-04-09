import { motion } from 'motion/react';
import { Play, Wind, Mountain, Lightbulb } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function HamsJahrPage() {
  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8"
    >
      <MateriHeader title="Kipas Angin Hero" breadcrumb="Kipas Angin Hero" />
      <header className="text-center space-y-4">
        <h1 className="text-2xl font-black text-deep-blue tracking-tight">Misi 1: Kipas Angin vs Tenang</h1>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-soft-blue/50 rounded-3xl p-4 flex flex-col items-center text-center gap-3 border-b-4 border-deep-blue/20">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Wind className="text-deep-blue" size={32} />
          </div>
          <h3 className="text-xs font-black text-deep-blue uppercase tracking-wider">KIPAS ANGIN (Berangin)</h3>
        </div>
        <div className="bg-warm-sand/50 rounded-3xl p-4 flex flex-col items-center text-center gap-3 border-b-4 border-deep-gold/20">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Mountain className="text-deep-gold" size={32} />
          </div>
          <h3 className="text-xs font-black text-deep-gold uppercase tracking-wider">BATU TENANG (Tanpa Angin)</h3>
        </div>
      </div>

      <div className="space-y-8">
        {/* Jurus Kipas Angin */}
        <div className="bg-white rounded-3xl overflow-hidden border-b-4 border-slate-100 shadow-sm">
          <div className="bg-deep-blue p-4 flex justify-between items-center text-white">
            <h2 className="text-xl font-bold">Jurus Kipas Angin</h2>
            <Wind size={24} className="opacity-50" />
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-5 gap-3 text-center">
              {['ف', 'ح', 'ث', 'هـ', 'ش', 'خ', 'ص', 'س', 'ك', 'ت'].map((l, i) => (
                <div key={i} className="aspect-square bg-soft-blue/20 rounded-xl flex items-center justify-center text-2xl font-black text-deep-blue">
                  {l}
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all">
              <Play size={20} fill="currentColor" />
              Play Audio
            </button>
            <div className="bg-slate-50 rounded-2xl p-4 border-l-4 border-deep-blue">
              <p className="text-[10px] font-black text-deep-blue uppercase tracking-widest mb-1">Bisikan Ortu</p>
              <p className="text-sm text-slate-600 italic">"Taruh tangan di depan mulut, rasakan tiupan anginnya ya Bun!"</p>
            </div>
          </div>
        </div>

        {/* Jurus Batu Tenang */}
        <div className="bg-white rounded-3xl overflow-hidden border-b-4 border-slate-100 shadow-sm">
          <div className="bg-deep-gold p-4 flex justify-between items-center text-white">
            <h2 className="text-xl font-bold">Jurus Batu Tenang</h2>
            <Mountain size={24} className="opacity-50" />
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-2 text-center">
              {['ء', 'ب', 'ج', 'د', 'ط', 'ق'].map((l, i) => (
                <div key={i} className="aspect-square bg-warm-sand/20 rounded-xl flex items-center justify-center text-2xl font-black text-deep-gold">
                  {l}
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-deep-gold text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#673e00] active:translate-y-1 active:shadow-none transition-all">
              <Play size={20} fill="currentColor" />
              Play Audio
            </button>
            <div className="bg-slate-50 rounded-2xl p-4 border-l-4 border-deep-gold">
              <p className="text-[10px] font-black text-deep-gold uppercase tracking-widest mb-1">Bisikan Ortu</p>
              <p className="text-sm text-slate-600 italic">"Pastikan tidak ada angin yang terasa di tangan saat mengucapkannya."</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-tertiary/5 border-2 border-dashed border-tertiary/20 rounded-3xl p-6 flex gap-4 items-start">
        <div className="bg-tertiary text-white p-2 rounded-xl shrink-0">
          <Lightbulb size={20} />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-tertiary">Catatan Ahli</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Bunda, fokus pada huruf Kaf (ك) dan Ta (ت) ya. Mereka sering malu-malu mengeluarkan anginnya kalau dibaca pelan. <span className="text-tertiary font-bold">Ayo semangati Ananda!</span>
          </p>
        </div>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
