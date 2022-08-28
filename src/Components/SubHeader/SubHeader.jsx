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
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why Us</li>
                    <li>Plans</li>
                    <li>Testimonial</li>
                </ul>

            </div>
        </>
        
    )
    
}

export default SubHeader
