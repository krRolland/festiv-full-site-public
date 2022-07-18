import React, { useState, useContext, useEffect } from "react";

export default function SignUp() {
  const nonSelectedColor = "#d9dadc"
      const selectedColor = "rgb(74, 160, 199)"
  
  const accountType = "filmmaker";
  const [signUpError, setSignUpError] = useState('');
  const[successMessage, setSuccessMessage] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [signUpImdbLink, setSignUpImdbLink] = useState('');
  const [billingFrequency, setBillingFrequency] = useState('monthly')
  const [totalCost, setTotalCost] = useState('$0.00 (Free Trial)')

  function isEmailValid() {
    //   For Valid Email: 
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(signUpEmail)) {
        return true
    }
    else {
        return false
    }
  } 
  function isFirstNameValid() {
      if(signUpFirstName){return true}
      else{return false}
  }
  function isLastNameValid(){
    if(signUpLastName){return true}
    else{return false}
  }
  function isImdbLinkValid() {
    if(signUpImdbLink){
        if(signUpImdbLink.includes('imdb.com/name')){
            return true
        }
        else {return false}
    }  
    else {return true}
  }
  function isPasswordValid() {
      if(signUpPassword.length > 5){return true}
      else {return false}
  }
  function handleSignUp(event) {
    event.preventDefault();
    if (!isEmailValid()){
        setSignUpError("Please enter a valid email")
        return
    }
    if(!isFirstNameValid()){
        setSignUpError("Please enter a valid first name")
        return
    }
    if(!isLastNameValid()){
        setSignUpError("Please enter a valid last name")
        return
    }
    if(!isImdbLinkValid()){
        setSignUpError(<div>Your IMDB profile allows us to connect your account to films you've been involved with. <br/>Please enter a valid IMDb link<br/>Example: imdb.com/name/nm000000001</div>)
        return
    }
    if(!isPasswordValid()){
        setSignUpError("Please enter a password containing 6 or more characters")
        return
    }


  }

  

  useEffect(()=>{
      
      // set billing frequency to monthly by default
      let monthlyCircle = document.getElementById("billing-frequency-monthly-select")
      let monthlyButton = document.getElementsByClassName("billing-frequency-button-card")[0]
      let annualCircle =  document.getElementById("billing-frequency-annual-select")
      let annualButton = document.getElementsByClassName("billing-frequency-button-card")[1]


      function handleMonthlyBillingClick(event) {
        
        setBillingFrequency("monthly")
        monthlyCircle.style.backgroundColor = selectedColor
        annualCircle.style.backgroundColor = nonSelectedColor
        setTotalCost("$0.00 (Free Trial)")
      }
      function handleAnnualBillingClick(event) {
        setBillingFrequency("annual")
        monthlyCircle.style.backgroundColor = nonSelectedColor
        annualCircle.style.backgroundColor = selectedColor
        setTotalCost("$45.00")
      }

      monthlyButton.addEventListener('click', handleMonthlyBillingClick)
      annualButton.addEventListener('click', handleAnnualBillingClick)





      let navbar = document.getElementById("sign-up-clear-navbar");
      let signInNavbar = document.getElementById("sign-in-navbar-button");
      let signUpNavbar = document.getElementById("sign-up-navbar-button");
      let navbarImage = document.getElementById("festiv-logo-navbar");
      function makeNavbarWhite() {
        navbar.style.backgroundColor = "rgba(0,0,0,0)";
        signInNavbar.style.color = "white";
        signUpNavbar.style.color = "white";
        //Also Need To Swap Out Logo With White Logo
        navbarImage.srcset = "images/white-festiv-logo.png 500w, images/white-festiv-logo.png 800w, images/white-festiv-logo.png 1080w, images/white-festiv-logo.png 1280w" 
      } 
      function makeNavbarBlue() {
        navbar.style.backgroundColor = "rgba(255,255,255,1)";
        signInNavbar.style.color = "#333e51";
        signUpNavbar.style.color = "#333e51";
        //Swap White Logo For Original Blue Logo
        navbarImage.srcset = "images/blue-festiv-logo-with-text.png 500w, images/blue-festiv-logo-with-text.png 800w, images/blue-festiv-logo-with-text.png 1080w, images/blue-festiv-logo-with-text.png 1280w" 
      } 
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    if (!window.mobileCheck) {
        window.addEventListener('scroll', function () {
        // Set starting position
        if (window.pageYOffset >= 100) {
          navbar.style.backgroundColor = "rgba(255,255,255,1)"; 
          makeNavbarBlue();
        } else {
          navbar.style.backgroundColor = "rgba(255,255,255,0)"; 
          makeNavbarWhite();
        } 
        })
      }
  })
    return (
      <div className="body-5">
  <div className="fixed-backdrop-filmmaker-signup"></div>
  <div data-collapse="medium" data-animation="default" data-duration="400" id="sign-up-clear-navbar" role="banner" className="navbar account-navbar w-nav">
    <a href="index.html" className="brand w-nav-brand"><img src="images/white-festiv-logo.png" width="115" sizes="(max-width: 479px) 100vw, 115px" srcSet="images/white-festiv-logo-p-500.png 500w, images/white-festiv-logo.png 1019w" id="festiv-logo-navbar" alt="" className="image-33 account-info-logo"/></a>
    <a href="index.html" className="brand brand-mobile w-nav-brand"><img src="images/blue-festiv-logo-with-text.png" width="115" sizes="(max-width: 479px) 85px, 100vw" srcSet="images/blue-festiv-logo-with-text-p-500.png 500w, images/blue-festiv-logo-with-text-p-800.png 800w, images/blue-festiv-logo-with-text-p-1080.png 1080w, images/blue-festiv-logo-with-text.png 1280w" id="blue-navbar" alt="" className="image-33 account-info-logo mobile-account-signup-logo"/></a>
    <nav role="navigation" className="nav-menu w-nav-menu">
      <a href="sign-up.html" id="sign-up-navbar-button" className="nav-link account-navbar-link transparent-link w-nav-link">SIGN UP</a>
      <a href="/sign-in" id="sign-in-navbar-button" className="nav-link-2 account-navbar-link transparent-link w-nav-link">MY ACCOUNT</a>
    </nav>
    <div className="html-embed-9 w-embed w-script">
     
    </div>
    <div className="menu-button-2 w-nav-button">
      <div className="icon-6 w-icon-nav-menu"></div>
    </div>
  </div>
  <div className="section-10">
    <div className="container-4 w-container">
      <div className="form-block w-form">
        <form id="email-form" name="email-form" data-name="Email Form" className="form-2">
          <div className="w-layout-grid grid-20">
            <div className="div-block-61">
              <h1 className="account-signup-page-title">Filmmaker</h1>
              <div className="billing-frequency-button-card w-clearfix">
                <div className="text-block-39">MONTHLY</div>
                <div className="plan-cost">$4.39</div>
                <div id="billing-frequency-monthly-select" className="billing-frequency-radio-div" style = {{backgroundColor: selectedColor}}></div>
              </div>
              <div className="billing-frequency-button-card w-clearfix">
                <div className="text-block-39">ANNUALLY</div>
                <div className="plan-cost">$45.00<br/></div>
                <div id="billing-frequency-annual-select" className="billing-frequency-radio-div"></div>
              </div>
              <div className="plan-description">
                <div className="plan-description-title">Your red carpet awaits.</div>
                <div className="plan-description-bullet-text">▸ Access to top decision makers<br/>▸ Unlimited global screenings<br/>▸ Marketing support and promotion<br/>▸ Site gross revenue participation</div>
              </div>
            </div>
            <div className="sign-up-card-wrapper">
              <div className="sign-up-card-title">Start your first month free</div>
              <div className="sign-up-card w-clearfix">
                <div className="sign-up-card-inner-title">Tell us about yourself</div>
                <div className="form-section">
                  <div className="sign-up-form-field-entry w-clearfix"><label for="First-Name" className="sign-up-field-title">First Name</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="Stanley" id="First-Name"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="Last-Name" className="sign-up-field-title">Last Name</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Kubrick" id="Last-Name"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="IMDb" className="sign-up-field-title">IMDb Profile</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="IMDb" data-name="IMDb" placeholder="imdb.com/name/nm0000040/" id="IMDb"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="Email" className="sign-up-field-title">Email</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="kubrick@2001.com" id="Email"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="Password" className="sign-up-field-title">Password</label><input type="password" className="sign-up-text-field w-input" maxlength="256" name="Password" data-name="Password" placeholder="••••••" id="Password"/></div>
                </div>
                <div className="sign-up-card-inner-title">Payment details</div>
                <div className="form-section">
                  <div className="sign-up-form-field-entry w-clearfix"><label for="Card-Name" className="sign-up-field-title">Name on card</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="Card-Name" data-name="Card Name" placeholder="Stanley Kubrick" id="Card-Name"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="Card-Number" className="sign-up-field-title">Card number</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="Card-Number" data-name="Card Number" placeholder="2001 2001 2001 2001" id="Card-Number"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="name-6" className="sign-up-field-title">Expiration</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="11/25" id="name-3"/></div>
                  <div className="sign-up-form-field-entry w-clearfix"><label for="name-6" className="sign-up-field-title">CVV</label><input type="text" className="sign-up-text-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="226" id="name-3"/></div>
                </div>
                <div className="text-block-38">Total</div>
                <div className="total-dollar-amount-sign-up">{totalCost}</div>
              </div><input type="submit" value="START FREE TRIAL" data-wait="Please wait..." className="sign-up-submit-button w-button"/>
            </div>
          </div>
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

