import React, {useEffect} from "react"
export default function SignedOutNavbar() {


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
        <div data-collapse="medium" data-animation="default" data-duration="400" id="navbar-home-transparent" role="banner" className="navbar navbar-home w-nav">
        <a href="index.html" className="brand w-nav-brand"><img src="images/blue-festiv-logo-with-text.png" width="101" id="festiv-logo-navbar" sizes="(max-width: 479px) 80px, (max-width: 767px) 21vw, 100.99609375px" srcset="images/blue-festiv-logo-with-text-p-500.png 500w, images/blue-festiv-logo-with-text-p-800.png 800w, images/blue-festiv-logo-with-text-p-1080.png 1080w, images/blue-festiv-logo-with-text.png 1280w" alt="" className="image-32"/></a>
        <nav role="navigation" className="nav-menu-2 w-nav-menu">
          <a href="sign-up.html" className="button w-button">START FREE TODAY</a>
          <a href="sign-in.html" aria-current="page" className="button w-button w--current">MY ACCOUNT</a>
          <a href="sign-up.html" className="button mobile-sign-in w-button">START FREE TODAY</a>
          <a href="sign-in.html" aria-current="page" className="button mobile-sign-in w-button w--current">MY ACCOUNT</a>
        </nav>
        <div className="script-for-popup-navbar w-embed w-script">
        </div>
        <div className="menu-button w-nav-button">
          <div className="icon-5 w-icon-nav-menu"></div>
        </div>
      </div>
    )
}