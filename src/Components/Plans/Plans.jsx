import "./plans.css";

// importation of the plans data from the data folder 
import { plansData } from "../../data/plansData";

// importation of feature white tick img from the asserts folder 
import whiteTick from "../../assets/whiteTick.png";

// imporation of the right rightArrow from the assets folder 
import rightArrow from "../../assets/rightArrow.png";

const Plans = () => {

    return (

        <>
      
            <div className="plans-container" id="plans">

                <div className="blur plansSection-blur1"></div>
                <div className="blur plansSection-blur2"></div>

                {/* programs header section*/}
                <div className="programs-header">

                    <span className="stroke-text">ready to start</span>
                    
                    <span>your fitness journey</span>
                    
                    <span className="stroke-text">with us</span>

                </div>

                {/* plans cards  */}
                <div className="plans-card">

                    {
                        plansData.map((planData, index) => (

                            <div className="plan-data" key={index}>

                                {planData.icon}

                                <span>{planData.name}</span>

                                <span>$ {planData.price}</span>

                                <div className="plan-features">

                                    {planData.features.map((feature, index) => (

                                        <div className="feature-section" key={index}>

                                            <img src={whiteTick} alt={whiteTick} />

                                            {/* im grabbing the feature like this to get it data because the feature section is an array of strings seperated by commas */}
                                            <span>{feature}</span>

                                        </div>
                                    ))}
                                </div>

                                <div className="view-benefit">
                               
                                    <span>view for more benefits</span>
                                    
                                    <img src={rightArrow} alt={rightArrow} loading="lazy"/>

                                </div>

                                <button className="btn">Join us</button>

                            </div>

                        ))

                    }

                </div>

            </div>

        </>

    );

};

export default Plans;
