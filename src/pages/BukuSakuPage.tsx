import { motion } from 'motion/react';
import { BookOpen, Ear, Hand, Repeat, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BukuSakuPage() {
  const steps = [
    { icon: Ear, title: 'Biarkan ia Meniru.', desc: 'Balita adalah peniru ulung, jangan buru-buru teori.', color: 'bg-soft-blue', textColor: 'text-deep-blue' },
    { icon: Hand, title: 'Gunakan Indra.', desc: 'Ajak pegang leher atau rasakan hembusan nafas.', color: 'bg-warm-sand', textColor: 'text-deep-gold' },
    { icon: Repeat, title: 'Ulang & Rayakan.', desc: 'Apresiasi setiap bunyi yang mendekati benar.', color: 'bg-orange-50', textColor: 'text-orange-700' },
  ];

  return (
    <div className="pb-24 pt-6 px-6 max-w-md mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-black text-deep-blue tracking-tight">Buku Saku Hero</h1>
        <p className="text-deep-gold font-bold">Tips Rahasia Ayah & Bunda membimbing Ananda.</p>
        <div className="pt-4 flex justify-center">
          <div className="h-1.5 w-24 bg-soft-blue rounded-full opacity-50"></div>
        </div>
      </header>

      <section className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <BookOpen className="text-deep-gold" size={24} />
          <h3 className="text-xl font-black text-slate-800">3 Langkah Emas</h3>
        </div>
        
        <div className="grid gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              className="bg-white rounded-3xl p-6 shadow-sm border-b-4 border-slate-100 flex items-start gap-5"
            >
              <div className={`shrink-0 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center ${step.textColor}`}>
                <step.icon size={28} />
              </div>
              <div className="space-y-1">
                <h4 className={`text-lg font-bold ${step.textColor}`}>{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border-2 border-soft-blue/30 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl font-black text-slate-800">Tips "Anti-Gagal"</h3>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <CheckCircle2 className="text-deep-blue shrink-0 mt-1" size={20} />
            <p className="text-slate-600 font-medium leading-relaxed italic">
              "Jangan bilang <span className="text-tertiary font-bold">Salah</span>, katakan <span className="text-deep-blue font-bold">'Hampir benar, yuk coba geser lidahnya sedikit!'</span>"
            </p>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-deep-blue shrink-0 mt-1" size={20} />
            <p className="text-slate-600 font-medium leading-relaxed">Mulai dari huruf yang paling disukai Ananda.</p>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-deep-blue shrink-0 mt-1" size={20} />
            <p className="text-slate-600 font-medium leading-relaxed">Gunakan cermin agar Ananda bisa melihat senyumnya saat membaca.</p>
          </div>
        </div>

        <button className="w-full py-4 bg-deep-blue text-white font-bold text-lg rounded-full shadow-[0_4px_0_0_#0d4170] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
          <BookOpen size={20} />
          Mulai Belajar Bersama
        </button>
      </section>

      {/* Link to TentangPage */}
      <Link to="/tentang" className="block mt-8">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-warm-sand/30 border-2 border-deep-gold/20 rounded-3xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
            <Heart className="text-deep-gold" size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800 leading-tight">Ingin tips parenting & aplikasi lainnya?</p>
            <p className="text-xs text-deep-gold font-bold mt-1">Kenalan dengan @mamakcoding di sini &rarr;</p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
