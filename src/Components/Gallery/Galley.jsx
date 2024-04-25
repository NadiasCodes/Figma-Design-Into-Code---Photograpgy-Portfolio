import React, { useState } from "react";
import { slides } from "../../Data/data";
import "./Gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const Galley = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-box">
      <h1 className="gallery-header">GALLERY</h1>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>
      <Lightbox plugins={[Captions]} captions={{showToggle:true}} open={open} slides={slides} close={() => setOpen(false)} />
    </div>
  );
};

export default Galley;
