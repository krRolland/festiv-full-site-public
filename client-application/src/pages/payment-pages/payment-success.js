import React, {useEffect} from "react"

export default function PaymentSuccess(){
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
    return(
        <div>
  <div className="fixed-background-signin"></div>
  <div data-collapse="medium" data-animation="default" data-duration="400" id="navbar-home-transparent" role="banner" className="navbar navbar-home w-nav">
    <a href="index.html" className="brand w-nav-brand"><img src="images/blue-festiv-logo-with-text.png" width="101" id="festiv-logo-navbar" sizes="(max-width: 479px) 80px, (max-width: 767px) 100px, 101px" srcset="images/blue-festiv-logo-with-text-p-500.png 500w, images/blue-festiv-logo-with-text-p-800.png 800w, images/blue-festiv-logo-with-text-p-1080.png 1080w, images/blue-festiv-logo-with-text.png 1280w" alt="" className="image-32"/></a>
    <nav role="navigation" className="nav-menu-2 w-nav-menu">
      <a href="sign-up.html" className="button w-button">START FREE TODAY</a>
      <a href="sign-in.html" className="button w-button">MY ACCOUNT</a>
      <a href="sign-up.html" className="button mobile-sign-in w-button">SIGN UP</a>
      <a href="#" className="button mobile-sign-in w-button">MY ACCOUNT</a>
    </nav>
    <div className="script-for-popup-navbar w-embed w-script">



    </div>
    <div className="menu-button w-nav-button">
      <div className="icon-5 w-icon-nav-menu"></div>
    </div>
  </div>
  <div className="section-11">
    <div className="sign-in-container w-container">
      <h1 className="sign-in-title">SUCCESS!</h1>
      <h1 className="success-message">Your submission payment was successful. Or team will reach out to you regarding the status of you application.</h1>
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

    )}