import { NavLink } from 'react-router-dom';
import { Map, Home, Star, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedText } from './AnimatedText';

export default function BottomNav() {
  const { t } = useLanguage();

  const navItems = [
    { to: '/', icon: Map, label: t.nav.map },
    { to: '/makhraj', icon: Home, label: t.nav.makhraj },
    { to: '/sifat', icon: Star, label: t.nav.sifat },
    { to: '/buku-saku', icon: BookOpen, label: t.nav.buku },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-3 flex justify-around items-center z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all duration-200 ${
              isActive ? 'text-deep-blue scale-110' : 'text-slate-400 hover:text-slate-600'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <AnimatedText text={item.label} className="text-[10px] font-bold uppercase tracking-wider" />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
