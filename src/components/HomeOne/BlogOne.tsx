import BlogData from '@/constant/blog/BlogDataOne';
import BlogCardOne from './ui/BlogCardOne';

const BlogOne = () => {

   
    return (
        <div className="blog_style_one relative z-1 lg:pt-30 pt-24">
            <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
            </div>
            <div className="container">
                <div className="text-center lg:pb-[60px] pb-[40px]">
                    <h5 className="section-sub-title-v1">{BlogData.sub_title}</h5>
                    <h2 className="section-title-v1">{BlogData.title}</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
                    {BlogData.blogs.slice(0,3).map((item)=> (
                        <BlogCardOne
                            key={item.id} 
                            title={item.title}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogOne;