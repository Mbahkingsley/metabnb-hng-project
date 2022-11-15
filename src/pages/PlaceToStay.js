import Header from "../components/Header";
import Footer from '../components/Footer';
import icon5 from "../images/icon5.png";
import Card from '../components/Card';
import frame6 from "../images/frame6.png";
import frame7 from "../images/frame7.png";
import frame8 from "../images/frame8.png";
import frame9 from "../images/frame9.png";
import frame10 from "../images/frame10.png";
import frame3 from "../images/frame3.png";
import frame4 from "../images/frame4.png";
import frame5 from "../images/frame5.png";
import frame19 from "../images/frame19.png";
import frame12 from "../images/frame12.png";
import frame13 from "../images/frame13.png";
import frame14 from "../images/frame14.png";
import frame15 from "../images/frame15.png";
import frame16 from "../images/frame16.png";
import frame17 from "../images/frame17.png";
import frame18 from "../images/frame18.png";

const PlaceToStay = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around">
        <div style={{width:"65rem",marginTop:"7rem", fontSize:"1.2em"}} className="d-flex flex-wrap justify-content-between ">
            <a className="text-decoration-none pt-2 text-secondary" href="*">Resturant</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">Cottage</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">Castle</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">fantast city</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">beach</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">Carbins</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">Off-grid</a>
            <a className="text-decoration-none pt-2 text-secondary" href="*">Farm</a>
            <button className="btn btn-light border">Location <img src={icon5} alt="" /></button>
        </div>
        
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-5">
      <Card name={frame6} />
      <Card name={frame7} />
      <Card name={frame8} />
      <Card name={frame9} />
      <Card name={frame10} />
      <Card name={frame3} />
      <Card name={frame4} />
      <Card name={frame5} />
      <Card name={frame19} />
      <Card name={frame12} />
      <Card name={frame13} />
      <Card name={frame14} />
      <Card name={frame15} />
      <Card name={frame16} />
      <Card name={frame17} />
      <Card name={frame18} />
      </div>
      <div className="mt-5">
      <Footer />
      </div>
    </div>
  )
}

export default PlaceToStay;
