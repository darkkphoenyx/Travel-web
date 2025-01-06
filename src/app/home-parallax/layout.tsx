import FooterOne from "@/components/layout/FooterOne";
import HeaderOne from "@/components/layout/HeaderOne";
import InstagramFeed from "@/components/layout/InstagramFeed";
import React from "react";

const HomeParallaxLayout = (
  { children }:
    {
      children: React.ReactNode
    }
) => {
  return (
    <>
    <HeaderOne variant="transparent"/>
      <main>
        {children}
      </main>
      <FooterOne />
    </>
  )
}

export default HomeParallaxLayout;