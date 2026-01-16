import React from 'react';

const Location = () => {
  return (
    <section className="py-32 bg-deep-red relative border-t border-gold/30" id="dia-diem">
      <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <h2 className="font-serif italic text-5xl text-gold-bright gold-gradient-text">Thông Tin Địa Điểm</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-gold-bright text-4xl mt-1">location_on</span>
              <div>
                <p className="text-2xl font-bold text-ivory">Nhà hàng Vị Xưa</p>
                <p className="text-gold-shimmer/70 text-lg">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-gold-bright text-4xl mt-1">calendar_month</span>
              <div>
                <p className="text-2xl font-bold text-ivory">Thứ Sáu, 23 Tháng 1, 2026</p>
                <p className="text-gold-shimmer/70 text-lg">17:00 - 22:00</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-gold-bright text-4xl mt-1">apparel</span>
              <div>
                <p className="text-2xl font-bold text-ivory">Trang Phục</p>
                <p className="text-gold-shimmer/70 text-lg">Áo Dài Truyền Thống hoặc Âu Phục (Đỏ/Vàng/Đen)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-gold via-gold-shimmer to-gold rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img 
              alt="Map of the restaurant location" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2XMuFVLcExYLsSwBpe15LTBR5QdmTPo5Oap9nB3ThFXfLV8DMs81bkwTbMVAEq4VcV6F4bYYog7yVeKP9YXvrA7L-2U0PraZbOdEMQMZhbipswQ_1QVImOTkF2MHy8vGa8EjP10I7Po9ReBaZlZKQyHli4WCoIKKar7QLX0_iFDyvfp6nTsmm5RbbIxE3jkxozt8wk9d3yK_-WHTlgzlx5NotnIqegUh_QSJeRdh68xd33e6gv_P3UWdxokTnVKY4UMHJG-shQ8"
            />
            <div className="absolute inset-0 bg-primary-red/30 flex items-center justify-center">
              <div className="gold-button px-6 py-3 rounded-full font-black shadow-2xl flex items-center gap-2 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">pin_drop</span>
                Xem Bản Đồ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
