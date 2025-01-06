

import PackageCardOne from "@/components/HomeOne/ui/PackageCardOne";
import PackageSidebarFilter from "@/components/forms/PackageSidebar";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InstagramFeed from "@/components/layout/InstagramFeed";
import PackageDataOne from '@/constant/HomeOne/PackageDataOne';
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Package Sidebar | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
  }
  

const PackageSidebar = () => {
    return (
        <>
            <Breadcrumb
                page='Package Sidebar'
                pageTitle='Arid Most Popular Tours'
            />

            {/*========== FEATURED PACKAGE STYLE ONE START==========*/}
            <div className="bg-gradient-to-t to-[#FFF1EC] from-white z-1 relative lg:pt-30 pt-24 ">

                <div className="absolute top-[10%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 lg:gap-12 gap-base">
                        <div className="lg:col-span-8 col-span-12 grid md:grid-cols-2 grid-cols-1 gap-base">
                            {PackageDataOne.packages.slice(0,8).map((item, index) => (
                                <PackageCardOne
                                    key={item.id}
                                    title={item.title}
                                    img={item.img}
                                    price={item.price}
                                    duration={item.duration}
                                    people={item.people}
                                    discount={item.discount}
                                />
                            ))}
                        </div>
                        <div className="lg:col-span-4 col-span-12 ">
                           <PackageSidebarFilter />
                        </div>
                    </div>


                    <nav>
                        <ul className="flex justify-center items-center lg:space-x-6 space-x-5 flex-wrap lg:pt-[60px] pt-[40px]">
                            <li><Link href="#" className="h-10 w-10 border-primary-1 border text-primary-1 hover:bg-primary-1 hover:text-white duration-200 inline-flex justify-center items-center"><i className="bi bi-chevron-left" /></Link>
                            </li>
                            <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">01</Link>
                            </li>
                            <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block text-primary-1">02</Link>
                            </li>
                            <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">03</Link>
                            </li>
                            <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">04</Link>
                            </li>
                            <li><Link href="#" className="font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">05</Link>
                            </li>
                            <li><Link href="#" className="h-10 w-10 border-primary-1 border text-primary-1 hover:bg-primary-1 hover:text-white duration-200 inline-flex justify-center items-center"><i className="bi bi-chevron-right" /></Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
            {/*========== FEATURED PACKAGE STYLE ONE END==========*/}


            <InstagramFeed />
        </>
    )
}

export default PackageSidebar