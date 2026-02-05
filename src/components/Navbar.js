import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="navbar bg-white shadow-sm d-none d-md-block">
        <div className="container-fluid px-4 d-flex align-items-center">

          {/* LOGO */}
          <a className="navbar-brand me-4" href="#">
            <img src={logo} alt="Flipkart" style={{ height: "64px" }} />
          </a>

          {/* SEARCH */}
          <div className="mx-4" style={{ width: "900px" }}>
            <div
              className="d-flex align-items-center px-3"
              style={{
                backgroundColor: "#f0f5ff",
                borderRadius: "8px",
                height: "44px",
              }}
            >
              <i className="bi bi-search text-secondary"></i>
              <input
                type="search"
                placeholder="Search for Products, Brands and More"
                className="form-control border-0 ms-2"
                style={{ background: "transparent", boxShadow: "none" }}
              />
            </div>
          </div>

          {/* RIGHT MENU */}
          <div className="d-flex align-items-center ms-auto gap-4">
            <div className="d-flex gap-2">
              <i className="bi bi-person"></i>
              <span>Login</span>
            </div>
            <div className="d-flex gap-2">
              <i className="bi bi-cart"></i>
              <span>Cart</span>
            </div>
            <div className="d-flex gap-2">
              <i className="bi bi-shop"></i>
              <span>Become a Seller</span>
            </div>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="d-md-none bg-white shadow-sm px-2 py-2">

        {/* SINGLE ROW */}
        <div className="d-flex align-items-center gap-2">

          {/* HAMBURGER */}
          <i className="bi bi-list fs-3"></i>

          {/* LOGO */}
          <img src={logo} alt="Flipkart" style={{ height: "28px" }} />

          {/* SEARCH BAR */}
          <div className="flex-grow-1">
            <div
              className="d-flex align-items-center px-2"
              style={{
                backgroundColor: "#f0f5ff",
                borderRadius: "8px",
                height: "36px",
              }}
            >
              <i className="bi bi-search text-secondary"></i>
              <input
                type="search"
                placeholder="Search for products"
                className="form-control border-0 ms-2"
                style={{
                  background: "transparent",
                  boxShadow: "none",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>

          {/* LOGIN ICON */}
          <i className="bi bi-person fs-5"></i>

          {/* CART ICON */}
          <i className="bi bi-cart fs-5"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
