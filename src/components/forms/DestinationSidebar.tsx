import Link from 'next/link'
import React from 'react'

const DestinationSidebar = () => {
    return (
        <>
            <aside className="widget widget_search">
                <form action="#">
                    <div className="flex">
                        <input type="text" className="w-full lg:h-[55px] h-[48px] border border-primary-1 bg-transparent grow outline-none px-5 py-2 placeholder:text-dark-3 text-dark-2 text-[15px] focus:border-secondary-1" placeholder="Search Here" />
                        <button aria-label="search button" type="submit" className="shrink-0 lg:h-[55px] h-[48px] bg-primary-1 w-14 flex justify-center items-center duration-300 hover:bg-secondary-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </form>
            </aside>
            <aside className="widget widget_blogs lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-5">
                    Trending Stories</h4>
                <ul>
                    <li className="flex items-center group mt-6 first:mt-0">
                        <Link href="/blog-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                            <img src="./assets/images/blog/ts-1.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
                        </Link>
                        <div className="grow">
                            <h5 className="lg:text-17px text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                                <Link href="/blog-details">The Most Underrated European Cities, according to
                                    google you should know</Link>
                            </h5>
                            <div className="text-dark-3 text-sm mt-1">September 23, 1999</div>
                        </div>
                    </li>
                    <li className="flex items-center group mt-6 first:mt-0">
                        <Link href="/blog-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                            <img src="./assets/images/blog/ts-2.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
                        </Link>
                        <div className="grow">
                            <h5 className="lg:text-17px text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                                <Link href="/blog-details">The Most Underrated European Cities, according to
                                    google you should know</Link>
                            </h5>
                            <div className="text-dark-3 text-sm mt-1">September 23, 1999</div>
                        </div>
                    </li>
                    <li className="flex items-center group mt-6 first:mt-0">
                        <Link href="/blog-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                            <img src="./assets/images/blog/ts-3.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
                        </Link>
                        <div className="grow">
                            <h5 className="lg:text-17px text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                                <Link href="/blog-details">The Most Underrated European Cities, according to
                                    google you should know</Link>
                            </h5>
                            <div className="text-dark-3 text-sm mt-1">September 23, 1999</div>
                        </div>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_category lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-5">
                    Latest Posts category</h4>
                <ul>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><Link href="/package-sidebar" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Adventure
                        (03)</Link></li>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><Link href="/package-sidebar" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Travel
                        Vacation (03)</Link></li>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><Link href="/package-sidebar" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Popular
                        Tour’s (05)</Link></li>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><Link href="/package-sidebar" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Travel
                        / style (03)</Link></li>
                </ul>
            </aside>
            <aside className="widget widget_tags lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-1">
                    Travel Tags</h4>
                <ul>
                    <li className="inline-block mt-4 mr-5 last:mr-0">
                        <Link href="/package-sidebar" className="duration-200 hover:text-primary-1 lg:text-md text-base text-dark-2 font-medium leading-[1.3] hover:underline hover:underline-offset-1">Travel,</Link>
                    </li>
                    <li className="inline-block mt-4 mr-5 last:mr-0">
                        <Link href="/package-sidebar" className="duration-200 hover:text-primary-1 lg:text-md text-base text-dark-2 font-medium leading-[1.3] hover:underline hover:underline-offset-1">City
                            Tour,</Link>
                    </li>
                    <li className="inline-block mt-4 mr-5 last:mr-0">
                        <Link href="/package-sidebar" className="duration-200 hover:text-primary-1 lg:text-md text-base text-dark-2 font-medium leading-[1.3] hover:underline hover:underline-offset-1">Summer
                            Tour,</Link>
                    </li>
                    <li className="inline-block mt-4 mr-5 last:mr-0">
                        <Link href="/package-sidebar" className="duration-200 hover:text-primary-1 lg:text-md text-base text-dark-2 font-medium leading-[1.3] hover:underline hover:underline-offset-1">Holyday,</Link>
                    </li>
                    <li className="inline-block mt-4 mr-5 last:mr-0">
                        <Link href="/package-sidebar" className="duration-200 hover:text-primary-1 lg:text-md text-base text-dark-2 font-medium leading-[1.3] hover:underline hover:underline-offset-1">life
                            Style,</Link>
                    </li>
                    <li className="inline-block mt-4 mr-5 last:mr-0">
                        <Link href="/package-sidebar" className="duration-200 hover:text-primary-1 lg:text-md text-base text-dark-2 font-medium leading-[1.3] hover:underline hover:underline-offset-1">Adventure</Link>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_social lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-1">
                    Social Links</h4>
                <ul>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-twitter" /></a></li>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-facebook" /></a></li>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-pinterest" /></a></li>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-instagram" /></a></li>
                </ul>
            </aside>
            <aside className="widget widget_offer lg:mt-[50px] mt-10">
                <Link href="/package-sidebar">
                    <img src="./assets/images/backgrounds/offer-side-banner.webp" alt="offer" className="w-full" />
                </Link>
            </aside>
        </>
    )
}

export default DestinationSidebar