// testimonial component 
// useState importation
import { useState } from "react";

// importation of testimonialsData from the data folder
import { testimonialsData } from "../../data/testimonialsData";

// testimonial css importation
import "./testimonial.css";

//importation of left arrow image from the assets folder 
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";

const Testimonial = () => {

    // get the first object in the testimonial array data 
    const [isSelected, setIsSelected] = useState(0)
    
    // get length of data available
    const calculateTestimonialLength = testimonialsData.length;

    return (
      
        <>
            {/* testimonial main container  */}
            <div className="testimonials">

                {/* left-testimonial start */}
                <div className="left-testimonial">

                    <span className="left-first-span">Testimonials</span>
                    
                    <span className=" left-second-span stroke-text">what they</span>
                    
                    <span className="left-last-span">say about us</span>

                    {/* review section will display the first data*/}
                    <span className="testimonialDataReview">

                        {testimonialsData[isSelected].review}

                    </span>

                    {/* name and status section will display the first data */}
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

                        {/* display the first image  */}
                    <img src={testimonialsData[isSelected].image} alt={testimonialsData[isSelected].image} loading="lazy"/>

                    {/* arrow images  */}
                    <div className="arrow-pagination">

                        <img onClick={() => (isSelected === 0) ? setIsSelected(calculateTestimonialLength -1): setIsSelected( prev => prev - 1) } src={leftArrow} alt={leftArrow} loading="lazy"/>
                        
                        <img onClick={() => (isSelected === calculateTestimonialLength -1) ? setIsSelected(0): setIsSelected( prev => prev + 1) } src={rightArrow} alt={rightArrow} loading="lazy"/>

                    </div>
                    
                </div>
                {/* right testimonial ends  */}

            </div>
        </>
        
    )
    
}

export default Testimonial
