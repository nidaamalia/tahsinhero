import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface MateriHeaderProps {
  title: string;
  breadcrumb: string;
}

export default function MateriHeader({ title, breadcrumb }: MateriHeaderProps) {
  return (
    <div className="relative mb-6">
      <Link 
        to="/makhraj" 
        className="absolute left-0 top-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-600 hover:text-deep-blue transition-colors z-10"
      >
        <ArrowLeft size={20} />
      </Link>
      
      <div className="text-center pt-2">
        <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-400 mb-2">
          <Link to="/makhraj" className="hover:text-deep-blue transition-colors">Rumah Suara</Link>
          <ChevronRight size={12} />
          <span className="text-deep-gold">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
