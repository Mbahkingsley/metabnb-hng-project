import frame2 from '../images/frame2.png'
import { Button } from 'react-bootstrap';
import view1 from '../images/view1.png';
import view2 from '../images/view2.png';

const Bottomsection = () => {
  return (
    <div>
      <div className='container'>
        <div style={{backgroundColor:"#a02279",height:"45rem"}} className='row justify-content-around align-items-center'>
          <div className='col-xl-4 col-md-6 col-xs-6 '>
          <h1 className='text-white mb-5'>Metabnb NFTs</h1>
            
            <p style={{width:"20rem",height:"8.5rem",fontSize:"1.4em",marginBottom:"30px"}}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
            </p>
            
            <Button style={{backgroundColor:"#ffffff"}} className="border-0 btn-lg mt-5 pt-1"><a style={{color:"#a02279"}} className='text-decoration-none' href="placetostay">Learn more</a></Button>
          </div>
          <div className="col-xl-7 col-md-6 col-xs-6">
            <img  className='img-fluid mw-100 h-auto mt-0 d-none d-lg-block' width={"550px"} src={frame2} alt="" />
            <div className='d-lg-none'>
              <img style={{width:"15rem",height:"6rem"}} className='img-fluid mw-100 h-auto mt-0 ' src={view1} alt="" />
              <img style={{width:"15rem",height:"6rem"}} className='img-fluid mw-100 h-auto mt-0 ' src={view2} alt="" />
              
            </div>  
          </div>

        </div>
      </div>
    </div>
  )
}

export default Bottomsection
