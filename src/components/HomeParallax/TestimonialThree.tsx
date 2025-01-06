'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import TestimonialDataThree from '@/constant/HomeParallax/TestimonialDataThree';
import Image from 'next/image';

const TestimonialThree = () => {

    const navigation = {
        nextEl: ".testi-next",
        prevEl: ".testi-prev",
    }

    return (
        <div className="testimonial_style__three lg:mt-30 mt-24 ">
            <div className="container relative">
                <div className="xl:px-20 lg:px-14 px-6 lg:py-14 py-6 shadow-custom-1">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={false}
                        navigation={navigation}
                        modules={[Navigation]}
                    >
                        {TestimonialDataThree?.testimonials?.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="grid grid-cols-12 gap-6 items-center">
                                    <div className="lg:col-span-4 col-span-12 lg:order-1 order-2 text-center">
                                        <div className="lg:max-w-[200px] max-w-[80px] mx-auto">
                                            <Image width={200} height={200} src={testimonial.avater} alt={testimonial.reviewer} />
                                        </div>
                                        <h5 className="lg:text-lg text-2md font-semibold text-dark-1 mt-4">{testimonial.reviewer}</h5>
                                        <p className="text-dark-2 mt-1">{testimonial.designation}</p>
                                    </div>
                                    <div className="lg:col-span-8 col-span-12 lg:order-2 order-1">
                                        <div>
                                            <div className="lg:mb-6 mb-4">
                                                <svg className="lg:max-w-[30px] max-w-[20px]" width={30} height={27} viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.714 26.8074C21.8987 26.8074 20.2813 25.9812 18.85 24.3176C17.4188 22.6651 16.709 20.4768 16.709 17.7525C16.709 15.4413 18.0122 11.902 20.6071 7.14565C23.2136 2.37816 25.1452 7.37518e-07 26.4135 8.484e-07C27.1234 9.10453e-07 27.4841 0.35728 27.4841 1.06068C27.4841 1.25049 26.7394 2.79128 25.2616 5.6942C23.7721 8.59713 23.0391 10.8748 23.0391 12.5049C23.0391 13.7666 23.8769 14.8049 25.5641 15.6088C27.2397 16.4127 28.3684 17.2501 28.9269 18.1209C29.4855 18.9918 29.7647 19.9408 29.7647 20.9457C29.7647 22.7656 29.2062 24.2059 28.0891 25.2443C26.9372 26.2826 25.4943 26.8074 23.714 26.8074Z" fill="#FF7C5B" />
                                                    <path d="M7.00493 26.8074C5.1897 26.8074 3.56064 25.9812 2.14104 24.3176C0.709797 22.6651 -1.79014e-06 20.4768 -1.55197e-06 17.7525C-1.34992e-06 15.4413 1.30324 11.902 3.89809 7.14565C6.49295 2.37816 8.43617 7.37514e-07 9.69287 8.47378e-07C10.4027 9.09431e-07 10.7634 0.35728 10.7634 1.06068C10.7634 1.25049 10.0187 2.79128 8.54091 5.6942C7.05149 8.59713 6.31841 10.8748 6.31841 12.5049C6.31841 13.7666 7.15621 14.8049 8.84344 15.6088C10.519 16.4127 11.6477 17.2501 12.2063 18.1209C12.7648 18.9918 13.0441 19.9408 13.0441 20.9457C13.0441 22.7656 12.4855 24.2059 11.3685 25.2443C10.2514 26.2826 8.78526 26.8074 7.00493 26.8074Z" fill="#FF7C5B" />
                                                </svg>
                                            </div>
                                            <p className="text-dark-2 lg:text-[25px] text-2md italic leading-[1.8] font-serif font-normal">
                                               {testimonial.review_desc}
                                            </p>
                                            <div className="text-end">
                                                <svg className="ml-auto lg:max-w-[30px] max-w-[20px]" width={30} height={27} viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.05119 0.000241621C7.86642 0.00024178 9.48384 0.826454 10.9151 2.49005C12.3463 4.14249 13.0562 6.33085 13.0562 9.05513C13.0562 11.3663 11.7529 14.9056 9.15803 19.662C6.55154 24.4295 4.61993 26.8076 3.35159 26.8076C2.64178 26.8076 2.28106 26.4503 2.28106 25.7469C2.28106 25.5571 3.02578 24.0163 4.50357 21.1134C5.993 18.2105 6.72608 15.9328 6.72608 14.3027C6.72608 13.0411 5.88828 12.0027 4.20104 11.1988C2.52543 10.3949 1.39673 9.55756 0.838193 8.68668C0.279657 7.8158 0.000388935 6.86677 0.000389023 5.86191C0.000389182 4.042 0.558927 2.6017 1.676 1.56335C2.82798 0.524995 4.27085 0.000241465 6.05119 0.000241621Z" fill="#FF7C5B" />
                                                    <path d="M22.7602 0.000241621C24.5754 0.00024178 26.2045 0.826454 27.6241 2.49005C29.0553 4.14249 29.7651 6.33085 29.7651 9.05513C29.7651 11.3663 28.4619 14.9056 25.867 19.662C23.2722 24.4295 21.329 26.8076 20.0723 26.8076C19.3625 26.8076 19.0017 26.4503 19.0017 25.7469C19.0017 25.5571 19.7464 24.0163 21.2242 21.1134C22.7136 18.2105 23.4467 15.9328 23.4467 14.3027C23.4467 13.0411 22.6089 12.0027 20.9217 11.1988C19.2461 10.3949 18.1174 9.55756 17.5589 8.68668C17.0003 7.8158 16.7211 6.86677 16.7211 5.86191C16.7211 4.042 17.2796 2.6017 18.3967 1.56335C19.5137 0.524995 20.9799 0.000241465 22.7602 0.000241621Z" fill="#FF7C5B" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden testi-prev lg:inline-block absolute max-w-[70px] right-0 top-1/2 -translate-y-1/2 translate-x-full group text-primary-1">
                    <svg width={79} height={50} viewBox="0 0 79 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={25} cy={25} r="24.25" transform="matrix(1 0 0 -1 29 50)" stroke="currentColor" strokeWidth="1.5" />
                        <path className="group-hover:translate-x-2 duration-200" d="M1 25.75C0.585786 25.75 0.25 25.4142 0.25 25C0.25 24.5858 0.585786 24.25 1 24.25L1 25.75ZM58.5303 24.4697C58.8232 24.7626 58.8232 25.2374 58.5303 25.5303L53.7574 30.3033C53.4645 30.5962 52.9896 30.5962 52.6967 30.3033C52.4038 30.0104 52.4038 29.5355 52.6967 29.2426L56.9393 25L52.6967 20.7574C52.4038 20.4645 52.4038 19.9896 52.6967 19.6967C52.9896 19.4038 53.4645 19.4038 53.7574 19.6967L58.5303 24.4697ZM1 24.25L58 24.25L58 25.75L1 25.75L1 24.25Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="hidden testi-next lg:inline-block absolute max-w-[70px] text-primary-1 left-0 top-1/2 -translate-y-1/2 -translate-x-full group">
                    <svg width={79} height={50} viewBox="0 0 79 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={25} cy={25} r="24.25" transform="rotate(-180 25 25)" stroke="currentColor" strokeWidth="1.5" />
                        <path className="group-hover:-translate-x-2 duration-200" d="M78 25.75C78.4142 25.75 78.75 25.4142 78.75 25C78.75 24.5858 78.4142 24.25 78 24.25L78 25.75ZM20.4697 24.4697C20.1768 24.7626 20.1768 25.2374 20.4697 25.5303L25.2426 30.3033C25.5355 30.5962 26.0104 30.5962 26.3033 30.3033C26.5962 30.0104 26.5962 29.5355 26.3033 29.2426L22.0607 25L26.3033 20.7574C26.5962 20.4645 26.5962 19.9896 26.3033 19.6967C26.0104 19.4038 25.5355 19.4038 25.2426 19.6967L20.4697 24.4697ZM78 24.25L21 24.25L21 25.75L78 25.75L78 24.25Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TestimonialThree