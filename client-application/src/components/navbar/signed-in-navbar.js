
import React from "react"

export default function SignedInNavbar() {

    function submitFilmInsert() {
        if(window.localStorage["accountType"] === "filmmaker") {
          return <a href="submit-films.html" className="nav-link-2 w-nav-link">SUBMIT FILM</a>
        }
        else {return null}
      }

    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar w-nav">
    <a href="subscriber-homepage.html" aria-current="page" className="brand brand-2 w-nav-brand w--current"><img src="images/blue-festiv-logo-with-text.png" width="105" sizes="(max-width: 479px) 85px, 105px" srcset="images/blue-festiv-logo-with-text-p-500.png 500w, images/blue-festiv-logo-with-text-p-800.png 800w, images/blue-festiv-logo-with-text-p-1080.png 1080w, images/blue-festiv-logo-with-text.png 1280w" alt="" className="image-33"/></a>
    <nav role="navigation" className="nav-menu w-nav-menu">
      {submitFilmInsert()}
      <a href="account.html" className="link-block-11 w-inline-block"><img src="images/user-icon.png" width="28" alt="" className="image-13"/>
    <div className="navbar-username" style= {{textTransform: "uppercase"}}>{localStorage["firstName"]}</div>
      </a>
    </nav>
    <div className="menu-button-3 w-nav-button">
      <div className="w-icon-nav-menu"></div>
    </div>
    <div className="submit-films-js w-embed w-script">
    </div>
  </div>
    )
} 

