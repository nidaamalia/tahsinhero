import { motion } from 'motion/react';
import { Play, Pencil } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function LembahAnginPage() {
  const letters = [
    { char: 'ا', name: 'Huruf Alif', tip: 'BUKA MULUT LEBAR', parentTip: 'Ayo Kak, buka mulutnya seperti sedang kaget lihat balon besar!' },
    { char: 'و', name: 'Huruf Wau', tip: 'MONYONG BULAT', parentTip: 'Bentuk bibirnya jadi bulat kecil ya, kayak mau tiup lilin.' },
    { char: 'ي', name: 'Huruf Ya', tip: 'SENYUM LEBAR', parentTip: 'Tarik sudut bibirnya ke samping, seperti lagi senyum paling cantik!' },
  ];

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8"
    >
      <MateriHeader title="Lembah Angin" breadcrumb="Lembah Angin" />

      <header className="text-center space-y-4">
        <div className="relative aspect-video bg-soft-blue rounded-3xl overflow-hidden shadow-inner flex flex-col items-center justify-center border-4 border-white">
          {/* Balloon SVG */}
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-4">
            {/* Balloon */}
            <path d="M80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0Z" fill="#60a5fa" opacity="0.2"/>
            <path d="M80 10C41.3401 10 10 41.3401 10 80C10 118.66 41.3401 150 80 150C118.66 150 150 118.66 150 80C150 41.3401 118.66 10 80 10Z" fill="#3b82f6" opacity="0.4"/>
            <path d="M80 20C46.8629 20 20 46.8629 20 80C20 113.137 46.8629 140 80 140C113.137 140 140 113.137 140 80C140 46.8629 113.137 20 80 20Z" fill="#2563eb" opacity="0.6"/>
          </svg>

          {/* Ropes */}
          <div className="absolute top-[120px] flex justify-between w-24">
            <div className="w-1 h-12 bg-deep-blue/50 rotate-12"></div>
            <div className="w-1 h-12 bg-deep-blue/50 -rotate-12"></div>
          </div>

          {/* Basket */}
          <div className="absolute top-[160px] bg-deep-gold px-6 py-3 rounded-xl border-4 border-yellow-700 shadow-[0_6px_0_0_#835000] z-10">
            <h2 className="text-xl font-black text-white tracking-widest">AL-JAUF</h2>
          </div>
        </div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-8">Tempat udara mengalir bebas</p>
      </header>

      <div className="space-y-6">
        {letters.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-deep-blue">{item.char}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                  <p className="text-deep-gold font-black text-xs tracking-wider">{item.tip}</p>
                </div>
              </div>
              {/* <button className="w-12 h-12 bg-deep-blue text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                <Play size={20} fill="currentColor" />
              </button> */}
            </div>

            <div className="bg-soft-blue/30 rounded-2xl p-4 border-l-4 border-deep-blue">
              <p className="text-[10px] font-black text-deep-blue uppercase tracking-widest mb-1">Bisikan Ortu</p>
              <p className="text-sm text-slate-600 italic leading-relaxed">"{item.parentTip}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-deep-blue/5 border-2 border-dashed border-deep-blue/20 rounded-3xl p-6 flex gap-4 items-start">
        <div className="bg-deep-blue text-white p-2 rounded-xl shrink-0">
          <Pencil size={20} />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-deep-blue">Catatan Ahli</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Bunda, pastikan suara Mad ini murni keluar dari mulut ya. Kalau hidung dipencet dan suaranya berubah, berarti masih ada suara yang nyasar ke hidung!
          </p>
        </div>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
