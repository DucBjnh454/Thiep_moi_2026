import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      time: "17:00 - 18:00",
      title: "Check-in & Photo",
      icon: "camera_enhance",
      description: "Đón tiếp khách mời và ghi lại những khoảnh khắc đầu tiên tại khu vực sảnh tiệc được trang trí theo phong cách Tết cổ điển."
    },
    {
      time: "18:30",
      title: "Khai Mạc & Phát Biểu",
      icon: "campaign",
      description: "Lắng nghe thông điệp đầy cảm hứng và nghi thức khai tiệc từ Chairman.",
      leaders: [
        "Chairman: Nguyễn Ngọc Hà",
        "CEO: Huỳnh Anh Đức",
        "COO: Nguyễn Ngọc Đức"
      ]
    },
    {
      time: "18:40",
      title: "Awards for Excellence",
      icon: "workspace_premium",
      description: "Vinh danh các cá nhân và tập thể đã có những đóng góp xuất sắc trong hành trình vươn xa của công ty năm 2025."
    },
    {
      time: "19:00",
      title: "Dạ Tiệc Thượng Hạng",
      icon: "restaurant",
      description: "Thưởng thức tinh hoa ẩm thực Việt trong không gian âm nhạc truyền thống hòa quyện cùng phong cách hiện đại."
    },
    {
      time: "20:00",
      title: "Minigame & Karaoke",
      icon: "theater_comedy",
      description: "Thời gian thư giãn với những trò chơi gắn kết và chương trình văn nghệ tự do từ các thành viên trong công ty."
    },
    {
      time: "22:00",
      title: "Bế Mạc",
      icon: "auto_awesome",
      description: "Trao quà lì xì đầu năm và gửi những lời chúc tốt đẹp nhất trước khi kết thúc chương trình."
    }
  ];

  return (
    <section className="py-32 bg-primary-red relative overflow-hidden" id="chuong-trinh">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
      <div className="max-w-[1000px] mx-auto px-6 relative">
        <div className="text-center mb-24">
          <p className="text-gold-bright font-black tracking-[0.5em] uppercase text-sm mb-6">The Schedule</p>
          <h2 className="font-serif italic text-5xl md:text-7xl gold-gradient-text">Chi Tiết Chương Trình</h2>
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="h-[1px] w-20 bg-gold/50"></div>
            <span className="material-symbols-outlined text-gold-bright">owl</span>
            <div className="h-[1px] w-20 bg-gold/50"></div>
          </div>
        </div>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gold/50 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined">camera_enhance</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card shadow-2xl transition-all duration-500 hover:border-gold-bright/60">
              <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">17:00 - 18:00</time>
              <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">Check-in & Photo</h4>
              <p className="text-ivory/80 text-base leading-relaxed">Đón tiếp khách mời và ghi lại những khoảnh khắc đầu tiên tại khu vực sảnh tiệc được trang trí theo phong cách Tết cổ điển.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card shadow-2xl transition-all duration-500 hover:border-gold-bright/60">
              <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">18:30</time>
              <h4 className="font-serif text-3xl font-bold text-gold-bright mb-4 italic">Khai Mạc & Phát Biểu</h4>
              <div className="space-y-4">
                <p className="text-gold-shimmer/80 text-sm font-bold uppercase tracking-widest border-l-2 border-gold/40 pl-4">Giới thiệu Ban Lãnh Đạo:</p>
                <ul className="text-base space-y-2 text-ivory/90 font-medium ml-4">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold-bright rounded-full"></span> Chairman: Nguyễn Ngọc Hà</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold-bright rounded-full"></span> CEO: Huỳnh Anh Đức</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-gold-bright rounded-full"></span> COO: Nguyễn Ngọc Đức</li>
                </ul>
                <p className="text-ivory/70 text-sm italic border-t border-gold/20 pt-4">Lắng nghe thông điệp đầy cảm hứng và nghi thức khai tiệc từ Chairman.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card shadow-2xl transition-all duration-500 hover:border-gold-bright/60">
              <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">18:40</time>
              <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">Awards for Excellence</h4>
              <p className="text-ivory/80 text-base leading-relaxed">Vinh danh các cá nhân và tập thể đã có những đóng góp xuất sắc trong hành trình vươn xa của công ty năm 2025.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card shadow-2xl transition-all duration-500 hover:border-gold-bright/60">
              <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">19:00</time>
              <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">Dạ Tiệc Thượng Hạng</h4>
              <p className="text-ivory/80 text-base leading-relaxed">Thưởng thức tinh hoa ẩm thực Việt trong không gian âm nhạc truyền thống hòa quyện cùng phong cách hiện đại.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined">theater_comedy</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card shadow-2xl transition-all duration-500 hover:border-gold-bright/60">
              <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">20:00</time>
              <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">Minigame & Karaoke</h4>
              <p className="text-ivory/80 text-base leading-relaxed">Thời gian thư giãn với những trò chơi gắn kết và chương trình văn nghệ tự do từ các thành viên trong công ty.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card shadow-2xl transition-all duration-500 hover:border-gold-bright/60">
              <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">22:00</time>
              <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">Bế Mạc</h4>
              <p className="text-ivory/80 text-base leading-relaxed">Trao quà lì xì đầu năm và gửi những lời chúc tốt đẹp nhất trước khi kết thúc chương trình.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
