// the header component

// importation of header css file 
import "./header.css";

// importation of the sub header component 
import SubHeader from "../SubHeader/SubHeader";

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

                </div>
                {/* left side section ends here  */}

                <div className="right-h"></div>

            </div>
            
        </>
        
    )
}

export default Header
