"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HeaderOne = ({
  variant = "default",
}: {
  variant?: "default" | "transparent" | "transparent-V2";
}) => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  async function ToggleSubMenu(e: any) {
    try {
      if (e.target.nextSibling.classList.contains("nav-show")) {
        e.target.nextSibling.classList.remove("nav-show");
      } else {
        e.target.nextSibling.classList.add("nav-show");
      }
    } catch (err) {}
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-style 
           ${isSticky ? "sticky" : ""} 
           ${variant === "transparent" ? "herder-variant-three" : ""}
           ${variant === "transparent-V2" ? "herder-variant-two" : ""}
           `}
    >
      <div className="desktop-menu max-w-[1570px] mx-auto justify-between items-center xl:flex hidden">
        <div className="main-menu flex items-center w-full justify-center">
          <Link href="/" className="shrink-0">
            <Image
              alt="logo"
              width="300"
              height="48"
              // layout="responsive"
              className="max-w-[300px]"
              src="/assets/images/logo.png"
              priority
            />
          </Link>
          <div className="main-menu uppercase ml-4">
            <ul className="flex items-center nav-list">
              {/* dropdown */}
              <li className="group/step-one">
                <Link href="#" className="nav-link has-dropdown">
                  Home
                </Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link href="/">Home Classic</Link>
                  </li>
                  <li>
                    <Link href="/home-dark">Home Dark</Link>
                  </li>
                  <li>
                    <Link href="/home-parallax">Home Parallax</Link>
                  </li>
                </ul>
              </li>
              {/* dropdown */}
              <li className="group/step-one">
                <Link href="#" className="nav-link has-dropdown">
                  Pages
                </Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/destinations">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/destination-details">Destination Details</Link>
                  </li>
                  <li>
                    <Link href="/guides">Guides</Link>
                  </li>
                  <li>
                    <Link href="/gallary">Gallary</Link>
                  </li>
                  <li>
                    <Link href="/login">Sign Up / Sign In</Link>
                  </li>
                  <li>
                    <Link href="/booking">Booking</Link>
                  </li>
                </ul>
              </li>
              {/* mega dropdown */}
              <li className="group/mega-dropdown">
                <Link href="#" className="nav-link has-dropdown">
                  Destination
                </Link>
                <div className="nav-mega-dropdown grid grid-cols-6 gap-x-1">
                  <div className="col-span-4 border-r">
                    <Link
                      href="/package-sidebar"
                      className="py-2 flex items-center border-b border-stock-1 text-base text-dark-1 hover:text-primary-1 duration-200"
                    >
                      Browse All Destination
                      <div className="max-w-[20px] ml-2">
                        <svg
                          className="group-hover/btn:translate-x-2 duration-200 "
                          width={27}
                          height={14}
                          viewBox="0 0 27 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                            fill="currentColor"
                          />
                          <path
                            d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                    <ul className="grid grid-cols-3 mega-dropdown-links">
                      <li>
                        <Link href="/package-sidebar">New York</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">London</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Paris</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Dubai</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Miami</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Rome</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Seattle</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Amsterdam</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Chicago</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Las vegas</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Barcelona</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Cox's Bazar</Link>
                      </li>
                      <li>
                        <Link href="/package-sidebar">Istanbul</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <Link href="/package-sidebar">
                      <Image
                        src="/assets/images/backgrounds/offer-banner.webp"
                        alt="offer-banner w-full"
                        width={250}
                        height={230}
                      />
                    </Link>
                  </div>
                </div>
              </li>
              {/* dropdown */}
              <li className="group/step-one">
                <Link href="#" className="nav-link has-dropdown">
                  Blogs
                </Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link href="/blog-list">Blog List</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              {/* dropdown */}
              <li className="group/step-one">
                <Link href="#" className="nav-link has-dropdown">
                  Packages
                </Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link href="/package-list">Package List</Link>
                  </li>
                  <li>
                    <Link href="/package-sidebar">Package List Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/package-details">
                      Package Details - Layout I
                    </Link>
                  </li>
                  <li>
                    <Link href="/package-details-2">
                      Package Details - Layout II
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-menu xl:hidden flex justify-between items-center relative">
        <Link href="/" className="shrink-0 max-w-[50px]">
          <Image
            alt="logo"
            width="100"
            height="70"
            src="/assets/images/logo.png"
          />
        </Link>
        <div className="space-x-4 flex items-center">
          <Link
            href="/login"
            className="shrink-0 inline-flex justify-center items-center bg-primary-2 rounded-full h-10 w-10 text-white"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <button
            className={`hamburger ${toggle ? "hum-active" : ""}`}
            id="hamburger"
            onClick={() => setToggle(!toggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`mobil-menu ${toggle ? "mm-active" : ""}`}
        >
          <ul>
            <li className="group/step-one">
              <Link
                href="#"
                className="nav-link nav-link-sm has-dropdown "
                onClick={ToggleSubMenu}
              >
                Home
              </Link>
              <ul className="nav-dropdown-sm">
                <li>
                  <Link href="/">Home Classic</Link>
                </li>
                <li>
                  <Link href="/home-dark">Home Dark</Link>
                </li>
                <li>
                  <Link href="/home-parallax">Home Parallax</Link>
                </li>
              </ul>
            </li>
            <li className="group/step-one">
              <Link
                href="#"
                className="nav-link nav-link-sm has-dropdown"
                onClick={ToggleSubMenu}
              >
                Pages
              </Link>
              <ul className="nav-dropdown-sm">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/destinations">Destinations</Link>
                </li>
                <li>
                  <Link href="/destination-details">Destination Details</Link>
                </li>
                <li>
                  <Link href="/guides">Guides</Link>
                </li>
                <li>
                  <Link href="/gallary">Gallary</Link>
                </li>
                <li>
                  <Link href="/login">Sign Up / Sign In</Link>
                </li>
                <li>
                  <Link href="/booking">Booking</Link>
                </li>
              </ul>
            </li>
            <li className="group/step-one">
              <Link
                href="#"
                className="nav-link nav-link-sm has-dropdown "
                onClick={ToggleSubMenu}
              >
                Destination
              </Link>
              <ul className="nav-dropdown-sm">
                <li>
                  <Link href="/package-sidebar">New York</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">London</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Paris</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Dubai</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Miami</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Rome</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Seattle</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Amsterdam</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Chicago</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Las vegas</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Barcelona</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Cox's Bazar</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Istanbul</Link>
                </li>
              </ul>
            </li>
            <li className="group/step-one">
              <Link
                href="#"
                className="nav-link nav-link-sm has-dropdown "
                onClick={ToggleSubMenu}
              >
                Blogs
              </Link>
              <ul className="nav-dropdown-sm">
                <li>
                  <Link href="/blog-list">Blog List</Link>
                </li>
                <li>
                  <Link href="/blog-details">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li className="group/step-one">
              <Link
                href="#"
                className="nav-link nav-link-sm has-dropdown "
                onClick={ToggleSubMenu}
              >
                Packages
              </Link>
              <ul className="nav-dropdown-sm">
                <li>
                  <Link href="/package-list">Package List</Link>
                </li>
                <li>
                  <Link href="/package-sidebar">Package List Sidebar</Link>
                </li>
                <li>
                  <Link href="/package-details">
                    Package Details - Layout I
                  </Link>
                </li>
                <li>
                  <Link href="/package-details-2">
                    Package Details - Layout II
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
