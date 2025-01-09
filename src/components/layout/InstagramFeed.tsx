'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import InstagramData from '@/constant/common/InstagramData'
import Link from 'next/link';
import Image from 'next/image';
const InstagramFeed = () => {
    return (
        <div className="instagram_feed_style__one lg:pt-30 pt-24 ">
            <Swiper 
                     slidesPerView={1}
                     spaceBetween={30}
                     loop={false}
                     breakpoints = {{
                        320: {
                            slidesPerView: 2
                          },
                          480: {
                            slidesPerView: 3
                          },
                          768: {
                            slidesPerView: 4
                          },
                          1200: {
                            slidesPerView: 5
                          }
                     }}
                     className='max-w-[1570px] mx-auto px-3 insta-feed-slider'
                >
                    {InstagramData.images?.map((item)=>(
                        <SwiperSlide key={item.id}>
                            <div className="relative overflow-hidden group">
                            <Image 
                                src={item.img} 
                                alt="instagram images"
                                height={280}
                                width={290} 
                                className="w-full" />
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>

    );
}

export default InstagramFeed;