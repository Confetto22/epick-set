"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "@/styles/horizontal-carousel.css";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
const swiperRow1 = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1450044804117-534ccd6e6a3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
];

export const CarouselHorizontal = () => {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="horizontal-carousel relative w-full h-[393px] overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        loopPreventsSliding={false}
        modules={[Navigation]}
        className="h-full w-full"
      >
        {swiperRow1.map((image, index) => (
          <SwiperSlide key={`slide-${index}-${image}`} className="h-full">
            <div className="h-full w-full relative rounded-[10px] overflow-hidden">
              <img
                src={image}
                alt={`slide-image-${index}`}
                className="rounded-[10px] object-cover w-full h-full"
                loading={index <= 1 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        ref={prevButtonRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.4)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.6)] transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white w-4 h-4" />
      </button>
      <button
        ref={nextButtonRef}
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.4)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.6)] transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white w-4 h-4" />
      </button>
    </div>
  );
};
