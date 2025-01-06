import dynamic from 'next/dynamic';

import PackageDetailsSlider from '@/components/package/PackageDetailsSlider';
import PackageDetailsData from '@/constant/Package/PackageDetailsData';
import PackageBookingForm from '@/components/package/PackageBookingForm';
import PackageGallary from '@/components/package/PackageGallary';
import { Metadata } from 'next';

const DynamicMap = dynamic(() => import('@/components/package/PackageMap'), {
  ssr: false
});


export const metadata: Metadata = {
  title: 'Package Details | Arid - Travel & Tourism HTML/Tailwind CSS Template',
  description: 'Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template',
  keywords: ['tour', 'travel', 'booking', 'rental', 'nextJs', 'tailwind', 'trip', 'beach', 'holidy', 'cruise', 'vacation' ]
}

const PackageDetails = () => {
  return (
    <>
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white">

        {/* Package Details Slider */}
        <PackageDetailsSlider
          slider_images={PackageDetailsData?.slider_images}
        />
        <div className="container">
          <div className="flex flex-wrap justify-between pb-8 pt-6 mb-8 border-b border-stock-1">
            <div className="pt-2">
              <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium">Cusco &amp; Salkantay
                Trekking to Machu Picchu</h3>
              <div className="flex items-center mt-2">
                <ul className="flex lg:gap-3 gap-2 text-primary-1 mr-3 text-sm">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-half" /></li>
                </ul>
                <span className="text-primary-1 lg:text-2md text-md">(20 review)</span>
              </div>
            </div>
            <div className="pt-2">
              <h2 className="font-sans lg:text-[45px] leading-1.2 md:text-xl text-lg font-semibold">$175
              </h2>
              <div className="text-md font-normal ml-1">per person</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-base">
            <div className="lg:col-span-8 col-span-12">
              <div className="pack__disc">
                <h5 className="lg:text-2md text-md text-dark-2 font-medium leading-[1.5] font-sans mb-6">Lorem omnes
                  impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam dimo diam
                  ea. Piber Korem sit amet.</h5>
                <p>Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam
                  dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in
                  imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit similique
                  id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum phaedrum torquatos nec
                  eu, vis detraxit pericu in mei, vix aperiri vix at,dolor sit amet.
                  <br /><br />
                  Iusto iudicabit similique
                  id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum phaedrum torquatos nec
                  eu, vis detraxit pericu in mei, vix aperiri vix at,dolor sit amet.
                </p>
                <ul className="pack__list">
                  <li><i className="bi bi-clock" /> 4 Days / 5 Night</li>
                  <li> <i className="bi bi-person" />Max People : 10</li>
                  <li><i className="bi bi-map" />North Transylvania</li>
                </ul>
                <ul className="mt-base">
                  <li className="lg:flex lg:pt-6 pt-5 pb-5 lg:pb-6 border-t border-stock-1 last:border-b">
                    <div className="lg:w-1/3 lg:text-2md text-md text-dark-2 font-medium">
                      Price Includes
                    </div>
                    <div className="lg:w-2/3 lg:mt-0 mt-4">
                      <ul className="lg:grid flex flex-wrap grid-cols-2 lg:gap-y-5 gap-y-3 gap-x-3">
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>3 Nights Accommodation</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>Airport Transfers</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>2 Meals / day</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 text-md mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>Box Lunch, Dinner &amp; Snacks.</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 text-md mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>On Trip Transport</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lg:flex lg:pt-6 pt-5 pb-5 lg:pb-6 border-t border-stock-1 last:border-b">
                    <div className="lg:w-1/3 lg:text-2md text-md text-dark-2 font-medium">
                      Price Excludes
                    </div>
                    <div className="lg:w-2/3 lg:mt-0 mt-4">
                      <ul className="lg:grid flex flex-wrap grid-cols-2 lg:gap-y-5 gap-y-3 gap-x-3">
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>Departure Taxes</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>Airport Transfers</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 lg:text-md text-base mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>Entry Fees</span>
                        </li>
                        <li className="col-span-1 text-dark-3 text-sm lg:text-base flex items-center">
                          <div className="text-primary-1 text-md mr-2">
                            <i className="bi bi-check2" />
                          </div>
                          <span>Box Lunch, Dinner &amp; Snacks.</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                {/* <div className="mt-6">
                  <h3>Some Photo</h3>
                  <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                  <div className="grid grid-cols-3 gap-5 mt-2">
                    <div className="col-span-1">
                      <a href="./assets/images/details/g1.webp" data-fancybox="details">
                        <img src="./assets/images/details/g1.webp" alt="details" className="w-full" />
                      </a>
                    </div>
                    <div className="col-span-1">
                      <a href="./assets/images/details/g2.webp" data-fancybox="details">
                        <img src="./assets/images/details/g2.webp" alt="details" className="w-full" />
                      </a>
                    </div>
                    <div className="col-span-1">
                      <a href="./assets/images/details/g3.webp" data-fancybox="details">
                        <img src="./assets/images/details/g3.webp" alt="details" className="w-full" />
                      </a>
                    </div>
                  </div>
                </div> */}
                <div className="lg:pt-10 pt-8">
                  <h3>Tour Plan</h3>
                  <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                  <div>
                    <div className="flex single__count">
                      <div className="shrink-0 day__count">
                        <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                          01</div>
                      </div>
                      <div className="lg:ml-[18px] ml-4 pb-8">
                        <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                          Day 01 : Welcome to Edinburgh</h5>
                        <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                          soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                          principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros
                          reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.
                        </p>
                      </div>
                    </div>
                    <div className="flex single__count">
                      <div className="shrink-0 day__count">
                        <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                          02</div>
                      </div>
                      <div className="lg:ml-[18px] ml-4 pb-8">
                        <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                          Day 02: Adventure Begins</h5>
                        <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                          soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                          principes.</p>
                        <ul>
                          <li><i className="bi bi-check-circle" /> Professional Tour Guide</li>
                          <li><i className="bi bi-check-circle" />Transportation cost for carrying new
                            materials/parts</li>
                          <li><i className="bi bi-check-circle" />Transportation cost for carrying new
                            materials/parts</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex single__count">
                      <div className="shrink-0 day__count">
                        <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                          03</div>
                      </div>
                      <div className="lg:ml-[18px] ml-4 pb-8">
                        <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                          Day 03: Historical Tour</h5>
                        <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                          soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                          principes.</p>
                        <ul className="list-sm">
                          <li><i className="bi-check2" /> 3 Nights Accommodation</li>
                          <li><i className="bi-check2" /> 2 Meals / day</li>
                          <li><i className="bi-check2" /> Breakfast</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex single__count ">
                      <div className="shrink-0 day__count">
                        <div className="lg:w-[52px] lg:h-[52px] w-10 h-10 rounded-full border border-primary-1 flex justify-center items-center lg:text-lg md:2md text-md font-semibold text-primary-1 bg-white">
                          04</div>
                      </div>
                      <div className="lg:ml-[18px] ml-4 pb-8">
                        <h5 className="lg:text-[22px] text-md font-semibold text-dark-1 !lg:mt-[10px] !mt-2">
                          Day 05: Return</h5>
                        <p>Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei
                          soluta scriptorem dissentiet, sensibus cotidieque. Ne per malorum vivendum
                          principes, congue imperdiet cu vel. Sit cu stet autem eligendi, eros
                          reprimique mel id, no pri tation altera. At soluta fierent laboramus eum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <h3>Some FAQ This Place</h3>
                  <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                  <div className="accordion lg:space-y-6 space-y-5">
                    <div className="single__accordion border border-stock-1">
                      <button aria-label="toggle button" type="button" className="toggle px-5 py-3 leading-1.5 text-2md text-start w-full text-dark-1 font-serif font-semibold">01.
                        What are the best locations for wedding tours?</button>
                      <div className="hidden inner px-5 pb-5">
                        <p className="text-base font-sans text-dark-3 leading-1.9 !pb-0">
                          Some of the strangest places on earth are also the most sublime: from the
                          UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in
                          Yellowstone to a bridge in Germany that looks like a leftover prop from Lord
                          of the Rings.
                        </p>
                      </div>
                    </div>
                    <div className="single__accordion border border-stock-1">
                      <button aria-label="toggle button" type="button" className="toggle px-5 py-3 leading-1.5 text-2md text-start w-full text-dark-1 font-serif font-semibold">02.
                        What are the most surreal places to visit?</button>
                      <div className="hidden inner px-5 pb-5">
                        <p className="text-base font-sans text-dark-3 leading-1.9 !pb-0">
                          Some of the strangest places on earth are also the most sublime: from the
                          UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in
                          Yellowstone to a bridge in Germany that looks like a leftover prop from Lord
                          of the Rings.
                        </p>
                      </div>
                    </div>
                    <div className="single__accordion border border-stock-1">
                      <button aria-label="toggle button" type="button" className="toggle px-5 py-3 leading-1.5 text-2md text-start w-full text-dark-1 font-serif font-semibold">03.
                        What are the most surreal places to visit in Bangladash?</button>
                      <div className="hidden inner px-5 pb-5">
                        <p className="text-base font-sans text-dark-3 leading-1.9 !pb-0">
                          Some of the strangest places on earth are also the most sublime: from the
                          UFO-like dragon's blood trees in Yemen to a rainbow-colored hot spring in
                          Yellowstone to a bridge in Germany that looks like a leftover prop from Lord
                          of the Rings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:pt-10 pt-8">
                  <h3>Gallery</h3>
                  <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>

                  <PackageGallary />

                </div>
                <div className="lg:pt-10 pt-8">
                  <h3>Location</h3>
                  <p>Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                    pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim, vel egestas
                    lacus tincidunt ac. Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam.</p>
                  {/* <div id="map" className="lg:h-[400px] h-[200px]" /> */}
                  <DynamicMap position={PackageDetailsData?.position} />
                </div>
                <div className="lg:pt-10 pt-8">
                  <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] !mb-base">
                    02 Comment’s</h3>
                  <ul>
                    <li className="bg-[#FFE3EB] bg-opacity-50 lg:px-base px-5 lg:py-base py-5 flex md:flex-row flex-col">
                      <div className="md:mr-5 mb-4 md:mb-0 lg:w-[100px] w-16 shrink-0">
                        <img src="./assets/images/blog/com-2.webp" alt="commentor" className="w-full" />
                      </div>
                      <div className="grow">
                        <div className="flex justify-between items-center">
                          <h5 className="text-dark-1 lg:text-2md text-md font-medium !mt-0 !mb-0">Jahid
                            Hassan</h5>
                          <a href="#" className="flex text-primary-1 gap-[6px] lg:text-md">
                            <div className="bi bi-reply" /> Reply
                          </a>
                        </div>
                        <p className="regular-text-v1 lg:mt-3 mt-2 !leading-[1.6] !pb-0">Duis id interdum
                          ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex at erat
                          pharetra, vitae viverra mauris condimentum. Sed ullamcorper dignissim enim,
                          vel egestas lacus tincidunt ac.</p>
                      </div>
                    </li>
                    <ul className="lg:mt-[35px] mt-7 lg:ml-10 ml-8">
                      <li className="bg-[#FFE3EB] bg-opacity-50 lg:px-base px-5 lg:py-base py-5 flex md:flex-row flex-col">
                        <div className="md:mr-5 mb-4 md:mb-0 lg:w-[100px] w-16 shrink-0">
                          <img src="./assets/images/blog/com-1.webp" alt="commentor" className="w-full" />
                        </div>
                        <div className="grow">
                          <div className="flex justify-between items-center">
                            <h5 className="text-dark-1 lg:text-2md text-md font-medium !mt-0 !mb-0">
                              Alisha Lehmann</h5>
                            <a href="#" className="flex text-primary-1 gap-[6px] lg:text-md">
                              <div className="bi bi-reply" /> Reply
                            </a>
                          </div>
                          <p className="regular-text-v1 lg:mt-3 mt-2 !leading-[1.6] !pb-0">Duis id
                            interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices ex
                            at erat pharetra, vitae viverra mauris condimentum. Sed ullamcorper
                            dignissim enim, vel egestas lacus tincidunt ac.</p>
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <form action="#" className="lg:pt-10 pt-8">
                  <h3 className="lg:text-2xl md:text-xl text-lg text-dark-1 leading-[1.42] font-medium mt-[10px] !mb-base">
                    Post A Comments</h3>
                  <div className="grid grid-cols-2 gap-base">
                    <div className="lg:col-span-1 col-span-2">
                      <input type="text" placeholder="Your Name" className="input_style__primary" />
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <input type="text" placeholder="Your Phone Number" className="input_style__primary" />
                    </div>
                    <div className="col-span-2">
                      <input type="email" placeholder="Your Subject" className="input_style__primary" />
                    </div>
                    <div className="col-span-2">
                      <textarea cols={30} rows={6} className="input_style__primary" placeholder="Your Subject..." defaultValue={""} />
                    </div>
                    <div className="col-span-2">
                      <button aria-label="toggle button" type="submit" className="btn_primary__v1">
                        Find Out More
                        <i className="bi bi-chevron-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 relative">
              <div className="lg:sticky top-[108px]">
                <PackageBookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PackageDetails