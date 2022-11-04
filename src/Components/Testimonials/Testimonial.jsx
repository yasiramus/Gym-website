// testimonial component 
import { useState } from "react";

import { testimonialsData } from "../../data/testimonialsData";

import "./testimonial.css";

// importation of left arrow image from the assets folder 
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";


const Testimonial = () => {

    const [isSelected, setIsSelected] = useState(0)
    
    // calculate length of reviews
    // const calculateReviewLength = testimonialsData.length;
    // console.log(calculateReviewLength,'calculateReviewLength');

    return (
      
        <>
            {/* testimonial main container  */}
            <div className="testimonials">

                {/* left-testimonial start */}
                <div className="left-testimonial">

                    <span className="left-first-span">Testimonials</span>
                    
                    <span className=" left-second-span stroke-text">what they</span>
                    
                    <span className="left-last-span">say about us</span>

                    {/* review section  */}
                    <span className="testimonialDataReview">

                        {testimonialsData[isSelected].review}

                    </span>

                    {/* name and status section  */}
                    <span className="testimonialData">

                        <span>{testimonialsData[isSelected].name} </span>
                        
                        - {testimonialsData[isSelected].status}

                    </span>

                </div>
                {/* left-testimonial ends  */}

                {/* right testimonial start  */}
                <div className="right-testimonial">

                    {/* empty divs */}
                    <div></div>
                    <div></div>

                    <img src={testimonialsData[isSelected].image} alt={testimonialsData[isSelected].image} />

                    {/* arrow images  */}
                    <div className="arrow-pagination">

                        <img src={leftArrow} alt={leftArrow} />
                        
                        <img src={rightArrow} alt={rightArrow} />

                    </div>
                    
                </div>
                {/* right testimonial ends  */}

            </div>
        </>
        
    )
    
}

export default Testimonial
