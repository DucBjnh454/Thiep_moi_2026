import React from 'react';

const VenueGallery = () => {
  return (
    <section className="py-32 bg-deep-red relative overflow-hidden" id="venue-gallery">
      <div className="absolute top-0 left-0 w-full h-20 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cloud-composition.png')]"></div>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 border-2 border-gold/40 rounded-3xl transform rotate-2"></div>
            <div className="relative bg-deep-red p-3 rounded-2xl shadow-2xl border-2 border-gold">
              <img 
                alt="Nhà hàng Vị Xưa interior" 
                className="w-full aspect-[4/3] object-cover rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2XMuFVLcExYLsSwBpe15LTBR5QdmTPo5Oap9nB3ThFXfLV8DMs81bkwTbMVAEq4VcV6F4bYYog7yVeKP9YXvrA7L-2U0PraZbOdEMQMZhbipswQ_1QVImOTkF2MHy8vGa8EjP10I7Po9ReBaZlZKQyHli4WCoIKKar7QLX0_iFDyvfp6nTsmm5RbbIxE3jkxozt8wk9d3yK_-WHTlgzlx5NotnIqegUh_QSJeRdh68xd33e6gv_P3UWdxokTnVKY4UMHJG-shQ8"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 opacity-30">
              <span className="material-symbols-outlined text-gold-bright text-8xl">wb_sunny</span>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="font-serif italic text-gold-bright text-2xl tracking-[0.4em] uppercase">Không Gian Tiệc</h3>
            <h2 className="font-serif italic text-5xl md:text-6xl text-ivory leading-tight gold-gradient-text">
              Nhà hàng Vị Xưa
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold to-transparent"></div>
            <p className="text-gold-shimmer/90 text-xl leading-relaxed font-light">
              Tọa lạc giữa lòng Sài Gòn phồn hoa, Nhà hàng Vị Xưa mang đến một không gian di sản đậm chất truyền thống. 
              Sự kết hợp hoàn mỹ giữa kiến trúc cung đình tinh xảo và phong vị ẩm thực thượng hạng sẽ đưa Quý khách 
              trở về với những giá trị Tết Việt xưa cũ nhưng không kém phần sang trọng và đẳng cấp.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-gold-bright">
                <span className="material-symbols-outlined text-3xl">star</span>
                <span className="text-sm font-bold uppercase tracking-widest">Premium Ambiance</span>
              </div>
              <div className="flex items-center gap-3 text-gold-bright">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                <span className="text-sm font-bold uppercase tracking-widest">Authentic Cuisine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueGallery;
