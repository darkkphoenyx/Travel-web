'use client'
import { useState } from 'react';


const AccordionSingle = (
    {index , question, content} :
    {
        index: number,
        question: string,
        content: string
    }
    
    ) => {
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index: any) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    
    return (
        <div className="single__accordion shadow-custom-1 bg-white">
            <button onClick={() => handleClick(index)} type="button" className="toggle px-5 py-5 leading-1.5 text-2md text-start w-full text-dark-1 font-serif"> {index < 10 ? `0${index+1}` : index}. &nbsp;
                {question}</button>
            <div
                className={`hidden inner px-5 pb-5 ${index === activeIndex ? 'content show' : 'content'}`}
                style={{ 
                    display: index === activeIndex ? 'block' : 'none'
                }}
            >
                <p className="text-base font-sans text-dark-3 leading-1.9">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default AccordionSingle;