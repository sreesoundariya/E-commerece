import { useRef } from "react";
import "./PhoneDeals.css";

import p1 from "../assets/products/p1.webp";
import p2 from "../assets/products/p2.webp";
import p3 from "../assets/products/p3.webp";
import p4 from "../assets/products/p4.webp";
import p5 from "../assets/products/p5.webp";
import p6 from "../assets/products/p6.webp";
import p7 from "../assets/products/p7.webp";
import p8 from "../assets/products/p8.webp";

import airplane from "../assets/air.webp";

const phones = [
  { name: "Apple iPhone 16", price: "From ₹55,999*", img: p1 },
  { name: "Galaxy S24 5G", price: "From ₹40,999", img: p2 },
  { name: "Motorola G57 Power", price: "Just ₹14,999", img: p3 },
  { name: "Vivo T4x 5G", price: "From ₹14,999*", img: p4 },
  { name: "Poco C75 5G", price: "Just ₹7,999", img: p5 },
  { name: "Samsung Galaxy A15", price: "From ₹18,999", img: p6 },
  { name: "Vivo T4 Lite 5G", price: "Just ₹11,499*", img: p7 },
  { name: "Google Pixel 9a", price: "From ₹36,999*", img: p8 },
];

function BestDeals() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -460, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 460, behavior: "smooth" });
  };

  return (
    <div className="bg-white my-4">
      <div className="container-fluid px-4">
        <h5 className="fw-bold mb-3">Best deals on smartphones</h5>

        <div className="d-flex bestdeal-wrapper">
          
          {/* LEFT : PRODUCTS */}
          <div className="position-relative bestdeal-slider">
            
            {/* ARROWS (desktop only) */}
            <button
              onClick={scrollLeft}
              className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow deal-arrow"
            >
              ‹
            </button>

            <button
              onClick={scrollRight}
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow deal-arrow"
            >
              ›
            </button>

            <div
              ref={scrollRef}
              className="d-flex gap-3 px-5 deal-scroll"
            >
              {phones.map((p, i) => (
                <div
                  key={i}
                  className="border rounded text-center p-3 deal-card"
                >
                  <div className="deal-img-box">
                    <img src={p.img} alt={p.name} />
                  </div>

                  <div className="mt-2">{p.name}</div>
                  <div className="fw-bold">{p.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT : AIRPLANE (desktop only) */}
          <div className="deal-banner">
            <img src={airplane} alt="Air India" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default BestDeals;
