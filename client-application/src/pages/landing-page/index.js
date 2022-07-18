import React, {useEffect} from "react"
// import landingPage from './landing-page.html'

function LandingPage() {
  useEffect(() => {
  let slideArray = document.getElementsByClassName('tabs-menu')[0].childNodes;
    let tempArray = []; 
    for (let i = 0; i < slideArray.length; i ++) {
      if (slideArray[i].classList != null) {
        tempArray.push(slideArray[i]);
      }
    }
    slideArray = tempArray; 
    //returns current slide index 
    function getCurr() {
        if (slideArray[0].classList.contains('w--current')) {return 0;}
        if (slideArray[1].classList.contains('w--current')) {return 1;}
        else {return 2;}
    }
    let signInNavbar = document.getElementById("sign-in-navbar-button");
    let signUpNavbar = document.getElementById("sign-up-navbar-button");
    let navbarImage = document.getElementById("festiv-logo-navbar");
    function makeNavbarWhite() {

      signInNavbar.style.backgroundColor = "rgba(0,0,0,0)";
      signInNavbar.style.color = "white";
      signUpNavbar.style.color = "white";
      //Also Need To Swap Out Logo With White Logo
      navbarImage.srcset = "images/white-festiv-logo.png 500w, images/white-festiv-logo.png 800w, images/white-festiv-logo.png 1080w, images/white-festiv-logo.png 1280w" 
    } 
    function makeNavbarBlue() {

      signInNavbar.style.backgroundColor = "rgba(0,0,0,0)";
      signInNavbar.style.color = "#333e51";
      signUpNavbar.style.color = "#333e51";
      //Swap White Logo For Original Blue Logo
      navbarImage.srcset = "images/blue-festiv-logo-with-text.png 500w, images/blue-festiv-logo-with-text.png 800w, images/blue-festiv-logo-with-text.png 1080w, images/blue-festiv-logo-with-text.png 1280w" 
    } 
    window.addEventListener('scroll', function () {
      let navbar = document.getElementById("navbar-home-transparent"); 
      // Set starting position
      if (window.pageYOffset >= 100) {
        navbar.style.backgroundColor = "rgba(255,255,255,1)"; 
        makeNavbarBlue();
      } else {
        navbar.style.backgroundColor = "rgba(255,255,255,0)"; 
        if (getCurr() !==1) {makeNavbarWhite();}
        else {makeNavbarBlue();} 
      } 
      });
    slideArray[0].addEventListener('click', () => { if(window.scrollY < 100) {setTimeout(makeNavbarWhite, 100);}});
    slideArray[1].addEventListener('click', () => { if(window.scrollY < 100) {setTimeout(makeNavbarBlue, 100);}});
    slideArray[2].addEventListener('click', () => { if(window.scrollY < 100) {setTimeout(makeNavbarWhite, 100);}});
    makeNavbarWhite()
  
  } )
    
  return (
      <div className="body">
  <div data-collapse="medium" data-animation="default" data-duration="400" id="navbar-home-transparent" role="banner" className="navbar navbar-home w-nav">
    <a href="index.html" aria-current="page" className="brand brand-3 w-nav-brand w--current"><img src="images/white-festiv-logo.png" width="114" id="festiv-logo-navbar" sizes="(max-width: 479px) 80px, (max-width: 767px) 100px, 114px" srcSet="images/white-festiv-logo.png 500w, images/white-festiv-logo.png 800w, images/white-festiv-logo.png 1080w, images/white-festiv-logo.png 1280w" alt="" className="image-32"/></a>
    <nav role="navigation" className="nav-menu-2 w-nav-menu">
      <a href="sign-up.html" className="button mobile-sign-in w-button">START FREE</a>
      <a href="sign-in.html" className="button mobile-sign-in w-button">MY ACCOUNT</a>
      <a href="sign-up.html" id="sign-up-navbar-button" className="button _1234 w-button">START FREE TODAY</a>
      <a href="sign-in.html" id="sign-in-navbar-button" className="button my-account-button w-button">MY ACCOUNT</a>
    </nav>
    <div className="script-for-popup-navbar w-embed w-script">

    </div>
    <div className="menu-button w-nav-button">
      <div className="icon-5 w-icon-nav-menu"></div>
    </div>
  </div>
  <div className="section-5">
    <div data-duration-in="1000" data-easing="ease-in-out-quad" data-duration-out="500" className="w-tabs">
      <div className="tabs-content w-tab-content">
        <div data-w-tab="Tab 1" className="tab-pane-tab-1 w-clearfix w-tab-pane w--tab-active">
          <div className="div-block-65"><img src="images/new_filmmakers.png" loading="lazy" sizes="(max-width: 1919px) 100vw, 1500.76171875px" srcSet="images/new_filmmakers-p-500.png 500w, images/new_filmmakers-p-800.png 800w, images/new_filmmakers-p-1080.png 1080w, images/new_filmmakers-p-1600.png 1600w, images/new_filmmakers.png 1721w" alt="" className="image-45"/>
            <div className="w-layout-grid grid-24"><img src="images/filmmaker-background-mobile-two.png" loading="lazy" alt="" className="image-48"/></div>
          </div>
          <div className="w-layout-grid grid">
            <div id="w-node-df168eede505-aa9849fb" className="div-block-4"><img src="images/the-filmmakers-marketplace-large.png" loading="lazy" sizes="(max-width: 479px) 84vw, 100vw" srcSet="images/the-filmmakers-marketplace-large.png 500w, images/the-filmmakers-marketplace-large.png 800w, images/the-filmmakers-marketplace-large.png 1216w" alt="" className="image-44"/>
              <div className="text-block-2">Get Discovered</div>
              <a id="homepage-conversion-button" href="submit-films.html" className="button-2 w-button">SUBMIT FILM</a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 2" className="tab-pane-tab-2 w-tab-pane">
          <div className="div-block-66"><img src="images/new_distributors.png" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1439px) 1113.92578125px, 1494.08203125px" srcSet="images/new_distributors-p-500.png 500w, images/new_distributors-p-800.png 800w, images/new_distributors-p-1080.png 1080w, images/new_distributors-p-1600.png 1600w, images/new_distributors.png 1899w" alt="" className="image-46"/>
            <div className="w-layout-grid grid-22"><img src="images/distributor-background-mobile.png" loading="lazy" width="412" sizes="(max-width: 479px) 100vw, (max-width: 767px) 411.9921875px, 100vw" srcSet="images/distributor-background-mobile-p-500.png 500w, images/distributor-background-mobile.png 526w" alt="" className="image-49"/></div>
          </div>
          <div className="w-layout-grid grid">
            <div id="w-node-86a765efe3ee-aa9849fb" className="div-block-4"><img src="images/the-film-buyers-marketplace.png" loading="lazy" width="504" sizes="(max-width: 479px) 70vw, (max-width: 767px) 332.44140625px, (max-width: 991px) 49vw, 490.21484375px" srcSet="images/the-film-buyers-marketplace-p-500.png 500w, images/the-film-buyers-marketplace.png 748w" alt="" className="image-43"/>
              <h1 className="heading-7">Discover the best new films</h1>
              <a id="homepage-conversion-button" href="sign-up.html" className="button-2 action-button-white action-button-blue w-button">START FREE TODAY</a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 3" className="tab-pane-tab-3 w-tab-pane">
          <div className="div-block-67"><img src="images/new_audeiences.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 615.625px, (max-width: 991px) 89vw, (max-width: 1439px) 881.46484375px, 1182.28515625px" srcSet="images/new_audeiences-p-500.png 500w, images/new_audeiences-p-800.png 800w, images/new_audeiences-p-1080.png 1080w, images/new_audeiences.png 1325w" alt="" className="image-47"/>
            <div className="w-layout-grid grid-23"><img src="images/audience-mobile-vire.png" loading="lazy" width="554" sizes="100vw" srcSet="images/audience-mobile-vire-p-500.png 500w, images/audience-mobile-vire.png 661w" alt="" className="image-50"/></div>
          </div>
          <div className="w-layout-grid grid">
            <div id="w-node-804838ccba26-aa9849fb" className="div-block-3">
              <h1 className="heading-6">Stream the newest films,<br/>updated daily!</h1>
              <div>
                <a id="homepage-conversion-button" href="sign-up.html" className="button-2 action-button-white w-button">START FREE TODAY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-menu w-tab-menu">
        <a data-w-tab="Tab 1" className="three-different-tabs filmmakers-tab w-inline-block w-tab-link w--current">
          <div className="text-block-5">FILMMAKERS</div>
        </a>
        <a data-w-tab="Tab 2" className="three-different-tabs distributors-tab w-inline-block w-tab-link">
          <div className="text-block-22">DISTRIBUTORS</div>
        </a>
        <a data-w-tab="Tab 3" className="three-different-tabs audiences-tab w-inline-block w-tab-link">
          <div className="text-block-23">AUDIENCE</div>
        </a>
      </div>
    </div>
  
  
  </div>
  <div className="div-block-10">
    <div className="featured-films-title-homepage">FEATURED</div>
  </div>
  <div className="section-7">
    <div className="code-for-film-grid w-embed">
      <style>{"\
        .movie-description:hover {\
          opacity:1;\
        }\
      "}
</style>
    </div>
    <div className="film-grid-section">
      <div className="film-grid-container">
        <div id="films-grid" className="w-layout-grid film-grid">
          <div className="film-entry">
            <div id="ivote-film" className="movie-div-wrapper">
              <div className="movie-description ivote-description">
                <div className="div-block-19">
                  <div className="div-block-18">
                    <div className="w-layout-grid grid-10">
                      <div id="w-node-ef6ffb6b3c42-aa9849fb" className="div-block-20">
                        <div className="movie-description-grid-title we-the-children-title">IVOTE</div>
                        <div className="movie-description-grid-year wtf-year">2012</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-21">
                  <div className="movie-description-grid-description wth-desc">Steve is faced with a dilemma when he discovers that the company he works for helped to hide that e-voting machines were fraudulent in the 2004 election.</div>
                  <div className="movie-description-grid-stats we-the-children-time">21 min | English | USA</div>
                </div>
              </div><img src="images/ivote-keyart-vertical-hq.png" srcSet="images/ivote-keyart-vertical-hq-p-500.png 500w, images/ivote-keyart-vertical-hq.png 738w" sizes="(max-width: 479px) 135px, 200px" alt="" className="movie-image"/>
            </div>
            <div className="film-grid-card-title">
              <div className="text-block-3">IVOTE</div>
            </div>
          </div>
          <div className="film-entry">
            <div id="the-god-chair-film" className="movie-div-wrapper">
              <div className="movie-description the-god-chair-description">
                <div className="div-block-19">
                  <div className="div-block-18">
                    <div className="w-layout-grid grid-10">
                      <div id="w-node-ef6ffb6b3c58-aa9849fb" className="div-block-20">
                        <div className="movie-description-grid-title tgc-title">THE GOD<br/>CHAIR</div>
                        <div className="movie-description-grid-year tgc-year">2016</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-21">
                  <div className="movie-description-grid-description tgc-dsc">Three celestial beings tasked with guiding the newly-deceased. As they sit in the God Chair, they struggle to determine how they are supposed to do their duty or why.</div>
                  <div className="movie-description-grid-stats tgc-stats">14 min | English | USA</div>
                </div>
              </div><img src="images/the-god-chair.png" srcSet="images/the-god-chair-p-500.png 500w, images/the-god-chair-p-800.png 800w, images/the-god-chair-p-1080.png 1080w, images/the-god-chair.png 1200w" sizes="(max-width: 479px) 135px, 200px" alt="" className="movie-image"/>
            </div>
            <div className="film-grid-card-title">
              <div className="text-block-3">THE GOD CHAIR</div>
            </div>
          </div>
          <div className="film-entry">
            <div id="out-with-a-bang-film" className="movie-div-wrapper">
              <div className="movie-description out-with-a-bang-description">
                <div className="div-block-19 owab-title-wrapper">
                  <div className="div-block-18">
                    <div className="w-layout-grid grid-10">
                      <div id="w-node-ef6ffb6b3c70-aa9849fb" className="div-block-20">
                        <div className="movie-description-grid-title owab-title">OUT WITH <br/>A BANG</div>
                        <div className="movie-description-grid-year owab-desc">2016</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-21">
                  <div className="movie-description-grid-description owab-desc">A suicidal man discovers that life is worth fighting for, if only for a moment.</div>
                  <div className="movie-description-grid-stats owab-stats">15 min | English | USA</div>
                </div>
              </div><img src="images/out-with-a-bang.png" srcSet="images/out-with-a-bang-p-500.png 500w, images/out-with-a-bang-p-800.png 800w, images/out-with-a-bang-p-1080.png 1080w, images/out-with-a-bang.png 1200w" sizes="(max-width: 479px) 135px, 200px" alt="" className="movie-image"/>
            </div>
            <div className="film-grid-card-title">
              <div className="text-block-3">OUT WITH A BANG</div>
            </div>
          </div>
          <div className="film-entry">
            <div id="evie-film" className="movie-div-wrapper">
              <div className="movie-description evie-description">
                <div className="div-block-19">
                  <div className="div-block-18">
                    <div className="w-layout-grid grid-10">
                      <div id="w-node-ef6ffb6b3c88-aa9849fb" className="div-block-20">
                        <div className="movie-description-grid-title evie-title">EVIE</div>
                        <div className="movie-description-grid-year evie-year">2019</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-21">
                  <div className="movie-description-grid-description evie-desc">Facing either the wrath of her parents or a forced marriage to a man more than twice her age, fifteen-year-old Evie makes an impossible choice.</div>
                  <div className="movie-description-grid-stats evie-stats">11 min | English | USA</div>
                </div>
              </div><img src="images/evie.png" srcSet="images/evie-p-500.png 500w, images/evie-p-800.png 800w, images/evie-p-1080.png 1080w, images/evie.png 1200w" sizes="(max-width: 479px) 135px, 200px" alt="" className="movie-image"/>
            </div>
            <div className="film-grid-card-title">
              <div className="text-block-3">EVIE</div>
            </div>
          </div>
          <div className="film-entry">
            <div id="lost-and-found-film" className="movie-div-wrapper">
              <div className="movie-description lost-and-found-description">
                <div className="div-block-19">
                  <div className="div-block-18">
                    <div className="w-layout-grid grid-10">
                      <div id="w-node-ef6ffb6b3c9e-aa9849fb" className="div-block-20">
                        <div className="movie-description-grid-title laf-title">LOST &amp; FOUND</div>
                        <div className="movie-description-grid-year laf-year">2017</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-21">
                  <div className="movie-description-grid-description laf-dsc">Karma’s a bitch. Especially when you are one.</div>
                  <div className="movie-description-grid-stats laf-stats">6 min | English | USA</div>
                </div>
              </div><img src="images/lost-and-found.png" srcSet="images/lost-and-found-p-500.png 500w, images/lost-and-found-p-800.png 800w, images/lost-and-found-p-1080.png 1080w, images/lost-and-found.png 1200w" sizes="(max-width: 479px) 135px, 200px" alt="" className="movie-image"/>
            </div>
            <div className="film-grid-card-title">
              <div className="text-block-3">LOST &amp; FOUND</div>
            </div>
          </div>
          <div className="film-entry">
            <div id="crappy-birthday-film" className="movie-div-wrapper">
              <div className="movie-description cb-description">
                <div className="div-block-19">
                  <div className="div-block-18">
                    <div className="w-layout-grid grid-10">
                      <div id="w-node-ef6ffb6b3cb4-aa9849fb" className="div-block-20">
                        <div className="movie-description-grid-title cb-title">CRAPPY<br/>BIRTHDAY</div>
                        <div className="movie-description-grid-year cb-year">2018</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-21">
                  <div className="movie-description-grid-description cb-dsc">When Matt’s wife ditches him on his birthday for a free ticket to Coachella, he ends up with a birthday present that will change his life.</div>
                  <div className="movie-description-grid-stats cb-stats">11 min | English | USA</div>
                </div>
              </div><img src="images/crappy-birthday.png" srcSet="images/crappy-birthday-p-500.png 500w, images/crappy-birthday-p-800.png 800w, images/crappy-birthday-p-1080.png 1080w, images/crappy-birthday.png 1200w" sizes="(max-width: 479px) 135px, 200px" alt="" className="movie-image"/>
            </div>
            <div className="film-grid-card-title">
              <div className="text-block-3">CRAPPY BIRTHDAY</div>
            </div>
          </div>
        </div>
      </div>
      <div className="html-embed-5 w-embed w-script">
      </div>
    </div>
  </div>
  <div className="spacer-div"><img src="images/white-festiv-logo.png" sizes="100vw" srcSet="images/white-festiv-logo-p-500.png 500w, images/white-festiv-logo.png 1019w" alt="" className="image-25"/><img src="images/white-magnifying-glass.png" alt="" className="image-29"/></div>
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
        <a href="index.html" aria-current="page" className="w-inline-block w--current"><img src="images/festiv-logo-black.png" width="24" alt="" className="image-2"/>
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

export default LandingPage