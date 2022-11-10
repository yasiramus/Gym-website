// footer css importation 
import "./footer.css";

// importatin of social media images
import Instagram from "../../assets/instagram.png";

import Linkedin from "../../assets/linkedin.png";

import Github from "../../assets/github.png";

import Logo from "../../assets/logo.png";


const Footer = () => {

  return (

    // footer main container 
    <footer>
      
      <hr />

      {/* footer images section  */}
      <div className='footer-images'>

        {/* social media images*/}
        <div className="socialMedia">
        
          <img src={Github} alt={Github} />

          <img src={Instagram} alt={Instagram} />

          <img src={Linkedin} alt={Linkedin} />
          
        </div> 

        {/* logo images*/}
        <div className="logo-footer">

          <img src={Logo} alt={Logo} />

        </div>
        
      </div>

      {/* background blur empty divs stling done in the footer css*/}
      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>

    </footer>

  )
}

export default Footer
