import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import frame1 from "../images/frame1.png";
import icon1 from "../images/icon1.png";
import icon3 from "../images/icon3.png";
import icon2 from "../images/icon2.png";
import frame3 from "../images/frame3.png";
import frame4 from "../images/frame4.png";
import frame5 from "../images/frame5.png";
import frame6 from "../images/frame6.png";
import frame7 from "../images/frame7.png";
import frame8 from "../images/frame8.png";
import frame9 from "../images/frame9.png";
import frame10 from "../images/frame10.png";
import Card from '../components/Card';
import Bottomsection from '../components/Bottomsection';
import Footer from '../components/Footer';


const Home = () => {
  
  return (
    <div>
        
        <Header />
       <div style={{paddingTop:"100px"}} className="container ">
       
          <div className="row">
              <div style={{height:"420px"}} className="col-xs-12 col-md-6 col-xl-6 d-flex flex-column justify-content-between">
              <h1>
              Rent a{" "}
              <span style={{ color: "#a02279", fontWeight: "bold" }}>
                {" "}
                Place
              </span>{" "}
              away from{" "}
              <span style={{ color: "#a02279", fontWeight: "bold" }}>
                Home
              </span>{" "}
              in the{" "}
              <span style={{ color: "#a02279", fontWeight: "bold" }}>
                {" "}
                Metaverse
              </span>
            </h1>
            <p style={{fontSize:"1.5em"}}>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>

                  <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" />
                  <Button style={{backgroundColor:"#a02279"}}
                    className="rounded-0 rounded-end w-25 border-0"
                    size="lg" 
                  >
                    Search
                  </Button>
                </Form>
              </div>
              
              <div style={{height:"410px",paddingLeft:"8%"}} className="col-xs-12 col-md-6 col-xl-6 pt-5 ">
                <img className="img-fluid mw-100 h-auto" src={frame1} alt="" />
                
              </div>
          </div>
       </div>
       <div className="mw-100 d-flex justify-content-around flex-wrap align-items-center" style={{backgroundColor:"#a02279",marginTop:"7rem",height:"5rem",marginBottom:"9rem"}}>
        <img className="img-fluid mw-100 h-auto" style={{height:"45px",width:"180px"}} src={icon1} alt="" />
        <img className="img-fluid mw-100 h-auto" style={{height:"45px",width:"180px"}} src={icon3} alt="" />
        <img className="img-fluid mw-100 h-auto" style={{height:"45px",width:"180px"}} src={icon2} alt="" />
       </div>
       
       <div className='d-flex flex-wrap justify-content-center'>
          <Card name={frame10} />
          <Card name={frame3} />
          <Card name={frame4} />
          <Card name={frame5} />
          <Card name={frame6} />
          <Card name={frame7} />
          <Card name={frame8} />
          <Card name={frame9} />
      </div>
      <Bottomsection />
      <Footer />
    </div>

  );
};

export default Home;
