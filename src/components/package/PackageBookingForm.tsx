'use client';

import Link from "next/link";
import { useState } from "react"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const PackageBookingForm = () => {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [activTab, setActiveTab] = useState('booking');
    const [dropdownActive, setDropdownActive] = useState(false);
    const [guest, setGuest] = useState<Guest>({
        adult: 0,
        child: 0,
        room: 0
    });

    interface Guest {
        adult: number;
        child: number;
        room: number;
    }
    
    const incrementGuest = (key: keyof Guest) => {
        setGuest(prev => ({
            ...prev,
            [key]: prev[key] + 1
        }));
    }

    const minusGuest = (key: keyof Guest) => {
        if (guest[key] > 0) {
            setGuest(prev => ({
                ...prev,
                [key]: prev[key] - 1
            }));
        }
    }

    return (
        <div>
            <ul id="tabs-nav" className="booking-tabs flex gap-4 pb-6">
                <li onClick={() => setActiveTab('booking')} className={`tab-link basis-1/2 ${activTab === 'booking' ? 'active' : ''}`} data-tab={3}>Booking</li>
                <li onClick={() => setActiveTab('enquiry')} className={`tab-link basis-1/2 ${activTab === 'enquiry' ? 'active' : ''}`} data-tab={4}>Enquiry</li>
            </ul>
            <div id="tab-3" className={`tab-content ${activTab === 'booking' ? 'active' : ''}`}>
                <form action="#" autoComplete="off" className="lg:px-base px-5 lg:pt-6 lg:pb-base pt-4 pb-5 bg-white border-primary-1 border">
                    <h4 className="lg:text-xl text-lg text-dark-1 font-semibold"><span className="text-md font-sans font-normal text-dark-3">Start from</span> $175</h4>
                    <div className="mt-5 lg:mt-6">
                        <label htmlFor="tourTime" className="mb-2 text-dark-3 capitalize block">Date</label>
                        <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update: any) => {
                            setDateRange(update);
                        }}
                        placeholderText="Select Date"
                        className="search__daterange border border-stock-1 lg:h-[54px] h-12 px-5 py-2 text-dark-2 focus:border-primary-1 w-full placeholder:text-dark-2 outline-none !font-sans text-start"
                    />
                    </div>
                    <div className="js-form-counters lg:mt-6 mt-5 relative">
                        <label htmlFor="tourTime" className="mb-2 text-dark-3 capitalize block">Number of travelers</label>
                        <button aria-label="count button" onClick={() => setDropdownActive(!dropdownActive)} type="button" className="w-full bg-transparent border border-stock-1 lg:h-[54px] h-12 px-5 py-2 text-dark-2 focus:border-primary-1 flex items-center common_dropdown__btn">
                            <div>
                                <span className="js-count-adult">{guest.adult}</span> adults
                                -
                                <span className="js-count-child">{guest.child}</span> childeren
                                -
                                <span className="js-count-room">{guest.room}</span> room
                            </div>
                        </button>
                        {/* count dropdown */}
                        <div
                            className={`common__dropdown person-dropdown space-y-4 opacity-0 absolute w-full left-0 top-full invisible bg-white translate-y-3 duration-200 z-10 ${dropdownActive ? 'common_dropdown__active' : ''}`}>

                            {/* adult count */}
                            <div className="js-counter flex justify-between items-center" data-value-change=".js-count-adult">
                                <p className="text-dark-1">Adult</p>
                                <div className="flex items-center space-x-4">
                                    <button onClick={()=> minusGuest('adult')} type="button" className="js-down h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-dash-lg" />
                                    </button>
                                    <div className="js-count text-dark-1 lg:ext-md">{guest.adult}</div>
                                    <button aria-label="count button" onClick={() => incrementGuest('adult')} type="button" className="js-up h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-plus-lg" />
                                    </button>
                                </div>
                            </div>

                            {/* children count  */}
                            <div className="js-counter flex justify-between items-center" data-value-change=".js-count-child">
                                <p className="text-dark-1">Childeren</p>
                                <div className="flex items-center space-x-4">
                                    <button onClick={()=> minusGuest('child')} type="button" className="js-down h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-dash-lg" />
                                    </button>
                                    <div className="js-count text-dark-1 lg:ext-md">{guest.child}</div>
                                    <button aria-label="count button" onClick={() => incrementGuest('child')} type="button" className="js-up h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-plus-lg" />
                                    </button>
                                </div>
                            </div>

                            {/* room count */}
                            <div className="js-counter flex justify-between items-center" data-value-change=".js-count-room">
                                <p className="text-dark-1 ">Room</p>
                                <div className="flex items-center space-x-4">
                                    <button onClick={()=> minusGuest('room')} type="button" className="js-down h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-dash-lg" />
                                    </button>
                                    <div className="js-count text-dark-1 lg:ext-md">{guest.room}</div>
                                    <button aria-label="count button" onClick={() => incrementGuest('room')} type="button" className="js-up h-[38px] w-[38px] border border-primary-1 flex items-center justify-center rounded-full text-dark-1 hover:bg-primary-1 hover:text-white duration-150">
                                        <i className="bi bi-plus-lg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="custom-checkbox mt-4">
                            <input type="checkbox" defaultValue="add-one" id="add-one" />
                            <label htmlFor="add-one">Add Service per booking - <span className="font-semibold">$30</span></label>
                        </div>
                        <div className="custom-checkbox mt-4">
                            <input type="checkbox" defaultValue="add-two" id="add-two" />
                            <label htmlFor="add-two">Add Service per day - <span className="font-semibold">$10</span></label>
                        </div>
                    </div>
                    <div className="pt-5 border-t border-stock-1 mt-6">
                        <div className="font-sans text-dark-1 text-2md font-semibold flex justify-between">Total : <span>$450</span></div>
                    </div>
                    <button aria-label="check button" className="capitalize w-full text-center underline duration-150 mt-4 text-dark-1 font-medium flex items-center justify-center hover:text-primary-1">check availability </button>
                    <Link href="/booking" className="btn_primary__v1 !w-full justify-center mt-5">
                        Book Now
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </form>
            </div>
            <div id="tab-4" className={`tab-content ${activTab === 'enquiry' ? 'active' : ''}`}>
                <form action="#" className="lg:px-base px-5 lg:py-base py-5 bg-white border-primary-1 border">
                    <h4 className="lg:text-lg text-2md text-dark-1 font-semibold">Enquiry Now</h4>
                    <p className="regular-text-v1 !leading-[1.62] mt-2">Qui ad idque soluta deterruisset, nec sale
                        pertinax mandamus et.</p>
                    <div className="lg:mt-base mt-5">
                        <input type="text" placeholder="Your Name" className="input_style__primary" />
                    </div>
                    <div className="lg:mt-base mt-5">
                        <input type="email" placeholder="Email" className="input_style__primary" />
                    </div>
                    <div className="lg:mt-base mt-5">
                        <input type="tel" placeholder="Mobile Number" className="input_style__primary" />
                    </div>
                    <div className="lg:mt-base mt-5">
                        <textarea cols={30} rows={6} className="input_style__primary" placeholder="Additional Description..." defaultValue={""} />
                    </div>
                    <button aria-label="form submit" type="submit" className="btn_primary__v1 !w-full justify-center mt-5">
                        Enquiry
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PackageBookingForm