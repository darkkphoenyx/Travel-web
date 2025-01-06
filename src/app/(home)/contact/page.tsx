import Breadcrumb from "@/components/layout/Breadcrumb"
import InstagramFeed from "@/components/layout/InstagramFeed"
import ContactForm from "@/components/ui/ContactForm"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Contact | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const Contact = () => {
    return (
        <>
             <Breadcrumb
                page='Contact Us'
                pageTitle='A Feel Free to Contact with us'
            />
            
            {/*========== CONTACT US STYLE START ==========*/}
            <div className="lg:pt-30 pt-24  relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
                <div className="absolute top-[7%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
                </div>
                <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                    <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
                </div>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
                        <div className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp">
                            <div className="flex">
                                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#219FFF]">
                                    <i className="bi bi-envelope-at" />
                                </div>
                                <div>
                                    <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Email Us</h4>
                                    <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                                        <li><a href="mailto:info@supportcompany.com" className="hover:text-primary-1 duration-200">info@supportcompany.com</a></li>
                                        <li><a href="mailto:info@exmple.com" className="hover:text-primary-1 duration-200">info@exmple.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp" data-wow-delay="0.2s">
                            <div className="flex">
                                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#17BD8D]">
                                    <i className="bi bi-telephone-forward" />
                                </div>
                                <div>
                                    <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Call us</h4>
                                    <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                                        <li><a href="tel:+770434501097" className="hover:text-primary-1 duration-200">+7704345017</a></li>
                                        <li><a href="tel:+866-398-5917" className="hover:text-primary-1 duration-200">+866-398-5917</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp" data-wow-delay="0.4s">
                            <div className="flex">
                                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#F53D6B]">
                                    <i className="bi bi-geo-alt" />
                                </div>
                                <div>
                                    <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Email Us</h4>
                                    <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                                        <li><a href="mailto:info@supportcompany.com" className="hover:text-primary-1 duration-200">4517 Washington Ave. Manchester, Kentucky 39495</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pt-30 pt-24">
                        <div className="text-center lg:pb-[60px] pb-[40px]">
                            <h5 className="section-sub-title-v1">Get in Touch</h5>
                            <h2 className="section-title-v1">Feel Free to Contact with us</h2>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
            {/*========== CONTACT US STYLE END ==========*/}
            <InstagramFeed />

        </>
    )
}

export default Contact