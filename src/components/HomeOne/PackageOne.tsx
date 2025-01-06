import PackageDataOne from '@/constant/HomeOne/PackageDataOne';
import Image from 'next/image';
import PackageCardOne from './ui/PackageCardOne';
import Link from 'next/link';

const PackageOne = () => {

    return (
        <div className="package_style__one lg:pt-30 pt-24 lg:pb-30 pb-24 z-1 relative">
            <div className="absolute bottom-[10%] left-[2%] max-w-[13%] z-minus lg:inline-block hidden">
                <img src="/assets/images/illustration/leaf-illustration-2.png" alt="leaf" />
            </div>
            <div className="absolute top-[7%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
                <img src="/assets/images/illustration/tree-illustration.png" alt="leaf" />
            </div>
            <div className="container">
                <div className="text-center lg:pb-[60px] pb-[40px]">
                    <h5 className="section-sub-title-v1">{PackageDataOne.sub_title}</h5>
                    <h2 className="section-title-v1">{PackageDataOne.title}</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
                    {
                        PackageDataOne?.packages.slice(0,5).map((item, index) => (
                            <PackageCardOne
                                key={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                duration={item.duration}
                                people={item.people}
                                discount={item.discount}
                            />
                        ))
                    }

                    <div className="bg-primary-1  bg-center bg-no-repeat bg-cover text-center relative p-base flex items-center justify-center wow fadeInUp" data-wow-delay="0.4s">
                        <Image
                            src="/assets/images/backgrounds/package-bg.png"
                            alt="background"
                            fill
                        />
                        <div className='relative z-3'>
                            <h3 className="lg:text-3xl text-2xl leading-1.5 text-white font-medium">Book now and get 20% off
                            </h3>
                            <Link href="/package-sidebar" className="btn_primary__v1 border border-white mt-base">View
                                More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PackageOne;