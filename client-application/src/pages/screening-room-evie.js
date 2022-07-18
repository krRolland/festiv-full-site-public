import React, {useEffect} from "react"
import SignedInNavbar from "../components/navbar/signed-in-navbar";

export default function Evie() {
  
    useEffect(()=>{
      
        // inject popup script
        const script = document.createElement("script");
        script.src = "js/evie-cast-popup.js";
        script.async = true;
        document.body.appendChild(script);

        let shareButton = document.getElementById("screening-room-share");
        shareButton.href ="mailto:?subject=Evie%20(2019)&body=https://festivmedia.com/screening-room-evie";

        window.mobileAndTabletCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
          };
              let btn = document.getElementById("screening-room-play-button"); 
            let fillerImage = document.getElementById("filler-image"); 
            let videoWrapper = document.getElementById("video-wrapper");
              function swapInVideo() { 
                  btn.style.opacity = "0";
              setTimeout(function () {btn.style.display = "none";}, 550)
                  var video = document.createElement('video');
              video.style.position = "relative";
              video.style.outline = "0";
              if(window.mobileAndTabletCheck()) {
                  video.style.width = "90%"
                video.style.height = "100%";
              }
              else {
                  if (window.screen.width < 1400) {
                    video.style.width = "Auto";
                      video.style.height = "480px";
                }
                else {
                    video.style.width = "Auto";
                      video.style.height = "600px";
                }
              }
              video.src = "https://festivfilms.s3.us-east-2.amazonaws.com/Evie.mp4";
              video.autoplay = "autoplay";
                  video.setAttribute("controls","controls");
              fillerImage.style.opacity = "0"; 
              setTimeout(function () {fillerImage.style.display = "none"; videoWrapper.appendChild(video);}, 550)
            let elem = document.getElementsByClassName("div-block-57")[0]
            elem.remove()
            } 
            btn.addEventListener('click', swapInVideo);
    
    })
    
    return(
        <div>
  <SignedInNavbar/>
  <div className="section-3">
    <div id="video-wrapper" className="div-block-47"><img src="images/evie-backdrop.png" id="filler-image" sizes="(max-width: 991px) 90vw, (max-width: 1439px) 70vw, 900px" srcSet="images/evie-backdrop-p-500.png 500w, images/evie-backdrop-p-800.png 800w, images/evie-backdrop-p-1080.png 1080w, images/evie-backdrop.png 1621w" alt="" className="image-35"/>
      <div className="div-block-57"><img src="images/screening-room-play-button.png" width="104" id="screening-room-play-button" alt="" className="image-31"/></div>
    </div>
  </div>
  <div className="film-description-section">
    <div className="w-layout-grid grid-16">
      <div>
        <div className="w-layout-grid grid-17"><img src="images/evie.png" width="140" sizes="(max-width: 479px) 180px, (max-width: 767px) 17vw, (max-width: 991px) 15vw, 100vw" srcSet="images/evie-p-500.png 500w, images/evie-p-800.png 800w, images/evie-p-1080.png 1080w, images/evie.png 1200w" alt="" className="image-24"/>
          <div className="div-block-38">
            <div className="text-block-25">EVIE</div>
            <div className="text-block-26 ivote-year-sc-room">2019</div>
            <div className="text-block-27">Facing either the wrath of her parents or a forced marriage to a man more than twice her age, fifteen-year-old Evie makes an impossible choice.</div>
            <div className="text-block-28">11 min  |  English  |  USA</div>
          </div>
        </div>
      </div>
      <div className="div-block-34">
        <div className="text-block-24">11,401 Views</div><img src="images/martini-rating-icons-no-mouse.png" width="117" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 117px, 100vw" srcSet="images/martini-rating-icons-no-mouse-p-500.png 500w, images/martini-rating-icons-no-mouse-p-800.png 800w, images/martini-rating-icons-no-mouse.png 1140w" alt="" className="image-20"/>
        <div data-w-id="fa1a8e90-3993-fe9c-0795-b2d328357eb1" style={{opacity:"0"}} className="rate-this-film-popup">
          <div className="text-block-31">RATE THIS FILM</div>
          <div className="div-block-44"></div>
          <div data-w-id="93e5ac38-5949-ee7f-7d86-27038b638bbc" className="text-block-32"> X </div>
        </div>
      </div>
    </div>
  </div>
  <div className="html-embed w-embed w-script">
	

  </div>
  <div className="cast-and-crew-section">
    <div className="cast-and-crew-title">CAST &amp; CREW</div>
    <div className="film-members-line">
      <div className="text-block-18">DIRECTOR: </div>
      <div className="actor-hyperlink peebler-link">MIKE PEEBLER</div>
    </div>
    <div className="film-members-line">
      <div className="text-block-18">WRITER:</div>
      <div className="actor-hyperlink erez-link">MARC FELLNER-EREZ</div>
    </div>
    <div className="film-members-line">
      <div className="text-block-18">PRODUCER:</div>
      <div className="actor-hyperlink suchan-link">MARYLYNN SUCHAN</div>
      <div className="text-block-19">,</div>
      <div className="actor-hyperlink turn-link">KATE TURNIPSEED</div>
    </div>
    <div className="film-members-line">
      <div className="text-block-18">STARS:</div>
      <div className="actor-hyperlink durkin-link">CAITLIN DURKIN</div>
      <div className="text-block-19">,</div>
      <div className="actor-hyperlink stamile-link">LAUREN STAMILE</div>
      <div className="text-block-19">,</div>
      <div className="actor-hyperlink peat-link">SCOTT PEAT</div>
      <div className="text-block-19">,</div>
      <div className="actor-hyperlink turbiak-link">PAUL TURBIAK</div>
      <div className="text-block-19">,</div>
      <div className="actor-hyperlink hunt-link">WILLIAM DENNIS HUNT</div>
      <div className="text-block-19">,</div>
      <div className="actor-hyperlink phil-link">EARNESTINE PHILLIPS</div>
      <div className="text-block-19 cast-and-crew-line"> | </div>
      <a href="https://m.imdb.com/title/tt9001498/" target="_blank" className="w-inline-block">
        <div className="actor-hyperlink">SEE FULL CAST &amp; CREW &gt;&gt;</div>
      </a>
    </div>
    <div className="share-film-wrapper">
      <a href="mailto:mike@upstartcrowfilms.com?subject=Inquiry%20About%20Evie%20(2019)" id="screening-room-contact" className="contact-filmmaker-button w-button">CONTACT FILMMAKER</a>
      <a id="screening-room-share" href="#" className="share-film-button w-button">SHARE FILM</a>
    </div><img src="images/mike-peebler.png" width="68" sizes="100vw" srcSet="images/mike-peebler-p-500.png 500w, images/mike-peebler.png 800w" alt="" className="image-26"/><img src="images/Unknown-Photo.png" width="68" sizes="100vw" srcSet="images/Unknown-Photo-p-500.png 500w, images/Unknown-Photo.png 800w" alt="" className="image-26"/><img src="images/marylynn-suchan.png" width="68" sizes="100vw" srcSet="images/marylynn-suchan-p-500.png 500w, images/marylynn-suchan.png 800w" alt="" className="image-26"/><img src="images/caitlin-durkin.png" width="68" sizes="100vw" srcSet="images/caitlin-durkin-p-500.png 500w, images/caitlin-durkin.png 800w" alt="" className="image-26"/><img src="images/lauren-stamile.png" width="68" sizes="100vw" srcSet="images/lauren-stamile-p-500.png 500w, images/lauren-stamile.png 800w" alt="" className="image-26"/><img src="images/scott-peat.png" width="68" sizes="100vw" srcSet="images/scott-peat-p-500.png 500w, images/scott-peat.png 800w" alt="" className="image-26"/><img src="images/paul-turbiak.png" width="68" sizes="100vw" srcSet="images/paul-turbiak-p-500.png 500w, images/paul-turbiak.png 800w" alt="" className="image-26"/><img src="images/earnestine-phillips.png" width="68" sizes="100vw" srcSet="images/earnestine-phillips-p-500.png 500w, images/earnestine-phillips.png 800w" alt="" className="image-26"/>
    <div id="follow-me" className="follow-me-card">
      <div className="w-layout-grid grid-14"><img src="images/rob-adler-headshot.png" width="103" id="profile-picture" alt="" className="image-23"/>
        <div className="div-block-35">
          <div className="div-block-37"></div>
          <div id="follow-me-name" className="text-block-30">ROB ADLER</div>
          <div className="div-block-48">
            <div className="text-block-29">FOLLOW ME</div>
          </div>
          <div className="div-block-36">
            <div className="div-block-42">
              <a id="imdb-link" href="https://www.imdb.com/name/nm0012228/?ref_=fn_al_nm_1" target="_blank" className="link-block-8 w-inline-block"><img src="images/imdb-icon.png" width="45" sizes="(max-width: 1279px) 45px, (max-width: 1919px) 100vw, 45px" srcSet="images/imdb-icon-p-500.png 500w, images/imdb-icon-p-800.png 800w, images/imdb-icon.png 1200w" alt="" className="image-22"/></a>
              <a href="https://www.instagram.com/adlerimprov/" target="_blank" className="follow-me-links w-inline-block"><img src="images/blue-instagram-icon.png" alt=""/></a>
              <a href="#" className="follow-me-links w-inline-block"><img src="images/blue-facebook-icon.png" alt=""/></a>
              <a href="https://twitter.com/adlerimprov" target="_blank" className="follow-me-links w-inline-block"><img src="images/blue-twitter-icon.png" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="share-film-button-code w-embed w-script">
    </div>
    <div className="code-for-popup w-embed w-script">
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