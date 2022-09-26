import "./reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";


const Reasons = () => {

    return (

        <>
      
            <div className="reasons" id="reasons">

                <div className="left-r">

                    <img src={image1} alt={image1} />

                    <img src={image2} alt={image2} />

                    <img src={image3} alt={image3} />

                    <img src={image4} alt={image1} />

                </div>

                <div className="right-r">

                    <span>some reasons</span>

                    <div>

                        <span className="stroke-text">why</span>

                        <span>choose us</span>

                    </div>

                    <div className="details">

                        <div>

                            <img src={tick} alt={tick} />

                            <span>OVER 200+ EXPERT COACHES</span>

                        </div>

                        <div>

                            <img src={tick} alt={tick} />

                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>

                        </div>
                        
                        <div>

                            <img src={tick} alt={tick} />

                            <span>FREE ACCESS TO NEWBIES</span>

                        </div>
                        
                        <div>

                            <img src={tick} alt={tick} />

                            <span>RELIABLE PARTNERS</span>

                        </div>
                        
                    </div>
                </div>

            </div>
        </>

    );
}

export default Reasons;
