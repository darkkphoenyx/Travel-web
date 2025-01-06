'use client'
import 'node_modules/react-modal-video/css/modal-video.css';
import { Parallax } from 'react-parallax';
import BannerData from '@/constant/common/BannerData'
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoBanner = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <Parallax 
            bgImage={BannerData.bgImage} 
            strength={-150}
            bgImageAlt='background'
            bgClassName='object-cover'
            className="relative overflow-hidden"
        >
             <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="vJoNqBZ9QlM"
				onClose={() => setOpen(false)} 
			/>
            <div className="container relative z-2 lg:py-40 py-30">
                <div className="max-w-[560px] mx-auto text-center text-white">
                    <h2 className="lg:text-4xl text-2xl font-bold leading-1.3">{BannerData.title}</h2>
                    <p className="lg:text-2md text-md  font-medium leading-1.5 mt-4">{BannerData.disc_text}
                    </p>
                    <button  onClick={() => setOpen(true)} className="mt-8 inline-flex relative lg:h-20 lg:w-20 h-16 w-16 justify-center items-center rounded-full bg-primary-1 before:content-[''] before:absolute before:-inset-3 before:border-primary-1 before:border-2 before:rounded-full before:animate-pulse">
                        <img src="./assets/images/icons/video-circle.svg" alt="placeholder" />
                    </button>
                </div>
            </div>
        </Parallax>
      
        </>
    );
}

export default VideoBanner;