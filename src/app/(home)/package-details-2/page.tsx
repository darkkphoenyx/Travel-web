import dynamic from 'next/dynamic';
import DetailsSidebar from '@/components/forms/DetailsSidebar'
import Breadcrumb from '@/components/layout/Breadcrumb'
import InstagramFeed from '@/components/layout/InstagramFeed'
import PackageGallary from '@/components/package/PackageGallary'
import PackageDetailsData from '@/constant/Package/PackageDetailsData';
import PackageBookingForm from '@/components/package/PackageBookingForm';
import { Metadata } from 'next';
const DynamicMap = dynamic(() => import('@/components/package/PackageMap'), {
    ssr: false
});

export const metadata: Metadata = {
    title: 'Package Details | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
  }
  
const PackageDetailsTwo = () => {
    return (
        <>
            <Breadcrumb
                page='Package Details'
                pageTitle='A Cusco & Salkantay Trekking to Machu Picchu'
                bgUrl='/assets/images/hero/h1.webp'
            />

            {/*========== PACKAGE DETAILS WRAPPER START ==========*/}
            <div className="bg-gradient-to-t to-[#FFF1EC] from-white relative z-1">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="grid grid-cols-12 gap-base">
                        <div className="lg:col-span-8 col-span-12">
                            <ul className="bg-white lg:px-base px-5 lg:py-6 py-5 flex lg:overflow-hidden overflow-x-scroll lg:mt-[-40px] mt-base border">
                                <li className="grow py-1 border-r border-primary-1 last:border-none px-5">
                                    <a href="#Information" className="flex items-center text-dark-2 justify-center duration-200 hover:text-primary-1 font-medium">
                                        <div className="shrink-0 mr-2">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.16675 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V10.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.3666 2.51663L6.7999 9.0833C6.5499 9.3333 6.2999 9.82497 6.2499 10.1833L5.89157 12.6916C5.75823 13.6 6.3999 14.2333 7.30823 14.1083L9.81657 13.75C10.1666 13.7 10.6582 13.45 10.9166 13.2L17.4832 6.6333C18.6166 5.49997 19.1499 4.1833 17.4832 2.51663C15.8166 0.849966 14.4999 1.3833 13.3666 2.51663Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.425 3.45825C12.9834 5.44992 14.5417 7.00825 16.5417 7.57492" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="whitespace-nowrap">Information</span>
                                    </a>
                                </li>
                                <li className="grow py-1 border-r border-primary-1 last:border-none px-5">
                                    <a href="#plan" className="flex items-center text-dark-2 justify-center duration-200 hover:text-primary-1 font-medium">
                                        <div className="shrink-0 mr-2">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66675 1.66675V4.16675" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.3333 1.66675V4.16675" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5.83325 10.8333H12.4999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5.83325 14.1667H9.99992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.3333 2.91675C16.1083 3.06675 17.5 4.12508 17.5 8.04175V13.1917C17.5 16.6251 16.6667 18.3417 12.5 18.3417H7.5C3.33333 18.3417 2.5 16.6251 2.5 13.1917V8.04175C2.5 4.12508 3.89167 3.07508 6.66667 2.91675H13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="whitespace-nowrap"> Tour Plan</span>
                                    </a>
                                </li>
                                <li className="grow py-1 border-r border-primary-1 last:border-none px-5">
                                    <a href="#location" className="flex items-center text-dark-2 justify-center duration-200 hover:text-primary-1 font-medium">
                                        <div className="shrink-0 mr-2">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3167 15.3084 14.9001 13.0001 17.1168C11.3251 18.7334 8.67508 18.7334 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M7.70825 9.58333L8.95825 10.8333L12.2916 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="whitespace-nowrap">Location</span>
                                    </a>
                                </li>
                                <li className="grow py-1 border-r border-primary-1 last:border-none px-5">
                                    <a href="#gallary" className="flex items-center text-dark-2 justify-center duration-200 hover:text-primary-1 font-medium ">
                                        <div className="shrink-0 mr-2">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V7.50008C18.3334 3.33341 16.6667 1.66675 12.5001 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.49992 8.33333C8.42039 8.33333 9.16659 7.58714 9.16659 6.66667C9.16659 5.74619 8.42039 5 7.49992 5C6.57944 5 5.83325 5.74619 5.83325 6.66667C5.83325 7.58714 6.57944 8.33333 7.49992 8.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.2251 15.7916L6.33343 13.0332C6.99176 12.5916 7.94176 12.6416 8.53343 13.1499L8.80843 13.3916C9.45843 13.9499 10.5084 13.9499 11.1584 13.3916L14.6251 10.4166C15.2751 9.85822 16.3251 9.85822 16.9751 10.4166L18.3334 11.5832" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="whitespace-nowrap">Gallary</span>
                                    </a>
                                </li>
                                <li className="grow py-1 border-r border-primary-1 last:border-none px-5">
                                    <a href="#review" className="flex items-center text-dark-2 justify-center duration-200 hover:text-primary-1 font-medium ">
                                        <div className="shrink-0 mr-2">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.4082 3.45008L14.3499 6.60839C14.3415 7.04172 14.6166 7.61674 14.9666 7.87507L17.0332 9.44172C18.3582 10.4417 18.1416 11.6667 16.5582 12.1667L13.8666 13.0084C13.4166 13.1501 12.9416 13.6417 12.8249 14.1001L12.1832 16.5501C11.6749 18.4834 10.4082 18.6751 9.35821 16.9751L7.89154 14.6001C7.62487 14.1667 6.99154 13.8417 6.49154 13.8667L3.70824 14.0084C1.71657 14.1084 1.1499 12.9584 2.4499 11.4417L4.09988 9.52506C4.40821 9.16672 4.54988 8.50007 4.40821 8.05007L3.56659 5.35839C3.07492 3.77506 3.95824 2.90007 5.53324 3.41674L7.99158 4.22507C8.40825 4.3584 9.03324 4.26673 9.38324 4.0084L11.9499 2.15839C13.3333 1.15839 14.4415 1.74174 14.4082 3.45008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.2584 18.3333L15.7334 15.8083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="whitespace-nowrap">Review</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="pack__disc" id="Information">
                                <div className="flex justify-between items-center gap-2 flex-wrap lg:pt-12 pt-8 lg:pb-4">
                                    <h2 className="font-sans lg:text-[45px] md:text-xl text-lg font-semibold !pointer-events-none !mt-0 !mb-0">
                                        $175/<span className="lg:text-lg text-md font-normal">Per Person</span> </h2>
                                    <div className="flex items-center">
                                        <ul className="flex gap-3 text-primary-1 mr-3 lg:text-base text-sm">
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-fill" /></li>
                                            <li><i className="bi bi-star-half" /></li>
                                        </ul>
                                        <span className="text-primary-1 lg:text-2md text-md">(20 review)</span>
                                    </div>
                                </div>
                                <h5 className="lg:text-2md text-md text-dark-2 font-medium leading-[1.5] font-sans mb-6">Lorem omnes
                                    impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam dimo diam
                                    ea. Piber Korem sit amet.</h5>
                                <p>Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam
                                    dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in
                                    imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit similique
                                    id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum phaedrum torquatos nec
                                    eu, vis detraxit pericu in mei, vix aperiri vix at,dolor sit amet.</p>
                                <ul className="pack__list">
                                    <li><i className="bi bi-clock" /> 4 Days / 5 Night</li>
                                    <li> <i className="bi bi-person" />Max People : 10</li>
                                    <li><i className="bi bi-map" />North Transylvania</li>
                                </ul>
                                <ul className="mt-base">
                                    <li className="lg:flex lg:pt-6 pt-5 pb-5 lg:pb-6 border-t border-stock-1 last:border-b">
                                        <div className="lg:w-1/3 lg:text-2md text-md text-dark-2 font-medium">
                                            Price Includes
                                        </div>
                                        <div className="lg:w-2/3 lg:mt-0 mt-4">
                                            <ul className="lg:grid flex flex-wrap grid-cols-2 lg:gap-y-5 gap-y-3 gap-x-3">
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 lg:text-md text-base mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>3 Nights Accommodation</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 lg:text-md text-base mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>Airport Transfers</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 lg:text-md text-base mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>2 Meals / day</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 text-md mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>Box Lunch, Dinner &amp; Snacks.</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 text-md mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>On Trip Transport</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lg:flex lg:pt-6 pt-5 pb-5 lg:pb-6 border-t border-stock-1 last:border-b">
                                        <div className="lg:w-1/3 lg:text-2md text-md text-dark-2 font-medium">
                                            Price Excludes
                                        </div>
                                        <div className="lg:w-2/3 lg:mt-0 mt-4">
                                            <ul className="lg:grid flex flex-wrap grid-cols-2 lg:gap-y-5 gap-y-3 gap-x-3">
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 lg:text-md text-base mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>Departure Taxes</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 lg:text-md text-base mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>Airport Transfers</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 lg:text-md text-base mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>Entry Fees</span>
                                                </li>
                                                <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                                                    <div className="text-primary-1 text-md mr-2">
                                                        <i className="bi bi-check2" />
                                                    </div>
                                                    <span>Box Lunch, Dinner &amp; Snacks.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                                <div className="lg:pt-10 pt-8" id="plan">
                                    <h3>Tour Plan</h3>
                                    <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                                        pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                                        lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                                    <div>
                                        <div className="flex single__count">
                                            <div className="shrink-0 day__count">
                                                <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                                                    01</div>
                                            </div>
                                            <div className="lg:ml-[18px] ml-4 pb-8">
                                                <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                                                    Day 01 : Welcome to Edinburgh</h5>
                                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                                                    soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                                                    principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros
                                                    reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex single__count">
                                            <div className="shrink-0 day__count">
                                                <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                                                    02</div>
                                            </div>
                                            <div className="lg:ml-[18px] ml-4 pb-8">
                                                <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                                                    Day 02: Adventure Begins</h5>
                                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                                                    soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                                                    principes.</p>
                                                <ul>
                                                    <li><i className="bi bi-check-circle" /> Professional Tour Guide</li>
                                                    <li><i className="bi bi-check-circle" />Transportation cost for carrying new
                                                        materials/parts</li>
                                                    <li><i className="bi bi-check-circle" />Transportation cost for carrying new
                                                        materials/parts</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex single__count">
                                            <div className="shrink-0 day__count">
                                                <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                                                    03</div>
                                            </div>
                                            <div className="lg:ml-[18px] ml-4 pb-8">
                                                <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                                                    Day 03: Historical Tour</h5>
                                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                                                    soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                                                    principes.</p>
                                                <ul className="list-sm">
                                                    <li><i className="bi-check2" /> 3 Nights Accommodation</li>
                                                    <li><i className="bi-check2" /> 2 Meals / day</li>
                                                    <li><i className="bi-check2" /> Breakfast</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex single__count ">
                                            <div className="shrink-0 day__count">
                                                <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                                                    04</div>
                                            </div>
                                            <div className="lg:ml-[18px] ml-4 pb-8">
                                                <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                                                    Day 05: Return</h5>
                                                <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                                                    soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                                                    principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros
                                                    reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <h3>Some FAQ This Place</h3>
                                    <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                                        pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                                        lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                                    <div className="accordion lg:space-y-6 space-y-5">
                                        <div className="single__accordion border border-stock-1">
                                            <button aria-label="toggle button" type="button" className="toggle px-5 py-3 leading-1.5 text-2md text-start w-full text-dark-1 font-serif font-semibold">01.
                                                What are the best locations for wedding tours?</button>
                                            <div className="hidden inner px-5 pb-5">
                                                <p className="text-base font-sans text-dark-3 leading-1.9 !pb-0">
                                                    Some of the strangest places on earth are also the most sublime: from the
                                                    UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in
                                                    Yellowstone to a bridge in Germany that looks like a leftover prop from Lord
                                                    of the Rings.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="single__accordion border border-stock-1">
                                            <button aria-label="toggle button" type="button" className="toggle px-5 py-3 leading-1.5 text-2md text-start w-full text-dark-1 font-serif font-semibold">02.
                                                What are the most surreal places to visit?</button>
                                            <div className="hidden inner px-5 pb-5">
                                                <p className="text-base font-sans text-dark-3 leading-1.9 !pb-0">
                                                    Some of the strangest places on earth are also the most sublime: from the
                                                    UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in
                                                    Yellowstone to a bridge in Germany that looks like a leftover prop from Lord
                                                    of the Rings.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="single__accordion border border-stock-1">
                                            <button aria-label="toggle button" type="button" className="toggle px-5 py-3 leading-1.5 text-2md text-start w-full text-dark-1 font-serif font-semibold">03.
                                                What are the most surreal places to visit in Bangladash?</button>
                                            <div className="hidden inner px-5 pb-5">
                                                <p className="text-base font-sans text-dark-3 leading-1.9 !pb-0">
                                                    Some of the strangest places on earth are also the most sublime: from the
                                                    UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in
                                                    Yellowstone to a bridge in Germany that looks like a leftover prop from Lord
                                                    of the Rings.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:pt-10 pt-8">
                                    <h3>Gallery</h3>
                                    <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                                        pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                                        lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>

                                    <PackageGallary />

                                </div>
                                <div className="lg:pt-10 pt-8">
                                    <h3>Location</h3>
                                    <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                                        pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                                        lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                                    {/* <div id="map" className="lg:h-[400px] h-[200px]" /> */}
                                    <DynamicMap position={PackageDetailsData?.position} />
                                </div>
                                <div className="lg:pt-10 pt-8" id="review">
                                    <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] !mb-base">
                                        02 Comment’s</h3>
                                    <ul>
                                        <li className="bg-[#FFE3EB] bg-opacity-50 lg:px-base px-5 lg:py-base py-5 flex md:flex-row flex-col">
                                            <div className="md:mr-5 mb-4 md:mb-0 lg:w-[100px] w-16 shrink-0">
                                                <img src="./assets/images/blog/com-2.webp" alt="commentor" className="w-full" />
                                            </div>
                                            <div className="grow">
                                                <div className="flex justify-between items-center">
                                                    <h5 className="text-dark-1 lg:text-2md text-md font-medium !mt-0 !mb-0">Jahid
                                                        Hassan</h5>
                                                    <a href="#" className="flex text-primary-1 gap-[6px] lg:text-md">
                                                        <div className="bi bi-reply" /> Reply
                                                    </a>
                                                </div>
                                                <p className="regular-text-v1 lg:mt-3 mt-2 !leading-[1.6] !pb-0">Duis id interdum
                                                    ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                                                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim,
                                                    vel egestas lacus tincidunt ac.</p>
                                            </div>
                                        </li>
                                        <ul className="lg:mt-[35px] mt-7 lg:ml-10 ml-8">
                                            <li className="bg-[#FFE3EB] bg-opacity-50 lg:px-base px-5 lg:py-base py-5 flex md:flex-row flex-col">
                                                <div className="md:mr-5 mb-4 md:mb-0 lg:w-[100px] w-16 shrink-0">
                                                    <img src="./assets/images/blog/com-1.webp" alt="commentor" className="w-full" />
                                                </div>
                                                <div className="grow">
                                                    <div className="flex justify-between items-center">
                                                        <h5 className="text-dark-1 lg:text-2md text-md font-medium !mt-0 !mb-0">
                                                            Alisha Lehmann</h5>
                                                        <a href="#" className="flex text-primary-1 gap-[6px] lg:text-md">
                                                            <div className="bi bi-reply" /> Reply
                                                        </a>
                                                    </div>
                                                    <p className="regular-text-v1 lg:mt-3 mt-2 !leading-[1.6] !pb-0">Duis id
                                                        interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex
                                                        at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper
                                                        dignissim enim, vel egestas lacus tincidunt ac.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                                <form action="#" className="lg:pt-10 pt-8">
                                    <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] !mb-base">
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
                                            <button aria-label="comment button" type="submit" className="btn_primary__v1">
                                                Find Out More
                                                <i className="bi bi-chevron-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12 lg:pt-20 pt-10 relative">
                            <div className="lg:sticky top-[108px]">
                                <PackageBookingForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*========== PACKAGE DETAILS WRAPPER END ==========*/}


            <InstagramFeed />
        </>
    )
}

export default PackageDetailsTwo;