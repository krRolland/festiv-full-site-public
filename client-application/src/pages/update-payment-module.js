import React, {useState} from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import SignedInNavbar from "../components/navbar/signed-in-navbar";
import axios from "axios";
import setAccountContext from "../util/set-account-context";


export default function UpdatePaymentModule() {
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    function handleUpdatePayment() {
        setProcessing(true)

        stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })
        .then((result)=> {
            if (result.error) {
                setProcessing(false)
                alert("Payment Unsuccessful")
                return 
            } 
            else {
                const config = {
                    headers: {
                      Authorization: window.localStorage.FBIdToken,
                    }
                }
                axios.post("https://us-central1-festiv-fd5c6.cloudfunctions.net/subscriptions/change-payment", result, config) 
                // axios.post("http://localhost:5000/festiv-fd5c6/us-central1/subscriptions/change-payment", result, config) 
                .then((result)=> {
                    if (result.data.success === true) {
                        alert("Payment successful")
                        setAccountContext("/subscriber-homepage") 
                        return
                    }

                })
                .catch((error)=>{
                    alert(error.message)
                    setProcessing(false) 
                })
            }
        })
    
    } 

    const options = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
          },
        },
      };
    return(
        <div>
            <SignedInNavbar />
            <div className = "div-block-62"></div>
            <div className = "section-9" style = {{textAlign: "center"}}>
            <div style = {{display: "inline-block", maxWidth: "auto", marginTop: "50px"}} className = "account-info-container">
                <div style = {{marginTop: "30px", marginBottom: "30px"}}className = "sign-in-field-label">Update Your Card Information <br/>In The Space Below</div>
                <div style = {{padding : "40px", minWidth: "350px"}} className = "account-info-card">
                    <CardElement
                        options={options}
                        // onChange = {displayErrorMessages}
                    />

    <button onClick = {handleUpdatePayment} style = {{marginTop: "30px"}} className = "submit-button-3 w-button" >{processing? "LOADING..." : "SUBMIT"}</button>
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
        <a href="index.html" className="w-inline-block"><img srcSet="images/festiv-logo-black.png" width="24" alt="" className="image-2"/>
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