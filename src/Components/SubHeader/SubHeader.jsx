// sub header component
// importation of sub header css file 
import "./subHeader.css";

// importation of logo image from the assets folder 
import Logo from "../../assets/logo.png";

const SubHeader = () => {

    return (
      
        <>
      
            <div className="sub-header">

                <img src={Logo} alt={Logo} className="logo" />
                
                {/* nav list  */}
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#programs">Programs</a></li>
                    <li><a href="#reasons">Why Us</a></li>
                    <li><a href="#plans" >Plans</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                </ul>

            </div>
        </>
        
    )
    
}

export default SubHeader
