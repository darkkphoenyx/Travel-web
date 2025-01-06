import { Metadata } from "next";
import AboutOne from "@/components/HomeOne/AboutOne";
import BlogOne from "@/components/HomeOne/BlogOne";
import CategoryOne from "@/components/HomeOne/CategoryOne";
import Clients from "@/components/HomeOne/Clients";
import Faq from "@/components/HomeOne/Faq";
import FeaturedPackages from "@/components/HomeOne/FeaturedPackages";
import Hero from "@/components/HomeOne/Hero";
import HeroBulletin from "@/components/HomeOne/HeroBulletin";
import PackageOne from "@/components/HomeOne/PackageOne";
import TestimonialOne from "@/components/HomeOne/TestimonialOne";
import VideoBanner from "@/components/HomeOne/VideoBannerOne";
import InstagramFeed from "@/components/layout/InstagramFeed";


export const metadata: Metadata = {
    title: 'Home 01 | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}


const HomeOne = () => {
    return (
        <>
            <Hero />
            <HeroBulletin />
            <CategoryOne />
            <PackageOne />
            <VideoBanner />
            <div className="bg-gradient-to-t to-[#FFF1EC] from-white ">
                <Clients />
                <AboutOne />
            </div>
            <FeaturedPackages />
            <TestimonialOne />
            <Faq />
            <BlogOne />
            <InstagramFeed />
        </>
    );
}

export default HomeOne;