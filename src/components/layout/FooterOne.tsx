import Link from "next/link";
import FooterDataOne from '@/constant/common/FooterDataOne';
import Image from "next/image";
import BackToTop from "./ui/BackToTop";

const FooterOne = () => {
    return (
        <div className="footer_style__one bg-center bg-cover bg-no-repeat mt-17 pt-17 bg-fixed overflow-hidden" style={{ background: `linear-gradient( rgba(8, 8, 11, .8) 100%, rgba(8, 8, 11, .8)100%), url("${FooterDataOne.bgImg}")` }}>
            <div className="container">
                <div className="flex lg:justify-between justify-center items-center flex-wrap gap-base pb-base">
                    <Link href="/">
                        <img
                            src={FooterDataOne.logo} 
                            alt="logo" 
                        />
                    </Link>
                    <div className="flex align-middle justify-center lg:gap-x-9 gap-y-5 gap-x-7 flex-wrap">
                        <Link href={FooterDataOne.whatsappLink} className="inline-flex items-center group">
                            <div className="social_icon_varient__one">
                                <i className="bi bi-whatsapp" />
                            </div>
                            <h5 className="text-white lg:text-2md text-md font-serif font-bold">whatsapp </h5>
                        </Link>
                        <Link href={FooterDataOne.twitterLink} className="inline-flex items-center group">
                            <div className="social_icon_varient__one">
                                <i className="bi bi-twitter" />
                            </div>
                            <h5 className="text-white lg:text-2md text-md font-serif font-bold">Twitter</h5>
                        </Link>
                        <Link href={FooterDataOne.pinterestLink} className="inline-flex items-center group">
                            <div className="social_icon_varient__one">
                                <i className="bi bi-pinterest" />
                            </div>
                            <h5 className="text-white lg:text-2md text-md font-serif font-bold">Pinterest</h5>
                        </Link>
                        <Link href={FooterDataOne.instagramLink} className="inline-flex items-center group">
                            <div className="social_icon_varient__one">
                                <i className="bi bi-instagram" />
                            </div>
                            <h5 className="text-white lg:text-2md text-md font-serif font-bold">Instagram</h5>
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 lg:pt-17 pt-10 gap-base lg:pb-17 pb-12 gradient-border-top">
                    <div className="lg:col-span-4 col-span-12 text-center lg:text-start">
                        <h3 className="text-white lg:text-[25px] text-2md  font-semibold leading-1.35">Newsletter</h3>
                        <form action="#" className="mt-5 md:max-w-[345px] max-w-[300px] lg:mx-0 mx-auto">
                            <div className="relative">
                                <input type="text" className="bg-[#0C0F13] bg-transparent h-12 py-3 pr-5 pl-12 outline-none border-stock-1 border border-opacity-40 w-full text-white text-sm placeholder:to-dark-5 focus:border-primary-2" placeholder="Email address" />
                                <div className="absolute left-5 max-w-5 top-1/2 -translate-y-1/2">
                                    <svg width={17} height={15} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.2188 0.96875H0.78125C0.452832 0.96875 0.1875 1.23408 0.1875 1.5625V13.4375C0.1875 13.7659 0.452832 14.0312 0.78125 14.0312H16.2188C16.5472 14.0312 16.8125 13.7659 16.8125 13.4375V1.5625C16.8125 1.23408 16.5472 0.96875 16.2188 0.96875ZM15.4766 3.02461V12.6953H1.52344V3.02461L1.01133 2.62568L1.74053 1.68867L2.53467 2.30654H14.4672L15.2613 1.68867L15.9905 2.62568L15.4766 3.02461V3.02461ZM14.4672 2.30469L8.5 6.94336L2.53281 2.30469L1.73867 1.68682L1.00947 2.62383L1.52158 3.02275L7.85986 7.95088C8.04214 8.09249 8.26639 8.16936 8.49722 8.16936C8.72804 8.16936 8.95229 8.09249 9.13457 7.95088L15.4766 3.02461L15.9887 2.62568L15.2595 1.68867L14.4672 2.30469Z" fill="#EBEBEB" />
                                    </svg>
                                </div>
                            </div>
                            <button type="submit" className="text-base text-white font-semibold bg-primary-1 w-full mt-5 h-[50px] duration-300 hover:bg-primary-2 ">Subscribe</button>
                        </form>
                        <Link href="#" className="inline-block bg-status-info text-base font-medium leading-1.3 text-white rounded-full mt-9 px-4 py-3">We
                            Are Hiring!</Link>
                    </div>
                    <div className="lg:col-span-8 col-span-12 gap-base flex lg:flex-nowrap flex-wrap text-center lg:text-start lg:justify-between justify-center lg:pl-8">
                        <div className="flex-grow">
                            <div className="mb-base">
                                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Navigation</h3>
                            </div>
                            <ul className="footer-link-list">
                                <li><Link href="/about" className="footer-nav-link">About Company</Link></li>
                                <li><Link href="/about" className="footer-nav-link">Online Query</Link></li>
                                <li><Link href="/about" className="footer-nav-link">Become Partner</Link></li>
                                <li><Link href="/about" className="footer-nav-link">Help &amp; Support</Link></li>
                            </ul>
                        </div>
                        <div className="flex-grow">
                            <div className="mb-base">
                                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Destinations
                                </h3>
                            </div>
                            <ul className="footer-link-list">
                                <li><Link href="/package-details" className="footer-nav-link">Grand Switzerland</Link></li>
                                <li><Link href="/package-details" className="footer-nav-link">Beauty of Paris</Link></li>
                                <li><Link href="/package-details" className="footer-nav-link">United States</Link></li>
                                <li><Link href="/package-details" className="footer-nav-link">Wiesbaden Sea</Link></li>
                            </ul>
                        </div>
                        <div className="max-w-[275px] flex-grow shrink-0 ">
                            <div className="mb-base">
                                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Contact Us</h3>
                            </div>
                            <ul>
                                <li className="mt-5 first:mt-0 flex items-center lg:justify-start justify-end text-stock-1 hover:text-primary-1 duration-200">
                                    <div className="text-primary-1 shrink-0">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.5917C12.5999 7.15576 11.4358 5.9917 9.9999 5.9917C8.56396 5.9917 7.3999 7.15576 7.3999 8.5917C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z" stroke="#E8604C" strokeWidth="1.5" />
                                            <path d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <Link href="#" className="leading-1.5 pl-[10px] text-base ">
                                        {FooterDataOne.address}
                                    </Link>
                                </li>
                                <li className="mt-5 first:mt-0 flex items-center lg:justify-start justify-center text-stock-1 hover:text-primary-1 duration-200">
                                    <div className="text-primary-1 shrink-0">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3084 15.2748C18.3084 15.5748 18.2417 15.8832 18.1001 16.1832C17.9584 16.4832 17.7751 16.7665 17.5334 17.0332C17.1251 17.4832 16.6751 17.8082 16.1667 18.0165C15.6667 18.2248 15.1251 18.3332 14.5417 18.3332C13.6917 18.3332 12.7834 18.1332 11.8251 17.7248C10.8667 17.3165 9.90842 16.7665 8.95842 16.0748C8.00008 15.3748 7.09175 14.5998 6.22508 13.7415C5.36675 12.8748 4.59175 11.9665 3.90008 11.0165C3.21675 10.0665 2.66675 9.1165 2.26675 8.17484C1.86675 7.22484 1.66675 6.3165 1.66675 5.44984C1.66675 4.88317 1.76675 4.3415 1.96675 3.8415C2.16675 3.33317 2.48341 2.8665 2.92508 2.44984C3.45841 1.92484 4.04175 1.6665 4.65841 1.6665C4.89175 1.6665 5.12508 1.7165 5.33341 1.8165C5.55008 1.9165 5.74175 2.0665 5.89175 2.28317L7.82508 5.00817C7.97508 5.2165 8.08341 5.40817 8.15841 5.5915C8.23341 5.7665 8.27508 5.9415 8.27508 6.09984C8.27508 6.29984 8.21675 6.49984 8.10008 6.6915C7.99175 6.88317 7.83341 7.08317 7.63341 7.28317L7.00008 7.9415C6.90841 8.03317 6.86675 8.1415 6.86675 8.27484C6.86675 8.3415 6.87508 8.39984 6.89175 8.4665C6.91675 8.53317 6.94175 8.58317 6.95842 8.63317C7.10842 8.90817 7.36675 9.2665 7.73341 9.69984C8.10841 10.1332 8.50841 10.5748 8.94175 11.0165C9.39175 11.4582 9.82508 11.8665 10.2667 12.2415C10.7001 12.6082 11.0584 12.8582 11.3417 13.0082C11.3834 13.0248 11.4334 13.0498 11.4917 13.0748C11.5584 13.0998 11.6251 13.1082 11.7001 13.1082C11.8417 13.1082 11.9501 13.0582 12.0417 12.9665L12.6751 12.3415C12.8834 12.1332 13.0834 11.9748 13.2751 11.8748C13.4667 11.7582 13.6584 11.6998 13.8667 11.6998C14.0251 11.6998 14.1917 11.7332 14.3751 11.8082C14.5584 11.8832 14.7501 11.9915 14.9584 12.1332L17.7167 14.0915C17.9334 14.2415 18.0834 14.4165 18.1751 14.6248C18.2584 14.8332 18.3084 15.0415 18.3084 15.2748Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} />
                                            <path d="M13.5251 6.4749L16.4751 3.5249" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.4751 6.4749L13.5251 3.5249" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <Link href={`tel:${FooterDataOne.phone}`} className="leading-1.5 pl-[10px] text-base ">
                                        {FooterDataOne.phone}
                                    </Link>
                                </li>
                                <li className="mt-5 first:mt-0 flex items-center lg:justify-start justify-center text-stock-1 hover:text-primary-1 duration-200">
                                    <div className="text-primary-1 shrink-0">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1667 17.0832H5.83341C3.33341 17.0832 1.66675 15.8332 1.66675 12.9165V7.08317C1.66675 4.1665 3.33341 2.9165 5.83341 2.9165H14.1667C16.6667 2.9165 18.3334 4.1665 18.3334 7.08317V12.9165C18.3334 15.8332 16.6667 17.0832 14.1667 17.0832Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.1666 7.5L11.5582 9.58333C10.6999 10.2667 9.29158 10.2667 8.43325 9.58333L5.83325 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <Link href={`mailto:${FooterDataOne.email}`} className="leading-1.5 pl-[10px] text-base ">{FooterDataOne.email}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-dark-6 flex gap-4 flex-wrap lg:justify-between justify-center gradient-border-top py-7 relative">
                    <BackToTop />
                    <p>{FooterDataOne.copyrightText}.</p>
                    <p><Link href="/about" className="hover:text-primary-1 duration-200">Privacy Policy</Link> | <Link href="/about" className="hover:text-primary-1 duration-200">Terms of Use</Link></p>
                </div>
            </div>
        </div>
    );
}

export default FooterOne;