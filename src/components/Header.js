import React from "react";
import logo from "../images/logo.png";


const Header = () => {
  return (
    <header className="container d-flex flex-wrap justify-content-between mt-4">
      <div>
        <img className="img-fluid mw-100 h-auto mt-3" src={logo} alt="metabnb logo" />
      </div>
      <div style={{width:"60%"}} className="pt-2 d-flex justify-content-around align-items-center flex-wrap ">
        <a style={{fontSize:"2.3vw"}} className="text-decoration-none text-secondary" href="a">Home</a>
        <a style={{fontSize:"2.3vw"}} className="text-decoration-none text-secondary" href="b">Place to Stay</a>
        <a style={{fontSize:"2.3vw"}} className="text-decoration-none text-secondary" href="v">NFTs</a>
        <a style={{fontSize:"2.3vw"}} className="text-decoration-none text-secondary" href="n">Community</a>
      </div>
      
      <button style={{backgroundColor:"#a02279"}} type="button" class="btn btn-primary border-0">Correct wallet</button>
    </header>
  );
};

export default Header;
