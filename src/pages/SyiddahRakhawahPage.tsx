import { motion } from 'motion/react';
import { Play, Car, Droplets } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function SyiddahRakhawahPage() {
  const handlePlayAudio = (type: string) => {
    console.log(`Playing audio for: ${type}`);
  };

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-4xl mx-auto space-y-8"
    >
      <MateriHeader title="Rem & Gas" breadcrumb="Rem & Gas" />
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-black text-deep-blue tracking-tight">Rem Mobil, Sepeda & Kran Air</h1>
        <p className="text-slate-500 font-medium">Syiddah, Tawasuth & Rakhawah</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Rem Mobil (Syiddah) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col h-full"
        >
          <div className="flex flex-col items-center gap-4 mb-6 text-center">
            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 shadow-inner border-4 border-white">
              <Car size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Rem Mobil</h2>
              <p className="text-red-600 font-bold text-sm uppercase tracking-widest">Syiddah (Tertahan)</p>
            </div>
          </div>
          
          <div className="flex-grow bg-slate-50 rounded-2xl p-6 mb-6 flex items-center justify-center text-center">
            <p className="text-3xl font-black text-slate-800 leading-relaxed">
              أ ج د ق ط ب ك ت
            </p>
          </div>

          {/* <button 
            onClick={() => handlePlayAudio('syiddah')}
            className="w-full py-4 bg-red-500 text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#b91c1c] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={20} fill="currentColor" />
            Dengarkan Suara Rem
          </button> */}
        </motion.div>

        {/* Sepeda Santai (Tawasuth) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col h-full"
        >
          <div className="flex flex-col items-center gap-4 mb-6 text-center">
            <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 shadow-inner border-4 border-white">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="3.5" />
                <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Sepeda Santai</h2>
              <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">Tawasuth (Sedang)</p>
            </div>
          </div>
          
          <div className="flex-grow bg-slate-50 rounded-2xl p-6 mb-6 flex items-center justify-center text-center">
            <p className="text-4xl font-black text-slate-800 leading-relaxed">
              ل ن ع م ر
            </p>
          </div>
        </motion.div>

        {/* Kran Air (Rakhawah) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col h-full"
        >
          <div className="flex flex-col items-center gap-4 mb-6 text-center">
            <div className="w-24 h-24 bg-soft-blue text-deep-blue rounded-full flex items-center justify-center shrink-0 shadow-inner border-4 border-white">
              <Droplets size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Kran Air</h2>
              <p className="text-deep-blue font-bold text-sm uppercase tracking-widest">Rakhawah (Mengalir)</p>
            </div>
          </div>
          
          <div className="flex-grow bg-slate-50 rounded-2xl p-6 mb-6 flex items-center justify-center text-center">
            <p className="text-3xl font-black text-slate-800 leading-relaxed">
              ف ح ث هـ ش خ ص س ز ذ ظ ض غ
            </p>
          </div>

          {/* <button 
            onClick={() => handlePlayAudio('rakhawah')}
            className="w-full py-4 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={20} fill="currentColor" />
            Dengarkan Suara Mengalir
          </button> */}
        </motion.div>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
