import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, MessageCircle } from 'lucide-react';
import MateriHeader from '../components/MateriHeader';
import MaterialNav from '../components/MaterialNav';

export default function AlLisanPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handlePlayAudio = (letters: string) => {
    console.log(`Playing audio for: ${letters}`);
    // TODO: Implement actual audio playback
  };

  const tabs = [
    { id: 'belakang', label: 'Belakang' },
    { id: 'tengah', label: 'Tengah' },
    { id: 'samping', label: 'Samping' },
    { id: 'ujung', label: 'Ujung' },
  ];

  const content = [
    {
      letters: 'ق ك',
      title: 'Ketukan Pintu',
      tip: 'Ketuk langit-langit mulut belakang.',
      color: 'bg-soft-blue',
      textColor: 'text-deep-blue',
    },
    {
      letters: 'ج ش ي',
      title: 'Jembatan Naik',
      tip: 'Tengah lidah menempel ke atas.',
      color: 'bg-warm-sand',
      textColor: 'text-deep-gold',
    },
    {
      letters: 'ض',
      title: 'Pelukan Lidah',
      tip: 'Sisi lidah peluk gigi geraham.',
      color: 'bg-sage-green',
      textColor: 'text-green-700',
    },
    {
      letters: 'ل ن ر ت د ط ز س ص ث ذ ظ',
      title: 'Tarian Pengetuk',
      tip: 'Ujung lidah ketuk gusi atas.',
      color: 'bg-orange-50',
      textColor: 'text-orange-700',
    }
  ];

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="pb-24 pt-6 px-6 max-w-2xl mx-auto space-y-8"
    >
      <MateriHeader title="Hutan Lidah" breadcrumb="Hutan Lidah" />

      <header className="text-center space-y-4">
        <div className="relative aspect-video bg-orange-50 rounded-3xl overflow-hidden shadow-inner flex flex-col items-center justify-center border-4 border-white">
          {/* Tongue Map SVG */}
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base Tongue */}
            <path d="M40 20C40 20 20 80 20 110C20 140 50 150 80 150C110 150 140 140 140 110C140 80 120 20 120 20H40Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="4"/>
            {/* Zones */}
            {/* Belakang */}
            <path d="M40 20C40 20 35 40 33 50C50 60 110 60 127 50C125 40 120 20 120 20H40Z" fill="#60a5fa" opacity="0.8"/>
            {/* Tengah */}
            <path d="M33 50C30 65 26 85 24 95C50 100 110 100 136 95C134 85 130 65 127 50C110 60 50 60 33 50Z" fill="#fbbf24" opacity="0.8"/>
            {/* Samping */}
            <path d="M24 95C22 105 20 110 20 110C20 140 50 150 80 150C110 150 140 140 140 110C140 110 138 105 136 95C110 100 50 100 24 95Z" fill="#4ade80" opacity="0.8"/>
            {/* Ujung */}
            <path d="M50 120C50 120 60 140 80 140C100 140 110 120 110 120C90 130 70 130 50 120Z" fill="#f97316" opacity="0.9"/>
          </svg>
        </div>
        <h1 className="text-3xl font-black text-deep-blue tracking-tight mt-6">Hutan Lidah (Al-Lisan)</h1>
        <p className="text-slate-500 font-medium">Pilih area lidah untuk melihat hurufnya!</p>
      </header>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
              activeTab === idx 
                ? 'bg-deep-blue text-white shadow-[0_4px_0_0_#0d4170] translate-y-[-2px]' 
                : 'bg-white text-slate-500 border-2 border-slate-100 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`bg-white rounded-3xl p-8 border-b-4 border-slate-100 shadow-sm flex flex-col items-center text-center gap-6`}
          >
            <div className={`w-full py-8 rounded-2xl ${content[activeTab].color} ${content[activeTab].textColor}`}>
              <h2 className="text-4xl md:text-5xl font-black leading-relaxed px-4">
                {content[activeTab].letters}
              </h2>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-800">{content[activeTab].title}</h3>
            </div>

            {/* <button 
              onClick={() => handlePlayAudio(content[activeTab].letters)}
              className="w-full md:w-auto px-8 py-4 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
            >
              <Play size={20} fill="currentColor" />
              Dengarkan Suara
            </button> */}

            <div className="w-full bg-slate-50 rounded-2xl p-5 border-l-4 border-deep-blue text-left flex gap-4 items-start">
              <MessageCircle className="text-deep-blue shrink-0 mt-1" size={24} />
              <div>
                <p className="text-xs font-black text-deep-blue uppercase tracking-widest mb-1">Bisikan Ortu</p>
                <p className="text-slate-600 italic leading-relaxed">"{content[activeTab].tip}"</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
