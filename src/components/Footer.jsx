import logo from "../assets/logo-bg-white.png";

function Footer() {
  return (
    <div className="footer" id="blog">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} />
        </div>
        <div className="footer-links">
          <a> Privacy Policy & Terms of Service</a>
          <p>Copyright @ 2025 LittleNest</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
