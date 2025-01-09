import Image from "next/image";
import Link from "next/link";

const PackageCardOne = (
    {img, title, discount, duration, people,location} : 
    {
        img: string, 
        title: string, 
        discount?: string, 
        duration: string,
        people: string
        location:string
    }
    
    ) => {
    return (
        <div className="group/card package-card-style-one wow fadeInUp">
            <div className="overflow-hidden relative ">
                <Link href={`/package-details/${location}`}>
                    <Image 
                        width={820}
                        height={520}
                        placeholder="blur"
                        blurDataURL='/assets/images/blur-placeholder.png'
                        src={img} 
                        alt={title} 
                        className="w-full group-hover/card:scale-105 duration-300" 
                    />
                </Link>
                {discount && <span className="absolute inline-block top-5 right-5 text-sm text-white rounded-full bg-[#219FFF] py-1 px-3">{discount}%
                    off</span>}
            </div>
            <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">
                <Link href="/package-details">{title}</Link>
            </h3>
            <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature ">
                <li>
                    <span className="text-primary-1">
                        <i className="bi bi-people" />
                    </span>
                    <span>{people} People</span>
                </li>
                <li>
                    <span className="text-primary-1">
                        <i className="bi bi-clock" />
                    </span>
                    <span>{duration} Days</span>
                </li>
            </ul>
        </div>
    );
}

export default PackageCardOne;