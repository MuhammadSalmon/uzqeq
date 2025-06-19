'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroSlides from '../../data/heroSlides';
import BlurText from './animations/BlurText ';

export default function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
        loop
        speed={4000}
        className="group"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center bg-fixed flex items-center justify-center px-4 text-white relative h-[60vh] md:h-screen transition-opacity duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-500 opacity-10"></div>

              {/* Content */}
              <div className="relative z-10 font-semibold text-center max-w-2xl text-4xl p-6 md:p-12 text-white mx-auto">
                <div className="mb-4">
                  <BlurText
                    text={slide.title}
                    className="text-lg md:text-4xl mx-auto font-light"
                    delay={100}
                    animateBy="words"
                  />
                </div>

                <BlurText
                  text={slide.heading}
                  className="text-2xl md:text-5xl font-bold mb-4"
                  delay={150}
                  animateBy="words"
                />

                <BlurText
                  text={slide.description}
                  className="text-sm md:text-lg mb-6"
                  delay={200}
                  animateBy="words"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
