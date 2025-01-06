import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="pt-24 pb-24 relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white min-h-screen flex flex-col justify-center">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 max-w-[14%] z-minus lg:inline-block hidden">
                <img src="/assets/images/illustration/tree-illustration.png" alt="leaf" />
            </div>
            <div className="absolute top-[10%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                <Image 
                    src="/assets/images/illustration/bird-illustration.png" 
                    alt="Error Illustration"
                    height={274}
                    width={774} 
                />
            </div>
            <div className="container">
                <div className="max-w-[774px] text-center mx-auto">
                    <img src="/assets/images/error.png" alt="error" />
                    <h2 className="section-title-v1">Oops! That Page Can't Be Found.</h2>
                    <p className="regular-text-v1 !leading-1.6 mt-[10px]">It looks like nothing was found at this location. You can either go back to the last <br /> page or go to Home Page</p>
                    <div className="mt-12">
                        <Link href="/" className="btn_primary__v1">
                            <i className="bi bi-chevron-left" />
                            Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}