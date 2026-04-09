import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wind, TowerControl as Tower, TreePine, DoorOpen, Bug } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedText } from '../components/AnimatedText';

export default function MakhrajListPage() {
  const { t } = useLanguage();

  const modules = [
    {
      id: 1,
      name: t.makhrajList.m1Name,
      desc: t.makhrajList.m1Desc,
      letters: 'ا و ي',
      icon: Wind,
      color: 'bg-soft-blue',
      textColor: 'text-deep-blue',
      to: '/makhraj/al-jauf'
    },
    {
      id: 2,
      name: t.makhrajList.m2Name,
      desc: t.makhrajList.m2Desc,
      letters: 'ء هـ ع ح غ خ',
      icon: Tower,
      color: 'bg-sage-green',
      textColor: 'text-green-700',
      to: '/makhraj/al-halq'
    },
    {
      id: 3,
      name: t.makhrajList.m3Name,
      desc: t.makhrajList.m3Desc,
      letters: 'ق ك ج ش ي ض ل ن ر ت د ط ز س ص ث ذ ظ',
      icon: TreePine,
      color: 'bg-warm-sand',
      textColor: 'text-deep-gold',
      to: '/makhraj/al-lisan'
    },
    {
      id: 4,
      name: t.makhrajList.m4Name,
      desc: t.makhrajList.m4Desc,
      letters: 'ب م و ف',
      icon: DoorOpen,
      color: 'bg-orange-50',
      textColor: 'text-orange-700',
      to: '/makhraj/asy-syafatain'
    },
    {
      id: 5,
      name: t.makhrajList.m5Name,
      desc: t.makhrajList.m5Desc,
      letters: t.makhrajList.m5Letters,
      icon: Bug,
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
      to: '/makhraj/al-khaisyum'
    }
  ];

  return (
    <div className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-deep-blue tracking-tight"><AnimatedText text={t.makhrajList.title} /></h1>
        <p className="text-slate-500 font-medium"><AnimatedText text={t.makhrajList.subtitle} /></p>
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
                <span className="text-3xl font-black opacity-10">0{mod.id}</span>
                <div className={`text-xl font-bold ${mod.textColor} mt-1`}>{mod.letters}</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1"><AnimatedText text={mod.name} /></h3>
              <p className="text-slate-500 text-sm leading-relaxed"><AnimatedText text={mod.desc} /></p>
            </div>
            <Link
              to={mod.to}
              className="w-full py-3 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
            >
              <AnimatedText text={t.common.enterHouse} />
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
