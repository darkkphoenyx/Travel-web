import React from 'react'
import DestinationDataOne from '@/constant/Destination/DestinationDataOne';
import Link from 'next/link';

const DestinationTwo = () => {
    return (
        <div className="destination_style__three bg-gradient-to-t to-[#FFF4E2] from-white lg:pt-30 pt-24 mt-30 lg:pb-30 pb-24">
            <div className="container">
                <div className="text-center lg:pb-[60px] pb-[40px]">
                    <h5 className="section-sub-title-v1 variant-2">{DestinationDataOne?.sub_title}</h5>
                    <h2 className="section-title-v1">{DestinationDataOne.Title}</h2>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-base">
                    {DestinationDataOne?.destinations?.slice(0, 5).map((item) => (
                        <div className="text-center group " key={item.id}>
                            <Link href="/destination-details" className="shadow-custom-2 px-6 py-6 flex justify-center items-center lg:min-h-[200px] bg-white ">
                                <img src={item.image} alt="map" className="group-hover:scale-110 duration-200 lg:h-[120px]" />
                            </Link>
                            <h4 className="lg:text-[22px] text-md font-medium text-dark-1 leading-1.6 lg:mt-7 mt-5">
                                <Link href="/destination-details">{item.title}</Link>
                            </h4>
                            <p className="font-medium lg:text-md text-sm mt-2 text-secondary-1">
                                {item.tour_count} Tours Place
                            </p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-14">
                    <Link href="/destinations" className="btn_primary__v1 variant-2">
                        View All
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DestinationTwo