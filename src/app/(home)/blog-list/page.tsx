import BlogCardOne from '@/components/HomeOne/ui/BlogCardOne'
import BlogSidebar from '@/components/forms/BlogSidebar'
import Breadcrumb from '@/components/layout/Breadcrumb'
import BlogData from '@/constant/blog/BlogDataOne'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: 'Blog List | Arid - Travel & Tourism HTML/Tailwind CSS Template',
    description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
    keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const BlogList = () => {
    return (
        <>
            <Breadcrumb
                page='Blog List'
                pageTitle='A Blog Standard With Sidebar'
            />

            {/*========== BLOG LIST STYLE START ==========*/}
            <div className="lg:pt-30 pt-24 relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
                <div className="container">
                    <div className="grid grid-cols-12 lg:gap-12 gap-base">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-base">
                                {BlogData.blogs.map((item) => (
                                    <BlogCardOne
                                        key={item.id}
                                        title={item.title}
                                        img={item.img}
                                    />
                                ))}
                            </div>
                            <nav>
                                <ul className="flex justify-center items-center lg:space-x-6 space-x-5 flex-wrap lg:pt-[60px] pt-[40px]">
                                    <li><Link href="#" className="h-10 w-10 border-primary-1 border text-primary-1 hover:bg-primary-1 hover:text-white duration-200 inline-flex justify-center items-center"><i className="bi bi-chevron-left" /></Link>
                                    </li>
                                    <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">01</Link>
                                    </li>
                                    <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block text-primary-1">02</Link>
                                    </li>
                                    <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">03</Link>
                                    </li>
                                    <li><Link href="#" className=" font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">04</Link>
                                    </li>
                                    <li><Link href="#" className="font-medium lg:text-base text-sm text-dark-1 duration-150 hover:text-primary-1 inline-block">05</Link>
                                    </li>
                                    <li><Link href="#" className="h-10 w-10 border-primary-1 border text-primary-1 hover:bg-primary-1 hover:text-white duration-200 inline-flex justify-center items-center"><i className="bi bi-chevron-right" /></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
            {/*========== BLOG LIST STYLE END ==========*/}

        </>
    )
}

export default BlogList