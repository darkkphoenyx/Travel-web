'use client'

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const PackageDetailsSlider = ({ slider_images }: { slider_images: string[] }) => {

    const navigation = {
        nextEl: ".pd-next",
        prevEl: ".pd-prev",
    }


    return (
        <div className="swiper product_details__slider relative group">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                speed={500}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}
                navigation={navigation}
                modules={[Navigation]}
            >
                {/* <img src="./assets/images/packages/s1.webp" alt="" /> */}
                {slider_images?.map((slide, i) => (
                    <SwiperSlide key={i+1}>
                        <div className="swiper-slide relative">
                            <Image height={787} width={800} src={slide} alt="details" className="w-full" />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="pd-next cursor-pointer md:h-14 md:w-14 md:inline-flex hidden rounded-full lg:text-lg justify-center items-center bg-white text-dark-1 hover:bg-primary-1 hover:text-white group-hover:-translate-x-8 group-hover:opacity-100 opacity-0 duration-300 right-0 top-1/2 -translate-y-1/2 z-10 absolute">
                <i className="bi bi-arrow-right" />
            </div>
            <div className="pd-prev cursor-pointer md:h-14 md:w-14 md:inline-flex hidden rounded-full lg:text-lg justify-center items-center bg-white text-dark-1 hover:bg-primary-1 hover:text-white group-hover:translate-x-8 group-hover:opacity-100 opacity-0 duration-300 left-0 top-1/2 -translate-y-1/2 z-10 absolute">
                <i className="bi bi-arrow-left" />
            </div>
        </div>
    )
}

export default PackageDetailsSlider