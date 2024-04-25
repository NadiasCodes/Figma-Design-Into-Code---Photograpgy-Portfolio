import React, { useState } from "react";
import { slides } from "../../Data/data";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "../Images/Images";
import "../Images/Images.css"

const Galley = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <h1 className="gallery-header">GALLERY</h1>
      <Images data={slides} onClick={(currentIndex) => setIndex(currentIndex)} />
      <Lightbox plugins={[Captions]} captions={{ showToggle: true, descriptionTextAlign: "end" }} index={index} open={index >= 0} slides={slides} close={() => setIndex(-1)} />
    </div>
  );
};

export default Galley;
