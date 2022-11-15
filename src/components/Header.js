import logo from "../images/logo.png";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import fox from '../images/fox.png';
import wallet_connect from '../images/wallet_connect.png';
import arrow from '../images/arrow.png';


const Header = () => {
  const [show, setShow] = useState(false);

  const closeEvent = () => setShow(false);
  const showEvent = () => setShow(true);
  return (
      <div>

      <Modal show={show} onHide={closeEvent}>
        <Modal.Header closeButton>
          <Modal.Title>Connect wallet</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <p>Choose your preffered wallet:</p>
            <div>
            <Button  className="btn-lg mb-2 border w-100 d-flex justify-content-between" variant="" onClick={closeEvent}>
              <div>
                <img className="me-2" src={fox} alt="metamask" /> 
                <span>Metamask</span>
              </div>
              <img style={{width:"20px",height:"20px"}} className="mt-3" src={arrow} alt="arrow" />
            </Button>
          </div>
            <div>
          <Button className="btn-lg border w-100 d-flex justify-content-between" variant="" onClick={closeEvent}>
          <div>
                <img className="me-2" src={wallet_connect} alt="metamask" /> 
                <span> WalletConnect</span>
              </div>
              <img style={{width:"20px",height:"20px"}} className="mt-2" src={arrow} alt="wallet_connect" />
          </Button>
          </div>
          </Modal.Body>
      </Modal>
    <header className="container d-flex flex-wrap justify-content-between mt-4">
      <div>
        <img className="img-fluid mw-100 h-auto mt-3" src={logo} alt="metabnb logo" />
      </div>
      <button style={{backgroundColor:"#a02279"}} type="button" class="btn btn-primary border-0 d-lg-none btn-sm h-5 mt-4 mw-100" onClick={showEvent}>Connect wallet</button>
      <div style={{width:"60%"}} className="pt-2 d-flex justify-content-around align-items-center flex-wrap ">
        <a style={{fontSize:"2.6vw"}} className="text-decoration-none text-secondary" href="*">Home</a>
        <a style={{fontSize:"2.6vw"}} className="text-decoration-none text-secondary" href="*">Place to Stay</a>
        <a style={{fontSize:"2.6vw"}} className="text-decoration-none text-secondary" href="*">NFTs</a>
        <a style={{fontSize:"2.6vw"}} className="text-decoration-none text-secondary" href="*">Community</a>
      </div>
      
      <button style={{backgroundColor:"#a02279"}} type="button" class="btn btn-primary border-0 d-none d-lg-block" onClick={showEvent}>Connect wallet</button>
    </header>
    </div>
  );
};

export default Header;
