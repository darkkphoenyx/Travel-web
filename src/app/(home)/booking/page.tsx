'use client'

import React, { useState } from 'react'
import Separator from '@/components/ui/Separator';
import { Metadata } from 'next';

const Booking = () => {

	const [step, setStep] = useState<number>(1);

	const nextStep = () => {
		setStep((prevStep: number) => prevStep + 1);
	};

	const prevStep = () => {
		setStep((prevStep: number) => prevStep - 1);
	};

	return (
		<>
			<div className="lg:pt-20 pt-16">
				<div className="container">

					<ul className="flex items-center justify-between pb-10">
						<li className={`single-step-count justify-end step ${step >= 1 ? 'active-count' : ''}`} >
							<span className="inline-flex justify-center items-center lg:h-10 lg:w-10 w-9 h-9 rounded-full bg-primary-1 text-white">01</span>
							<p className="text-sm lg:text-base">Personal Details</p>
						</li>
						<li className="flex-grow h-[1px] bg-stock-1 mx-3 sm:block hidden" />
						<li className={`single-step-count justify-end step ${step >= 2 ? 'active-count' : ''}`}>
							<span className="inline-flex justify-center items-center lg:h-10 lg:w-10 w-9 h-9 rounded-full bg-primary-1 text-white">02</span>
							<p className="text-sm lg:text-base">Payment Details</p>
						</li>
						<li className="flex-grow h-[1px] bg-stock-1 mx-3 sm:block hidden" />
						<li className={`single-step-count justify-end step ${step >= 3 ? 'active-count' : ''}`}>
							<span className="inline-flex justify-center items-center lg:h-10 lg:w-10 w-9 h-9 rounded-full bg-primary-1 text-white">03</span>
							<p className="text-sm lg:text-base">Final Step</p>
						</li>
					</ul>




					{(() => {
						switch (step) {
							case 1:
								return (
									<div className="tab">
										<div className="grid grid-cols-12 lg:gap-12 gap-base">
											<div className="lg:col-span-8 col-span-12">
												<div className="px-5 py-4 bg-primary-1 bg-opacity-20 text-dark-2 lg:text-base text-sm">
													Sign in with your saved information to book, or <a href="auth.html" className="font-semibold text-dark-1">register</a> to manage your reservations on the go!
												</div>
												<h5 className="text-dark-1 lg:text-[22px] text-2md font-semibold mt-base mb-7">Please tell us about
													yourself.</h5>
												<div className="grid grid-cols-2 lg:gap-7 gap-5">
													<div className="col-span-2">
														<label className="text-dark-2 block mb-2">Full Name</label>
														<input type="text" placeholder="ex: Jhon Doe" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">Email</label>
														<input type="text" placeholder="ex: example@email.com" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">Phone Number</label>
														<input type="text" placeholder="Phone Number" className="input_style__primary" />
													</div>
													<div className="col-span-2">
														<label className="text-dark-2 block mb-2">Your Address</label>
														<input type="text" placeholder="Your Address" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">State/District</label>
														<input type="text" placeholder="State/District" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">Zip Code/Postal Code</label>
														<input type="text" placeholder="Zip Code/Postal Code" className="input_style__primary" />
													</div>
													<div className="col-span-2">
														<label className="text-dark-2 block mb-2">Additional Massage</label>
														<textarea cols={30} rows={7} className="input_style__primary" placeholder="Write Here..." defaultValue={""} />
													</div>
													<div className="custom-checkbox col-span-2">
														<input type="checkbox" defaultValue="agree2" id="agree2" />
														<label htmlFor="agree2">I agree to Arid Terms of Use and Privacy Policy.</label>
													</div>
												</div>
											</div>
											<div className="lg:col-span-4 col-span-12">
												<h5 className="text-dark-1 lg:text-[22px] text-2md font-semibold">
													Your Booking Details
												</h5>
												<div className="flex group pt-5">
													<a href="package-details.html" className="shrink-0 lg:max-w-[134px] max-w-[100px] mr-[15px] overflow-hidden">
														<img src="./assets/images/packages/p1-1.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
													</a>
													<div className="grow">
														<ul className="text-sm text-orange-500">
															<li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
															<li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
															<li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
															<li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
															<li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
														</ul>
														<h5 className="lg:text-md mt-1 text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
															<a href="package-details.html">Cusco &amp; Salkantay Trekking to Machu Picchu</a>
														</h5>
														<div className="mt-[5px] text-dark-2">
															<span>
																Form
															</span>
															<span className="text-primary-1 font-medium">$140.00</span>
														</div>
													</div>
												</div>
												<Separator />
												<div className="grid grid-cols-2 items-center">
													<div className="col-span-1 border-r border-stock-1">
														<span className="text-sm text-dark-3">Check-in</span>
														<h5 className="lg:text-2md text-md font-semibold text-dark-1 pb-1">Fri 29, Oct 2024</h5>
														<span className="text-sm text-dark-3">Time : <span className="text-dark-2 font-medium">10:00 -
															12:00</span> </span>
													</div>
													<div className="col-span-1 text-end">
														<span className="text-sm text-dark-3">Check-out</span>
														<h5 className="lg:text-2md text-md font-semibold text-dark-1 pb-1">Fri 29, Nov 2024</h5>
														<span className="text-sm text-dark-3">Time : <span className="text-dark-2 font-medium">10:00 -
															12:00</span> </span>
													</div>
												</div>
												<Separator />
												<div>
													<div className="flex justify-between gap-3 lg:text-base text-sm">
														<span className="grow text-dark-2">- Total length of stay:</span>
														<span className="grow text-dark-1 font-semibold text-end">9 nights</span>
													</div>
													<div className="mt-2">
														<a href="#" className="underline text-sm font-medium text-primary-1">Want to traveling on
															different dates?</a>
													</div>
													<div className="flex justify-between gap-3 mt-5 lg:text-base text-sm">
														<span className="grow text-dark-2">- Total Travler:</span>
														<span className="grow text-dark-1 font-semibold text-end">2 Adult, 1 Children, 2 room</span>
													</div>
													<div className="mt-2">
														<a href="#" className="underline text-sm font-medium text-primary-1">Want to change
															selections?</a>
													</div>
												</div>
											</div>
										</div>
										<div className="flex mt-10 gap-8 justify-center">
											<button aria-label="step button" onClick={nextStep} type="button" id="nextBtn" className="btn_primary__v1">
												Next Step
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
									</div>
								);
							case 2:
								return (
									<div className="tab">
										<div className="grid grid-cols-12 lg:gap-12 gap-base">
											<div className="lg:col-span-8 col-span-12">
												<h5 className="text-dark-1 lg:text-[22px] text-2md font-semibold mb-7">
													Enter your payment details
												</h5>
												<div className="grid grid-cols-2 lg:gap-7 gap-5">
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">Card Holder Name</label>
														<input type="text" placeholder="Holder Full Name" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">Card Number</label>
														<input type="text" placeholder="1234 4568 1234 4567" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">MM/YY</label>
														<input type="text" placeholder="00/00" className="input_style__primary" />
													</div>
													<div className="lg:col-span-1 col-span-2">
														<label className="text-dark-2 block mb-2">CVV/CVC</label>
														<input type="text" placeholder={'1223'} className="input_style__primary" />
													</div>
												</div>
												<div className="pt-6 mt-8 border-t border-stock-1">
													<label className="text-dark-2 block mb-2">Do you have a promo code?</label>
													<input type="text" placeholder="Apply coupon code" className="input_style__primary" />
												</div>
												<div className="custom-checkbox col-span-2 mt-5 lg:mt-6">
													<input type="checkbox" defaultValue="agree" id="agree" />
													<label htmlFor="agree">Save Payment Details</label>
												</div>
											</div>
											<div className="lg:col-span-4 col-span-12">
												<h5 className="text-dark-1 lg:text-[22px] text-2md font-semibold">
													Your Payment Summary
												</h5>
												<ul className="pt-4">
													<li className="flex justify-between gap-2 text-dark-1 mt-4"><span>Double Bed Room x 1 </span> <span className="font-semibold flex-shrink-0">$100</span></li>
													<li className="flex justify-between gap-2 text-dark-1 mt-4"><span>Total Travelers x 3 </span> <span className="font-semibold flex-shrink-0">$400</span></li>
													<li className="flex justify-between gap-2 text-dark-1 mt-4"><span>Taxes </span> <span className="font-semibold flex-shrink-0">$00</span></li>
												</ul>
												<div className="border-t border-stock-1 pt-3 mt-4">
													<li className="flex justify-between gap-2 text-dark-1 mt-4"><span>Total</span> <span className="font-bold flex-shrink-0">$400</span></li>
												</div>
											</div>
										</div>
										<div className="flex mt-10 gap-8 justify-center">
											<button aria-label="step button" onClick={prevStep} type="button" id="prevBtn" className="btn_primary__v1 outlined mr-5">
												Previous
											</button>
											<button aria-label="step button" onClick={nextStep} type="button" id="nextBtn" className="btn_primary__v1">
												Next Step
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
									</div>
								);
							case 3:
								return (
									<div className="tab">
										<div className="text-center max-w-[1000px] mx-auto">
											<div className="lg:h-16 lg:w-16 w-12 h-12 rounded-full bg-primary-1 lg:text-xl text-2md text-white flex justify-center items-center mx-auto">
												<i className="bi bi-check-lg" />
											</div>
											<h4 className="lg:text-lg text-2md font-semibold text-dark-2 mt-4">Your order is on its way! <br /> Check your email for delivery timing and order details</h4>
											<div className="mt-10 px-5 py-4 border border-primary-1 border-dashed">
												<div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
													<div className="col-span-1 text-dark-3">
														<p>Order Number</p>
														<p className="mt-2 font-semibold text-dark-1 lg:text-md text-base">123456</p>
													</div>
													<div className="col-span-1 text-dark-3">
														<p>Date</p>
														<p className="mt-2 font-semibold text-dark-1 lg:text-md text-base">21/09/2024</p>
													</div>
													<div className="col-span-1 text-dark-3">
														<p>Total</p>
														<p className="mt-2 font-semibold text-dark-1 lg:text-md text-base">$550</p>
													</div>
													<div className="col-span-1 text-dark-3">
														<p>Payment Method</p>
														<p className="mt-2 font-semibold text-dark-1 lg:text-md text-base">Cradit Card</p>
													</div>
												</div>
											</div>
										</div>
										<div className="flex mt-10 gap-8 justify-center">
											<button aria-label="step button" onClick={prevStep} type="button" id="prevBtn" className="btn_primary__v1 outlined mr-5">
												Previous
											</button>
											<button aria-label="step button" type="button" id="nextBtn" className="btn_primary__v1">
												Submit
												<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
									</div>
								);
							default:
								return null;
						}
					})()}
				</div>
			</div>
		</>
	)
}

export default Booking