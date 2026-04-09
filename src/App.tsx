import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import BottomNav from './components/BottomNav';
import MapPage from './pages/MapPage';
import MakhrajListPage from './pages/MakhrajListPage';
import LembahAnginPage from './pages/LembahAnginPage';
import AlHalqPage from './pages/AlHalqPage';
import AlLisanPage from './pages/AlLisanPage';
import AsySyafatainPage from './pages/AsySyafatainPage';
import AlKhaisyumPage from './pages/AlKhaisyumPage';
import SifatListPage from './pages/SifatListPage';
import HamsJahrPage from './pages/HamsJahrPage';
import SyiddahRakhawahPage from './pages/SyiddahRakhawahPage';
import TafkhimTarqiqPage from './pages/TafkhimTarqiqPage';
import JurusSpesialPage from './pages/JurusSpesialPage';
import BukuSakuPage from './pages/BukuSakuPage';
import TentangPage from './pages/TentangPage';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <Routes>
            <Route path="/" element={<MapPage />} />
            <Route path="/makhraj" element={<MakhrajListPage />} />
            <Route path="/makhraj/al-jauf" element={<LembahAnginPage />} />
            <Route path="/makhraj/al-halq" element={<AlHalqPage />} />
            <Route path="/makhraj/al-lisan" element={<AlLisanPage />} />
            <Route path="/makhraj/asy-syafatain" element={<AsySyafatainPage />} />
            <Route path="/makhraj/al-khaisyum" element={<AlKhaisyumPage />} />
            <Route path="/sifat" element={<SifatListPage />} />
            <Route path="/sifat/hams-jahr" element={<HamsJahrPage />} />
            <Route path="/sifat/syiddah-rakhawah" element={<SyiddahRakhawahPage />} />
            <Route path="/sifat/tafkhim-tarqiq" element={<TafkhimTarqiqPage />} />
            <Route path="/sifat/jurus-spesial" element={<JurusSpesialPage />} />
            <Route path="/buku-saku" element={<BukuSakuPage />} />
            <Route path="/tentang" element={<TentangPage />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </LanguageProvider>
  );
}
