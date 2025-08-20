import exercise from "../assets/exercise.png";
import chess from "../assets/chess.png";
import ball from "../assets/ball.png";
import user from "../assets/user-line.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  once: true
});

function Articles() {
  return (
    <div className="hero-article">
      <div className="hero-article-title">
        <div className="article-title">
          <h2>Latest articles</h2>
        </div>
        <div className="article-description">
          <p>
            See the latest moments, events, and activies
            <br /> happening at our care home.
          </p>
        </div>
      </div>
      <div className="article-cards">
        <div className="article-card" data-aos="fade-right" >
          <img src={exercise} />
          <div className="article-card-content">
            <h4>Health</h4>
            <h3>Physical Activies for Seniors</h3>
            <p>
              Engaging experiences to improve mobility, balance, and overall
              well-being.
            </p>
            <div className="card-user">
              <img src={user} /> Ann Sue
              <img /> 32
            </div>
          </div>
        </div>
        <div className="article-card" data-aos="fade-right">
          <img src={chess} />
          <div className="article-card-content">
            <h4>Activies</h4>
            <h3>Chess for the Mind</h3>
            <p>
              Stimulating and fun mental exercises to enhance cognitive function
              and memory
            </p>
            <div className="card-user">
              <img src={user} alt="user-logo" /> Ann Sue
              <img /> 32
            </div>
          </div>
        </div>
        <div className="article-card" data-aos="fade-right">
          <img src={ball} alt="user-logo" />
          <div className="article-card-content">
            <h4>Health</h4>
            <h3>Ball Therapy</h3>
            <p>
              Gentle physiotherapy using balls to improve strength, flexibility
              and coordination
            </p>
            <div className="card-user">
              <img src={user} alt="user-logo" /> Ann Sue
              <img /> 32
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
