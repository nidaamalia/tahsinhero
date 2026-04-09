import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Package, Home, Volume2, Shirt } from 'lucide-react';

export default function MapPage() {
  return (
    <div className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8">
      <header className="text-center space-y-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 bg-warm-sand text-deep-gold px-4 py-1.5 rounded-full text-sm font-bold shadow-sm"
        >
          <Sparkles size={16} />
          Misi Belajar Dimulai!
        </motion.div>
          <h1 className="text-4xl font-black text-deep-blue tracking-tight">
            Tahsin <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-deep-gold">Hero</span>
          </h1>
        <p className="text-slate-500 font-medium">Membimbing si Kecil Mengejar Fasih</p>
      </header>

      <div className="grid gap-6">
        {/* Level 1 Card */}
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-3xl p-6 border-4 border-deep-blue shadow-[0_8px_0_0_#135da0] overflow-hidden relative"
        >
          <div className="aspect-square bg-soft-blue rounded-3xl mb-6 flex items-center justify-center overflow-hidden relative border-4 border-white shadow-inner">
            <Home size={160} className="text-deep-blue opacity-10 absolute" />
            <Volume2 size={80} className="text-deep-blue relative z-10" />
            <div className="absolute top-4 right-4 bg-deep-blue text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider z-20 shadow-sm">LVL 1</div>
          </div>
          <h3 className="text-2xl font-bold text-deep-blue mb-2">Petualangan Rumah Suara</h3>
          <p className="text-slate-500 text-sm font-medium mb-6">Temukan alamat asli setiap huruf agar suaranya pas!</p>
          <Link 
            to="/makhraj"
            className="w-full py-4 bg-deep-blue text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all"
          >
            Mulai Misi
          </Link>
        </motion.div>

        {/* Level 2 Card */}
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-3xl p-6 border-4 border-deep-gold shadow-[0_8px_0_0_#835000] overflow-hidden relative"
        >
          <div className="aspect-square bg-warm-sand rounded-3xl mb-6 flex items-center justify-center overflow-hidden relative border-4 border-white shadow-inner">
            <Shirt size={160} className="text-deep-gold opacity-10 absolute" />
            <Sparkles size={80} className="text-deep-gold relative z-10" />
            <div className="absolute top-4 right-4 bg-deep-gold text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider z-20 shadow-sm">LVL 2</div>
          </div>
          <h3 className="text-2xl font-bold text-deep-gold mb-2">Kostum Kekuatan Huruf</h3>
          <p className="text-slate-500 text-sm font-medium mb-6">Pakai baju karakter biar suaranya makin merdu dan indah.</p>
          <Link 
            to="/sifat"
            className="w-full py-4 bg-deep-gold text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#673e00] active:translate-y-1 active:shadow-none transition-all"
          >
            Mulai Misi
          </Link>
        </motion.div>
      </div>

      {/* Kantong Ajaib Panel */}
      <div className="bg-white rounded-3xl p-6 flex items-center gap-6 border-4 border-slate-100 shadow-sm">
        <div className="w-20 h-20 bg-warm-sand rounded-2xl flex items-center justify-center shrink-0">
          <Package className="text-deep-gold" size={40} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-deep-gold font-bold">
            <span>Kantong Ajaib</span>
            <Sparkles size={16} />
          </div>
          <p className="text-slate-500 text-sm italic leading-relaxed">
            "Tahukah Bunda? Balita belajar paling efektif melalui tiruan suara (talaqqi) sebelum mengenal simbol."
          </p>
        </div>
      </div>
    </div>
  );
}
