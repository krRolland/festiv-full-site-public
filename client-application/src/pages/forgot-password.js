import React, { useState, useContext, useEffect } from "react";
import axios from "axios"
// import {AccountContext} from '../account-context'
import {useHistory} from "react-router-dom"
import SignedOutNavbar from "../components/navbar/signed-out-navbar";


export default function ForgotPassword() {
  

  //   const history = useHistory()
  // const userContext = useContext(AccountContext)
  const [forgotPasswordError, setForgotPasswordError] = useState('')
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [passwordResetSuccessMessage, setPasswordResetSuccessMessage] = useState('')

  function handleFormChange(event) {
    setForgotPasswordEmail(event.target.value)
  } 

  function handleFormSubmit(event) {
    if(forgotPasswordEmail.length < 1){
      alert("Please enter a valid email")
      return
    }
      event.preventDefault() 
      const requestOptions = {
        email: forgotPasswordEmail, 
      }
    
    axios.post("https://us-central1-festiv-fd5c6.cloudfunctions.net/api/resetPassword", requestOptions)
    .then((res) => {
      console.log("got response")
      if(res.data.error){
        alert(res.data.error)
      }
      else {
        alert("Success! A password reset link has been sent to your email address.")
        window.location.replace("/sign-in")
      }
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  return(
    <div>
  <div className="fixed-background-signin"></div>
  <SignedOutNavbar/>
  <div className="section-11">
    <div className="sign-in-container w-container">
      <h1 className="sign-in-title">RESET PASSWORD</h1>
      <a href="sign-up.html" className="link-block-14 w-inline-block w-clearfix">
        <div className="text-block-40">Need an account?</div>
      </a>
      <div className="sign-in-card">
        <div className="form-block-2 w-form">
          <form id="email-form" name="email-form" data-name="Email Form"><label for="Email-2" className="sign-in-field-label">EMAIL</label><input onChange={handleFormChange} type="email" className="sign-in-text-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="kubrick@2001.com" id="Email-2"/>
            <div className="sign-in-button-wrapper"><input type="submit" onClick={handleFormSubmit} value="RESET" data-wait="Please wait..." className="sign-in-button w-button"/></div>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="w-layout-grid grid-6">
      <div id="w-node-e7f1494548a6-494548a4">
        <div className="footer-col-text-title">Company</div>
        <a href="about-us.html" className="link-block w-inline-block">
          <div className="text-block-6">About Us</div>
        </a>
        <a href="mailto:info@festivmedia.com?subject=Inquiry%20About%20Festiv" className="link-block w-inline-block">
          <div className="text-block-6">Contact Us</div>
        </a>
      </div>
      <div>
        <div className="footer-col-text-title">Platform</div>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Account Agreement</div>
        </a>
        <a href="privacy-policy.html" target="_blank" className="link-block w-inline-block">
          <div className="text-block-6">Privacy Policy</div>
        </a>
        <a href="terms-of-use.html" target="_blank" className="link-block w-inline-block">
          <div className="text-block-6">Terms Of Service</div>
        </a>
        <a href="festiv-video-service.html" target="_blank" className="link-block w-inline-block">
          <div className="text-block-6">Video Services</div>
        </a>
      </div>
      <div>
        <div className="footer-col-text-title">Submissions</div>
        <a href="how-it-works.html" className="link-block w-inline-block">
          <div className="text-block-6">How It Works</div>
        </a>
        <a id="submit-films-footer-link" href="submit-films.html" className="link-block w-inline-block">
          <div className="text-block-6">Submit Your Film Here</div>
        </a>
        <a href="film-submission-guidelines.html" target="_blank" className="link-block w-inline-block">
          <div className="text-block-6">Film Submission Guidelines</div>
        </a>
        <a href="filmmaker-revenue-participation.html" target="_blank" className="link-block w-inline-block">
          <div className="text-block-6">Filmmaker Revenue Participation</div>
        </a>
      </div>
      <div>
        <div className="footer-col-text-title">Genres</div>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Action</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Drama</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Comedy</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Family/Kids</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Horror/Thriller</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Science Fiction</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Documentary</div>
        </a>
      </div>
      <div>
        <div className="footer-col-text-title">Promotions</div>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Download Our App</div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="text-block-6">Advertise With Us</div>
        </a>
      </div>
    </div>
    <div className="w-layout-grid grid-7">
      <div id="w-node-e7f1494548ec-494548a4">
        <a href="index.html" className="w-inline-block"><img src="images/festiv-logo-black.png" width="24" alt="" className="image-2"/>
          <div className="text-block-8">FESTIV</div>
        </a>
      </div>
      <div id="w-node-e7f1494548f0-494548a4">
        <div className="text-block-7">© 2020 Next Wave Media Partners, LLC</div>
      </div>
      <div id="w-node-e7f1494548f3-494548a4" className="div-block-41">
        <a href="https://www.instagram.com/festivmedia/?hl=en" className="social-link w-inline-block"><img src="images/instagram-icon.png" alt=""/></a>
        <a href="https://www.facebook.com/Festiv-101470541497280" className="social-link w-inline-block"><img src="images/facebook-icon.png" alt="" className="image-30"/></a>
        <a href="https://twitter.com/festiv12" className="social-link w-inline-block"><img src="images/twitter-icon.png" alt=""/></a>
        <a href="mailto:info@festivmedia.com?subject=Inquiry%20About%20Festiv" className="social-link w-inline-block"><img src="images/mail-icon.png" alt=""/></a>
      </div>
    </div>
  </div>
</div>
  )
}

