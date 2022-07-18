import React, {useEffect} from "react"
import SignedOutNavbar from "../components/navbar/signed-out-navbar"
export default function HowItWorks(){
    
    return(
        <div className="body-2">
  <SignedOutNavbar></SignedOutNavbar>
  
  <div className="section">
    <h1 className="heading-2 select-your-plan-heading">HOW IT WORKS</h1>
    <div className="mobile-plan-title-grid">
      <div className="w-layout-grid grid-13">
        <div>
          <div className="mobile-plan-titles mobile-how-it-works-titles">1. ACQUISITION<br/>PERIOD</div>
        </div>
        <div>
          <div className="mobile-plan-titles mobile-how-it-works-titles">2. OTT<br/>DISTRIBUTION</div>
        </div>
        <div>
          <div className="mobile-plan-titles mobile-how-it-works-titles">3. THEATRICAL<br/>DISTRIBUTION</div>
        </div>
      </div>
    </div>
    <div className="mobile-buttons">
      <div className="w-layout-grid grid-12">
        <a href="#distributor-div-block" className="link-block-5 w-inline-block">
          <div className="div-block-29 acquisition-mobile-image"></div>
        </a>
        <a href="#filmmaker-div-block" className="link-block-4 w-inline-block">
          <div className="div-block-30 oot-mobile-image"></div>
        </a>
        <a href="#audience-div-block" className="link-block-3 w-inline-block">
          <div className="div-block-31 theatrical-mobile-image"></div>
        </a>
      </div>
      <div className="arrow-wrapper"><img src="images/downfacing-arrow.png" width="24" alt=""/></div>
    </div>
    <div className="div-block-64">
      <div className="div-block-5 wrapper-how-it-works-mobile-cards">
        <div className="w-layout-grid grid-2 how-it-works-grid">
          <div id="distributor-div-block" className="plan-card-div plan-card-div-how-it-works w-node-24a2883a9075-70984a02">
            <div className="plan-title-wrapper">
              <div className="select-plan-title-text how-it-works-title-text">1. ACQUISITION<br/>PERIOD</div>
            </div>
            <div className="select-plan-image select-plan-image-how-it-works"><img src="images/acquisition-period.png" width="320" sizes="(max-width: 479px) 280px, (max-width: 767px) 320px, (max-width: 991px) 56vw, 950px" srcSet="images/acquisition-period-p-500.png 500w, images/acquisition-period.png 698w" alt="" className="plan-image"/>
              <div className="hidden-description hidden-description-how-it-works">
                <div className="plan-card-description-row">
                  <div className="text-block-21 how-it-works-description">Accepted films get 2 months of exclusive, distributor-only screenings for acquisition consideration.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="filmmaker-div-block" className="plan-card-div plan-card-div-how-it-works w-node-9d18383b2384-70984a02">
            <div className="plan-title-wrapper">
              <div id="hidden-description-filmmaker" className="select-plan-title-text how-it-works-title-text">2. OTT<br/>DISTRIBUTION</div>
            </div>
            <div className="select-plan-image select-plan-image-how-it-works"><img src="images/oot-distribution.png" width="320" sizes="(max-width: 479px) 280px, (max-width: 767px) 320px, (max-width: 991px) 56vw, 950px" srcSet="images/oot-distribution-p-500.png 500w, images/oot-distribution.png 698w" alt="" className="plan-image"/>
              <div className="hidden-description hidden-description-how-it-works">
                <div className="plan-card-description-row">
                  <div className="text-block-21 how-it-works-description oot-description">Accepted films not acquired get unlimited audience screenings on any device. </div>
                </div>
              </div>
            </div>
          </div>
          <div id="audience-div-block" className="plan-card-div plan-card-div-how-it-works w-node-43dfde75b9ee-70984a02">
            <div className="plan-title-wrapper">
              <div id="hidden-description-audience" className="select-plan-title-text how-it-works-title-text">3. THEATRICAL<br/>DISTRIBUTION</div>
            </div>
            <div className="select-plan-image select-plan-image-how-it-works"><img src="images/theatrical-distribution.png" width="320" sizes="(max-width: 479px) 280px, (max-width: 767px) 320px, (max-width: 991px) 56vw, 950px" srcSet="images/theatrical-distribution-p-500.png 500w, images/theatrical-distribution.png 698w" alt="" className="plan-image"/>
              <div className="hidden-description hidden-description-how-it-works">
                <div className="plan-card-description-row">
                  <div className="text-block-21 how-it-works-description theatrical-distribution-description">Festiv top films annually can get theatrical distribution.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="heading-2 select-your-plan-heading final-headline-how-it-works">ENJOY THE ANNUAL SUMMERTIME FILM SHOWCASE IN SOUTHERN CALIFORNIA</h1>
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
        <a href="how-it-works.html" aria-current="page" className="link-block w-inline-block w--current">
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