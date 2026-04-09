import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-slate-200 flex items-center">
        <button
          onClick={() => setLanguage('id')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            language === 'id' ? 'bg-deep-blue text-white' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          ID
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            language === 'en' ? 'bg-deep-blue text-white' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
