import DestinationSidebar from '@/components/forms/DestinationSidebar'
import Breadcrumb from '@/components/layout/Breadcrumb'
import InstagramFeed from '@/components/layout/InstagramFeed'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'Destination Details | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const DestinationDetails = () => {
    return (
        <>
            <Breadcrumb
                page='Destination Details'
                pageTitle='A Find Your Most Popular Destination'
            />
            {/*========== DESTINATION DETAILS WRAPPER START ==========*/}
            <div className="relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white lg:pt-[110px] pt-[86px]">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-base">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="disc__wrapper">
                                <h3 className='!mt-0'>Visit Beauty of France.</h3>
                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.</p>
                                <div className="grid grid-cols-2 lg:gap-base gap-5 lg:pt-[10px] lg:pb-9 pb-6">
                                    <div className="col-span-1">
                                        <img src="./assets/images/details/des-disc-1.webp" alt="details" className="w-full" />
                                    </div>
                                    <div className="col-span-1">
                                        <img src="./assets/images/details/des-disc-2.webp" alt="details" className="w-full" />
                                    </div>
                                </div>
                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.</p>
                                <ul>
                                    <li><i className="bi bi-check-circle" /> Professional Tour Guide</li>
                                    <li><i className="bi bi-check-circle" />Transportation cost for carrying new materials/parts</li>
                                    <li><i className="bi bi-check-circle" />Transportation cost for carrying new materials/parts</li>
                                </ul>
                                <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac.</p>
                                <h3>Good To Know</h3>
                                <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas lacus tincidunt ac.</p>
                                <ol className="custom_order__list">
                                    <li>
                                        <span className="list__count">01</span>
                                        <div className="list__content">
                                            <h5>Professional Tour Guide</h5>
                                            <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.</p>
                                        </div>
                                    </li>
                                </ol>
                                <div className="grid grid-cols-8 lg:gap-base gap-4 lg:pt-[10px] lg:pb-9 pb-6">
                                    <a href="./assets/images/details/des-disc-3.webp" className="col-span-3" data-fancybox="gallery">
                                        <img src="./assets/images/details/des-disc-3.webp" alt="destination" className="w-full max-h-[260px] object-cover" />
                                    </a>
                                    <a href="./assets/images/details/des-disc-4.webp" className="col-span-5" data-fancybox="gallery">
                                        <img src="./assets/images/details/des-disc-4.webp" alt="destination" className="w-full max-h-[260px] object-cover" />
                                    </a>
                                    <a href="./assets/images/details/des-disc-5.webp" className="col-span-3" data-fancybox="gallery">
                                        <img src="./assets/images/details/des-disc-5.webp" alt="destination" className="w-full max-h-[260px] object-cover" />
                                    </a>
                                    <a href="./assets/images/details/des-disc-6.webp" className="col-span-2" data-fancybox="gallery">
                                        <img src="./assets/images/details/des-disc-6.webp" alt="destination" className="w-full max-h-[260px] object-cover" />
                                    </a>
                                    <a href="./assets/images/details/des-disc-7.webp" className="col-span-3" data-fancybox="gallery">
                                        <img src="./assets/images/details/des-disc-7.webp" alt="destination" className="w-full max-h-[260px] object-cover" />
                                    </a>
                                </div>
                                <h3>Some FAQ This Place</h3>
                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, cu vel sensibus cotidieque. Ne per malorum vivendum principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.Nam at dicant deterruisset.</p>
                                <form action="#" className="pt-3">
                                    <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] mb-[14px]">Post A Comments</h3>
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
                                            <button aria-label="comment button" type="submit" className="btn_primary__v1">
                                                Find Out More
                                                <i className="bi bi-chevron-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <DestinationSidebar/>
                        </div>
                    </div>
                </div>
            </div>
            {/*========== DESTINATION DETAILS WRAPPER END ==========*/}
            <InstagramFeed />
        </>
    )
}

export default DestinationDetails