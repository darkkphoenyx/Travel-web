'use client'

import {useEffect} from 'react'

const BackToTop = () => {

    const ScrollTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button onClick={()=> ScrollTop()} className="text-white flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 w-[50px] h-[50px] rounded-full bg-primary-1 -translate-y-1/2 duration-300 hover:bg-primary-2">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.07996 15.0501" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

export default BackToTop;