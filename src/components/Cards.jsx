import home from '../assets/home.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  once: true
});

function Cards(props) {
  return (
    <div className="cards" id="cards"  >
      <div className="card" data-aos="flip-left">
        <img src={home} alt="logo" />
        <h2>Satisfaction Guarantee</h2>
        <p>
          {props.satisfaction}
        </p>
      </div>
      <div className="card" data-aos="flip-left">
        <img src={home} alt="logo" />
        <h2>Personal Nurses</h2>
        <p>
          {props.nurses}
        </p>
      </div>
      <div className="card" data-aos="flip-left">
        <img src={home} alt="logo" />
        <h2>Low Cost Services</h2>
        <p>
          {props.lowcost}
        </p>
      </div>
    </div>
  );
}

export default Cards;
