import React, { createContext, useContext, useState } from 'react';

type Language = 'id' | 'en';

interface Translations {
  prev: string;
  next: string;
}

const translations: Record<Language, Translations> = {
  id: {
    prev: 'Sebelumnya',
    next: 'Selanjutnya',
  },
  en: {
    prev: 'Previous',
    next: 'Next',
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
