import minutes from "../assets/minutes.png";
import home from "../assets/home.png";
import beauty from "../assets/beauty.png";
import grocery from "../assets/gro.png";

function Categories() {
  return (
    <div className="bg-white py-3 shadow-sm">
      <div className="container-fluid px-2 px-md-3">

        <div
          className="d-flex text-center category-row"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center category-item"
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "56px",
                  height: "56px",
                  objectFit: "contain",
                }}
              />

              <div className="d-flex align-items-center gap-1 mt-2">
                <span style={{ fontSize: "13px", fontWeight: 500 }}>
                  {item.name}
                </span>

                {item.dropdown && (
                  <i
                    className="bi bi-chevron-down"
                    style={{ fontSize: "12px" }}
                  ></i>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CSS */}
      <style>{`
        /* Desktop */
        .category-row {
          justify-content: center;
          gap: 36px;
          overflow: visible;
        }

        .category-item {
          width: 110px;
          flex-shrink: 0;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .category-row {
            justify-content: flex-start;
            gap: 20px;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 8px;
          }

          .category-row::-webkit-scrollbar {
            display: none;
          }

          .category-item {
            width: 90px;
          }
        }
      `}</style>
    </div>
  );
}

const categories = [
  { name: "Minutes", img: minutes },
  {
    name: "Mobiles & Tablets",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/22fddf3c7da4c4f4.png",
  },
  {
    name: "Fashion",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png",
    dropdown: true,
  },
  {
    name: "Electronics",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/69c6589653afdb9a.png",
    dropdown: true,
  },
  {
    name: "TVs & Appliances",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0ff199d1bd27eb98.png",
  },
  {
    name: "Home & Furniture",
    img: home,
    dropdown: true,
  },
  {
    name: "Flight Bookings",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/71050627a56b4693.png",
  },
  {
    name: "Beauty, Food..",
    img: beauty,
    dropdown: true,
  },
  {
    name: "Grocery",
    img: grocery,
  },
];

export default Categories;
