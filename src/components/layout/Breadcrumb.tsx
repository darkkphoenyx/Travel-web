'use client'

import Link from "next/link"
import { Parallax } from "react-parallax"

const Breadcrumb = (
    { pageTitle, page, bgUrl = '/assets/images/backgrounds/breadcrumb-bg.webp' }:
        {
            pageTitle: string,
            page: string,
            bgUrl?: string
        }
) => {
    return (
        <Parallax
            bgImage={bgUrl}
            strength={-100}
            bgImageAlt='background'
            bgClassName='object-cover'
            className="relative overflow-hidden"
        >
            <div className="lg:py-36 py-20 relative overflow-hidden bg-[#030610] bg-opacity-40">
                <img src="/assets/images/illustration/breadcrunb__shape.png" alt="shape" className="absolute bottom-0 left-0 z-1 lg:w-[12.5%] w-[20%]" />
                <img src="/assets/images/illustration/bird-illustration-w.png" alt="shape" className="absolute top-[10%] right-[4%] z-1 w-[7.5%]" />
                <div className="container relative z-2">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link href="/">Home</Link></li>
                            <li className="active_page">{page}</li>
                        </ol>
                    </nav>
                    <h2 className="xl:text-[54px] mt-2 lg:text-4xl md:text-2xl text-[30px] text-white leading-[1.3] font-medium max-w-[640px]">
                        {pageTitle}
                    </h2>
                </div>
            </div>
        </Parallax>
    )
}

export default Breadcrumb