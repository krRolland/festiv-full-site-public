import React, {useState, useEffect} from "react"
import SignedOutNavbar from "../../components/navbar/signed-out-navbar"

export default function SignUp() {
    useEffect(()=> {
        // Navbar Js
            let signInNavbar = document.getElementById("sign-in-navbar-button");
          let navbarImage = document.getElementById("festiv-logo-navbar");
          let navbar = document.getElementById("navbar-home-transparent"); 
          window.addEventListener('scroll', function () {
            // Set starting position
            if (window.pageYOffset >= 60) {
              navbar.style.backgroundColor = "rgba(255,255,255,1)"; 
            } else {
              navbar.style.backgroundColor = "rgba(255,255,255,0)"; 
            }});
    })

    return(
        <div className="body-2">
  <SignedOutNavbar />
  <div className="section">
    <div className="html-embed-4 w-embed w-script">
    </div>
    <h1 className="heading-2 select-your-plan-heading">SELECT YOUR MEMBERSHIP</h1>
    <div className="mobile-plan-title-grid">
      <div className="w-layout-grid grid-13">
        <div>
          <div className="mobile-plan-titles">DISTRIBUTOR</div>
        </div>
        <div>
          <div className="mobile-plan-titles">FILMMAKER</div>
        </div>
        <div>
          <div className="mobile-plan-titles">AUDIENCE</div>
        </div>
      </div>
    </div>
    <div className="mobile-buttons">
      <div className="w-layout-grid grid-12">
        <a href="#distributor-div-block" className="link-block-5 w-inline-block">
          <div className="div-block-29"></div>
        </a>
        <a href="#filmmaker-div-block" className="link-block-4 w-inline-block">
          <div className="div-block-30"></div>
        </a>
        <a href="#audience-div-block" className="link-block-3 w-inline-block">
          <div className="div-block-31"></div>
        </a>
      </div>
      <div className="arrow-wrapper"><img src="images/downfacing-arrow.png" width="24" alt=""/></div>
    </div>
    <div className="div-block-63">
      <div id="content-container-mobile" className="div-block-5 select-plan-card-wrapper-mobile">
        <div className="w-layout-grid grid-2 select-membership-mobile-card-grid">
          <div id="distributor-div-block" className="plan-card-div w-node-24a2883a9075-ee9849ff">
            <div className="plan-title-wrapper">
              <div className="select-plan-title-text">DISTRIBUTOR</div>
            </div>
            <div className="select-plan-image"><img src="images/business-image-cropped-2.png" width="320" sizes="(max-width: 479px) 300px, (max-width: 767px) 54vw, (max-width: 991px) 56vw, 950px" srcset="images/business-image-cropped-2-p-500.png 500w, images/business-image-cropped-2-p-800.png 800w, images/business-image-cropped-2-p-1080.png 1080w, images/business-image-cropped-2-p-2000.png 2000w, images/business-image-cropped-2.png 2399w" alt="" className="plan-image"/>
              <div className="hidden-description">
                <div className="plan-card-icon-wor"><img src="images/distributor-icon.png" alt="" className="image-17"/></div>
                <div className="plan-card-title-row">
                  <div className="text-block-20">CLICK. <br/>SCREEN. BUY.</div>
                </div>
                <div className="plan-card-description-row">
                  <div className="text-block-21 distributor-description">▸ Exclusive 60-day access window to screen<br/>▸ Contact filmmakers directly<br/>▸ Easy brokerage, get deals done<br/>▸ Screen films missed at festivals<br/>▸ Movies from around the world</div>
                </div>
                <div className="plan-card-button-row">
                  <a id="distributor-plan-button" href="https://subscriptions.festivmedia.com/distributor" className="select-plan-button w-button">$29.95/month</a>
                </div>
              </div>
            </div>
          </div>
          <div id="filmmaker-div-block" className="plan-card-div w-node-9d18383b2384-ee9849ff">
            <div className="plan-title-wrapper">
              <div id="hidden-description-filmmaker" className="select-plan-title-text">FILMMAKER</div>
            </div>
            <div className="select-plan-image"><img src="images/filmmaker-image-cropped-2.png" width="320" sizes="(max-width: 479px) 300px, (max-width: 767px) 54vw, (max-width: 991px) 56vw, 950px" srcset="images/filmmaker-image-cropped-2-p-500.png 500w, images/filmmaker-image-cropped-2-p-800.png 800w, images/filmmaker-image-cropped-2-p-1080.png 1080w, images/filmmaker-image-cropped-2.png 1333w" alt="" className="plan-image"/>
              <div className="hidden-description">
                <div className="plan-card-icon-wor"><img src="images/filmmaker-icon.png" alt="" className="image-17"/></div>
                <div className="plan-card-title-row">
                  <div className="text-block-20">YOUR RED<br/>CARPET AWAITS.</div>
                </div>
                <div className="plan-card-description-row">
                  <div className="text-block-21">▸ Access to top decision makers<br/>▸ 3 months free for Cast &amp; Crew<br/>▸ Unlimited global screenings<br/>▸ Marketing support and promotion<br/>▸ Site gross revenue participation</div>
                </div>
                <div className="plan-card-button-row">
                  <a id="filmmaker-plan-button" href="https://subscriptions.festivmedia.com/filmmaker" className="select-plan-button w-button">$4.39/month</a>
                </div>
              </div>
            </div>
          </div>
          <div id="audience-div-block" className="plan-card-div w-node-43dfde75b9ee-ee9849ff">
            <div className="plan-title-wrapper">
              <div id="hidden-description-audience" className="select-plan-title-text">AUDIENCE</div>
            </div>
            <div className="select-plan-image"><img src="images/audience-image-cropped-2.png" width="320" sizes="(max-width: 479px) 300px, (max-width: 767px) 54vw, (max-width: 991px) 56vw, 950px" srcset="images/audience-image-cropped-2-p-500.png 500w, images/audience-image-cropped-2-p-800.png 800w, images/audience-image-cropped-2-p-1080.png 1080w, images/audience-image-cropped-2.png 2399w" alt="" className="plan-image"/>
              <div className="hidden-description">
                <div className="plan-card-icon-wor"><img src="images/audiences-icon.png" alt="" className="image-17"/></div>
                <div className="plan-card-title-row">
                  <div className="text-block-20">SHOES OFF.<br/>MOVIES ON.</div>
                </div>
                <div className="plan-card-description-row">
                  <div className="text-block-21 audience-description">▸  Stream from any device anytime<br/>▸  New films launched daily<br/>▸  Watch festival and student films<br/>▸  View films, get points, win prizes<br/>▸  Connect with global movie fans</div>
                </div>
                <div className="plan-card-button-row">
                  <a href="#" className="select-plan-button select-plan-unavailable w-button">COMING SOON</a>
                </div>
              </div>
            </div>
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