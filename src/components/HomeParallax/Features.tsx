import FeaturesData from '@/constant/HomeParallax/FeaturesData';

const Features = () => {
    return (
        <div className="about_style__start pb-24 lg:pb-30">
            <div className="container">
                <div className="text-center lg:pb-[60px] pb-[40px]">
                    <h5 className="section-sub-title-v1 variant-2">{FeaturesData?.sub_title}</h5>
                    <h2 className="section-title-v1">{FeaturesData?.Title}</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
                    {FeaturesData?.features?.map((feature) => (
                        <div className="text-center group" key={feature.id}>
                            <img src={feature.iconUrl} alt="icon" className="lg:h-20 h-14 mx-auto group-hover:-translate-y-1 duration-200" />
                            <h4 className="lg:text-[22px] text-md font-medium text-dark-1 leading-1.6 mt-5">
                                {feature.title}
                            </h4>
                            <p className="regular-text-v1 mt-2">{feature.disc_text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features