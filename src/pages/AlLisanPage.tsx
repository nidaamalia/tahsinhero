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
      groups: [
        { letters: 'ق ك', title: 'Ketukan Pintu', tip: 'Bunda, ajak Ananda buka mulut agak lebar, lalu rasakan lidah paling belakang menahan suara (seperti tersedak kecil).' }
      ],
      color: 'bg-soft-blue',
      textColor: 'text-deep-blue',
    },
    {
      groups: [
        { letters: 'ج ش ي', title: 'Jembatan Naik', tip: 'Tempelkan atau angkat tengah lidahnya ke atas, seperti membuat jembatan melengkung di dalam mulut!' }
      ],
      color: 'bg-warm-sand',
      textColor: 'text-deep-gold',
    },
    {
      groups: [
        { letters: 'ض', title: 'Pelukan Lidah', tip: 'Lidahnya memeluk gigi geraham atas ya! Pipinya bisa kelihatan agak menggembung pelan.' },
        { letters: 'ل', title: 'Ujung Sisi Lidah', tip: 'Lidahnya menyangkut nempel kuat di gusi atas bagian depan (La.. La.. La..).' }
      ],
      color: 'bg-sage-green',
      textColor: 'text-green-700',
    },
    {
      groups: [
        { letters: 'ن ر', title: 'Ketukan Gusi', tip: 'Geli-geli ketuk gusi lho! Ujung lidah nempel di gusi persis di atas gigi depan.' },
        { letters: 'ط د ت', title: 'Tancap Pangkal Gigi', tip: 'Tekan ujung lidahnya nyangkut pelan persis di perbatasan gigi depan dan gusi.' },
        { letters: 'ص س ز', title: 'Siulan Celah Gigi', tip: 'Lidahnya istirahat di bawah, lalu tiup udaranya pelan keluar dari celah gigi seri, sshh...' },
        { letters: 'ظ ذ ث', title: 'Gigitan Lembut', tip: 'Keluarkan ujung lidahnya sediiiikit saja, lalu jepit pelan dengan gigi ujung (seperti pura-pura cadel).' }
      ],
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
            className="flex flex-col gap-6"
          >
            {content[activeTab].groups.map((group, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border-b-4 border-slate-100 shadow-sm flex flex-col items-center text-center gap-5">
                <div className={`w-full py-6 rounded-2xl ${content[activeTab].color} ${content[activeTab].textColor}`}>
                  <h2 className="text-4xl font-black leading-relaxed px-4">
                    {group.letters}
                  </h2>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-800">{group.title}</h3>
                </div>

                <div className="w-full bg-slate-50 rounded-2xl p-4 border-l-4 border-deep-blue text-left flex gap-3 items-start">
                  <MessageCircle className="text-deep-blue shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] font-black text-deep-blue uppercase tracking-widest mb-1">Tips Mengajari</p>
                    <p className="text-sm text-slate-600 italic leading-relaxed">"{group.tip}"</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <MaterialNav />
    </motion.div>
  );
}
