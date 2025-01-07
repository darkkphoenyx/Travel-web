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
              width="200"
              height="48"
              // layout="responsive"
              className="max-w-[200px]"
              src="/assets/images/logo.png"
              priority
            />
          </Link>
          <div className="main-menu uppercase ml-4">
            <ul className="flex items-center nav-list">
              {/* dropdown */}
              <li className="home">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              {/* dropdown */}
              <li className="aboutUs">
                <Link href="/about" className="nav-link ">
                  About Us
                </Link>
              </li>
              {/* mega dropdown */}
              <li className="contactUs">
                <Link href="/contact" className="nav-link">
                  Contact Us
                </Link>
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
            <li className="home">
              <Link href="/" className="nav-link nav-link-sm  ">
                Home
              </Link>
            </li>
            <li className="aboutUs">
              <Link href="/about" className="nav-link nav-link-sm ">
                About Us
              </Link>
            </li>
            <li className="contactUs">
              <Link
                href="/contact"
                className="nav-link nav-link-sm"
              >
                Contact
              </Link>
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
