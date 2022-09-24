import "./program.css";

// importation of programs data from the data folder 
import { programsData } from "../../data/programsData";

import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {

  return (

    <div className="programs" id="programs">
        
      {/* programs header section*/}
      <div className="programs-header">
        
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape Your Body</span>
        
      </div>
      
      {/* programs section  */}
      <div className="program-categories">

        {programsData.map((program, index) => (

          <div className="category" key={index}>
            
            {/* image section  */}
            {program.image}

            <span>{ program.heading }</span>

            <span>{program.details}</span>
            
            {/* join-now section  */}
            <div className="join-now">

              <span>Start Now</span>

              <img src={rightArrow} alt={rightArrow} />

            </div>
            
          </div>

        ))}

      </div>

    </div>

  )

};

export default Programs;
