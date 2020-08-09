import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/banner4-768x994.jpg",
    thumbnail:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/banner4-768x994.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/car2-768x994.jpg",
    thumbnail:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/car2-768x994.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },

  {
    src: "http://www.statuscreation.com/wp-content/uploads/2020/08/banner1.jpg",
    thumbnail:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/banner1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "http://www.statuscreation.com/wp-content/uploads/2020/08/banner2.jpg",
    thumbnail:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/banner2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "http://www.statuscreation.com/wp-content/uploads/2020/08/banner3.jpg",
    thumbnail:
      "http://www.statuscreation.com/wp-content/uploads/2020/08/banner3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "http://www.statuscreation.com/wp-content/uploads/2020/07/a41.jpg",
    thumbnail:
      "http://www.statuscreation.com/wp-content/uploads/2020/07/a41.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

const gallery = (props) => {
  return <Gallery images={IMAGES} />;
};

export default gallery;
