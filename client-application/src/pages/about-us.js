import React, {useEffect} from "react"
import SignedOutNavbar from "../components/navbar/signed-out-navbar";

export default function AboutUs() {
    useEffect(() => {
      window.addEventListener('scroll', function () {
      let navbar = document.getElementById("navbar-home-transparent"); 
        // Set starting position
        if (window.pageYOffset >= 60) {
          navbar.style.backgroundColor = "rgba(255,255,255,1)"; 
        } else {
          navbar.style.backgroundColor = "rgba(255,255,255,0)"; 
        }});
      }
      )

    return (

  <div>
  <SignedOutNavbar></SignedOutNavbar>
  <div>
    <div className="extra-documents-container w-container">
      <div className="extra-documents-title-wrapper">
        <div className="div-block-54"><img src="images/festiv-logo-full-original.png" loading="lazy" sizes="100.00000762939453px" srcSet="images/festiv-logo-full-original-p-500.png 500w, images/festiv-logo-full-original-p-800.png 800w, images/festiv-logo-full-original-p-1080.png 1080w, images/festiv-logo-full-original-p-1600.png 1600w, images/festiv-logo-full-original-p-2000.png 2000w, images/festiv-logo-full-original.png 2499w" alt="" className="extra-documents-festiv-icon" /></div>
        <div className="extra-documents-page-title">Dreams, Meet Reality</div>
      </div>
      <div className="extra-documents-small-header about-us-small-header">Mission</div>
      <div className="extra-documents-text extra-documents-text-centered">Promoting Magnificent Concepts Thoughtfully Executed</div>
      <div className="extra-documents-small-header about-us-small-header">Vision</div>
      <div className="extra-documents-text extra-documents-text-centered">Our 24/7 global film marketplace showcases amazing independent feature films, shorts and episodic content from the brightest filmmakers and creators from around the world.</div>
      <div className="extra-documents-small-header about-us-small-header">Purpose</div>
      <div className="extra-documents-text extra-documents-text-centered">We provide a platform for filmmakers, distribution executives, and viewers to engage and build strong relationships. Each year we host interactive online panel discussions featuring filmmakers, screenwriters, actors, and business leaders from around the world sharing their insights on various industry topics and we will host an annual event where our top films are showcased on the big screen for live audiences.<br/>‍</div>
      <div className="extra-documents-small-header about-us-small-header">The Team: Selection Committee</div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Samuel Real</div>
          <div className="advisor-occupation">Film Distribution Executive</div>
          <div className="advisor-description">Samuel, as Vice President of Theatrical Distribution at Warner Bros Pictures, developed, implemented and supervised distribution strategies of Warner Bros. films in Latin America and the Caribbean.  He not only worked on every noteworthy WB franchise including; the <em>DC Universe</em>, <em>Conjuring Universe</em>, <em>Harry Potter</em>, <em>Lord of the Rings</em>/<em>Hobbit</em>, Christopher Nolan’s <em>Batman</em> trilogy, and <em>The Matrix t</em>rilogy, but also on specialty/alternative/targeted films, such as &quot;<em>Crazy Rich Asians&quot;, &quot;Goldfinch&quot;, &quot;Blinded by the Light&quot;, &quot;Motherless Brooklyn&quot; </em>and every<em> </em>Clint Eastwood<em> </em>produced film over the past 25 years.  As an industry leader in finding creative ways to release these films in cinemas, he managed the operations of 40 countries across Latin America, selecting the best distribution partners, vendors and agencies, allowing for the incredible growth of 350% over his 25 years at WB.<br/></div>
        </div><img src="images/samuel-real.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 991px) 22vw, 218.80209350585938px" srcSet="images/samuel-real-p-500.png 500w, images/samuel-real.png 599w" alt=""/>
      </div>
      <div className="w-layout-grid bio-grid"><img src="images/rachel-lewis.png" loading="lazy" alt=""/>
        <div>
          <div className="advisor-name">Rachel Lewis</div>
          <div className="advisor-occupation">Writer, Producer</div>
          <div className="advisor-description">Rachel is a three-time Emmy nominated writer/producer living in Los Angeles. She has worked on several television shows, most notably Odd Squad (PBS), Bizaardvark (Disney Channel), and Helpsters (Apple TV+). <a href="http://www.jonandeddieproductions.com/">www.jonandeddieproductions.com</a>
          </div>
        </div>
      </div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Larry Bates</div>
          <div className="advisor-occupation">Actor, Producer</div>
          <div className="advisor-description">Larry is an award-winning actor whose work spans the Stage, Television and Big Screen with roles in HBO’s Emmy Award winning <em>Big Little Lies</em>, the Amazon Prime Original <em>The Romanoffs</em> written and directed by Matt Weiner, and most recently in the Ava DuVernay and Oprah Winfrey produced anthology series “Cherish The Day.&quot;<br/></div>
        </div><img src="images/larry-bates.png" loading="lazy" alt=""/>
      </div>
      <div className="w-layout-grid bio-grid"><img src="images/brian-kimmet.png" loading="lazy" alt=""/>
        <div>
          <div className="advisor-name">Brian Kimmet</div>
          <div className="advisor-occupation">Actor, Writer</div>
          <div className="advisor-description">Brian is a Los Angeles-based actor, writer and dad. He earned his BFA and found his love of improv at The Theatre School at DePaul University in Chicago. Since in LA he has worked with various theatre companies including; Tim Robbins&#x27; The Actors Gang where performed in <em>Love&#x27;s Labours Lost</em>, <em>Our Town </em>and <em>1984</em>.  Brian has been in huge studio movies like Clint Eastwood&#x27;s <em>Flags of our Fathers</em>, as well as festival favorites like 2016&#x27;s <em>Tilly</em>. He has graced the screen of every major network and streaming service including <em>NCIS</em> on CBS, <em>Heroes</em> on NBC, <em>Lucifer</em> on Netflix, <em>Feud</em> on FX, <em>Six Feet Under </em>on HBO and even hosting Hulu&#x27;s <em>The Morning After </em>for over 2 years. Lately he has been working in all arenas of voiceover including video game credits like <em>BioShock Infinite</em>, <em>Hitman &amp; The Last of US Part II </em>and he was the voice of Harold throughout the Warner Bros. animated series <em>Bunnicula</em>.<br/></div>
        </div>
      </div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Danielle Iman</div>
          <div className="advisor-occupation">Writer</div>
          <div className="advisor-description">After graduating from the prestigious MFA Screenwriting Program at USC’s School of Cinematic Arts in 2018, Danielle worked as a Writers’ PA on ABC’s multiple Emmy Award winning primetime hit <em>Grey’s Anatomy</em>. She was a writer on the upcoming AppleTV+ series <em>Swagger</em>, after which she was selected as a 2019 HBO All Access Writers Fellow. Most recently Danielle was a writer for the upcoming Marvel series <em>Moon Knight </em>which will be available on Disney+. Currently, Danielle is a writer for <em>Florida Man</em>, a new series scheduled to air on Spectrum Originals.<br/></div>
        </div><img src="images/danielle-iman.png" loading="lazy" alt=""/>
      </div>
      <div className="w-layout-grid bio-grid"><img src="images/armand-vasquez.png" loading="lazy" alt=""/>
        <div>
          <div className="advisor-name">Armand Vasquez</div>
          <div className="advisor-occupation">Actor, Producer</div>
          <div className="advisor-description">Armand is an actor who has been featured in television, film, and several national commercials. He’s recurred on Netflix’s <em>Gilmore Girls</em> reboot, with appearances on ABC’s <em>Modern Family</em>, Showtime’s <em>Masters of Sex</em>, and Fox’s <em>Brooklyn Nine-Nine</em>. With a training background in theatre, Armand is an alum of the University of Illinois in Urbana-Champaign as well as the CBS Diversity Comedy Showcase. An active member of SAG-AFTRA, he is a proud union performer. <br/></div>
        </div>
      </div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Kobie Jackson</div>
          <div className="advisor-occupation">Studio Executive, Producer</div>
          <div className="advisor-description">Prior to joining the ranks at Disney+, Kobie leveraged industry-wide resources to lead brand management of select console and mobile gaming titles at The Walt Disney Company, with a focus on externally licensed games and vertically-produced original intellectual properties including; <em>Cars 2</em> and <em>Toy Story 3</em>. He has led global strategic brand and marketing plans for category leading evergreen franchises like <em>Star Wars</em>, <em>Spider-Man</em>, and <em>Avengers</em> and devised annualized franchise events like <em>Marvel Super Hero September</em>, and <em>Star Wars Day</em> and led direct to consumer product launches (e.g. <em>Playmation</em>).  Prior to Disney, Kobie served as a Producer at MGM Interactive managing all aspects of franchise development within games and interactive entertainment for the James Bond global hits <em>Everything or Nothing</em> and <em>Quantum of Solace and </em>key MGM catalog properties including <em>Rocky Balboa</em> and <em>Stargate.</em><br/><br/></div>
        </div><img src="images/kobie-jackson-photo.png" loading="lazy" sizes="(max-width: 479px) 21vw, (max-width: 991px) 22vw, 218.80209350585938px" srcSet="images/kobie-jackson-photo-p-500.png 500w, images/kobie-jackson-photo.png 803w" alt=""/>
      </div>
      <div className="extra-documents-small-header about-us-small-header">The Team: Advisory Board</div>
      <div className="w-layout-grid bio-grid"><img src="images/paul-culberg.png" loading="lazy" alt=""/>
        <div>
          <div className="advisor-name">Paul Culberg</div>
          <div className="advisor-occupation">Founder &amp; CEO Lobo Creek Advisory, Inc.</div>
          <div className="advisor-description">Paul was a principal in building Paramount Pictures’ original Home Video division creating the $22B Home Entertainment/Video industry, Paul, the former COO of Columbia Tri-Star Home Video (Sony Pictures) has been an innovator within the entertainment industry for decades. Paul currently sits on the boards of companies ranging from traditional distribution to e-commerce.<br/></div>
        </div>
      </div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Peter Walsh</div>
          <div className="advisor-occupation">Founder &amp; CCO Group 11 Advertising</div>
          <div className="advisor-description">Peter is an award-winning creative leader with entertainment marketing experience in theatrical, home entertainment, VOD, broadcast &amp; cable, streaming networks, sales support and corporate culture building. Group 11 clients include; Sony Pictures, Walt Disney Pictures, NBC, ABC, Paramount Pictures, Warner Brothers, Focus Features and Dreamworks.<br/></div>
        </div><img src="images/peter-walsh.png" loading="lazy" alt=""/>
      </div>
      <div className="w-layout-grid bio-grid"><img src="images/john-aggrey.png" loading="lazy" alt=""/>
        <div>
          <div className="advisor-name">John Aggrey</div>
          <div className="advisor-occupation">Founder &amp; CEO, The Unicorn Group, LLC</div>
          <div className="advisor-description">John, with 20yrs as a leading tech entrepreneur was the Founder &amp; CEO of Serious2Learn, a streaming media corporate portal and later he founded and led 2phlo.com, the first internet-based platform to provide business development opportunities and sales lead curation to corporations. A seasoned veteran within the technology sector, John is responsible for the vision and long-range strategic plan for The Unicorn Group, LLC.<br/></div>
        </div>
      </div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Rick Watson</div>
          <div className="advisor-occupation">Board Member, The Producer&#x27;s Guild New Media Alliance</div>
          <div className="advisor-description">The former CEO and Co-Founder of Ambient Digital Media, a leading content production company specializing in Branded Content, Animation, Interactive Web Development, and Special Features, Rick has participated in media advancements at Walt Disney Pictures, Paramount Pictures, Warner Brothers Pictures, Lions Gate Films, Netflix, Amazon, MGM, and 20th Century Fox.<br/></div>
        </div><img src="images/rick-watson.png" loading="lazy" alt=""/>
      </div>
      <div className="w-layout-grid bio-grid"><img src="images/ajay-malhotra.png" loading="lazy" alt=""/>
        <div>
          <div className="advisor-name">Ajay Malhotra</div>
          <div className="advisor-occupation">Head of Media &amp; Entertainment IT, Infosys, Inc.</div>
          <div className="advisor-description">The former VP of Strategy &amp; Distribution Relations at Deluxe Entertainment, and Executive Director of IT at 20th Century Fox, Ajay is an industry leader in Technology Planning &amp; Transformation, Innovation, and M&amp;A activities within the digital media IT space.<br/></div>
        </div>
      </div>
      <div className="w-layout-grid bio-grid bio-grid-flip">
        <div>
          <div className="advisor-name">Alex Boyce</div>
          <div className="advisor-occupation">Founder &amp; CEO, Media Republica, Inc.</div>
          <div className="advisor-description">The former GM, Digital for The Hollywood Reporter and Chief Strategy Officer at Woven Digital, where he ran all business development, content syndication, ad product and M&amp;A activities, building out Woven’s entire owned and operated portfolio, Alex has been instrumental in raising over $37M in funding for these and other digital media businesses. <br/></div>
        </div><img src="images/alex-boyce.png" loading="lazy" alt=""/>
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="w-layout-grid grid-6">
      <div id="w-node-e7f1494548a6-494548a4">
        <div className="footer-col-text-title">Company</div>
        <a href="about-us.html" aria-current="page" className="link-block w-inline-block w--current">
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