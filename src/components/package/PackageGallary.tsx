'use client'
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const photos = [
  {
    src: "/assets/images/gallary/g1.webp",
    width: 261,
    height: 353,
  },
  {
    src: "/assets/images/gallary/g4.webp",
    width: 261,
    height: 218,
  },
  {
    src: "/assets/images/gallary/g7.webp",
    width: 261,
    height: 218,
  },
  {
    src: "/assets/images/gallary/g2.webp",
    width: 261,
    height: 218,
  },
  {
    src: "/assets/images/gallary/g5.webp",
    width: 261,
    height: 353,
  },
  
  {
    src: "/assets/images/gallary/g8.webp",
    width: 261,
    height: 218,
  },
  {
    src: "/assets/images/gallary/g9.webp",
    width: 261,
    height: 353,
  },
  {
    src: "/assets/images/gallary/g3.webp",
    width: 261,
    height: 218,
  },
  {
    src: "/assets/images/gallary/g6.webp",
    width: 261,
    height: 218,
  },
  
];

const PackageGallary = () => {

  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        columns={3}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}

export default PackageGallary