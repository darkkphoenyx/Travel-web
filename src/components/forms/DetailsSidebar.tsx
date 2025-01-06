import Link from "next/link"

const DetailsSidebar = () => {
    return (
        <>
            <ul id="tabs-nav" className="booking-tabs flex gap-4 pb-6">
                <li className="tab-link active basis-1/2" data-tab={3}>Booking</li>
                <li className="tab-link basis-1/2" data-tab={4}>Enquiry</li>
            </ul>
            <div id="tab-3" className="tab-content active">
                <form action="#" autoComplete="off" className="lg:px-base px-5 lg:pt-6 lg:pb-base pt-4 pb-5 bg-white border-primary-1 border">
                    <h4 className="lg:text-xl text-lg text-dark-1 font-semibold"><span className="text-md font-sans font-normal text-dark-3">Start from</span> $175</h4>
                    <div className="mt-5 lg:mt-6">
                        <label htmlFor="tourTime" className="mb-2 text-dark-3 capitalize block">Date</label>
                        <input type="text" id="tourTime" name="daterange" className="input_style__primary" />
                    </div>
                    <div className="js-form-counters lg:mt-6 mt-5 relative">
                        <label htmlFor="tourTime" className="mb-2 text-dark-3 capitalize block">Number of travelers</label>
                        <button  type="button" className="w-full bg-transparent border border-stock-1 lg:h-[54px] h-12 px-5 py-2 text-dark-2 focus:border-primary-1 flex items-center common_dropdown__btn">
                            <div>
                                <span className="js-count-adult">1</span> adults
                                -
                                <span className="js-count-child">0</span> childeren
                                -
                                <span className="js-count-room">1</span> room
                            </div>
                        </button>
                        {/* count dropdown */}
                        <div className="common__dropdown person-dropdown space-y-4 opacity-0 absolute w-full left-0 top-full invisible bg-white translate-y-3 duration-200 z-10">
                            {/* adult count */}
                            <div className="js-counter flex justify-between items-center" data-value-change=".js-count-adult">
                                <p className="text-dark-1">Adult</p>
                                <div className="flex items-center space-x-4">
                                    <button aria-label="button disc" type="button" className="js-down h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-dash-lg" />
                                    </button>
                                    <div className="js-count text-dark-1 lg:ext-md">2</div>
                                    <button aria-label="button disc" type="button" className="js-up h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-plus-lg" />
                                    </button>
                                </div>
                            </div>
                            {/* children count  */}
                            <div className="js-counter flex justify-between items-center" data-value-change=".js-count-child">
                                <p className="text-dark-1">Childeren</p>
                                <div className="flex items-center space-x-4">
                                    <button aria-label="button disc" type="button" className="js-down h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-dash-lg" />
                                    </button>
                                    <div className="js-count text-dark-1 lg:ext-md">0</div>
                                    <button aria-label="button disc" type="button" className="js-up h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-plus-lg" />
                                    </button>
                                </div>
                            </div>
                            {/* room count */}
                            <div className="js-counter flex justify-between items-center" data-value-change=".js-count-room">
                                <p className="text-dark-1 ">Room</p>
                                <div className="flex items-center space-x-4">
                                    <button aria-label="button disc" type="button" className="js-down h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-dash-lg" />
                                    </button>
                                    <div className="js-count text-dark-1 lg:ext-md">1</div>
                                    <button aria-label="button disc" type="button" className="js-up h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-plus-lg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="custom-checkbox mt-4">
                            <input type="checkbox" defaultValue="add-one" id="add-one" />
                            <label htmlFor="add-one">Add Service per booking - <span className="font-semibold">$30</span></label>
                        </div>
                        <div className="custom-checkbox mt-4">
                            <input type="checkbox" defaultValue="add-two" id="add-two" />
                            <label htmlFor="add-two">Add Service per day - <span className="font-semibold">$10</span></label>
                        </div>
                    </div>
                    <div className="pt-5 border-t border-stock-1 mt-6">
                        <div className="font-sans text-dark-1 text-2md font-semibold flex justify-between">Total : <span>$450</span></div>
                    </div>
                    <button className="capitalize w-full text-center underline duration-150 mt-4 text-dark-1 font-medium flex items-center justify-center hover:text-primary-1">check availability </button>
                    <Link href="booki" className="btn_primary__v1 !w-full justify-center mt-5">
                        Book Now
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </form>
            </div>
            <div id="tab-4" className="tab-content">
                <form action="#" className="lg:px-base px-5 lg:py-base py-5 bg-white border-primary-1 border">
                    <h4 className="lg:text-lg text-2md text-dark-1 font-semibold">Enquiry Now</h4>
                    <p className="regular-text-v1 !leading-[1.62] mt-2">Qui ad idque soluta deterruisset, nec sale
                        pertinax mandamus et.</p>
                    <div className="lg:mt-base mt-5">
                        <input type="text" placeholder="Your Name" className="input_style__primary" />
                    </div>
                    <div className="lg:mt-base mt-5">
                        <input type="email" placeholder="Email" className="input_style__primary" />
                    </div>
                    <div className="lg:mt-base mt-5">
                        <input type="tel" placeholder="Mobile Number" className="input_style__primary" />
                    </div>
                    <div className="lg:mt-base mt-5">
                        <textarea cols={30} rows={6} className="input_style__primary" placeholder="Additional Description..." defaultValue={""} />
                    </div>
                    <button className="btn_primary__v1 !w-full justify-center mt-5">
                        Enquiry
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>

            <aside className="widget widget_blogs lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-5">
                    Offer Packages</h4>
                <ul>
                    <li className="flex items-center group mt-6 first:mt-0">
                        <a href="package-details.html" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                            <img src="./assets/images/blog/ts-1.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
                        </a>
                        <div className="grow">
                            <ul className="text-sm text-orange-500">
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
                            </ul>
                            <h5 className="lg:text-md mt-1 text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                                <a href="package-details.html">The Great Wall, Chaina</a>
                            </h5>
                            <div className="mt-[5px] text-dark-2">
                                <span>
                                    Form
                                </span>
                                <span className="text-primary-1 font-medium">$140.00</span>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center group mt-6 first:mt-0">
                        <a href="package-details.html" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                            <img src="./assets/images/blog/ts-2.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
                        </a>
                        <div className="grow">
                            <ul className="text-sm text-orange-500">
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
                            </ul>
                            <h5 className="lg:text-md mt-1 text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                                <a href="package-details.html">Longest Sea Beach, Cox's Bazar</a>
                            </h5>
                            <div className="mt-[5px] text-dark-2">
                                <span>
                                    Form
                                </span>
                                <span className="text-primary-1 font-medium">$140.00</span>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center group mt-6 first:mt-0">
                        <a href="package-details.html" className="shrink-0 w-20 mr-[15px] overflow-hidden">
                            <img src="./assets/images/blog/ts-3.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
                        </a>
                        <div className="grow">
                            <ul className="text-[13px] text-orange-500">
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
                            </ul>
                            <h5 className="lg:text-md mt-[3px] text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                                <a href="package-details.html">Long Trail Mountain, Napal</a>
                            </h5>
                            <div className="mt-[5px] text-dark-2">
                                <span>
                                    Form
                                </span>
                                <span className="text-primary-1 font-medium">$140.00</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_category lg:mt-[50px] mt-10">
                <h4 className="text-dark-1 lg:text-[25px] text-2md leading-[1.6] capitalize font-semibold mb-5">
                    Travel category</h4>
                <ul>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><a href="#" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Adventure
                        (03)</a></li>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><a href="#" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Travel
                        Vacation (03)</a></li>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><a href="#" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Popular
                        Tour’s (05)</a></li>
                    <li className="lg:mt-5 mt-4 first:lg:mt-0 first:mt-0"><a href="#" className="lg:text-md text-base text-dark-2 font-medium leading-[1.44] font-serif duration-200 hover:text-primary-1 ">Travel
                        / style (03)</a></li>
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
                    Scoial Links1</h4>
                <ul>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-twitter" /></a></li>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-facebook" /></a></li>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-pinterest" /></a></li>
                    <li className="inline-block mt-4 lg:mr-7 mr-5 last:mr-0"><a href="#" className="primary_social__icon"><i className="bi bi-instagram" /></a></li>
                </ul>
            </aside>
        </>
    )
}

export default DetailsSidebar