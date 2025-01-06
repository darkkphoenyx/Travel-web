import Breadcrumb from '@/components/layout/Breadcrumb'
import InstagramFeed from '@/components/layout/InstagramFeed'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: 'Blog Details | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const BlogDetails = () => {
    return (
        <>
            <Breadcrumb
                page='Blog Details'
                pageTitle='Our Beautiful Blog Details'
            />
            {/*==========BLOG DETAILS WRAPPER START ==========*/}
            <div className="bg-gradient-to-t to-[#FFF1EC] from-white lg:pt-[110px] pt-[86px] relative z-1">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-base">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="blog__details">
                                <div className="disc__header text-center lg:pb-7 pb-6 border-b border-stock-1 lg:mb-10 mb">
                                    <div className="disc__thumb overflow-hidden">
                                        <img src="./assets/images/blog/blog-standard.webp" alt="bs" className="w-full" />
                                    </div>
                                    <ul className="flex items-center justify-center lg:text-sm text-xs font-medium text-dark-2 flex-wrap pt-7">
                                        <li className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 first:before:hidden">
                                            <i className="bi bi-calendar-week" />
                                            <span className="ml-2">24 Sep 2022 · 6:30 PM</span>
                                        </li>
                                        <li className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 ">
                                            250 View</li>
                                        <li className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 ">
                                            02 Comments</li>
                                    </ul>
                                    <h3 className="text-dark-1 font-medium leading-[1.43] lg:text-2xl md:text-xl text-[28px] mt-[14px]">
                                        We spent 24 hours in Switzerland with Trafalgar Travel Director</h3>
                                </div>
                                <div className="disc__wrapper">
                                    <h5 className="lg:text-2md text-md text-dark-2 font-medium leading-[1.5] font-sans mb-6">Lorem
                                        omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam
                                        dimo diam ea. Piber Korem sit amet.</h5>
                                    <p>
                                        Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.
                                        En eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei,
                                        sea in imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit
                                        similique id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum phaedrum
                                        torquatos nec eu, vis detraxit pericu in mei, vix aperiri vix at,dolor sit amet. blandit
                                        dicant definition.Sit delicata persequeris ex, in sea rebum deseruisse appellantur.
                                        Lorem ipsum dolor sit amet.Eos ei nisl graecis, vix aperiri consequat an. Eius lorem.
                                    </p>
                                    <p>
                                        Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta
                                        scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes,
                                        congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri
                                        tation altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.
                                    </p>
                                    <blockquote>
                                        <p>“Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut audiamre iracundia vim. An
                                            eame, ut sint posse sumo diam ea. Cu omnis.”</p>
                                        <cite>Johan Martin Sr</cite>
                                    </blockquote>
                                    <h4>Why You Shouldn’t Ride Elephants France.</h4>
                                    <p>
                                        Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta
                                        scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes,
                                        congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri
                                        tation altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.
                                    </p>
                                    <div className="grid grid-cols-2 lg:gap-base gap-5 lg:pt-[10px] lg:pb-9 pb-6">
                                        <div className="col-span-1">
                                            <img src="./assets/images/details/des-disc-1.webp" alt="details" className="w-full" />
                                        </div>
                                        <div className="col-span-1">
                                            <img src="./assets/images/details/des-disc-2.webp" alt="details" className="w-full" />
                                        </div>
                                    </div>
                                    <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem
                                        dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue
                                        imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation
                                        altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle" /> Professional Tour Guide</li>
                                        <li><i className="bi bi-check-circle" />Transportation cost for carrying new
                                            materials/parts</li>
                                        <li><i className="bi bi-check-circle" />Transportation cost for carrying new
                                            materials/parts</li>
                                    </ul>
                                    <p>
                                        Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                                        pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                                        lacus tincidunt ac.
                                    </p>
                                    <div className="relative mt-[10px] pb-[20px]">
                                        <img src="./assets/images/blog/blog-video.webp" alt="blog-video" className="w-full" />
                                        {/* <a data-fancybox href="https://www.youtube.com/watch?v=vJoNqBZ9QlM" className="inline-flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:h-20 lg:w-20 h-16 w-16 justify-center items-center rounded-full bg-primary-1 before:content-[''] before:absolute before:-inset-3 before:border-primary-1 before:border-2 before:rounded-full before:animate-pulse">
                                            <img src="./assets/images/icons/video-circle.svg" alt="placeholder" />
                                        </a> */}
                                    </div>
                                    <h4>Why You Shouldn’t Ride Elephants France.</h4>
                                    <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta
                                        scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum
                                        principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel
                                        id, no pri tation altera. At soluta fierent laboramus eum.Nam at dicant
                                        deterruisset.</p>
                                    <ol className="custom_order__list">
                                        <li>
                                            <span className="list__count">01</span>
                                            <div className="list__content">
                                                <h5>Professional Tour Guide</h5>
                                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                                                    soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum
                                                    vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi,
                                                    eros reprimique mel id, no pri tation altera. At soluta fierent
                                                    laboramus eum.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="list__count">02</span>
                                            <div className="list__content">
                                                <h5>Transportation cost for carrying new materials/parts</h5>
                                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                                                    soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum
                                                    vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi,
                                                    eros reprimique mel id, no pri tation altera. At soluta fierent
                                                    laboramus eum.</p>
                                            </div>
                                        </li>
                                    </ol>
                                    <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at
                                        erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel
                                        egestas lacus tincidunt ac.</p>
                                </div>
                                <div className="disc__bottom mt-[10px] lg:pt-6 lg:pb-6 pt-5 pb-5 border-t border-b border-stock-2 flex items-center justify-between flex-wrap gap-3">
                                    <div className="flex items-center flex-wrap gap-3">
                                        <h5 className="text-dark-1 lg:text-2md text-md font-semibold">Popular Tags: </h5>
                                        <ul className="flex flex-wrap gap-2">
                                            <li><a href="#" className="text-dark-3 duration-200 hover:text-primary-1 lg:text-base text-sm font-medium">Travel,</a>
                                            </li>
                                            <li><a href="#" className="text-dark-3 duration-200 hover:text-primary-1 lg:text-base text-sm font-medium">Hotel,</a>
                                            </li>
                                            <li><a href="#" className="text-dark-3 duration-200 hover:text-primary-1 lg:text-base text-sm font-medium">Tours</a>
                                            </li>
                                            <li><a href="#" className="text-dark-3 duration-200 hover:text-primary-1 lg:text-base text-sm font-medium">Tours</a>
                                            </li>
                                            <li><a href="#" className="text-dark-3 duration-200 hover:text-primary-1 lg:text-base text-sm font-medium">Tours</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <button aria-label="share button" className="text-dark-2 gap-2 flex items-center lg:text-md text-base hover:text-primary-1 duration-200">
                                        Share <i className="bi bi-share" />
                                    </button>
                                </div>
                                <div className="pt-10">
                                    <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] mb-base">
                                        02 Comment’s</h3>
                                    <ul>
                                        <li className="bg-[#FFE3EB] bg-opacity-50 lg:px-base px-5 lg:py-base py-5 flex md:flex-row flex-col">
                                            <div className="md:mr-5 mb-4 md:mb-0 lg:w-[100px] w-16 shrink-0">
                                                <img src="./assets/images/blog/com-2.webp" alt="commentor" className="w-full" />
                                            </div>
                                            <div className="grow">
                                                <div className="flex justify-between items-center">
                                                    <h5 className="text-dark-1 lg:text-2md text-md font-medium !mt-0 !mb-0">Jahid Hassan</h5>
                                                    <a href="#" className="flex text-primary-1 gap-[6px] lg:text-md"> <div className="bi bi-reply" /> Reply</a>
                                                </div>
                                                <p className="regular-text-v1 lg:mt-3 mt-2 !leading-[1.6] !pb-0">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac.</p>
                                            </div>
                                        </li>
                                        <ul className="lg:mt-[35px] mt-7 lg:ml-10 ml-8">
                                            <li className="bg-[#FFE3EB] bg-opacity-50 lg:px-base px-5 lg:py-base py-5 flex md:flex-row flex-col">
                                                <div className="md:mr-5 mb-4 md:mb-0 lg:w-[100px] w-16 shrink-0">
                                                    <img src="./assets/images/blog/com-1.webp" alt="commentor" className="w-full" />
                                                </div>
                                                <div className="grow">
                                                    <div className="flex justify-between items-center">
                                                        <h5 className="text-dark-1 lg:text-2md text-md font-medium !mt-0 !mb-0">Alisha Lehmann</h5>
                                                        <a href="#" className="flex text-primary-1 gap-[6px] lg:text-md"> <div className="bi bi-reply" /> Reply</a>
                                                    </div>
                                                    <p className="regular-text-v1 lg:mt-3 mt-2 !leading-[1.6] !pb-0">Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                                <form action="#" className="pt-10">
                                    <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] mb-base">
                                        Post A Comments</h3>
                                    <div className="grid grid-cols-2 gap-base">
                                        <div className="lg:col-span-1 col-span-2">
                                            <input type="text" placeholder="Your Name" className="input_style__primary" />
                                        </div>
                                        <div className="lg:col-span-1 col-span-2">
                                            <input type="text" placeholder="Your Phone Number" className="input_style__primary" />
                                        </div>
                                        <div className="col-span-2">
                                            <input type="email" placeholder="Your Subject" className="input_style__primary" />
                                        </div>
                                        <div className="col-span-2">
                                            <textarea cols={30} rows={6} className="input_style__primary" placeholder="Your Subject..." defaultValue={""} />
                                        </div>
                                        <div className="col-span-2">
                                            <button aria-label="comment submit" type="submit" className="btn_primary__v1">
                                                Find Out More
                                                <i className="bi bi-chevron-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <aside className="widget widget_search">
                                <form action="#">
                                    <div className="flex">
                                        <input type="text" className="w-full lg:h-[55px] h-[48px] border border-primary-1 bg-transparent grow outline-none px-5 py-2 placeholder:text-dark-3 text-dark-2 text-[15px] focus:border-secondary-1" placeholder="Search Here" />
                                        <button aria-label="search submit" type="submit" className="shrink-0 lg:h-[55px] h-[48px] bg-primary-1 w-14 flex justify-center items-center duration-300 hover:bg-secondary-1">
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
                           
                            <aside className="widget widget_offer lg:mt-[50px] mt-10">
                                <Link href="/package-list">
                                    <img src="./assets/images/backgrounds/offer-side-banner.webp" alt="offer" className="w-full" />
                                </Link>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/*========== BLOG DETAILS WRAPPER END ==========*/}

            <InstagramFeed/>

        </>
    )
}

export default BlogDetails