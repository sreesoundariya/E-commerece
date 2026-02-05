import { useEffect, useRef } from "react";

import img1 from "../assets/first.webp";
import img2 from "../assets/sec.webp";
import img3 from "../assets/third.webp";
import img4 from "../assets/four.webp";
import img5 from "../assets/five.webp";

const images = [img1, img2, img3, img4, img5];

function ImageSlider() {
  const sliderRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const width = sliderRef.current.clientWidth;

        sliderRef.current.scrollBy({
          left: width,
          behavior: "smooth",
        });

        // last image → go back to first
        if (
          sliderRef.current.scrollLeft + width >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: width,
      behavior: "smooth",
    });
  };

  return (
    <div className="position-relative bg-white">

      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow"
        style={{ zIndex: 10 }}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow"
        style={{ zIndex: 10 }}
      >
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="d-flex overflow-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{ minWidth: "100%" }}   // 🔥 ONE IMAGE ONLY
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
