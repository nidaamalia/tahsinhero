import { motion } from 'motion/react';
import { Play, Bug } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function AlKhaisyumPage() {
  const handlePlayAudio = () => {
    console.log(`Playing audio for Ghunnah`);
  };

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8"
    >
      <MateriHeader title="Gua Dengung" breadcrumb="Gua Dengung" />

      <header className="text-center space-y-4">
        <h1 className="text-3xl font-black text-deep-blue tracking-tight">Gua Dengung (Al-Khaisyum)</h1>
        <p className="text-slate-500 font-medium">Tempat persembunyian suara dengung!</p>
      </header>

      <div className="relative bg-soft-blue rounded-3xl p-8 overflow-hidden shadow-inner flex flex-col items-center justify-center min-h-[300px] border-4 border-white">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 text-deep-blue opacity-50"
        >
          <Bug size={48} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [5, -5, 5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 text-deep-blue opacity-30"
        >
          <Bug size={64} />
        </motion.div>

        <div className="relative z-10 text-center space-y-6 bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white">
          <h2 className="text-6xl font-black text-deep-blue">ن م</h2>
          <div className="inline-block bg-deep-blue text-white px-4 py-1 rounded-full font-bold text-sm uppercase tracking-widest">
            Suara Ghunnah
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border-b-4 border-slate-100 space-y-6">
        {/* <button
          onClick={handlePlayAudio}
          className="w-full py-4 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
        >
          <Play size={20} fill="currentColor" />
          Dengarkan Dengungan
        </button> */}

        <div className="bg-warm-sand/50 rounded-2xl p-5 border-l-4 border-deep-gold">
          <div className="flex items-center gap-2 mb-2">
            <Bug size={20} className="text-deep-gold" />
            <p className="text-xs font-black text-deep-gold uppercase tracking-widest">Tips Mengajari</p>
          </div>
          <p className="text-slate-700 italic leading-relaxed font-medium">
            "Pencet hidung Ananda saat bersuara, harus terasa getarannya!"
          </p>
        </div>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
