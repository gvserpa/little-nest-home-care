import phoneIcon from "../assets/phone-w.png";
import mapPin from "../assets/map-pin.png"

function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={phoneIcon} />
          <p>{props.number} |</p>
          <img src={mapPin} />
          <p>{props.address}</p>
        </div>
        <p>{props.time}</p>
      </div>
    </>
  );
}

export default Header;
