import { motion } from 'motion/react';
import { Play, Cat, Smile } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function TafkhimTarqiqPage() {
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
      <MateriHeader title="Suara Raksasa" breadcrumb="Suara Raksasa" />
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-black text-deep-blue tracking-tight">Singa Gagah vs Semut Senyum</h1>
        <p className="text-slate-500 font-medium">Tafkhim (Tebal) & Tarqiq (Tipis)</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Singa Gagah (Tafkhim) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col h-full"
        >
          <div className="flex flex-col items-center gap-4 mb-6 text-center">
            <div className="w-24 h-24 bg-warm-sand text-deep-gold rounded-full flex items-center justify-center shrink-0 shadow-inner border-4 border-white">
              <Cat size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Singa Gagah</h2>
              <p className="text-deep-gold font-bold text-sm uppercase tracking-widest">Tebal / Mulut Penuh</p>
            </div>
          </div>
          
          <div className="flex-grow bg-slate-50 rounded-2xl p-6 mb-6 flex items-center justify-center text-center">
            <p className="text-4xl font-black text-slate-800 leading-relaxed">
              خ ص ض غ ط ق ظ
            </p>
          </div>

          {/* <button 
            onClick={() => handlePlayAudio('tafkhim')}
            className="w-full py-4 bg-deep-gold text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#673e00] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={20} fill="currentColor" />
            Suara Gagah
          </button> */}
        </motion.div>

        {/* Semut Senyum (Tarqiq) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col h-full"
        >
          <div className="flex flex-col items-center gap-4 mb-6 text-center">
            <div className="w-24 h-24 bg-soft-blue text-deep-blue rounded-full flex items-center justify-center shrink-0 shadow-inner border-4 border-white">
              <Smile size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Semut Senyum</h2>
              <p className="text-deep-blue font-bold text-sm uppercase tracking-widest">Tipis / Senyum</p>
            </div>
          </div>
          
          <div className="flex-grow bg-slate-50 rounded-2xl p-6 mb-6 flex items-center justify-center text-center">
            <p className="text-2xl font-bold text-slate-500 leading-relaxed">
              Semua huruf lainnya dibaca tipis sambil tersenyum!
            </p>
          </div>

          {/* <button 
            onClick={() => handlePlayAudio('tarqiq')}
            className="w-full py-4 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
          >
            <Play size={20} fill="currentColor" />
            Suara Senyum
          </button> */}
        </motion.div>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
