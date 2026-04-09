import { motion } from 'motion/react';
import { Play, Activity, Wind, Vibrate } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function JurusSpesialPage() {
  const handlePlayAudio = (type: string) => {
    console.log(`Playing audio for: ${type}`);
  };

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8"
    >
      <MateriHeader title="Jurus Spesial Hero" breadcrumb="Jurus Spesial Hero" />
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-black text-deep-blue tracking-tight">Jurus Spesial</h1>
        <p className="text-slate-500 font-medium">Kekuatan unik yang bikin bacaan makin mantap!</p>
      </header>

      <div className="space-y-6">
        {/* Bola Membal */}
        <div className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-soft-blue text-deep-blue rounded-xl">
              <Activity size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Bola Membal</h2>
              <p className="text-deep-blue font-bold text-xs uppercase tracking-widest">Qalqalah</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 py-4">
            {['ب', 'ج', 'د', 'ط', 'ق'].map((l, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.8, y: -20 }}
                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-2xl font-black text-slate-800 shadow-sm border border-slate-200"
              >
                {l}
              </motion.button>
            ))}
          </div>
          <button 
            onClick={() => handlePlayAudio('qalqalah')}
            className="w-full py-3 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={18} fill="currentColor" /> Mainkan
          </button>
        </div>

        {/* Siulan */}
        <div className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sage-green text-green-700 rounded-xl">
              <Wind size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Siulan Burung</h2>
              <p className="text-green-700 font-bold text-xs uppercase tracking-widest">Safir</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 py-4">
            {['ص', 'ز', 'س'].map((l, i) => (
              <div key={i} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-2xl font-black text-slate-800 shadow-sm border border-slate-200">
                {l}
              </div>
            ))}
          </div>
          <button 
            onClick={() => handlePlayAudio('safir')}
            className="w-full py-3 bg-green-600 text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#15803d] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={18} fill="currentColor" /> Mainkan
          </button>
        </div>

        {/* Getaran */}
        <div className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-warm-sand text-deep-gold rounded-xl">
              <Vibrate size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Motor Balap</h2>
              <p className="text-deep-gold font-bold text-xs uppercase tracking-widest">Takrir</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 py-4">
            <motion.div 
              whileTap={{ x: [-5, 5, -5, 5, 0], transition: { duration: 0.3 } }}
              className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-2xl font-black text-slate-800 shadow-sm border border-slate-200 cursor-pointer"
            >
              ر
            </motion.div>
          </div>
          <button 
            onClick={() => handlePlayAudio('takrir')}
            className="w-full py-3 bg-deep-gold text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#673e00] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={18} fill="currentColor" /> Mainkan
          </button>
        </div>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
