'use client'

import FaqData from '@/constant/common/FaqData';
import { useState } from 'react';
import AccordionSingle from './ui/AccordionSingle';

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index: any) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="faq_style__one z-1 lg:pt-30 pt-24 mt-30 bg-gradient-to-t to-[#FFF1EC] from-white relative ">
            <div className="absolute top-[5%] right-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
            </div>
            <div className="container">
                <div className="text-center lg:pb-[60px] pb-[40px]">
                    <h5 className="section-sub-title-v1">{FaqData.sub_title}</h5>
                    <h2 className="section-title-v1">{FaqData.title}</h2>
                </div>

                <div className='grid grid-cols-2 gap-[30px]'>
                    <div className='flex flex-col gap-[30px]'>
                        {FaqData?.faqs?.slice(0, FaqData?.faqs?.length / 2).map((item, index) => (
                            <AccordionSingle
                                index={index}
                                content={item.content}
                                question={item.question}
                                key={item.id}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        {FaqData?.faqs?.slice(FaqData?.faqs?.length / 2, FaqData?.faqs?.length).map((item, index) => (
                            <AccordionSingle
                                index={index + FaqData.faqs.length / 2}
                                content={item.content}
                                question={item.question}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;