'use client'

import Breadcrumb from "@/components/layout/Breadcrumb"
import InstagramFeed from "@/components/layout/InstagramFeed"
import PackageGallary from "@/components/package/PackageGallary";
import { Metadata } from "next";

import { useState } from "react";

const slides = [
    { src: "/assets/images/touriest/guide-3.webp", width: 800, height: 600 },
    { src: "/assets/images/touriest/guide-3.webp", width: 1600, height: 900 },
];

const Gallary = () => {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <Breadcrumb
                page='About Us'
                pageTitle='A Better Way of Traveling'
            />


            <div className="lg:pt-30 pt-24 relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="absolute bottom-[10%] left-[2%] max-w-[13%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/leaf-illustration-2.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1">Our Gallery</h5>
                        <h2 className="section-title-v1">Our Image Gallery</h2>
                    </div>
                    <PackageGallary/>
                    <div className="lg:pt-[60px] pt-[40px] text-center">
                        <a href="package-details.html" className="btn_primary__v1">
                            Load More
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
            </div>


            <InstagramFeed />
        </>
    )
}

export default Gallary