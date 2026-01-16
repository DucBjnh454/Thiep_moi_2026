import React, { useState, useEffect } from 'react';

const Countdown = () => {
  // Target date: January 23, 2026, 17:00
  const targetDate = new Date('2026-01-23T17:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-16 bg-deep-red border-y border-gold/30">
      <div className="max-w-[960px] mx-auto px-6">
        <p className="text-center text-gold-bright text-base font-bold tracking-[0.3em] uppercase mb-10">Countdown to Lunar New Year</p>
        <div className="flex gap-4 md:gap-10 justify-center text-gold-bright font-black">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-primary-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <p className="text-4xl md:text-5xl font-serif">{String(timeLeft.days).padStart(3, '0')}</p>
            </div>
            <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Ngày</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-primary-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <p className="text-4xl md:text-5xl font-serif">{String(timeLeft.hours).padStart(2, '0')}</p>
            </div>
            <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Giờ</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-primary-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <p className="text-4xl md:text-5xl font-serif">{String(timeLeft.minutes).padStart(2, '0')}</p>
            </div>
            <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Phút</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-primary-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <p className="text-4xl md:text-5xl font-serif">{String(timeLeft.seconds).padStart(2, '0')}</p>
            </div>
            <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Giây</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
