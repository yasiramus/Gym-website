// importation ofreasons css 
import "./reasons.css";

//importation of male workout images from the assest folder which contain images 
import image1 from "../../assets/fitness.jpg";
import image2 from "../../assets/femaleWorkout1.webp";
import image3 from "../../assets/femaleWorkout4.webp";
import image4 from "../../assets/femaleFitness.jpg";

// importation of colored tick from the assest folder 
import tick from "../../assets/tick.png";

// brands images 
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";


const Reasons = () => {

    return (

        <>
            {/* reasons section main container  */}
            <div className="reasons" id="reasons">

                {/* the left section which contains only images of the work out */}
                <div className="left-r">

                    <img src={image1} alt={image1} loading="lazy"/>

                    <img src={image2} alt={image2} loading="lazy"/>

                    <img src={image3} alt={image3} loading="lazy"/>

                    <img src={image4} alt={image1} loading="lazy"/>

                </div>

                {/* the right section which contains some iconic images and content of reasons why you should choose us  */}
                <div className="right-r">

                    <span>some reasons</span>

                    <div className="why-choose-us">

                        <span className="stroke-text">why</span>

                        <span>choose us</span>

                    </div>

                    {/* the details section  */}
                    <div className="details">

                        <div>

                            <img src={tick} alt={tick} loading="lazy"/>

                            <span>OVER 200+ EXPERT COACHES</span>

                        </div>

                        <div>

                            <img src={tick} alt={tick} loading="lazy"/>

                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>

                        </div>
                        
                        <div>

                            <img src={tick} alt={tick} loading="lazy"/>

                            <span>FREE ACCESS TO NEWBIES</span>

                        </div>
                        
                        <div>

                            <img src={tick} alt={tick} loading="lazy"/>

                            <span>RELIABLE PARTNERS</span>

                        </div>
                        
                    </div>

                    {/* our partners section  */}
                    <span id="our-partners">our partners</span>

                    <div className="partners-images">

                        <img src={adidas} alt={adidas} loading="lazy"/>
                        
                        <img src={nb} alt={nb} loading="lazy"/>

                        <img src={nike} alt={nike} loading="lazy"/>

                    </div>
                </div>

            </div>
        </>

    );
}

export default Reasons;
