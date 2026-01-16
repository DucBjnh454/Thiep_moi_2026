import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import "./TetInvitation.css";

// Custom Horse Cursor Component
const HorseCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Check if hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('gold-button') ||
        target.classList.contains('cursor-pointer') ||
        target.onclick !== null
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none horse-cursor-custom ${isHovering ? 'scale-up' : ''}`}
      style={{
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        left: 0,
        top: 0,
      }}
    >
      <img 
        src="/cusor2.png" 
        alt="Horse cursor"
        className="transition-transform duration-150"
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
};

const TetInvitation = () => {
  // Image carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Countdown state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Scroll animation state
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});
  
  // Timeline progress state - track how many items are visible
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineItemRefs = useRef([]);
  const timelineContainerRef = useRef(null);
  const passedItemsRef = useRef(new Set()); // Track items that have been scrolled past

  // Confetti handler - Single burst full screen
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF1493', '#00CED1', '#32CD32', '#D4AF37', '#F9E29C'];

    // Single massive burst from center covering full screen
    confetti({
      particleCount: 300,
      spread: 360,
      origin: { y: 0.5, x: 0.5 },
      colors: colors,
      startVelocity: 45,
      gravity: 0.8,
      ticks: 200,
      scalar: 1.2,
      shapes: ['circle', 'square'],
    });

    // Additional bursts from corners for full coverage
    confetti({
      particleCount: 100,
      angle: 45,
      spread: 70,
      origin: { x: 0, y: 0 },
      colors: colors,
      startVelocity: 50,
    });

    confetti({
      particleCount: 100,
      angle: 135,
      spread: 70,
      origin: { x: 1, y: 0 },
      colors: colors,
      startVelocity: 50,
    });

    confetti({
      particleCount: 100,
      angle: 225,
      spread: 70,
      origin: { x: 1, y: 1 },
      colors: colors,
      startVelocity: 50,
    });

    confetti({
      particleCount: 100,
      angle: 315,
      spread: 70,
      origin: { x: 0, y: 1 },
      colors: colors,
      startVelocity: 50,
    });
  };

  // Images array
  const images = [
    "/anh2.jpg",
    "/anh12.jpg",
    "/anh13.jpg",
    "/anh5.jpg",
    "/anh7.jpg",
    "/anh9.jpg",
    "/anh10.jpg",
    "/anh11.jpg",
  ];

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Handle touch start
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end and determine swipe direction
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Go to next image
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to previous image
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to specific image
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-play carousel (optional - comment out if you don't want auto-play)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Countdown timer to February 5, 2026
  useEffect(() => {
    const targetDate = new Date("2026-02-05T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Enhanced scroll animation observer with better threshold
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.15, 0.3],
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id || entry.target.dataset.section;
        if (entry.isIntersecting) {
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            newSet.add(sectionId);
            return newSet;
          });
        }
      });
    }, observerOptions);

    // Store refs in a variable for cleanup
    const currentRefs = sectionRefs.current;

    // Observe all sections
    Object.values(currentRefs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Timeline items observer - track progress for timeline bar animation
  const isChuongTrinhVisible = visibleSections.has("chuong-trinh");
  
  useEffect(() => {
    // Only observe when section is visible
    if (!isChuongTrinhVisible) {
      // Reset passed items when section is not visible
      passedItemsRef.current.clear();
      setTimelineProgress(0);
      return;
    }

    const updateTimelineProgress = () => {
      const container = timelineContainerRef.current;
      if (!container) return;

      const validRefs = timelineItemRefs.current.filter(ref => ref !== null);
      if (validRefs.length === 0) return;
      
      // Find the highest item that has been scrolled past or is currently visible
      let maxPassedIndex = -1;
      
      validRefs.forEach((itemRef, index) => {
        if (!itemRef) return;
        
        const itemRect = itemRef.getBoundingClientRect();
        const itemTop = itemRect.top;
        const itemHeight = itemRect.height;
        
        // Item is considered "passed" if its center point is above viewport center
        // or if it's currently visible
        const viewportCenter = window.innerHeight / 2;
        const itemCenter = itemTop + itemHeight / 2;
        
        if (itemCenter < viewportCenter + 100) {
          // Item has been scrolled past or is near viewport center
          passedItemsRef.current.add(index);
          maxPassedIndex = Math.max(maxPassedIndex, index);
        } else if (itemRect.top < viewportCenter && itemRect.bottom > 0) {
          // Item is currently visible, calculate partial progress
          const itemProgress = (viewportCenter - itemRect.top) / itemHeight;
          if (itemProgress > 0.3) {
            passedItemsRef.current.add(index);
            maxPassedIndex = Math.max(maxPassedIndex, index);
          }
        }
      });

      // Calculate progress based on highest passed item
      const totalItems = validRefs.length;
      if (totalItems > 0 && maxPassedIndex >= 0) {
        // Progress = (maxPassedIndex + 1) / totalItems * 100%
        // Add partial progress for current item if visible
        let progress = ((maxPassedIndex + 1) / totalItems) * 100;
        
        // Check if next item is partially visible and add partial progress
        if (maxPassedIndex < totalItems - 1) {
          const nextItemRef = validRefs[maxPassedIndex + 1];
          if (nextItemRef) {
            const nextItemRect = nextItemRef.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            if (nextItemRect.top < viewportCenter && nextItemRect.bottom > 0) {
              const nextItemProgress = Math.max(0, (viewportCenter - nextItemRect.top) / nextItemRect.height);
              progress += (nextItemProgress / totalItems) * 100;
            }
          }
        }
        
        progress = Math.min(progress, 100);
        
        // Only update if progress increased (prevent going backwards)
        setTimelineProgress((prevProgress) => Math.max(prevProgress, progress));
      }
    };

    // Initial update
    updateTimelineProgress();

    // Update on scroll
    const handleScroll = () => {
      if (isChuongTrinhVisible) {
        updateTimelineProgress();
      }
    };

    // Throttle scroll events for better performance
    let scrollTimeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', updateTimelineProgress);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', updateTimelineProgress);
      clearTimeout(scrollTimeout);
    };
  }, [isChuongTrinhVisible]);
  return (
    <div className="dark">
      {/* Custom Horse Cursor */}
      <HorseCursor />
      {/* Header Navigation */}
      <div className="fixed top-0 w-full z-50  backdrop-blur-md border-b border-gold/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            <img
              alt="logo"
              className="w-32 h-10 h-full object-cover object-center"
              src="/PeaSoft Vietnam.webp"
            />
            <h2 className="text-gold-bright text-2xl font-bold tracking-tight font-serif italic">
              Tet 2026
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-ivory/80 hover:text-gold-bright text-sm font-medium transition-colors uppercase tracking-widest"
              href="#chuong-trinh"
            >
              Chương Trình
            </a>
            <a
              className="text-ivory/80 hover:text-gold-bright text-sm font-medium transition-colors uppercase tracking-widest"
              href="#venue-gallery"
            >
              Không Gian
            </a>
            <a
              className="text-ivory/80 hover:text-gold-bright text-sm font-medium transition-colors uppercase tracking-widest"
              href="#dia-diem"
            >
              Địa Điểm
            </a>
            <a
              className="gold-button px-6 py-2 rounded-lg text-sm font-black transition-all hover:scale-105"
              href="#rsvp"
            >
              Xác nhận ngay
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-deep-red/40 to-deep-red"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              alt="Traditional Vietnamese Tet background"
              className="w-full h-full object-cover object-center"
              src="/anh16.jpg"
            />
          </div>
        </div>
        <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
          <span className="material-symbols-outlined text-gold-bright text-9xl">
            filter_vintage
          </span>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
          <span className="material-symbols-outlined text-gold-bright text-9xl">
            filter_vintage
          </span>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif italic text-6xl md:text-9xl font-black mb-6 gold-gradient-text drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
             YEAR END PARTY 2025
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
          <section
            ref={(el) => (sectionRefs.current["countdown"] = el)}
            className={`pt-16 scroll-animate fade-zoom-in ${
              visibleSections.has("countdown") ? "animate-in" : "animate-out"
            }`}
            data-section="countdown"
          >
            <div className="max-w-[960px] mx-auto px-6">
              <p className="text-center text-gold-bright text-base font-bold tracking-[0.3em] uppercase mb-10">
                Countdown to Lunar New Year
              </p>
              <div className="flex gap-4 md:gap-10 justify-center text-gold-bright font-black">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <p
                      key={countdown.days}
                      className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                    >
                      {countdown.days}
                    </p>
                  </div>
                  <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">
                    Ngày
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <p
                      key={countdown.hours}
                      className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                    >
                      {String(countdown.hours).padStart(2, "0")}
                    </p>
                  </div>
                  <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">
                    Giờ
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <p
                      key={countdown.minutes}
                      className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                    >
                      {String(countdown.minutes).padStart(2, "0")}
                    </p>
                  </div>
                  <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">
                    Phút
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <p
                      key={countdown.seconds}
                      className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                    >
                      {String(countdown.seconds).padStart(2, "0")}
                    </p>
                  </div>
                  <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">
                    Giây
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Countdown Section */}
      {/* <section className="py-16 bg-deep-red border-y border-gold/30">
        <div className="max-w-[960px] mx-auto px-6">
          <p className="text-center text-gold-bright text-base font-bold tracking-[0.3em] uppercase mb-10">Countdown to Lunar New Year</p>
          <div className="flex gap-4 md:gap-10 justify-center text-gold-bright font-black">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <p 
                  key={countdown.days}
                  className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                >
                  {countdown.days}
                </p>
              </div>
              <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Ngày</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <p 
                  key={countdown.hours}
                  className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                >
                  {String(countdown.hours).padStart(2, '0')}
                </p>
              </div>
              <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Giờ</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <p 
                  key={countdown.minutes}
                  className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                >
                  {String(countdown.minutes).padStart(2, '0')}
                </p>
              </div>
              <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Phút</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-deep-red border-2 border-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <p 
                  key={countdown.seconds}
                  className="text-4xl md:text-5xl font-serif countdown-number mb-4"
                >
                  {String(countdown.seconds).padStart(2, '0')}
                </p>
              </div>
              <p className="text-gold-shimmer/80 text-xs uppercase tracking-widest font-bold">Giây</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Venue Gallery Section */}
      <section
        ref={(el) => (sectionRefs.current["venue-gallery"] = el)}
        className={`py-24 bg-deep-red relative overflow-hidden scroll-animate section-bg-venue ${
          visibleSections.has("venue-gallery") ? "animate-in" : "animate-out"
        }`}
        id="venue-gallery"
        data-section="venue-gallery"
      >
        {/* Background Pattern Layers */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/8 via-transparent to-gold/8"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gold/10 to-transparent"></div>
        
        {/* Decorative Corner Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/15 via-gold/5 to-transparent rounded-tr-full blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative scroll-animate fade-in-right ${
              visibleSections.has("venue-gallery") ? "animate-in" : "animate-out"
            }`}>
              <div className="absolute -inset-6 border-2 border-gold/40 rounded-3xl transform rotate-2"></div>
              <div
                className="relative bg-deep-red p-3 rounded-2xl shadow-2xl border-2 border-gold overflow-hidden"
                ref={carouselRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Image Carousel Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="min-w-full h-full">
                        <img
                          alt={`Nhà hàng Vị Xưa interior ${index + 1}`}
                          className="w-full h-full object-cover"
                          src={image}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold/80 hover:bg-gold text-deep-red p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Previous image"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      chevron_left
                    </span>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold/80 hover:bg-gold text-deep-red p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Next image"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      chevron_right
                    </span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentImageIndex
                            ? "w-8 h-2 bg-gold-bright"
                            : "w-2 h-2 bg-gold/50 hover:bg-gold/70"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative icons for Không Gian Tiệc */}
              <div className="absolute top-40 -left-60 w-40 h-40 opacity-30">
                <span className="material-symbols-outlined text-gold-bright text-8xl">
                  wb_sunny
                </span>
              </div>
            </div>
            <div className={`space-y-8 scroll-animate fade-in-left ${
              visibleSections.has("venue-gallery") ? "animate-in" : "animate-out"
            }`}>
              <h3 className="font-serif italic text-gold-bright text-2xl tracking-[0.4em] uppercase">
                Không Gian Tiệc
              </h3>
              <h2 className="font-serif italic text-5xl md:text-6xl text-ivory leading-tight gold-gradient-text">
                Nhà hàng Vị Xưa
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-gold to-transparent"></div>
              <p className="text-gold-shimmer/90 text-xl leading-relaxed font-light">
                Nhà hàng Vị Xưa là điểm đến lý tưởng để thưởng thức ẩm thực
                truyền thống với những món ăn tinh tế, đậm đà hương vị quê nhà.
                Từ những nguyên liệu tươi ngon, đội ngũ bếp chuyên nghiệp mang
                đến trải nghiệm ẩm thực đầy cảm xúc. Không Gian Hoàn Hảo Cho Hội
                Họp & Chiêu Đãi Với không gian trang nhã, ấm cúng, sang trọng Vị
                Xưa là nơi lý tưởng cho các buổi gặp gỡ gia đình, tiếp đãi đối
                tác hay hội họp bạn bè. Mỗi món ăn không chỉ ngon mà còn mang
                đến sự kết nối và gắn kết.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule Section */}
      <section
        ref={(el) => (sectionRefs.current["chuong-trinh"] = el)}
        className={`py-24 border-t border-gold/30 bg-deep-red relative overflow-hidden scroll-animate section-bg-program ${
          visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
        }`}
        id="chuong-trinh"
        data-section="chuong-trinh"
      >
        {/* Background Pattern Layers */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/8 via-transparent to-gold/8"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gold/10 to-transparent"></div>
        
        {/* Decorative Corner Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/15 via-gold/5 to-transparent rounded-tr-full blur-3xl"></div>
        
        {/* Decorative icons for Chi Tiết Chương Trình */}
        <div className="absolute top-1/2 left-5 w-28 h-28 opacity-15 hidden md:block">
          <span className="material-symbols-outlined text-gold-bright text-6xl">
            star
          </span>
        </div>
        <div className="absolute top-1/3 right-8 w-24 h-24 opacity-20">
          <span className="material-symbols-outlined text-gold-bright text-5xl">
            favorite
          </span>
        </div>
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 relative">
          <div
            className={`text-center mb-20 scroll-animate fade-in-up ${
              visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
            }`}
          >
           
            <h2 className="font-serif italic text-5xl md:text-7xl gold-gradient-text">
              Chi Tiết Chương Trình
            </h2>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="h-[1px] w-20 bg-gold/50"></div>
              <span className="material-symbols-outlined text-gold-bright">
                owl
              </span>
              <div className="h-[1px] w-20 bg-gold/50"></div>
            </div>
          </div>
          <div 
            ref={timelineContainerRef}
            className="relative timeline-container"
            style={{ "--timeline-progress": `${timelineProgress}%` }}
          >
            {/* Animated Timeline Bar */}
            <div className="timeline-bar-base"></div>
            <div className="timeline-bar-progress"></div>
            
            {/* Timeline Item 1 */}
            <div 
              ref={(el) => {
                if (el) timelineItemRefs.current[0] = el;
              }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 timeline-item ${
                visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
              }`} 
              style={{ "--delay": 0 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined">
                  camera_enhance
                </span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card transition-all duration-500">
                <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">
                  17:00 - 18:00
                </time>
                <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">
                  Di chuyển & Chụp ảnh checkin
                </h4>
                <p className="text-ivory/80 text-base leading-relaxed">
                  Khách mời và nhân viên di chuyển đến nhà hàng Chụp ảnh checkin cùng ban lãnh đạo, các phòng ban
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div 
              ref={(el) => {
                if (el) timelineItemRefs.current[1] = el;
              }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 timeline-item ${
                visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
              }`} 
              style={{ "--delay": 1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card transition-all duration-500">
                <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">
                  18:30
                </time>
                <h4 className="font-serif text-3xl font-bold text-gold-bright mb-4 italic">
                  Khai Mạc & Phát Biểu
                </h4>
                <div className="space-y-4">
                  <p className="text-gold-shimmer/80 text-sm font-bold uppercase tracking-widest border-l-2 border-gold/40 pl-4">
                    Giới thiệu Ban Lãnh Đạo:
                  </p>
                  <ul className="text-base space-y-2 text-ivory/90 font-medium ml-4">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold-bright rounded-full"></span>{" "}
                      Chairman: Nguyễn Ngọc Hà
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold-bright rounded-full"></span>{" "}
                      CEO: Huỳnh Anh Đức
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold-bright rounded-full"></span>{" "}
                      COO: Nguyễn Ngọc Đức
                    </li>
                  </ul>
                  <p className="text-ivory/80 text-base leading-relaxed border-t border-gold/20 pt-4">
                    Chairman: Nguyễn Ngọc Hà chia sẻ cảm nhận, Những điều đã làm
                    được, chưa làm được trong năm 2025, Thách thức khó khăn cần
                    vượt qua trong năm 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div 
              ref={(el) => {
                if (el) timelineItemRefs.current[2] = el;
              }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 timeline-item ${
                visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
              }`} 
              style={{ "--delay": 2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card transition-all duration-500">
                <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">
                  18:40
                </time>
                <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">
                  Vinh danh
                </h4>
                <p className="text-ivory/80 text-base leading-relaxed">
                  Vinh danh các cá nhân và tập thể đã có những đóng góp xuất sắc
                  trong hành trình vươn xa của công ty năm 2025.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div 
              ref={(el) => {
                if (el) timelineItemRefs.current[3] = el;
              }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 timeline-item ${
                visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
              }`} 
              style={{ "--delay": 3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card transition-all duration-500">
                <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">
                  19:00
                </time>
                <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">
                  Nhập tiệc
                </h4>
                <p className="text-ivory/80 text-base leading-relaxed">
                  Thưởng thức tinh hoa ẩm thực Việt trong không gian âm nhạc
                  truyền thống hòa quyện cùng phong cách hiện đại.
                </p>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div 
              ref={(el) => {
                if (el) timelineItemRefs.current[4] = el;
              }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 timeline-item ${
                visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
              }`} 
              style={{ "--delay": 4 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined">
                  theater_comedy
                </span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card transition-all duration-500">
                <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">
                  20:00
                </time>
                <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">
                  Minigame & Karaoke
                </h4>
                <p className="text-ivory/80 text-base leading-relaxed">
                  Thời gian thư giãn với những trò chơi gắn kết và chương trình
                  văn nghệ tự do từ các thành viên trong công ty.
                </p>
              </div>
            </div>

            {/* Timeline Item 6 */}
            <div 
              ref={(el) => {
                if (el) timelineItemRefs.current[5] = el;
              }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group timeline-item ${
                visibleSections.has("chuong-trinh") ? "animate-in" : "animate-out"
              }`} 
              style={{ "--delay": 5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-bright bg-deep-red text-gold-bright shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl timeline-card transition-all duration-500">
                <time className="font-serif italic text-gold-shimmer font-bold text-2xl mb-2 block">
                  22:00
                </time>
                <h4 className="font-serif text-3xl font-bold text-gold-bright mb-3 italic">
                  Bế Mạc
                </h4>
                <p className="text-ivory/80 text-base leading-relaxed">
                  Gửi những lời chúc tốt đẹp nhất
                  trước khi kết thúc chương trình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        ref={(el) => (sectionRefs.current["dia-diem"] = el)}
        className={`py-24 bg-deep-red relative border-t border-gold/30 scroll-animate overflow-hidden section-bg-location ${
          visibleSections.has("dia-diem") ? "animate-in" : "animate-out"
        }`}
        id="dia-diem"
        data-section="dia-diem"
      >
        {/* Background Pattern Layers */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/8 via-transparent to-gold/8"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gold/10 to-transparent"></div>
        
        {/* Decorative Corner Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/15 via-gold/5 to-transparent rounded-tr-full blur-3xl"></div>
        
        {/* Decorative icons for Thông Tin Địa Điểm */}
        <div className="absolute top-1/2 left-5 w-28 h-28 opacity-15 hidden md:block">
          <span className="material-symbols-outlined text-gold-bright text-6xl">
            star
          </span>
        </div>
        <div className="absolute top-1/3 right-8 w-24 h-24 opacity-20">
          <span className="material-symbols-outlined text-gold-bright text-5xl">
            favorite
          </span>
        </div>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div
            className={`space-y-6 md:space-y-10 scroll-animate fade-in-left stagger-children ${
              visibleSections.has("dia-diem") ? "animate-in" : "animate-out"
            }`}
          >
            <h2 className="font-serif italic text-3xl md:text-5xl text-gold-bright gold-gradient-text">
              Thông Tin Địa Điểm
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6" style={{ "--stagger-index": 0 }}>
                <span className="material-symbols-outlined text-gold-bright text-3xl md:text-4xl mt-1 shrink-0">
                  location_on
                </span>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-ivory">
                    Nhà hàng Vị Xưa
                  </p>
                  <p className="text-gold-shimmer/70 text-base md:text-lg">
                    Số 60 Nguyễn Thị Định, Yên Hòa, Hà Nội
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6" style={{ "--stagger-index": 1 }}>
                <span className="material-symbols-outlined text-gold-bright text-3xl md:text-4xl mt-1 shrink-0">
                  calendar_month
                </span>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-ivory">
                    Thứ Năm, 05 Tháng 2, 2026
                  </p>
                  <p className="text-gold-shimmer/70 text-base md:text-lg">17:00 - 22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6" style={{ "--stagger-index": 2 }}>
                <span className="material-symbols-outlined text-gold-bright text-3xl md:text-4xl mt-1 shrink-0">
                  apparel
                </span>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-ivory">Trang Phục</p>
                  <p className="text-gold-shimmer/70 text-base md:text-lg">
                    (Đỏ/Vàng/Đen/Trắng)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`relative w-full md:min-w-[600px] scroll-animate fade-in-right scale-in ${
              visibleSections.has("dia-diem") ? "animate-in" : "animate-out"
            }`}>
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-gold via-gold-shimmer to-gold rounded-2xl md:rounded-3xl blur-sm md:blur-md opacity-40 group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative bg-black rounded-xl md:rounded-2xl overflow-hidden aspect-video shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 md:border-[3px] border-gold-bright">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29792.5!2d105.8047714!3d21.0081752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adafcfa83627%3A0xcc13c5db35d0cb47!2zQ8ahbSBW4buNIFjGsHUgKEPDsm4gVOG7qyBYdWEp!5e0!3m2!1svi!2s!4v1705123456789!5m2!1svi!2s&z=13"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Nhà hàng Vị Xưa - Google Maps"
              ></iframe>
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-10">
                <a 
                  href="https://www.google.com/maps/place/C%C6%A1m+V%E1%BB%8B+X%C6%B0a/@21.0081802,105.8021965,17z/data=!3m1!4b1!4m6!3m5!1s0x3135adafcfa83627:0xcc13c5db35d0cb47!8m2!3d21.0081752!4d105.8047714!16s%2Fg%2F11wq50hs8l?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button px-3 py-2 md:px-4 md:py-3 rounded-full font-black shadow-xl md:shadow-2xl flex items-center gap-1 md:gap-2 hover:scale-105 transition-transform cursor-pointer text-sm md:text-base"
                >
                  <span className="material-symbols-outlined text-lg md:text-xl">open_in_new</span>
                  <span className="hidden sm:inline">Mở Google Maps</span>
                  <span className="sm:hidden">Mở Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section
        ref={(el) => (sectionRefs.current["rsvp"] = el)}
        className={`pt-24 border-t border-gold/30 pb-24 bg-deep-red relative overflow-hidden scroll-animate section-bg-rsvp ${
          visibleSections.has("rsvp") ? "animate-in" : "animate-out"
        }`}
        id="rsvp"
        data-section="rsvp"
      >
        {/* Background Pattern Layers */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/8 via-transparent to-gold/8"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gold/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gold/10 to-transparent"></div>
        
        {/* Decorative Corner Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/15 via-gold/5 to-transparent rounded-tr-full blur-3xl"></div>
        
        {/* Decorative icons for Xác Nhận Tham Dự */}
        <div className="absolute top-1/2 left-5 w-28 h-28 opacity-15 hidden md:block">
          <span className="material-symbols-outlined text-gold-bright text-6xl">
            star
          </span>
        </div>
        <div className="absolute top-1/3 right-8 w-24 h-24 opacity-20">
          <span className="material-symbols-outlined text-gold-bright text-5xl">
            favorite
          </span>
        </div>
        <div className="max-w-[750px] mx-auto px-4 md:px-6 relative z-10">
          <div
            className={`text-center mb-16 scroll-animate fade-in-up ${
              visibleSections.has("rsvp") ? "animate-in" : "animate-out"
            }`}
          >
            <h2 className="font-serif italic text-5xl md:text-6xl text-gold-bright mb-6 gold-gradient-text">
              Xác Nhận Tham Dự
            </h2>
            <p className="text-gold-shimmer/80 text-lg">
              Hân hạnh được đón tiếp Quý khách. Vui lòng xác nhận trước ngày
              15/01/2026.
            </p>
          </div>
          <form 
            className={`space-y-8 p-10 rounded-3xl card-confirm transition-all duration-500 scroll-animate fade-zoom-in ${
              visibleSections.has("rsvp") ? "animate-in" : "animate-out"
            }`}
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-gold-bright text-xs font-black uppercase tracking-[0.2em] ml-1">
                  Họ và Tên
                </label>
                <input
                  className="w-full bg-deep-red/30 border-2 border-white/40 rounded-xl px-5 py-4 text-ivory focus:border-gold-bright focus:ring-0 placeholder:text-ivory/20 transition-all text-lg"
                  placeholder="Nguyễn Văn A"
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-gold-bright text-xs font-black uppercase tracking-[0.2em] ml-1">
                  Phòng Ban
                </label>
                <input
                  className="w-full bg-deep-red/30 border-2 border-white/40 rounded-xl px-5 py-4 text-ivory focus:border-gold-bright focus:ring-0 placeholder:text-ivory/20 transition-all text-lg"
                  placeholder="Phòng Solution"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-gold-bright text-xs font-black uppercase tracking-[0.2em] ml-1">
                Yêu cầu ăn uống (nếu có)
              </label>
              <textarea
                className="w-full bg-deep-red/30 border-2 border-white/40 rounded-xl px-5 py-4 text-ivory focus:border-gold-bright focus:ring-0 placeholder:text-ivory/20 transition-all text-lg"
                placeholder="Ăn chay, dị ứng hải sản..."
                rows="4"
              ></textarea>
            </div>
            <div className="pt-6">
              <button
                className="w-full gold-button font-black py-5 rounded-xl text-xl transition-all transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.4)] uppercase tracking-[0.3em] border-none"
                type="submit"
              >
                Xác Nhận Ngay
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        ref={(el) => (sectionRefs.current["footer"] = el)}
        className={`py-10 bg-deep-red border-t border-gold/40 text-center relative scroll-animate ${
          visibleSections.has("footer") ? "animate-in" : "animate-out"
        }`}
        data-section="footer"
      >
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex justify-center mb-8 gap-4">
            <span className="material-symbols-outlined text-gold-bright text-4xl">
              festival
            </span>
            <span className="material-symbols-outlined text-gold-bright text-4xl">
              festival
            </span>
            <span className="material-symbols-outlined text-gold-bright text-4xl">
              festival
            </span>
          </div>
          <h3 className="font-serif italic text-4xl gold-gradient-text mb-6">
            Chúc Mừng Năm Mới 2026
          </h3>
          <p className="text-gold-shimmer/60 text-base leading-relaxed font-light">
            Cảm ơn Quý đối tác và Toàn thể nhân viên đã đồng hành cùng công ty
            trong suốt một năm vừa qua. Hẹn gặp lại tất cả mọi người tại đêm
            tiệc hưng thịnh này.
          </p>
        </div>
      </footer>

      {/* Floating RSVP Button (Mobile) */}
      <div className="fixed bottom-8 right-8 z-50 md:hidden">
        <a
          className="gold-button w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          href="#rsvp"
        >
          <span className="material-symbols-outlined text-3xl font-bold">
            edit_note
          </span>
        </a>
      </div>
    </div>
  );
};

export default TetInvitation;
