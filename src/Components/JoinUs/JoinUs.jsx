import { useRef } from "react";

import emailjs from '@emailjs/browser';

import "./joinUs.css";

const JoinUs = () => {
  
  // set useRef to null
  const inputRef = useRef(null);

  // receive email in your gmail account
  const form = useRef();
  
  // send mail 
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_8a6mwng', 'template_40xng1j', form.current, 'uoRGtFwJubdvIUP2s')
      
      .then((result) => {

      // clear input field 
        inputRef.current.value = "";

        return result.text;
        
      }, (error) => {
          console.log(error.text);
      });
    
  };

    return (
      
      <>
      
        <div className="JoinUs" id="join-">

          <div className="left-joinUs">

            <hr />

            <div>

              <span className="stroke-text">ready to</span>{" "}
              
              <span>level up</span>

            </div>

            <div>

              <span>your body</span>{" "}
              
              <span className="stroke-text">with us?</span>

            </div>

          </div>

          <div className="right-joinUs">

            <form ref={form} className="email-container">

              <input type="email" name="user_email" ref={inputRef} placeholder="Enter your email adderss" autoComplete="off"/>
              
              <button onClick={sendEmail} className="btn joinUsBtn">Join Now</button>

            </form>

          </div>

        </div>
      </>
      
  )
}

export default JoinUs
