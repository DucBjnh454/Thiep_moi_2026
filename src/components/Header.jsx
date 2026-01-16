import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-deep-red/90 backdrop-blur-md border-b border-gold/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-gold-bright size-10">
            <span className="material-symbols-outlined text-4xl">temple_buddhist</span>
          </div>
          <h2 className="text-gold-bright text-2xl font-bold tracking-tight font-serif italic">Tet 2026</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-ivory/80 hover:text-gold-bright text-sm font-medium transition-colors uppercase tracking-widest" href="#chuong-trinh">Chương Trình</a>
          <a className="text-ivory/80 hover:text-gold-bright text-sm font-medium transition-colors uppercase tracking-widest" href="#venue-gallery">Không Gian</a>
          <a className="text-ivory/80 hover:text-gold-bright text-sm font-medium transition-colors uppercase tracking-widest" href="#dia-diem">Địa Điểm</a>
          <a className="gold-button px-6 py-2 rounded-lg text-sm font-black transition-all hover:scale-105" href="#rsvp">
            RSVP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
