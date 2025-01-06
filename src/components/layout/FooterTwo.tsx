import FooterDataOne from "@/constant/common/FooterDataOne"
import Link from "next/link"

const FooterTwo = () => {
    return (
        <footer className="footer_style__two lg:pt-[60px] pt-11 bg-cover bg-center bg-no-repeat"
            style={{ background: `url("${FooterDataOne?.bgImg2}")` }}
        >
            <div className="max-w-[1570px] mx-auto px-3">
                <div className="lg:grid grid-cols-12 pb-20 lg:pb-12">
                    <div className="flex col-span-7 lg:justify-between lg:space-x-5 space-x-3 flex-wrap md:flex-nowrap">
                        <div className="grow md:basis-1/3 mt-base">
                            <div className="flex justify-between lg:mb-base mb-5">
                                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Navigation</h3>
                            </div>
                            <ul className="footer-link-list-v2">
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">Grand Switzerland</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">Beauty of Paris</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">United Statesr</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">Wiesbaden Sea</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">Egypt</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">Kualalumpur Malaysia</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">New York</Link></li>
                                <li><Link href="/package-details-2" className="footer-nav-link-v2">Bangkok Thailand</Link></li>
                            </ul>
                        </div>
                        <div className="grow md:basis-1/3 mt-base">
                            <div className="flex justify-between lg:mb-base mb-5">
                                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Get to Know Us
                                </h3>
                            </div>
                            <ul className="footer-link-list-v2">
                                <li><Link href="/about" className="footer-nav-link-v2">About Company</Link></li>
                                <li><Link href="/faq" className="footer-nav-link-v2">Call To Kindness</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Clean Beauty</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Become Partner</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Help &amp; Support</Link></li>
                                <li><Link href="/blog-list" className="footer-nav-link-v2">Blog </Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Online Query</Link></li>
                                <li><Link href="/faq" className="footer-nav-link-v2">FAQ's</Link></li>
                            </ul>
                        </div>
                        <div className="grow md:basis-1/3 mt-base">
                            <div className="flex justify-between lg:mb-base mb-5">
                                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Policies</h3>
                            </div>
                            <ul className="footer-link-list-v2">
                                <li><Link href="/about" className="footer-nav-link-v2">Shipping Policy</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Refund &amp; Cancellations</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">ESG Policy</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Payments</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Egypt</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Privacy Policy</Link></li>
                                <li><Link href="/about" className="footer-nav-link-v2">Terms and Conditions </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-5 md:grid grid-cols-12 gap-base">
                        <div className="flex-grow max-w-[341px] mt-base lg:col-span-7 md:col-span-6">
                            <h3 className="text-white lg:text-[25px] text-2md  font-semibold leading-1.35 mb-base">Business
                                Inquiry</h3>
                            <ul>
                                <li className="mt-5 first:mt-0 flex items-center text-stock-1 hover:text-primary-1 duration-200">
                                    <div className="text-primary-1 shrink-0">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.5917C12.5999 7.15576 11.4358 5.9917 9.9999 5.9917C8.56396 5.9917 7.3999 7.15576 7.3999 8.5917C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z" stroke="#E8604C" strokeWidth="1.5" />
                                            <path d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <Link href="#" className="leading-1.5 pl-[10px] lg:text-base text-sm">3891
                                        {FooterDataOne?.address}
                                    </Link>
                                </li>
                            </ul>
                            <h3 className="text-white lg:text-[25px] text-2md  font-semibold leading-1.35 mt-11">Newsletter
                            </h3>
                            <form action="#" className="mt-5 ">
                                <div className="relative">
                                    <input type="text" className="bg-[#0C0F13] bg-transparent h-12 py-3 pr-5 pl-12 outline-none border-stock-1 border border-opacity-40 w-full text-white text-sm placeholder:to-dark-5 focus:border-primary-2" placeholder="Email address" />
                                    <div className="absolute left-5 max-w-5 top-1/2 -translate-y-1/2">
                                        <svg width={17} height={15} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.2188 0.96875H0.78125C0.452832 0.96875 0.1875 1.23408 0.1875 1.5625V13.4375C0.1875 13.7659 0.452832 14.0312 0.78125 14.0312H16.2188C16.5472 14.0312 16.8125 13.7659 16.8125 13.4375V1.5625C16.8125 1.23408 16.5472 0.96875 16.2188 0.96875ZM15.4766 3.02461V12.6953H1.52344V3.02461L1.01133 2.62568L1.74053 1.68867L2.53467 2.30654H14.4672L15.2613 1.68867L15.9905 2.62568L15.4766 3.02461V3.02461ZM14.4672 2.30469L8.5 6.94336L2.53281 2.30469L1.73867 1.68682L1.00947 2.62383L1.52158 3.02275L7.85986 7.95088C8.04214 8.09249 8.26639 8.16936 8.49722 8.16936C8.72804 8.16936 8.95229 8.09249 9.13457 7.95088L15.4766 3.02461L15.9887 2.62568L15.2595 1.68867L14.4672 2.30469Z" fill="#EBEBEB" />
                                        </svg>
                                    </div>
                                </div>
                                <button type="submit" className="text-base text-white font-semibold bg-primary-1 w-full mt-5 h-[50px]">Subscribe</button>
                            </form>
                        </div>
                        <div className="md:basis-2/5 mt-base lg:col-span-5 md:col-span-6">
                            <h3 className="text-white lg:text-[25px] text-2md  font-semibold leading-1.35 mb-base">Customer Support</h3>
                            <ul>
                                <li className="first:mt-0 mt-3">
                                    <Link href="mailto:info@example.com" className="flex items-center lg:text-base text-sm text-stock-1 hover:text-primary-1 duration-200">
                                        <span className="shrink-0">
                                            <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.125 0.125H0.875C0.529297 0.125 0.25 0.404297 0.25 0.75V13.25C0.25 13.5957 0.529297 13.875 0.875 13.875H17.125C17.4707 13.875 17.75 13.5957 17.75 13.25V0.75C17.75 0.404297 17.4707 0.125 17.125 0.125ZM16.3438 2.28906V12.4688H1.65625V2.28906L1.11719 1.86914L1.88477 0.882813L2.7207 1.5332H15.2812L16.1172 0.882813L16.8848 1.86914L16.3438 2.28906V2.28906ZM15.2812 1.53125L9 6.41406L2.71875 1.53125L1.88281 0.880859L1.11523 1.86719L1.6543 2.28711L8.32617 7.47461C8.51805 7.62367 8.7541 7.70459 8.99707 7.70459C9.24004 7.70459 9.4761 7.62367 9.66797 7.47461L16.3438 2.28906L16.8828 1.86914L16.1152 0.882813L15.2812 1.53125Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <p className="ml-[14px] font-medium">
                                            {FooterDataOne?.email}
                                        </p>
                                    </Link>
                                </li>
                                <li className="first:mt-0 mt-3">
                                    <Link href="tel:01761111456" className="flex items-center lg:text-base text-sm text-stock-1 hover:text-primary-1 duration-200">
                                        <span className="shrink-0">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.1309 2.66211L13.0508 0.583984C12.7969 0.330078 12.457 0.1875 12.0977 0.1875C11.7383 0.1875 11.3984 0.328125 11.1445 0.583984L8.9043 2.82031C8.65039 3.07422 8.50781 3.41602 8.50781 3.77539C8.50781 4.13672 8.64844 4.47461 8.9043 4.73047L10.6543 6.48242C10.2556 7.4113 9.68282 8.25527 8.9668 8.96875C8.25 9.68945 7.41211 10.2578 6.48242 10.6602L4.73242 8.9082C4.47852 8.6543 4.13867 8.51172 3.7793 8.51172C3.60204 8.51106 3.42643 8.54579 3.26276 8.61387C3.0991 8.68196 2.95067 8.78202 2.82617 8.9082L0.583984 11.1445C0.330078 11.3984 0.1875 11.7402 0.1875 12.0996C0.1875 12.4609 0.328125 12.7988 0.583984 13.0547L2.66211 15.1328C3.0957 15.5664 3.69336 15.8145 4.30664 15.8145C4.43359 15.8145 4.55664 15.8047 4.68164 15.7832C7.26758 15.3574 9.83398 13.9805 11.9062 11.9102C13.9766 9.83594 15.3516 7.26953 15.7813 4.68164C15.9043 3.94727 15.6582 3.19141 15.1309 2.66211V2.66211ZM14.3965 4.44922C14.0156 6.75195 12.7773 9.04883 10.9121 10.9141C9.04687 12.7793 6.75195 14.0176 4.44922 14.3984C4.16016 14.4473 3.86328 14.3496 3.65234 14.1406L1.61133 12.0996L3.77539 9.93359L6.11523 12.2773L6.13281 12.2949L6.55469 12.1387C7.83384 11.6684 8.99544 10.9255 9.95897 9.96168C10.9225 8.99781 11.6649 7.83596 12.1348 6.55664L12.291 6.13477L9.93164 3.77734L12.0957 1.61133L14.1367 3.65234C14.3477 3.86328 14.4453 4.16016 14.3965 4.44922Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <p className="ml-[14px] font-medium">{FooterDataOne?.phone}</p>
                                    </Link>
                                </li>
                            </ul>
                            <h5 className="text-white text-md font-medium mt-9">Social</h5>
                            <ul className="flex items-center flex-wrap space-x-[15px]">
                                <li className="mt-3">
                                    <Link href={FooterDataOne?.facebookLink} className="flex items-center justify-center rounded-full bg-[#1674EA] h-10 w-10 text-white hover:-translate-y-1 duration-200">
                                        <i className="bi bi-facebook" />
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={FooterDataOne?.youtubeLink} className="flex items-center justify-center rounded-full bg-[#F70000] h-10 w-10 text-white hover:-translate-y-1 duration-200">
                                        <i className="bi bi-youtube" />
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={FooterDataOne?.instagramLink} className="flex items-center justify-center rounded-full bg-[#CF2872] h-10 w-10 text-white hover:-translate-y-1 duration-200">
                                        <i className="bi bi-instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-base border-t border-white border-opacity-10">
                    <div className="flex md:justify-between flex-wrap text-dark-5 lg:text-base text-sm gap-6 text-center lg:text-start justify-center">
                        <p className="order-2 lg:order-1">{FooterDataOne?.copyrightText}</p>
                        <div className="flex flex-wrap items-center order-1 lg:order-2">
                            <p>We Accept: </p>
                            <div className="ml-[15px]"><img src="/assets/images/others/payment-cards.png" alt="cards" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterTwo