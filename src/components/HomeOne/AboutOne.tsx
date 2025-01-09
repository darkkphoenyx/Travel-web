import AboutDataOne from '@/constant/HomeOne/AboutDataOne'
import Image from 'next/image';
import Link from 'next/link';

const AboutOne = () => {
    return (
        <div className="about_style__one lg:pt-30 pt-24 relative">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-base items-center">
                    <div className="relative">
                        <Image 
                            src={AboutDataOne.imgUrl} 
                            alt="about-img" 
                            width={550}
                            height={623}
                        />
                    </div>
                    <div className="div">
                        <h5 className="section-sub-title-v1">{AboutDataOne.sub_title}</h5>
                        <h2 className="section-title-v1 max-w-xl">{AboutDataOne.title}</h2>
                        <div className="mt-7 xl:pl-24 lg:pl-20 relative before:content-[''] before:left-0 before:top-4 before:bg-[#d9d9d9] before:w-[10%] before:h-[1px] lg:before:absolute">
                            <p className="regular-text-v1">{AboutDataOne.disc_text}</p>
                            <h5 className="font-sans text-dark-1 text-md font-medium mt-4">Speak to our Destination Experts
                                at Direct Call <br />{AboutDataOne.contact}</h5>
                        </div>
                        <ul className="pt-6 lg:text-md text-base">

                            {AboutDataOne.features.map((item, index)=>(
                                <li className="flex items-center font-sans text-dark-3 mt-4" key={index+1}>
                                <div className="text-primary-1 flex-shrink-0 text-2md">
                                    <i className="bi bi-check-circle" />
                                </div>
                                <span className="ml-3">{item}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutOne;