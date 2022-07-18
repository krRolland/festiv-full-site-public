import React, {useEffect} from "react"
import SignedOutNavbar from "../components/navbar/signed-out-navbar"

export default function SelectFilmSubmission() {
    


    return(
        <div>
  <div className="div-block-62"></div>
  <SignedOutNavbar/>
  <div className="section-12">
    <div className="container-5 w-container">
      <h1 className="submit-your-film-title">Choose Your Project Type</h1>
      <div className="text-block-42">What type of project are you submitting for?</div>
      <div className="w-layout-grid grid-21 submission-type-grid">
        <div className="submission-steps-card submission-type-card">
          <div className="steps-card-title">OPTION 1</div>
          <div className="text-block-45">Feature Film</div>
          <div className="text-block-46">$225</div>
          <a href="https://payments.festivmedia.com/feature-film" target="_blank" className="button-6 submit-now-button w-button">PAY NOW</a>
          <div className="powered-by-wrapper">
            <div className="text-block-47">Powered by</div><img src="images/stripe-dark-logo.png" loading="lazy" width="35" alt="" className="image-42"/>
          </div>
        </div>
        <div className="submission-steps-card submission-type-card">
          <div className="steps-card-title">OPTION 2</div>
          <div className="text-block-45">Short Film</div>
          <div className="text-block-46">$129</div>
          <a href="https://payments.festivmedia.com/short-film" target = "_blank" className="button-6 submit-now-button w-button">PAY NOW</a>
          <div className="powered-by-wrapper">
            <div className="text-block-47">Powered by</div><img src="images/stripe-dark-logo.png" loading="lazy" width="35" alt="" className="image-42"/>
          </div>
        </div>
        <div className="submission-steps-card submission-type-card">
          <div className="steps-card-title">OPTION 3</div>
          <div className="text-block-45">Student Film</div>
          <div className="text-block-46">$85</div>
          <a href="https://payments.festivmedia.com/student-film" target = "_blank" className="button-6 submit-now-button w-button">PAY NOW</a>
          <div className="powered-by-wrapper">
            <div className="text-block-47">Powered by</div><img src="images/stripe-dark-logo.png" loading="lazy" width="35" alt="" className="image-42"/>
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