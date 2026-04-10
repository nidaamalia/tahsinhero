import { motion } from 'motion/react';
import { Play, Smile } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function AsySyafatainPage() {
  const handlePlayAudio = (type: string) => {
    console.log(`Playing audio for: ${type}`);
  };

  const cards = [
    {
      title: 'Bibir Pelukan',
      action: 'Rapat',
      letters: 'ب م',
      tip: 'Rapatkan bibir atas dan bawah.',
      color: 'bg-soft-blue',
      textColor: 'text-deep-blue',
      shadow: 'shadow-[0_4px_0_0_#0d4170]'
    },
    {
      title: 'Siul Hero',
      action: 'Mencucu',
      letters: 'و',
      tip: 'Bibir bulat sempurna seperti mau cium.',
      color: 'bg-warm-sand',
      textColor: 'text-deep-gold',
      shadow: 'shadow-[0_4px_0_0_#673e00]'
    },
    {
      title: 'Gigi Kelinci',
      action: 'Gigitan Lembut',
      letters: 'ف',
      tip: 'Gigi seri atas sedikit menggigit bibir bawah bagian dalam.',
      color: 'bg-sage-green',
      textColor: 'text-green-700',
      shadow: 'shadow-[0_4px_0_0_#15803d]'
    }
  ];

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-4xl mx-auto space-y-8"
    >
      <MateriHeader title="Gerbang Bibir" breadcrumb="Gerbang Bibir" />

      <header className="text-center space-y-4">
        <div className="relative aspect-video bg-orange-50 rounded-3xl overflow-hidden shadow-inner flex flex-col items-center justify-center border-4 border-white">
          {/* Lips SVG */}
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Lip */}
            <path d="M20 60C40 30 60 20 80 30C100 20 120 30 140 60C120 50 100 55 80 60C60 55 40 50 20 60Z" fill="#ef4444"/>
            {/* Bottom Lip */}
            <path d="M20 60C40 90 60 100 80 100C100 100 120 90 140 60C120 70 100 75 80 70C60 75 40 70 20 60Z" fill="#dc2626"/>
            {/* Teeth */}
            <path d="M40 60C60 65 100 65 120 60C115 65 105 68 80 68C55 68 45 65 40 60Z" fill="#ffffff"/>
          </svg>
        </div>
        <h1 className="text-3xl font-black text-deep-blue tracking-tight mt-6">Gerbang Bibir (Asy-Syafatain)</h1>
        <p className="text-slate-500 font-medium">Mari bermain dengan bentuk bibir!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col h-full"
          >
            <div className={`p-2 rounded-xl inline-block w-fit mb-4 ${card.color} ${card.textColor} font-black text-xs uppercase tracking-widest`}>
              {card.action}
            </div>

            <div className="flex-grow space-y-4">
              <div className="text-5xl font-black text-slate-800 text-center py-6">
                {card.letters}
              </div>
              <h3 className="text-xl font-bold text-center text-slate-800">{card.title}</h3>
            </div>

            <div className="mt-6 space-y-4">
              {/* <button
                onClick={() => handlePlayAudio(card.action)}
                className={`w-full py-3 ${card.textColor.replace('text-', 'bg-').replace('700', '600')} text-white rounded-full font-bold flex items-center justify-center gap-2 ${card.shadow} active:translate-y-1 active:shadow-none transition-all`}
              >
                <Play size={18} fill="currentColor" />
                Dengarkan
              </button> */}

              <div className="bg-slate-50 rounded-2xl p-4 border-l-4 border-slate-300">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Tips Mengajari</p>
                <p className="text-sm text-slate-600 italic">"{card.tip}"</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <MaterialNav />
    </motion.div>
  );
}
