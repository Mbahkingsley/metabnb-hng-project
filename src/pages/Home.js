import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import frame1 from "../images/frame1.png";
import icon1 from "../images/icon1.png";
import icon3 from "../images/icon3.png";
import icon2 from "../images/icon2.png";

const Home = () => {
  return (
    <div>

        <Header />
       <div style={{paddingTop:"100px"}} className="container ">
          <div className="row">
              <div style={{height:"420px"}} className="col-xs-12 col-md-6 col-xl-6 bg-primary d-flex flex-column justify-content-between">
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
                  <Form.Control type="search" placeholder="Search" className="" />
                  <Button style={{backgroundColor:"#a02279"}}
                    className="rounded-0 rounded-end w-25"
                    size="lg"
                  >
                    Search
                  </Button>
                </Form>
              </div>
              
              <div style={{height:"410px",paddingLeft:"8%"}} className="col-xs-12 col-md-6 col-xl-6 bg-secondary pt-5 ">
                <img className="img-fluid mw-100 h-auto" src={frame1} alt="" />
                
              </div>
          </div>
       </div>
       <div className="mw-100 d-flex justify-content-around flex-wrap align-items-center" style={{backgroundColor:"#a02279",marginTop:"9rem",height:"5rem"}}>
        <img className="img-fluid mw-100 h-auto" style={{height:"45px",width:"180px"}} src={icon1} alt="" />
        <img className="img-fluid mw-100 h-auto" style={{height:"45px",width:"180px"}} src={icon3} alt="" />
        <img className="img-fluid mw-100 h-auto" style={{height:"45px",width:"180px"}} src={icon2} alt="" />
       </div>
       
       <div>
        
       </div>
    </div>
  );
};

export default Home;
