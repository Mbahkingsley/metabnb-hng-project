import frame11 from "../images/frame11.png";

const Card = (props) => {
  return (
    <div style={{width:"282px",height:"372px",paddingTop:"0.03px",borderRadius:"15px",paddingRight:"10px"}} className="border mt-2 me-2 mb-3 ">
      <div className="m-3 ">
      <img style={{width:"250px",height:"255"}} src={props.name} alt="" />
      </div>
      <div style={{width:"251px",fontSize:".9em",height:"4.4rem"}} className="d-flex justify-content-between ms-3">
          <div>
            <p className="mb-1">Desert king</p>
            <p className="mb-1">2345km away</p>
            <img src={frame11} alt="" /> 
          </div>
          <div>
            <p className="mb-1 ms-4"><b>1MBT per night</b></p>
            <p>available for 2 weeks</p>
          </div>
      </div>
    </div>
  )
}

export default Card;

