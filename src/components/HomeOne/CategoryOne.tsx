import CategoryDataOne from '@/constant/HomeOne/CategoryDataOne';
import Image from 'next/image';
import Link from 'next/link';

const CategoryOne = () => {
    return (
        <div className="tour_type_style__one lg:pt-30 pt-24 relative z-1 ">
            <div className="absolute top-[10%] left-[2%] max-w-[9%] z-minus lg:inline-block hidden">
                <img src="./assets/images/illustration/leaf-illustration.png" alt="leaf" />
            </div>
            <div className="container">
                <div className="text-center lg:pb-[60px] pb-[40px]">
                    <h5 className="section-sub-title-v1">{CategoryDataOne.sub_title}</h5>
                    <h2 className="section-title-v1">{CategoryDataOne.Title}</h2>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-base">
                    {CategoryDataOne.categorys.map((item, index) => (
                        <div className='sm:text-left text-center wow fadeInUp' key={item.id}>
                            <div className='lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto'>
                            <Image 
                                src={item.icon} 
                                width={100} 
                                height={100} 
                                alt="icon" 
                                className="" 
                            />
                            </div>
                            <h4 className="card-title-alpha lg:mt-6 mt-4"><Link href="/package-sidebar">{item.title}</Link></h4>
                            <h5 className="font-sans font-medium text-md text-primary-1 mt-1">{item.tour_count} Tours+</h5>
                            <p className="regular-text-v1 !text-[17px] mt-1 !leading-1.6">{item.short_desc}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default CategoryOne;