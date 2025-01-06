import Link from "next/link";
import Marquee from "react-fast-marquee";

const HeroBulletin = () => {
    return (
        <div className="bg-dark-1 px-8 py-5 xl:mx-base mx-3 mt-base">
            <Marquee 
                className="lg:text-2md text-base text-white marquee__content"
                pauseOnHover={true}
             >
                <Link href="#">Get 50% off - Black Friday Big Offer</Link>
                <Link href="#">30% off on Bali Package, last hour deal!</Link>
                <Link href="#">Real Our Bokking Guidelines</Link>
                <Link href="#">Payment With <span className="underline">AridCash</span> and get 10% off each booking</Link>
                <Link href="#">View the exciting places of Cox's Bazer</Link>
                
            </Marquee>
        </div>
    );
}

export default HeroBulletin;