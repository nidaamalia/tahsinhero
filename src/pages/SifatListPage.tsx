import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wind, Waves, Cat, Zap, Shirt, Sparkles } from 'lucide-react';

export default function SifatListPage() {
  const modules = [
    {
      id: 1,
      name: 'Kipas Angin Hero',
      desc: 'Latihan hembusan nafas (Ffff... Hah...)',
      sub: 'Hams & Jahr',
      icon: Wind,
      color: 'bg-soft-blue',
      textColor: 'text-deep-blue',
      to: '/sifat/hams-jahr'
    },
    {
      id: 2,
      name: 'Rem & Air',
      desc: 'Belajar cara menghentikan (Klik!) dan mengalirkan suara merdu.',
      sub: 'Syiddah & Rakhawah',
      icon: Waves,
      color: 'bg-warm-sand',
      textColor: 'text-deep-gold',
      to: '/sifat/syiddah-rakhawah'
    },
    {
      id: 3,
      name: 'Singa Gagah & Semut Senyum',
      desc: "Suara 'Gagah' (pipi penuh) vs Suara 'Ramah' (tersenyum).",
      sub: 'Tafkhim & Tarqiq',
      icon: Cat,
      color: 'bg-orange-50',
      textColor: 'text-orange-700',
      to: '/sifat/tafkhim-tarqiq'
    },
    {
      id: 4,
      name: 'Jurus Spesial Hero',
      desc: "Jurus 'Memantul' (Klik!) & Jurus 'Bersiul' (Ssss... Zzzz...)",
      sub: 'Qalqalah, Safir, dll',
      icon: Zap,
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
      to: '/sifat/jurus-spesial'
    }
  ];

  return (
    <div className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8">
      <header className="text-center space-y-4">
        <div className="relative aspect-video bg-warm-sand rounded-3xl overflow-hidden shadow-inner flex flex-col items-center justify-center border-4 border-white">
          <Shirt size={160} className="text-deep-gold opacity-20 absolute" />
          <Sparkles size={64} className="text-deep-gold relative z-10 mb-4" />
          <div className="relative z-10 bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-white shadow-sm">
             <h2 className="text-2xl font-black text-deep-gold">Level 2: Karakter Suara</h2>
          </div>
        </div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-4">Temukan Kekuatan Rahasia Huruf!</p>
      </header>

      <div className="space-y-6">
        {modules.map((mod) => (
          <motion.div
            key={mod.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <div className={`p-4 ${mod.color} rounded-2xl ${mod.textColor}`}>
                <mod.icon size={32} />
              </div>
              <div className="text-right">
                <span className="text-3xl font-black opacity-10">MISI {mod.id}</span>
                <div className={`text-xs font-black ${mod.textColor} mt-1 uppercase tracking-wider`}>{mod.sub}</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{mod.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{mod.desc}</p>
            </div>
            <Link
              to={mod.to}
              className="w-full py-3 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
            >
              MAIN
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
