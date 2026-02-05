function Footer() {
  return (
    <footer style={{ background: "#212121", color: "#fff" }}>
      {/* TOP FOOTER */}
      <div className="container-fluid px-5 py-5 footer-top">
        <div className="row gy-4">

          {/* ABOUT */}
          <div className="col-md-2 col-6">
            <h6 className="text-secondary">ABOUT</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          {/* GROUP COMPANIES */}
          <div className="col-md-2 col-6">
            <h6 className="text-secondary">GROUP COMPANIES</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>

          {/* HELP */}
          <div className="col-md-2 col-6">
            <h6 className="text-secondary">HELP</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* CONSUMER POLICY */}
          <div className="col-md-2 col-6">
            <h6 className="text-secondary">CONSUMER POLICY</h6>
            <ul className="list-unstyled mt-3 footer-links">
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>

          {/* MAIL US */}
          <div className="col-md-2 footer-mail">
            <h6 className="text-secondary">Mail Us:</h6>
            <p className="small mt-3">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>

            <h6 className="text-secondary mt-4">Social:</h6>
            <div className="d-flex gap-3 mt-2">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>

          {/* REGISTERED OFFICE */}
          <div className="col-md-2">
            <h6 className="text-secondary">Registered Office Address:</h6>
            <p className="small mt-3">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: <span className="text-primary">044-45614700</span>
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="footer-bottom px-5 py-3"
        style={{ borderTop: "1px solid #454d5e" }}
      >
        <div className="footer-links-bottom small">
          <span>Become a Seller</span>
          <span>Advertise</span>
          <span>Gift Cards</span>
          <span>Help Center</span>
        </div>

        <div className="small mt-2 mt-md-0">
          © 2007–2026 Flipkart.com
        </div>

        <div className="footer-payments mt-2 mt-md-0">
          <img src="https://img.icons8.com/color/36/visa.png" alt="" />
          <img src="https://img.icons8.com/color/36/mastercard.png" alt="" />
          <img src="https://img.icons8.com/color/36/rupay.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
