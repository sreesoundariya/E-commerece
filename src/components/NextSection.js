import c1 from "../assets/sec/s1.webp";
import c2 from "../assets/sec/s2.webp";
import c3 from "../assets/sec/s3.webp";
import c4 from "../assets/sec/s4.webp";
import c5 from "../assets/sec/s5.webp";
import c6 from "../assets/sec/s6.webp";

const sections = [c1, c2, c3, c4, c5, c6];

function NextSection() {
  return (
    <div className="container-fluid px-3 my-3">
      {/* 👇 gap reduced */}
      <div className="row g-2">
        {sections.map((img, i) => (
          <div key={i} className="col-md-4">
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "270px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NextSection;
