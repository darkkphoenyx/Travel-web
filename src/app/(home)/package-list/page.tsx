import PackageCardOne from "@/components/HomeOne/ui/PackageCardOne";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InstagramFeed from "@/components/layout/InstagramFeed";
import PackageDataOne from "@/constant/HomeOne/PackageDataOne";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Package List | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holidy",
    "cruise",
    "vacation",
  ],
};

const PackageList = () => {
  return (
    <>
      <Breadcrumb page="Package list" pageTitle="Arid Most Popular Tours" />
      {/*========== FEATURED PACKAGE STYLE ONE START==========*/}
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white z-1 relative lg:pt-30 pt-24">
        <div className="absolute top-[10%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
          <img
            src="./assets/images/illustration/tree-illustration.png"
            alt="leaf"
          />
        </div>

        <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
          <img
            src="./assets/images/illustration/bird-illustration.png"
            alt="leaf"
          />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
            {PackageDataOne.packages.map((item, index) => (
              <PackageCardOne
                key={item.id}
                title={item.title}
                img={item.img}
                duration={item.duration}
                people={item.people}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </div>
      {/*========== FEATURED PACKAGE STYLE ONE END==========*/}

      <InstagramFeed />
    </>
  );
};

export default PackageList;
