import banner from "../assets/fasion-banner.webp";

// Fashion Top Deals
import f1 from "../assets/fashion/s1.webp";
import f2 from "../assets/fashion/s2.webp";
import f3 from "../assets/fashion/s3.webp";
import f4 from "../assets/fashion/s4.webp";

// Top Picks
import t1 from "../assets/top/t1.webp";
import t2 from "../assets/top/t2.webp";
import t3 from "../assets/top/t3.webp";
import t4 from "../assets/top/t4.webp";

const fashionDeals = [
  { img: f1, name: "Men's Casual Shoes", offer: "Min. 70% Off" },
  { img: f2, name: "Men's Slippers & Flip Flops", offer: "Min. 70% Off" },
  { img: f3, name: "Wrist Watches", offer: "Min. 90% Off" },
  { img: f4, name: "Women's Ethnic Sets", offer: "Min. 50% Off" },
];

const topPicks = [
  { img: t1, name: "Remote Control Toy Vehicle", offer: "Special offer" },
  { img: t2, name: "Baby Walkers", offer: "Min. 50% Off" },
  { img: t3, name: "Vehicle Cleaning Cloths", offer: "Min. 50% Off" },
  { img: t4, name: "Vehicle Seating Pads", offer: "Min. 50% Off" },
];

function TripleDealSection() {
  return (
    <div className="container-fluid px-4 my-4">
      <div className="row g-3">

        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="bg-white p-3 rounded shadow-sm h-100">
            <div className="d-flex justify-content-between mb-2">
              <h6 className="fw-bold">Fashion's Top Deals</h6>
              <i className="bi bi-chevron-right text-primary"></i>
            </div>

            <div className="row g-3">
              {fashionDeals.map((item, i) => (
                <div key={i} className="col-6 text-center">
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mt-2 small">{item.name}</div>
                  <div className="fw-bold text-success small">
                    {item.offer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="bg-white p-3 rounded shadow-sm h-100">
            <div className="d-flex justify-content-between mb-2">
              <h6 className="fw-bold">Top picks of the sale</h6>
              <i className="bi bi-chevron-right text-primary"></i>
            </div>

            <div className="row g-3">
              {topPicks.map((item, i) => (
                <div key={i} className="col-6 text-center">
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mt-2 small">{item.name}</div>
                  <div className="fw-bold text-success small">
                    {item.offer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 3 – FULL IMAGE */}
        <div className="col-md-4">
          <img
            src={banner}
            alt="Shop Fashion"
            className="w-100 h-100 rounded shadow-sm"
            style={{ objectFit: "contain" }}
          />
        </div>

      </div>
    </div>
  );
}

export default TripleDealSection;
