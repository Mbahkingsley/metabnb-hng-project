import frame2 from '../images/frame2.png'
import { Button } from 'react-bootstrap';


const Bottomsection = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div style={{backgroundColor:"#a02279",height:"45rem"}} className='row justify-content-around align-items-center'>
          <div className='col-xl-4 col-md-6 col-xs-6 '>
          <h1 className='text-white mb-5'>Metabnb NFTs</h1>
            
            <p style={{width:"20rem",height:"8.5rem",fontSize:"1.4em",marginBottom:"30px"}} className="text-white">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
            </p>
            
            <Button style={{backgroundColor:"#ffffff"}} className="border-0 btn-lg mt-5 pt-1"><a style={{color:"#a02279"}} className='text-decoration-none' href="placetostay">Learn more</a></Button>
          </div>
          <div className="col-xl-7 col-md-6 col-xs-6">
            <img style={{width:"550px"}}  className='img-fluid mw-100 h-auto mt-0 ' src={frame2} alt="" />

          </div>

        </div>
      </div>
    </div>
    
  )
}

export default Bottomsection
