import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-deep-red border-t border-gold/40 text-center relative">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="flex justify-center mb-8 gap-4">
          <span className="material-symbols-outlined text-gold-bright text-4xl">festival</span>
          <span className="material-symbols-outlined text-gold-bright text-4xl">festival</span>
          <span className="material-symbols-outlined text-gold-bright text-4xl">festival</span>
        </div>
        <h3 className="font-serif italic text-4xl gold-gradient-text mb-6">Chúc Mừng Năm Mới 2026</h3>
        <p className="text-gold-shimmer/60 text-base leading-relaxed mb-10 font-light">
          Cảm ơn Quý đối tác và Toàn thể nhân viên đã đồng hành cùng công ty trong suốt một năm vừa qua. 
          Hẹn gặp lại tất cả mọi người tại đêm tiệc hưng thịnh này.
        </p>
        <div className="flex justify-center gap-10 text-gold-bright">
          <span className="material-symbols-outlined cursor-pointer hover:scale-125 transition-transform text-3xl">social_leaderboard</span>
          <span className="material-symbols-outlined cursor-pointer hover:scale-125 transition-transform text-3xl">share</span>
          <span className="material-symbols-outlined cursor-pointer hover:scale-125 transition-transform text-3xl">mail</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
