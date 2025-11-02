"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "@/styles/vertical-carousel.css";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
const swiperRow1 = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1450044804117-534ccd6e6a3a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
];

export const CarouselVertical = () => {
  return (
    <div className="vertical-carousel  gap-5 w-full hidden md:flex">
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={15}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {swiperRow1.map((image) => (
          <SwiperSlide key={image} className="rounded-lg">
            <Image
              src={image}
              alt="slide-image"
              className="rounded-lg"
              width={200}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={15}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper !hidden lg:!block"
      >
        {swiperRow1.map((image) => (
          <SwiperSlide key={image} className="rounded-lg">
            <Image
              src={image}
              alt="slide-image"
              className="rounded-lg"
              width={200}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
