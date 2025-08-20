import logo from "../assets/LITTLE-NEST.png";
import imgRight from "../assets/content-right.png";
import facebookIcon from "../assets/facebook-fill.png";
import instagramIcon from "../assets/instagram-line.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  once: true
});

function MainContent(props) {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("cards").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBlog = () => {
    document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm =()=> {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="main-content">
        <nav data-aos="fade-right" >
          <div className="logo">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <div className="main-menu">
            <ul>
              <li onClick={scrollToAbout}>About us</li>
              <li onClick={scrollToServices}>Services</li>
              <li onClick={scrollToBlog}>Blog</li>
            </ul>
          </div>
          <div className="main-contact">
            <img src={facebookIcon} alt="facebook-icon" width={24} height={24} />
            <img src={instagramIcon} alt="instagram-icon" width={24} height={24} />
            <button className="main-button" onClick={scrollToForm}>Contact us</button>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-left" data-aos="fade-right">
            <div className="hero-left-title">
              <h1>
                Home Care
                <br />
                Services For Your
                <br />
                Family
              </h1>
              <p>{props.description}</p>
            </div>
            <div className="hero-left-buttons">
              <button className="contact-button" onClick={scrollToForm}>Contact us</button>
              <button className="watch-button">Watch video</button>
            </div>
            <div className="rating">
              <div className="rating-item">
                <h3>{props.costumers}</h3>
                <p>Total happy clients</p>
              </div>
              <div className="rating-item">
                <h3>{props.years}</h3>
                <p>Years of experience</p>
              </div>
              <div className="rating-item">
                <h3>{props.rating}</h3>
                <p>From 1000+ reviews</p>
              </div>
            </div>
          </div>
          <div className="hero-right" data-aos="fade-left">
            <img src={imgRight} alt="hero-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
