import React, {useEffect, useContext} from "react"
import {AccountContext} from "../account-context"
import setAccountContext from "../util/set-account-context"
import axios from "axios"
import FIREBASEURL from "../firebase-url"
import SignedInNavbar from "../components/navbar/signed-in-navbar"

export default function Account() {
  setAccountContext()
  
  function cancelSubscription() {
    let result = window.confirm("Are you sure you want to cancel your subscription?")
    if(!result) {
      return
    }
    else {
      const data = {
        "email": window.localStorage["email"]
      }
      const config = {
        headers: {
          Authorization: window.localStorage.FBIdToken,
      }
      }

    axios.post(FIREBASEURL + "/deactivateAccount", data, config)
    .then(()=>{
      // alert("Account Deactivation Successful")
      window.localStorage.clear()
      window.location.replace("/")
    })
    .catch((err) => alert({error: err.message}))
    }
  }   
  
  const accountContext = useContext(AccountContext)

    if(!window.localStorage["sessionStart"]) {
      setAccountContext()
      window.localStorage["sessionStart"]= false
    }

  function submitFilmInsert() {
    if(window.localStorage["accountType"] === "filmmaker") {
      return <a href="submit-films.html" className="nav-link-2 w-nav-link">SUBMIT FILM</a>
    }
    else {return null}
  }

  function logOut() {
    window.localStorage.clear()
    window.location.replace("/sign-in")
    alert("You are now logged out!")
  } 

    return(
        <div>
  <div className="fixed-background-account-pages"></div>
  <SignedInNavbar></SignedInNavbar>
  <div class="section-9">
    <div class="account-info-container w-container">
      <div class="account-info-card w-clearfix">
        <div class="account-info-card-title">Account Details</div>
        <a href="update-account.html" class="link-block-13 w-inline-block w-clearfix">
          <div class="div-block-59">
            <div class="text-block-37">Edit</div>
            <div class="html-embed-8 w-embed"><svg width="10" height="10" viewbox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.89054 9.9995H0.444527C0.326631 9.9995 0.213564 9.95267 0.130199 9.8693C0.0468341 9.78594 0 9.67287 0 9.55497V1.10896C0 0.99106 0.0468341 0.877993 0.130199 0.794628C0.213564 0.711263 0.326631 0.664429 0.444527 0.664429H5.55659C5.67449 0.664429 5.78755 0.711263 5.87092 0.794628C5.95428 0.877993 6.00112 0.99106 6.00112 1.10896C6.00112 1.22685 5.95428 1.33992 5.87092 1.42328C5.78755 1.50665 5.67449 1.55348 5.55659 1.55348H1.11132C1.05237 1.55348 0.995836 1.5769 0.954154 1.61858C0.912471 1.66027 0.889054 1.7168 0.889054 1.77575V8.88818C0.889054 8.94713 0.912471 9.00366 0.954154 9.04535C0.995836 9.08703 1.05237 9.11045 1.11132 9.11045H8.22375C8.2827 9.11045 8.33923 9.08703 8.38092 9.04535C8.4226 9.00366 8.44602 8.94713 8.44602 8.88818V4.44291C8.44602 4.32501 8.49285 4.21195 8.57621 4.12858C8.65958 4.04522 8.77265 3.99838 8.89054 3.99838C9.00844 3.99838 9.12151 4.04522 9.20487 4.12858C9.28824 4.21195 9.33507 4.32501 9.33507 4.44291V9.55497C9.33507 9.67287 9.28824 9.78594 9.20487 9.8693C9.12151 9.95267 9.00844 9.9995 8.89054 9.9995Z" fill="#333E51"></path>
                <path d="M4.98098 5.64606L4.22306 5.91944C4.20321 5.9266 4.18174 5.92796 4.16114 5.92337C4.14055 5.91877 4.12169 5.90841 4.10677 5.89348C4.09185 5.87856 4.08148 5.8597 4.07689 5.83911C4.07229 5.81852 4.07365 5.79704 4.08081 5.77719L4.3542 5.01927L8.57721 0.796265L9.20399 1.42305L4.98098 5.64606Z" fill="#333E51"></path>
                <path d="M9.51963 1.10945L8.89062 0.480442L9.24402 0.129265C9.32731 0.0464718 9.43998 0 9.55742 0C9.67485 0 9.78752 0.0464718 9.87081 0.129265C9.9536 0.212553 10.0001 0.325219 10.0001 0.442657C10.0001 0.560095 9.9536 0.672761 9.87081 0.756049L9.51963 1.10945Z" fill="#333E51"></path>
              </svg></div>
          </div>
        </a>
        <div class="w-layout-grid account-details-grid">
          <div class="account-details-grid-title">First Name</div>
          <div class="account-details-grid-label">{window.localStorage["firstName"]}</div>
          <div class="account-details-grid-title">Last Name</div>
          <div class="account-details-grid-label">{window.localStorage["lastName"]}</div>
          <div class="account-details-grid-title">Email</div>
          <div class="account-details-grid-label">{window.localStorage["email"]}</div>
          <div class="account-details-grid-title">Password</div>
          <div class="account-details-grid-label">••••••</div>
          <div class="account-details-grid-title">IMDb Profile</div>
    <div class="account-details-grid-label">{window.localStorage["imdbLink"]}</div>
        </div>
      </div>
      <div class="account-info-card">
        <div class="account-info-card-title">Subscription</div>
        <div class="w-layout-grid account-details-grid">
          <div class="account-details-grid-title">Account type</div>
          <div class="account-details-grid-label">{window.localStorage["accountType"]}</div>
          <div class="account-details-grid-title">Billing frequency</div>
          <div class="account-details-grid-label">Monthly</div>
          <div class="account-details-grid-title">Next billing date</div>
          <div class="account-details-grid-label">Payment Due Soon</div>
          <div class="account-details-grid-title">Payment method</div>
          <a href="update-payment-info.html" class="link-block-12 w-inline-block">
            <div class="text-block-36">UPDATE</div>
          </a>
        </div>
      </div>
      <a href="#" onClick={logOut}class="submit-button-4 log-out-button w-button">Logout</a>
      <a href="#" onClick={cancelSubscription}class="submit-button-4 cancel-subscription-button w-button">Cancel Subscription</a>
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
        <a href="index.html" className="w-inline-block"><img src="images/festiv-logo-black.png" width="24" alt="" className="image-2" />
          <div className="text-block-8">FESTIV</div>
        </a>
      </div>
      <div id="w-node-e7f1494548f0-494548a4">
        <div className="text-block-7">© 2020 Next Wave Media Partners, LLC</div>
      </div>
      <div id="w-node-e7f1494548f3-494548a4" className="div-block-41">
        <a href="https://www.instagram.com/festivmedia/?hl=en" className="social-link w-inline-block"><img src="images/instagram-icon.png" alt=""/></a>
        <a href="https://www.facebook.com/Festiv-101470541497280" className="social-link w-inline-block"><img src="images/facebook-icon.png" alt="" className="image-30" /></a>
        <a href="https://twitter.com/festiv12" className="social-link w-inline-block"><img src="images/twitter-icon.png" alt="" /></a>
        <a href="mailto:info@festivmedia.com?subject=Inquiry%20About%20Festiv" className="social-link w-inline-block"><img src="images/mail-icon.png" alt="" /></a>
      </div>
    </div>
  </div>
</div>
    )
} 