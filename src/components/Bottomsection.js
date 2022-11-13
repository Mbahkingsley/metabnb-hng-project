import frame2 from '../images/frame2.png'
import { Button } from 'react-bootstrap'

const Bottomsection = () => {
  return (
    <div style={{backgroundColor:"#a02279",height:"35rem"}} className="d-flex justify-content-around align-items-center">
        <div >
          <h2>Metabnb NFTs</h2>
          <p style={{width:"415px",height:"136px"}}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <Button style={{backgroundColor:"#ffffff",color:"#a02279"}} className="border-0 btn-lg pt-1">Learn more</Button>
        </div>
        <div>
        <img width={"550px"} src={frame2} alt="" />
        </div>
    </div>
  )
}

export default Bottomsection
