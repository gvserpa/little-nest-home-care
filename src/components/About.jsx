import hands from "../assets/hands.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  once: true
});

function About() {
  return (
    <div className="about" id="about" >
      <div className="about-left" data-aos="zoom-in">
        <img src={hands} alt="holding hands" />
      </div>
      <div className="about-right" data-aos="zoom-in">
        <a>About littlenest.com</a>
        <h2>We will take care of your problems carefully.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur
          adipisci, vel totam nulla sunt ipsum vitae earum cupiditate ducimus
          minima eaque sit. Vitae consequuntur alias eius, vero voluptates
          ullam molestiae recusandae eius facere nobis vero maiores dolor
          ullam molestiae recusandae eius facere nobis vero maiores dolor
          porro?
        </p>
        <section className="about-section">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            ullam molestiae recusandae eius facere nobis vero maiores dolor
            iusto suscipit!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
