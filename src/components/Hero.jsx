import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-deep-red/40 to-deep-red"></div>
        <img 
          alt="Traditional Vietnamese Tet background" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYnvIXXyCq5ZXtTMuE5w0-3HUmPa8Wz2GO6EMVC-p62_GtJpr6CPpxJ3HR-xqpV3Bl3_-z92RkXgULRsxNQTkIaRK4x-5_qYVyoYY8pgqcwde1RCa0sLFRR_eFfsrcDdf0bayUW3K-PmTie2Bi5WnqVH0HL9SX5AQF7NzoqVe7QsTmJKQHk7EiFPW9-jGvPSkZEC0DzgP7ai9MmWEkXmptKRH7rAY40wf-yzDE4r8ExTEWhBebos9rm8sCj2tHnNGZfVKiyWqUg8U"
        />
      </div>
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <span className="material-symbols-outlined text-gold-bright text-9xl">filter_vintage</span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <span className="material-symbols-outlined text-gold-bright text-9xl">filter_vintage</span>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center gap-6">
          <span className="material-symbols-outlined text-gold-bright text-5xl">potted_plant</span>
          <span className="material-symbols-outlined text-gold-bright text-5xl">celebration</span>
          <span className="material-symbols-outlined text-gold-bright text-5xl">potted_plant</span>
        </div>
        <h1 className="font-serif italic text-6xl md:text-9xl font-black mb-6 gold-gradient-text drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          Thiệp Mời Mừng Thọ
        </h1>
        <p className="text-gold-shimmer text-xl md:text-3xl font-light tracking-[0.4em] uppercase mb-12 drop-shadow-md">
          Gắn Kết Vươn Xa • Bính Ngọ Hưng Thịnh
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            className="gold-button px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest" 
            href="#chuong-trinh"
          >
            Khám Phá Ngay
          </a>
          <a 
            className="bg-ivory/10 hover:bg-ivory/20 backdrop-blur-md text-ivory border border-gold/40 px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 uppercase tracking-widest" 
            href="#rsvp"
          >
            Xác Nhận Tham Dự
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
