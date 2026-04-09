import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const COURSE_SEQUENCE = [
  // Level 1: Makhraj
  { path: '/makhraj/al-jauf', name: 'Lembah Angin' },
  { path: '/makhraj/al-halq', name: 'Menara Leher' },
  { path: '/makhraj/al-lisan', name: 'Hutan Lidah' },
  { path: '/makhraj/asy-syafatain', name: 'Gerbang Bibir' },
  { path: '/makhraj/al-khaisyum', name: 'Gua Dengung' },
  // Level 2: Sifat
  { path: '/sifat/hams-jahr', name: 'Kipas Angin Hero' },
  { path: '/sifat/syiddah-rakhawah', name: 'Rem & Gas' },
  { path: '/sifat/tafkhim-tarqiq', name: 'Suara Raksasa' },
  { path: '/sifat/jurus-spesial', name: 'Jurus Spesial Hero' }
];

export default function MaterialNav() {
  const location = useLocation();
  const { t } = useLanguage();
  
  const currentIndex = COURSE_SEQUENCE.findIndex(item => item.path === location.pathname);
  
  if (currentIndex === -1) return null;

  const isFirstMakhraj = currentIndex === 0;
  const isLastMakhraj = currentIndex === 4; // Gua Dengung
  
  const isFirstSifat = currentIndex === 5; // Kipas Angin Hero
  const isLastSifat = currentIndex === COURSE_SEQUENCE.length - 1;

  let prevPath = '';
  let nextPath = '';

  if (isFirstMakhraj) {
    prevPath = '/makhraj';
  } else if (isFirstSifat) {
    prevPath = '/sifat';
  } else {
    prevPath = COURSE_SEQUENCE[currentIndex - 1].path;
  }

  if (isLastMakhraj) {
    nextPath = '/sifat';
  } else if (isLastSifat) {
    nextPath = '/buku-saku';
  } else {
    nextPath = COURSE_SEQUENCE[currentIndex + 1].path;
  }

  return (
    <div className="flex justify-between items-center mt-8 mb-4 gap-4">
      <Link
        to={prevPath}
        className="flex-1 py-3 px-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all text-sm shadow-sm"
      >
        <ArrowLeft size={16} />
        <span className="truncate">{t.prev}</span>
      </Link>
      
      <Link
        to={nextPath}
        className="flex-1 py-3 px-4 bg-deep-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all text-sm"
      >
        <span className="truncate">{t.next}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
