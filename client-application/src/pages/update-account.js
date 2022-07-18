// Import React Components
import React, { useState, useContext } from "react";
// import authorization from "../firebaseApp";
import setAccountContext from "../util/set-account-context"
import FIREBASEURL from "../firebase-url"
import axios from "axios"
import SignedInNavbar from "../components/navbar/signed-in-navbar";

export default function UpdateAccount() {
    

  setAccountContext()

  function handlePasswordReset() {
    axios.post(FIREBASEURL + "/resetPassword", {email: window.localStorage["email"]})
    .then(res => {
      console.log(res)
      if (res.data.error) {
        alert(res.data.error)
      }
      else { alert(res.data.message)}
    })
    .catch(err => {alert(err.message)}) 
  }

  

  const [userUpdateError, setUserUpdateError] = useState("");
  const [userUpdateSuccess, setUserUpdateSuccess] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [imdbLink, setImdbLink] = useState("");


  function updateFirstName(event){
    setFirstName(event.target.value)
    }
    function updateLastName(event){
      setLastName(event.target.value)
      }

    function updateImdbLink(event){
      setImdbLink(event.target.value)
    }
    
    function updateEmail(event){
      setEmail(event.target.value)
    }

  function handleInfoSubmit() {
    console.log("Starting")
    // CHANGE EMAIL WITH FIREBASE API
    let returnJSON = {
      email: window.localStorage["email"],
    }
    if(firstName) {
      returnJSON["firstName"] = firstName
    }
    if(lastName) {
      returnJSON["lastName"] = lastName
    }
    if (imdbLink) {
      returnJSON["imdbLink"] = imdbLink
    }

    const config = {
      headers: {
        Authorization: window.localStorage.FBIdToken,
    }
    }
    axios.post(FIREBASEURL + "/modifyUserInfo", returnJSON, config)
    .then((res)=> {
      if(res.data.error){
        alert(res.data.error)
      }
      else {
        alert("Account Modifications Made!")
        setAccountContext("/account")
      }
    })
      
    .catch(err => {alert(err.message)})
  }


  return (
    <div className="body-4">
  <div className="fixed-background-account-pages"></div>
  <SignedInNavbar/>
  <div className="section-8">
    <div className="account-info-container w-container">
      <a href="account.html" className="back-to-account-link w-inline-block">
        <div className="html-embed-6 w-embed"><svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3.33333H2.55333L4.94 0.94L4 0L0 4L4 8L4.94 7.06L2.55333 4.66667H12V3.33333Z" fill="#7994C3"></path>
          </svg></div>
        <div className="back-to-account-text">Back to account</div>
      </a>
      <div className="account-info-card">
        <div className="account-info-card-title">Update Account Details</div>
        <div className="w-form">
          <form id="email-form" name="email-form" data-name="Email Form">
            <div className="w-layout-grid grid-19">
              <div className="div-block-58 w-clearfix"><label for="first-name" className="account-info-field-label">First Name</label><input type="text" className="account-info-text-field w-input" maxlength="256" name="first-name" data-name="first-name" placeholder={window.localStorage["firstName"]} id="first-name" onChange = {updateFirstName}/></div>
              <div className="div-block-58 w-clearfix"><label for="last-name-2" className="account-info-field-label">Last Name</label><input type="text" className="account-info-text-field w-input" maxlength="256" name="last-name" data-name="last-name" placeholder={window.localStorage["lastName"]} id="last-name" onChange = {updateLastName}/></div>
              <div className="div-block-58 w-clearfix"><label for="email" className="account-info-field-label">Email</label><input type="text" className="account-info-text-field w-input" maxlength="256" name="email" data-name="email" placeholder={window.localStorage["email"]} id="email" onChange={updateEmail}/></div>
              <div className="div-block-58 w-clearfix"><label for="lmdb-link" className="account-info-field-label">IMDb link</label><input type="text" className="account-info-text-field w-input" maxlength="256" name="lmdb-link" data-name="lmdb-link" placeholder={window.localStorage["imdbLink"]} id="lmdb-link" onChange={updateImdbLink}/></div>
            </div><input type="submit" onClick={handleInfoSubmit} value="SUBMIT" data-wait="Please wait..." className="submit-button-3 w-button"/>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          
        </div>
      </div>
      <div className="account-info-card">
        <div className="account-info-card-title">Password Reset</div>
        <div className="w-form">
          <form><input onClick={handlePasswordReset} type="submit" value="RESET LINK" data-wait="Please wait..." className="submit-button-3 w-button"/></form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
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
