import { motion } from 'motion/react';
import { Play, TowerControl, Info } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function AlHalqPage() {
  const handlePlayAudio = (title: string) => {
    console.log(`Playing audio for: ${title}`);
    // TODO: Implement actual audio playback
    // const audio = new Audio(`/audio/${title.toLowerCase().replace(/\s/g, '-')}.mp3`);
    // audio.play();
  };

  const floors = [
    {
      title: 'Lantai Atas',
      letters: 'غ خ',
      desc: 'Suara Kumur-Kumur',
      tip: 'Ajak Ananda pura-pura berkumur!',
      color: 'bg-soft-blue',
      textColor: 'text-deep-blue',
      shadow: 'shadow-[0_4px_0_0_#0d4170]',
      borderColor: 'border-deep-blue'
    },
    {
      title: 'Lantai Tengah',
      letters: 'ع ح',
      desc: 'Suara Pedas Bersih',
      tip: 'Pura-pura kepedasan: Hah... Hah...',
      color: 'bg-warm-sand',
      textColor: 'text-deep-gold',
      shadow: 'shadow-[0_4px_0_0_#673e00]',
      borderColor: 'border-deep-gold'
    },
    {
      title: 'Lantai Bawah',
      letters: 'ء هـ',
      desc: 'Suara Lega',
      tip: 'Seperti menghela nafas lega setelah minum.',
      color: 'bg-sage-green',
      textColor: 'text-green-700',
      shadow: 'shadow-[0_4px_0_0_#15803d]',
      borderColor: 'border-green-700'
    }
  ];

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-2xl mx-auto space-y-8"
    >
      <MateriHeader title="Menara Leher" breadcrumb="Menara Leher" />

      <header className="text-center space-y-4">
        <div className="relative aspect-square bg-soft-blue rounded-3xl overflow-hidden shadow-inner flex flex-col items-center justify-end border-4 border-white">
          {/* Tower SVG */}
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
            {/* Base */}
            <path d="M10 200L30 140H90L110 200H10Z" fill="#15803d"/>
            {/* Middle */}
            <path d="M30 140L40 80H80L90 140H30Z" fill="#d97706"/>
            {/* Top */}
            <path d="M40 80L50 30H70L80 80H40Z" fill="#1e3a8a"/>
            {/* Roof */}
            <path d="M30 30L60 0L90 30H30Z" fill="#dc2626"/>
            {/* Windows */}
            <rect x="50" y="160" width="20" height="20" rx="10" fill="#fef08a"/>
            <rect x="50" y="100" width="20" height="20" rx="10" fill="#fef08a"/>
            <rect x="55" y="45" width="10" height="15" rx="5" fill="#fef08a"/>
          </svg>
        </div>
        <h1 className="text-3xl font-black text-deep-blue tracking-tight mt-6">Menara Leher (Al-Halq)</h1>
        <p className="text-slate-500 font-medium">Mari jelajahi 3 lantai di menara leher!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Decorative line connecting the tower floors on desktop */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-2 bg-slate-100 -z-10 rounded-full"></div>
        
        {floors.map((floor, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15 }}
            className={`bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col gap-4 relative overflow-hidden`}
          >
            <div className={`absolute top-0 left-0 w-full h-2 ${floor.color}`}></div>
            <div className="text-center space-y-2">
              <h3 className={`text-sm font-black uppercase tracking-wider ${floor.textColor}`}>{floor.title}</h3>
              <div className={`text-5xl font-black py-4 ${floor.textColor}`}>
                {floor.letters}
              </div>
              <p className="font-bold text-slate-700">{floor.desc}</p>
            </div>

            <button 
              onClick={() => handlePlayAudio(floor.title)}
              className={`w-full py-3 mt-2 ${floor.textColor.replace('text-', 'bg-').replace('700', '600')} text-white rounded-full font-bold flex items-center justify-center gap-2 ${floor.shadow} active:translate-y-1 active:shadow-none transition-all`}
            >
              <Play size={18} fill="currentColor" />
              Mainkan
            </button>

            <div className={`mt-4 ${floor.color} bg-opacity-30 rounded-2xl p-4 border-l-4 ${floor.borderColor}`}>
              <div className="flex items-center gap-2 mb-1">
                <Info size={14} className={floor.textColor} />
                <p className={`text-[10px] font-black uppercase tracking-widest ${floor.textColor}`}>Bisikan Ortu</p>
              </div>
              <p className="text-sm text-slate-600 italic leading-relaxed">"{floor.tip}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      <MaterialNav />
    </motion.div>
  );
}
