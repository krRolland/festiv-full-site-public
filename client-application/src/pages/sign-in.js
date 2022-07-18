import React, {useState, useContext, useEffect} from "react";
// import {AccountContext} from '../account-context'
import {useHistory} from "react-router-dom"
import { Route, Redirect } from 'react-router-dom';
import FIREBASEURL from "../firebase-url"
import axios from "axios"
import setAccountContext from "../util/set-account-context"
import SignedOutNavbar from "../components/navbar/signed-out-navbar";


export default function SignIn() {

  useEffect(()=>{
	let signInNavbar = document.getElementById("sign-in-navbar-button");
  let navbarImage = document.getElementById("festiv-logo-navbar");
  window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar-home-transparent"); 
    // Set starting position
    if (window.pageYOffset >= 60) {
      navbar.style.backgroundColor = "rgba(255,255,255,1)"; 
    } else {
      navbar.style.backgroundColor = "rgba(255,255,255,0)"; 
    }});
  })

  // const userContext = useContext(AccountContext)
  const history = useHistory()
  const [signInError, setSignInError] = useState('')
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)

  function isEmailValid() {
    //   For Valid Email: 
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(signInEmail)) {
        return true
    }
    else {
        return false
    }
  } 
  function isPasswordValid() {
    if (signInPassword.length > 0) {
      return true
    }
    else{return false}
  }

  function handleFormChange(event) {
    if (event.target.name === "Password") {
      setSignInPassword(event.target.value)
    }
    else {
      setSignInEmail(event.target.value)
    }
  } 

  function handleSignIn(event) {
    setLoading(true)
    if(!isEmailValid()){
      alert("Please enter a valid email")
      setLoading(false)
      return
    }
    if(!isPasswordValid()){
      alert("Please enter a valid password")
      setLoading(false)
      return
    }
      event.preventDefault() 
      const requestOptions = {
        email: signInEmail, 
        password: signInPassword
      }
    
    axios.post(FIREBASEURL + "/signIn", requestOptions)
    .then((res) => {
      if(res.data.error){
        alert(res.data.error)
        setLoading(false)
      }
      else {
        window.localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`)
        window.localStorage.setItem("sessionStart", true)
        
        setAccountContext("/subscriber-homepage")
      }
      
    })
    .catch((err) => {
      alert(err.message)
      setLoading(false)
    })
    
  }
  
  
  return (
    <div>
  <div className="fixed-background-signin"></div>
  <SignedOutNavbar />
  <div className="section-11">
    <div className="sign-in-container w-container">
      <h1 className="sign-in-title">SIGN IN</h1>
      <a href="sign-up.html" className="link-block-14 w-inline-block w-clearfix">
        <div className="text-block-40">Need an account?</div>
      </a>
      <div className="sign-in-card">
        <div className="form-block-2 w-form">
          <div id="email-form" name="email-form" data-name="Email Form"><label for="Email-2" className="sign-in-field-label">EMAIL</label><input type="email" onChange= {handleFormChange} className="sign-in-text-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="kubrick@2001.com" id="Email-2"/><label for="Password" className="sign-in-field-label">PASSWORD</label><input type="password" onChange={handleFormChange} className="sign-in-text-field w-input" maxlength="256" name="Password" data-name="Password" placeholder="••••••••" id="Password" required=""/>
            <div className="sign-in-button-wrapper"><input onClick={handleSignIn} type="submit" value={loading? "LOADING..." : "SIGN IN"} data-wait="Please wait..." className="sign-in-button w-button"/></div>
          </div>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div className="reset-password-wrapper">
          <a href="/forgot-password" className="reset-password-link-block w-inline-block">
            <div className="text-block-41">Reset password</div>
          </a>
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
    <div className="submit-films-footer-js w-embed w-script">

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
  );
}

