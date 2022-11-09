import "./footer.css";

import Instagram from "../../assets/instagram.png";

import Linkedin from "../../assets/linkedin.png";

import Github from "../../assets/github.png";

import Logo from "../../assets/logo.png";


const Footer = () => {

  return (

    <footer>
      
      <hr />

      <div className='footer-images'>

        <div className="socialMedia">
        
          <img src={Github} alt={Github} />

          <img src={Instagram} alt={Instagram} />

          <img src={Linkedin} alt={Linkedin} />
          
        </div> 

        <div className="logo-footer">

          <img src={Logo} alt={Logo} />

        </div>
        
      </div>

      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>

    </footer>

  )
}

export default Footer
