import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const MobileCaseView = ({ caseItem }) => {
  return (
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue">
      <Navbar />
      
      <main className="pt-16 pb-20">
        {/* 1. HERO IMAGE */}
        <div className="w-full">
          <img 
            src={caseItem.image} 
            alt={caseItem.title} 
            className="w-full h-auto block" 
          />
        </div>

        {/* 2. DER 3PX SPALT */}
        <div className="h-[3px] w-full bg-[#F1F2E5]"></div>

        {/* 3. CONTENT BEREICH */}
        <div className="px-5 pt-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FFB115] mb-3 block">
            BRANDING // UI DESIGN
          </span>
          
          <h1 className="text-4xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
            {caseItem.title}
          </h1>
          
          <div className="flex justify-between items-start border-b border-black/10 pb-12">
            <p className="text-[11px] uppercase leading-tight max-w-[60%] text-black/80">
              {caseItem.description}
            </p>
            <div className="text-[10px] font-bold uppercase text-right leading-[1.2]">
              YEAR: 2024<br />ROLE: LEAD
            </div>
          </div>

          {/* 4. GROSSER HINTERGRUND-BANNER */}
          <div className="relative mt-20 mb-10 overflow-hidden">
            <h2 className="text-[18vw] font-black uppercase tracking-tighter leading-none text-black/[0.06] whitespace-nowrap">
              {caseItem.title.split(' ')[0]} IDENTI
            </h2>
          </div>

          {/* 5. FOOTER NAVIGATION */}
          <div className="flex items-center justify-center gap-2 pt-10 border-t border-black/5">
            <div className="px-4 py-2 border border-black/10 rounded-full text-[9px] font-bold uppercase">ALL</div>
            <div className="px-4 py-2 border border-black/10 rounded-full text-[9px] font-bold uppercase">COMMERCIAL</div>
            <div className="px-4 py-2 border border-black/10 rounded-full text-[9px] font-bold uppercase">PRIVATE</div>
            
            {/* STICKY-LIKE CONTACT BUTTON */}
            <div className="relative ml-2">
              <div className="absolute inset-0 bg-black rounded-full translate-x-[2px] translate-y-[2px]"></div>
              <button className="relative px-5 py-2 bg-[#DFFF00] border border-black rounded-full text-[9px] font-black uppercase">
                Contact
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;