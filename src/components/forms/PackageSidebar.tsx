'use client'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Link from "next/link";
import Separator from '../ui/Separator';
import { useState } from 'react';

function log(value: any) {
  console.log(value); //eslint-disable-line
}


const PackageSidebarFilter = () => {

  const [sliderValue, setSliderValue] = useState([20, 60]);

  function handleChange(value : any) {
    setSliderValue(value);
  }

  return (
    <>
      <div className="pb-[10px] mb-8 border-b border-dark-1 border-opacity-10">
        <h4 className="text-lg font-semibold text-dark-1">Filter by :</h4>
      </div>
      <aside>
        <h5 className="font-sans lg:text-md text-base pb-2 font-semibold text-dark-1">Filter Price: </h5>
        <Slider
          range
          allowCross={false}
          defaultValue={sliderValue}
          draggableTrack
          onChange={handleChange}
        />
        

        <div className="flex text-dark-2 lg:text-base textsm pt-4 items-center">
  Pricing Range :&nbsp; <span className='text-dark-1 font-semibold'>${sliderValue[0]} - ${sliderValue[1]}</span>
</div>

      </aside>
      <Separator />
      <aside>
        <h5 className="font-sans lg:text-md text-base pb-2 font-semibold text-dark-1">Categories</h5>
        <ul className="pt-4">
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="cate-one" />
              <label htmlFor="cate-one">Adventure</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="cate-two" />
              <label htmlFor="cate-two">Day Long Tours</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="cate-three" />
              <label htmlFor="cate-three">Cruise Tours</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="cate-four" />
              <label htmlFor="cate-four">Honeymoon</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="cate-five" />
              <label htmlFor="cate-five">City Tours</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="cate-six" />
              <label htmlFor="cate-six">Museum Tours</label>
            </div>
          </li>
        </ul>
      </aside>
      <Separator />
      <aside>
        <h5 className="font-sans lg:text-md text-base pb-2 font-semibold text-dark-1">Destinations</h5>
        <ul className="pt-4">
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="des-one" />
              <label htmlFor="des-one">Singapore</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="des-two" />
              <label htmlFor="des-two">Italy</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="des-three" />
              <label htmlFor="des-three">Thailand</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="des-four" />
              <label htmlFor="des-four">Hong Kong</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="des-five" />
              <label htmlFor="des-five">City Tours</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="des-six" />
              <label htmlFor="des-six">Maldives</label>
            </div>
          </li>
        </ul>
      </aside>
      <Separator />
      <aside>
        <h5 className="font-sans lg:text-md text-base pb-2 font-semibold text-dark-1">
          Duration
        </h5>
        <ul className="pt-4">
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="d1" />
              <label htmlFor="d1">2 - 8 hours</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="d2" />
              <label htmlFor="d2">Fullday (+8 hours)</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="d3" />
              <label htmlFor="d3">2 - 4 Days</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="d4" />
              <label htmlFor="d4">3 - 5 Days</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="d5" />
              <label htmlFor="d5">5 -7 days</label>
            </div>
          </li>
          <li className="pt-3 first:pt-0">
            <div className="custom-checkbox">
              <input type="checkbox" defaultValue="category" id="d6" />
              <label htmlFor="d6">More Then 7 Days</label>
            </div>
          </li>
        </ul>

      </aside>
      <aside className="widget widget_blogs lg:mt-[50px] mt-10">
        <div className="pb-[10px] mb-8 border-b border-dark-1 border-opacity-10">
          <h4 className="text-lg font-semibold text-dark-1">Offer Deals :</h4>
        </div>
        <ul>
          <li className="flex items-center group mt-6 first:mt-0">
            <Link href="/package-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
              <img src="./assets/images/blog/ts-1.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
            </Link>
            <div className="grow">
              <ul className="text-sm text-orange-500">
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
              </ul>
              <h5 className="lg:text-md mt-1 text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                <Link href="/package-details">The Great Wall, Chaina</Link>
              </h5>
              <div className="mt-[5px] text-dark-2">
                <span>
                  Form
                </span>
                <span className="text-primary-1 font-medium">$140.00</span>
              </div>
            </div>
          </li>
          <li className="flex items-center group mt-6 first:mt-0">
            <Link href="/package-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
              <img src="./assets/images/blog/ts-2.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
            </Link>
            <div className="grow">
              <ul className="text-sm text-orange-500">
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
              </ul>
              <h5 className="lg:text-md mt-1 text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                <Link href="/package-details">Longest Sea Beach, Cox's Bazar</Link>
              </h5>
              <div className="mt-[5px] text-dark-2">
                <span>
                  Form
                </span>
                <span className="text-primary-1 font-medium">$140.00</span>
              </div>
            </div>
          </li>
          <li className="flex items-center group mt-6 first:mt-0">
            <Link href="/package-details" className="shrink-0 w-20 mr-[15px] overflow-hidden">
              <img src="./assets/images/blog/ts-3.webp" alt="blogs" className="w-full group-hover:scale-105 duration-200" />
            </Link>
            <div className="grow">
              <ul className="text-[13px] text-orange-500">
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-fill" /></li>
                <li className="mr-[2px] last:mr-0 inline-block"><i className="bi bi-star-half" /></li>
              </ul>
              <h5 className="lg:text-md mt-[3px] text-base font-semibold leading-[1.64] group-hover:text-primary-1 duration-200 fixed-title">
                <Link href="/package-details">Long Trail Mountain, Napal</Link>
              </h5>
              <div className="mt-[5px] text-dark-2">
                <span>
                  Form
                </span>
                <span className="text-primary-1 font-medium">$140.00</span>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default PackageSidebarFilter;