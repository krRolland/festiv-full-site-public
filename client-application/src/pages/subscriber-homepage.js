import React, {useEffect, useContex, useState} from 'react'
import SignedInNavbar from "../components/navbar/signed-in-navbar"

function SubscriberHomepage() {

      useEffect(()=> {
        
      function setFilmLinks() { 
      function rerouteFilm(urlSnippet) {
        window.location = "https://www.festivmedia.com/screening-room-" + urlSnippet;
      } 
      function isMobile(){
        // credit to Timothy Huang for this regex test: 
        // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            return true
       }
       else{
            return false
       }
      } 
      if(isMobile) {
        document.getElementById("ivote-film").addEventListener('click', () => {rerouteFilm('ivote');});
        document.getElementById("the-god-chair-film").addEventListener('click', () => {rerouteFilm('the-god-chair');});
        document.getElementById("out-with-a-bang-film").addEventListener('click', () => {rerouteFilm('out-with-a-bang');});
        document.getElementById("evie-film").addEventListener('click', () => {rerouteFilm('evie');});
        document.getElementById("lost-and-found-film").addEventListener('click', () => {rerouteFilm('lost-and-found');});
        document.getElementById("crappy-birthday-film").addEventListener('click', () => {rerouteFilm('crappy-birthday');});
      } 
    }
    window.onload = setFilmLinks;

  function blurCorrespondingImage() {
    //this.nextSibling.style.filter = "blur(5px);";
    //this.nextSibling.setAttribute("style","-webkit-filter: blur(5px);");
    this.style.transform = "scale(1.03)";
    this.getElementsByClassName("play-button")[0].style.marginTop = "0px";
  }
  function unblurCorrespondingImage() {
  	//this.nextSibling.style.filter = "none";
    //this.nextSibling.style.removeProperty("-webkit-filter");
    this.style.transform = "scale(1)";
    this.getElementsByClassName("play-button")[0].style.marginTop = "10px";
  }
  // Create A Function To Inject Hover Interactions, But Wait For Page To Load First 
  function setMoviesTransitions() {
    let movieDescriptions = document.getElementsByClassName("movie-description"); 
	  for (var i = 0; i < movieDescriptions.length; i++) {
      //Blur The Actual Image, Which Is The Description's Sibling
      movieDescriptions[i].addEventListener('mouseover', blurCorrespondingImage);
      movieDescriptions[i].addEventListener('mouseout', unblurCorrespondingImage); 
    }
  } 
	setMoviesTransitions();

    function stuff() {
      setTimeout(() => {
        let container = document.getElementById("welcome-container"); 
        container.style.paddingTop = "140px";
        container.style.opacity = "1"; 
        function showContent() {
          let welcomeDiv = document.getElementById("fixed-welcome-div");
          welcomeDiv.style.opacity = "0";
          setTimeout( () => {welcomeDiv.style.display = "none";}, 400)
        } 
      let watchButton = document.getElementById("start-watching-button");
      watchButton.addEventListener('click', showContent)
      }, 500);
    } 
  document.addEventListener("DOMContentLoaded", stuff); 
  })
  
  return (
      
<div className="body-3">
  <SignedInNavbar />
  
  <div id="fixed-welcome-div" className="film-popup">
    <div id="welcome-container" className="container-3 w-container">
      <div className="festiv-logo-wrapper-welcome"><img src="images/festiv-logo.svg" loading="lazy" alt="" className="image-41"/></div>
      <div className="welcome-wrapper">
        <div className="welcome-text">WELCOME</div>
      </div>
      <div className="start-watching-button-wrapper">
        <a id="start-watching-button" href="#" className="button-4 w-button">START WATCHING</a>
      </div>
      <div className="html-embed-3 w-embed w-script">
        
      </div>
    </div>
  </div>
  <div className="featured-films">
    <div className="homepage-container">
      <div className="featured-films-title-wrapper">
        <h1 className="heading-4 featured-films-title-subhomepage">FEATURED</h1>
      </div>
      <div data-delay="6000" data-animation="slide" data-autoplay="1" data-easing="ease-in-out" data-duration="700" data-infinite="1" className="slider-4 w-slider">
        <div className="mask-4 w-slider-mask">
          <div className="slide-7 w-slide">
            <div className="w-layout-grid grid-4 grid-11 grid-15"><img src="images/ivote-keyart-vertical-hq.png" width="348" sizes="(max-width: 479px) 133px, (max-width: 767px) 165px, 240px" srcSet="images/ivote-keyart-vertical-hq-p-500.png 500w, images/ivote-keyart-vertical-hq.png 738w" alt="" className="image-7"/>
              <div id="w-node-f1b15410f35f-10984a00" className="div-block-9 ivote-ff-card">
                <div className="w-layout-grid grid-5">
                  <div id="w-node-f1b15410f361-10984a00">
                    <a href="screening-room-ivote.html" className="w-inline-block">
                      <div className="play-button-wrapper-div"><img src="images/white-play-triangle.png" width="23" alt="" className="image-12"/></div>
                    </a>
                  </div>
                  <div id="w-node-f1b15410f365-10984a00" className="div-block-8">
                    <div className="featured-film-card-title">IVOTE</div>
                    <div className="featured-film-card-date">2012</div>
                  </div>
                </div>
                <div className="div-block-27">
                  <div className="featured-film-card-description">Steve is faced with a dilemma when he discovers that the company he works for helped to hide that e-voting machines were fraudulent in the 2004 election.</div>
                </div>
                <div className="div-block-28">
                  <div className="featured-film-card-info">21 min  |  English  |  USA</div>
                </div>
                <div className="featured-film-card-images-wrapper ivote-card-images-wrapper"><img src="images/ivote-screenshot-1.png" width="77" sizes="(max-width: 767px) 100vw, (max-width: 991px) 70.9375px, (max-width: 1919px) 113.5px, 95px" srcSet="images/ivote-screenshot-1-p-500.png 500w, images/ivote-screenshot-1-p-800.png 800w, images/ivote-screenshot-1.png 1345w" alt="" className="film-screenshots-small"/><img src="images/ivote-screenshot-2.png" width="77" sizes="(max-width: 767px) 100vw, (max-width: 991px) 71.35417175292969px, (max-width: 1919px) 114.16667175292969px, 95px" srcSet="images/ivote-screenshot-2-p-500.png 500w, images/ivote-screenshot-2-p-800.png 800w, images/ivote-screenshot-2-p-1080.png 1080w, images/ivote-screenshot-2.png 1353w" alt="" className="film-screenshots-small"/><img src="images/ivote-screenshot-3.png" width="77" sizes="(max-width: 767px) 100vw, (max-width: 991px) 71.35417175292969px, (max-width: 1919px) 114.16667175292969px, 95px" srcSet="images/ivote-screenshot-3-p-500.png 500w, images/ivote-screenshot-3-p-800.png 800w, images/ivote-screenshot-3-p-1080.png 1080w, images/ivote-screenshot-3.png 1353w" alt="" className="film-screenshots-small"/><img src="images/ivote-screenshot-4.png" width="77" sizes="(max-width: 767px) 100vw, (max-width: 991px) 71.22917175292969px, (max-width: 1919px) 113.95833587646484px, 95px" srcSet="images/ivote-screenshot-4-p-500.png 500w, images/ivote-screenshot-4-p-800.png 800w, images/ivote-screenshot-4-p-1080.png 1080w, images/ivote-screenshot-4.png 1352w" alt="" className="film-screenshots-small"/></div>
              </div>
            </div>
          </div>
          <div className="slide-7 w-slide">
            <div className="w-layout-grid grid-4 grid-11 grid-15"><img src="images/crappy-birthday.png" width="240" height="350" sizes="(max-width: 479px) 133px, (max-width: 767px) 165px, (max-width: 991px) 240px, (max-width: 1919px) 236.3125px, 230.3125px" srcSet="images/crappy-birthday-p-500.png 500w, images/crappy-birthday-p-800.png 800w, images/crappy-birthday-p-1080.png 1080w, images/crappy-birthday.png 1200w" alt="" className="image-7"/>
              <div id="w-node-798ac7fc12e9-10984a00" className="div-block-9 caroline-ff-card">
                <div className="w-layout-grid grid-5">
                  <div id="w-node-798ac7fc12eb-10984a00">
                    <a href="screening-room-crappy-birthday.html" className="w-inline-block">
                      <div className="play-button-wrapper-div"><img src="images/white-play-triangle.png" width="23" alt="" className="image-12"/></div>
                    </a>
                  </div>
                  <div id="w-node-798ac7fc12ef-10984a00" className="div-block-8">
                    <div className="featured-film-card-title crappy-birthday-ff-title cb-title-desktop">CRAPPY BIRTHDAY</div>
                    <div className="featured-film-card-title crappy-birthday-ff-title cb-title-mobile">CRAPPY <br/>BIRTHDAY</div>
                    <div className="featured-film-card-date">2018</div>
                  </div>
                </div>
                <div className="div-block-27">
                  <div className="featured-film-card-description caroline-ff-description">When Matt’s wife ditches him on his birthday for a free ticket to Coachella, he ends up with a birthday present that will change his life.</div>
                </div>
                <div className="div-block-28">
                  <div className="featured-film-card-info">11 min  |  English  |  USA</div>
                </div>
                <div className="featured-film-card-images-wrapper"><img src="images/cb_5.png" width="77" alt="" className="film-screenshots-small"/><img src="images/cb_2.png" width="77" alt="" className="film-screenshots-small"/><img src="images/cb_3.png" width="77" alt="" className="film-screenshots-small"/><img src="images/cb_4.png" width="77" alt="" className="film-screenshots-small"/></div>
              </div>
            </div>
          </div>
          <div className="slide-7 w-slide">
            <div className="w-layout-grid grid-4 grid-11 grid-15"><img src="images/evie.png" width="348" sizes="(max-width: 479px) 133px, (max-width: 767px) 165px, 240px" srcSet="images/evie-p-500.png 500w, images/evie-p-800.png 800w, images/evie-p-1080.png 1080w, images/evie.png 1200w" alt="" className="image-7"/>
              <div id="w-node-8fd080c41a8b-10984a00" className="div-block-9 evie-feature-card">
                <div className="w-layout-grid grid-5">
                  <div id="w-node-8fd080c41a8d-10984a00">
                    <a href="screening-room-evie.html" className="w-inline-block">
                      <div className="play-button-wrapper-div"><img src="images/white-play-triangle.png" width="23" alt="" className="image-12"/></div>
                    </a>
                  </div>
                  <div id="w-node-8fd080c41a91-10984a00" className="div-block-8">
                    <div className="featured-film-card-title lil-buck-feature-film-title">EVIE</div>
                    <div className="featured-film-card-date">2019</div>
                  </div>
                </div>
                <div className="div-block-27">
                  <div className="featured-film-card-description lil-buck-decription">Facing either the wrath of her parents or a forced marriage to a man more than twice her age, fifteen-year-old Evie makes an impossible choice.</div>
                </div>
                <div className="div-block-28">
                  <div className="featured-film-card-info">11 min  |  English  |  USA</div>
                </div>
                <div className="featured-film-card-images-wrapper"><img src="images/evie_2.png" width="77" alt="" className="film-screenshots-small"/><img src="images/evie_3.png" width="77" alt="" className="film-screenshots-small"/><img src="images/evie_1.png" width="77" alt="" className="film-screenshots-small"/><img src="images/evie_5.png" width="77" alt="" className="film-screenshots-small"/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-arrow w-slider-arrow-left"><img src="images/left-arrow-icon.png" alt="" className="image-18"/></div>
        <div className="right-arrow-2 w-slider-arrow-right"><img src="images/right-arrow-icon.png" alt="" className="image-19"/></div>
        <div className="slide-nav-3 w-slider-nav w-round"></div>
      </div>
    </div>
  </div>
  <div className="video-grid-js w-embed w-script">
    
  </div>
  <div className="div-block-11">
    <div className="div-block-25">
      <h1 className="heading-4 recommended-films-title-subhomepage">RECOMMENDED</h1>
    </div>
  </div>
  <div className="section-7">
    <div className="code-for-film-grid w-embed">
      <style>{"\
          .movie-description:hover {\
            opacity:1;\
        }\
        "}</style>
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
                      <div id="w-node-ed89cac8a110-ebadf4bd" className="div-block-20">
                        <div className="movie-description-grid-title we-the-children-title">IVOTE</div>
                        <div className="movie-description-grid-year wtf-year">2012</div>
                      </div>
                      <a href="screening-room-ivote.html" className="w-inline-block"><img src="images/ivote-play-button.png" width="56" id="ivote-film-button" alt="" className="play-button wtc-play-button"/></a>
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
                      <div id="w-node-6dbd20e76263-ebadf4bd" className="div-block-20">
                        <div className="movie-description-grid-title tgc-title">THE GOD<br/>CHAIR</div>
                        <div className="movie-description-grid-year tgc-year">2016</div>
                      </div>
                      <a href="screening-room-the-god-chair.html" className="w-inline-block"><img src="images/brown-play-button.png" id="the-god-chair-film-button" alt="" className="play-button tgc-play-button"/></a>
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
                      <div id="w-node-1d9b0f1e66a4-ebadf4bd" className="div-block-20">
                        <div className="movie-description-grid-title owab-title">OUT WITH <br/>A BANG</div>
                        <div className="movie-description-grid-year owab-desc">2016</div>
                      </div>
                      <a href="screening-room-out-with-a-bang.html" className="w-inline-block"><img src="images/white-play-button.png" id="out-with-a-bang-film-button" alt="" className="play-button"/></a>
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
                      <div id="w-node-42917a705cfe-ebadf4bd" className="div-block-20">
                        <div className="movie-description-grid-title evie-title">EVIE</div>
                        <div className="movie-description-grid-year evie-year">2019</div>
                      </div>
                      <a href="screening-room-evie.html" className="w-inline-block"><img src="images/maroon-play-button.png" id="evie-film-button" alt="" className="play-button pc-play-button"/></a>
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
                      <div id="w-node-67a3740ad06d-ebadf4bd" className="div-block-20">
                        <div className="movie-description-grid-title laf-title">LOST &amp; FOUND</div>
                        <div className="movie-description-grid-year laf-year">2017</div>
                      </div>
                      <a href="screening-room-lost-and-found.html" className="w-inline-block"><img src="images/light-blue-play-button.png" id="lost-and-found-film-button" alt="" className="play-button pchy-play-button"/></a>
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
                      <div id="w-node-613ec858a7a1-ebadf4bd" className="div-block-20">
                        <div className="movie-description-grid-title cb-title">CRAPPY<br/>BIRTHDAY</div>
                        <div className="movie-description-grid-year cb-year">2018</div>
                      </div>
                      <a href="screening-room-crappy-birthday.html" className="w-inline-block"><img src="images/yellow-play-button.png" id="crappy-birthday-film-button" alt="" className="play-button prego-play-button"/></a>
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
  <div className="div-block-11">
    <div className="div-block-25">
      <h1 className="heading-4 featured-articles-title-subhomepage">FEATURED ARTICLES</h1>
    </div>
  </div>
  <div className="section-2">
    <div className="div-block-40">
      <div className="w-layout-grid grid-8">
        <div id="w-node-_9c9baa08-56e0-2fbf-4e89-7ccf9330d521-10984a00" className="div-block-39">
          <a href="https://variety.com/" target="_blank" className="w-inline-block"><img src="images/variety-logo-in-white.png" width="114" sizes="(max-width: 1919px) 113.984375px, 200px" srcset="images/variety-logo-in-white-p-500.png 500w, images/variety-logo-in-white.png 1129w" alt="" className="image-34"/></a>
        </div>
        <div data-delay="6000" data-animation="slide" data-autoplay="1" data-duration="500" data-infinite="1" id="w-node-_3fe0d1fa-de4f-9d45-4efe-32ad0d279ec3-10984a00" className="slider-2 w-slider">
          <div className="mask-2 w-slider-mask">
            <div className="slide-4 w-slide">
              <div className="div-block-14">
                <div className="variety-article-element">
                  <a href="https://variety.com/lists/directors-anticipated-movies-2021/" target="_blank" className="link-block-9 w-inline-block">
                    <div className="w-layout-grid grid-9">
                      <div className="div-block-22"><img src="images/directors.png" width="683" alt="" className="image-14"/></div>
                      <div id="w-node-_603e189f-c4b8-9b34-9b39-dc67d7e02670-10984a00" className="div-block-15">
                        <div className="featured-article-title">Directors Whose Work We’re Excited to See in 2021</div>
                        <div className="div-block-13"></div>
                        <div className="featured-article-description directors-variety-elem">Movies and art are still the pillars for our survival during the COVID-19 pandemic. As one awards season is currently underway...</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="slide-4 w-slide">
              <div className="div-block-14">
                <div className="variety-article-element">
                  <a href="https://variety.com/2020/film/news/mulan-disney-plus-premiere-1234711185/" target="_blank" className="link-block-10 w-inline-block">
                    <div className="w-layout-grid grid-9">
                      <div className="div-block-22"><img src="images/mulan-icon.png" width="168" sizes="(max-width: 479px) 105px, (max-width: 767px) 27vw, 160px" srcset="images/mulan-icon-p-500.png 500w, images/mulan-icon.png 1160w" alt="" className="image-14"/></div>
                      <div id="w-node-c06e4f9b-2316-e59d-aaaf-1859c30aba2d-10984a00" className="div-block-15">
                        <div className="featured-article-title">MULAN&#x27;S BIG MOVE</div>
                        <div className="div-block-13"></div>
                        <div className="featured-article-description mulan-description">In another major blow to movie theaters, &quot;Mulan&quot; will forgo its planned theatrical release. Instead, the movie will premiere on Disney Plus on Sept. 4 for a premium...</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="left-arrow-2 w-slider-arrow-left">
            <div className="w-icon-slider-left"></div>
          </div>
          <div className="right-arrow-3 w-slider-arrow-right">
            <div className="w-icon-slider-right"></div>
          </div>
          <div className="slide-nav-2 w-slider-nav w-round"></div>
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
export default SubscriberHomepage