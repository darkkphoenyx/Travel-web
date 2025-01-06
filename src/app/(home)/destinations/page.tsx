import Breadcrumb from '@/components/layout/Breadcrumb'
import InstagramFeed from '@/components/layout/InstagramFeed'
import DestinationDataOne from '@/constant/Destination/DestinationDataOne'
import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: 'Destination | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const Destinations = () => {
    return (
        <>
            <Breadcrumb
                page='Destination'
                pageTitle='A Find Your Most Popular Destination'
            />
            {/*========== DESTINATION STYLE START ==========*/}
            <div className="relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white lg:pt-30 pt-24 ">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">

                    <div className="text-center lg:pb-[60px] pb-[40px]">
                        <h5 className="section-sub-title-v1 variant-2">Explore Our Tours</h5>
                        <h2 className="section-title-v1">Top Attractions Destinations</h2>
                    </div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-base">
                        {DestinationDataOne?.destinations?.map((item) => (
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

                    <div className="mt-14 text-center">
                        <Link href="/package-details" className="btn_primary__v1">
                            Find Out More
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            {/*========== DESTINATION STYLE START ==========*/}

            <InstagramFeed />

        </>
    )
}

export default Destinations