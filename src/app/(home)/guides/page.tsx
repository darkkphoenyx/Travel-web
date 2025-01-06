import GuideCard from "@/components/HomeOne/ui/GuideCard"
import Breadcrumb from "@/components/layout/Breadcrumb"
import InstagramFeed from "@/components/layout/InstagramFeed"
import GuideData from "@/constant/HomeOne/GuideData"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Guides | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const Guides = () => {
    return (
        <>
            <Breadcrumb
                page='Guide'
                pageTitle='A Our Amazing Travel Agents'
            />
            {/*========== GUIDE STYLE START ==========*/}
            <div className="lg:pt-30 pt-24 relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1">{GuideData?.sub_title}</h5>
                        <h2 className="section-title-v1">{GuideData?.Title}</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
                        {GuideData?.guides?.map((guide) => (
                            <GuideCard
                                imgUrl={guide.imgUrl}
                                name={guide.name}
                                designation={guide.designation}
                                key={guide.id}
                            />
                        ))}
                    </div>
                    <div className="lg:pt-[60px] pt-[40px] text-center">
                        <a href="/package-details" className="btn_primary__v1">
                            Load More
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/*========== GUIDE STYLE START ==========*/}

            <InstagramFeed/>
        </>
    )
}

export default Guides