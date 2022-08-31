// the header component

// importation of header css file 
import "./header.css";

// importation of the sub header component 
import SubHeader from "../SubHeader/SubHeader";

// importation  of header images
import HeaderImg from "../../assets/hero_image.png";

import HeaderImgBack from "../../assets/hero_image_back.png";

import HeartImg from "../../assets/heart.png";

import CaloriesImg from "../../assets/calories.png";

const Header = () => {

    return (
      
        <>
            <div className="header">
                {/* dividing the header section into 2 parts that is the left and right side  */}
                {/* the left side section start from here  */}
                <div className="left-h">

                    {/* subHeader component being used here  */}
                    <SubHeader />
                    
                    {/* the best ad start from here  */}
                    <div className="the-best-ad">

                        {/* this the div is for the orange oval color  */}
                        <div></div>

                        <span>the best fitness club in the town</span>

                    </div>
                    {/* the best ad ends here  */}

                    {/* header heading start from here  */}
                    <div className="header-text">
                    
                        <div>

                            <span className="stroke-text">Shape</span>

                            <span>Your</span>

                        </div>

                        
                        <div><span>Ideal body</span></div>
                        
                        <div>

                            <span>In here we will help to shape and transform into your dream body and live life to the fullest</span>

                        </div>
                        
                    </div>
                    {/* header heading ends from here */}

                    {/* figures start here  */}
                    <div className="figures">

                        <div>

                            <span>+140</span>
                            <span>expert coaches</span>

                        </div>

                        <div>

                            <span>+987</span>
                            <span>members joined</span>

                        </div>

                        <div>

                            <span>+60</span>
                            <span>fitness programs</span>

                        </div>

                    </div>
                    {/* figures ends here */}

                    {/* header button section start from here*/}
                    <div className="header-button">

                        <button className="btn">Get Started</button>

                        <button className="btn">Learn More</button>

                    </div>
                     {/* header button section ends here*/}
                    

                </div>
                {/* left side section ends here  */}

                <div className="right-h">

                    <button className="btn">Join Now</button>

                    {/* heart-rate start from here*/}
                    <div className="heart-rate">

                        <img src={HeartImg} alt={HeartImg} />

                        <span>Heart Rate</span>

                        <span>116 bps</span>

                    </div>
                    {/* heart rate section ends here  */}

                    {/* header images  */}
                    <img src={HeaderImg} alt={HeaderImg} className="header-img"/>

                    <img src={HeaderImgBack} alt={HeaderImgBack} className="header-img-back"/>

                    {/* calories  */}
                    <div className="calories">

                        <img src={CaloriesImg} alt={CaloriesImg} />

                        <span>Calories BurenOut</span>

                        <span>250 Kcal</span>
                        
                    </div>

                </div>

            </div>
            
        </>
        
    )
}

export default Header
