import group from '../images/Group.svg';
import fb from '../images/fb_icon.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';

const Footer = () => {
  return (
    <div>
      <footer style={{backgroundColor:"#1d1d1e"}} className="d-flex justify-content-around pt-5">
        
          <div className='d-flex flex-column justify-content-between flex-wrap'>
            <img className='img-fluid mw-100 h-auto' src={group} alt="" />
            <div>
              <img className='me-4' src={fb} alt="" />
              <img className='me-4' src={insta} alt="" />
              <img src={twitter} alt="" />
              </div>
              <span className='text-white'>&copy; 2022 Metabnb</span>
          </div>
          <div style={{fontSize:"100%"}} className='text-white ms-3'>
            <p><b>Community</b></p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className='text-white ms-3'>
              <p><b>Places</b></p>
              <p>Castle</p>
              <p>Farm</p>
              <p>Beach</p>
              <p>Learn more</p>
          </div>
          <div className='text-white ms-4'>
              <p><b>About us</b></p>
              <p>Road map</p>
              <p>Creators </p>
              <p>Career</p>
              <p>Contact us</p>
          </div>
        
      </footer>
    </div>
  )
}

export default Footer;
