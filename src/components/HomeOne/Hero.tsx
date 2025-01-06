
import HeroData from '@/constant/HomeOne/HeroData';
import Image from 'next/image';
import Link from 'next/link';

import SearchFormOne from './ui/SearchFormOne';
const Hero = () => {

    const { destinatations } = HeroData

   

    return (
        <div className="hero_style__start">
            <div className="lg:grid grid-cols-12 xl:gap-base gap-3 mx-auto xl:px-base px-3 overflow-hidden">
                <div className="lg:col-span-3 md:col-span-6 hidden lg:flex flex-col">
                    <div className="group hero-card-sm">
                        <Link href="/package-sidebar">
                            <Image
                                src={destinatations[0].imgUrl}
                                alt={destinatations[0].title}
                                height={844}
                                width={800}
                                className="lg:h-full w-full object-cover group-hover:scale-105 duration-500" />
                            <div className="text-white absolute w-full lg:bottom-10 bottom-6 text-center ">
                                <h3 className="font-extrabold 2xl:text-xl md:text-lg text-2md  leading-1.6 group-hover:text-primary-1 duration-300 group-hover:tracking-wide">
                                    {destinatations[0].title}
                                </h3>
                                <p className="font-medium lg:text-md text-base mt-1 mb-3">{destinatations[0].place_count} Tours Place</p>
                                <div className="h-[3px] w-9 bg-white rounded-md mx-auto" />
                            </div>
                        </Link>
                    </div>
                    <div className="group hero-card-sm">
                        <Link href="/package-sidebar">
                            <Image
                                src={destinatations[1].imgUrl}
                                alt={destinatations[1].title}
                                height={844}
                                width={800}
                                className="lg:h-full w-full object-cover group-hover:scale-105 duration-500" />
                            <div className="text-white absolute w-full lg:bottom-10 bottom-6 text-center ">
                                <h3 className="font-extrabold 2xl:text-xl md:text-lg text-2md  leading-1.6 group-hover:text-primary-1 duration-300 group-hover:tracking-wide">
                                    {destinatations[1].title}
                                </h3>
                                <p className="font-medium lg:text-md text-base mt-1 mb-3">{destinatations[1].place_count} Tours Place</p>
                                <div className="h-[3px] w-9 bg-white rounded-md mx-auto" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-6 md:col-span-12 xl:min-h-screen lg:py-30 py-20 !bg-cover !bg-center !bg-no-repeat flex justify-center items-center"
                    style={{ background: `url("${'/assets/images/hero/hero.webp'}")` }}
                >
                    <SearchFormOne />
                </div>
                <div className="lg:col-span-3 md:col-span-6 hidden lg:flex flex-col">
                    <div className="group hero-card-sm">
                        <Link href="/package-sidebar">
                            <Image
                                src={destinatations[2].imgUrl}
                                alt={destinatations[2].title}
                                height={844}
                                width={800}
                                className="lg:h-full w-full object-cover group-hover:scale-105 duration-500" />
                            <div className="text-white absolute w-full lg:bottom-10 bottom-6 text-center ">
                                <h3 className="font-extrabold 2xl:text-xl md:text-lg text-2md  leading-1.6 group-hover:text-primary-1 duration-300 group-hover:tracking-wide">
                                    {destinatations[2].title}
                                </h3>
                                <p className="font-medium lg:text-md text-base mt-1 mb-3">{destinatations[2].place_count} Tours Place</p>
                                <div className="h-[3px] w-9 bg-white rounded-md mx-auto" />
                            </div>
                        </Link>
                    </div>
                    <div className="group hero-card-sm">
                        <Link href="/package-sidebar">
                            <Image
                                src={destinatations[3].imgUrl}
                                alt={destinatations[3].title}
                                height={844}
                                width={800}
                                className="lg:h-full w-full object-cover group-hover:scale-105 duration-500" />
                            <div className="text-white absolute w-full lg:bottom-10 bottom-6 text-center ">
                                <h3 className="font-extrabold 2xl:text-xl md:text-lg text-2md  leading-1.6 group-hover:text-primary-1 duration-300 group-hover:tracking-wide">
                                    {destinatations[3].title}
                                </h3>
                                <p className="font-medium lg:text-md text-base mt-1 mb-3">{destinatations[3].place_count} Tours Place</p>
                                <div className="h-[3px] w-9 bg-white rounded-md mx-auto" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;