import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from "react"
import * as Pages from './pages'
import jwtDecode from "jwt-decode"
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe("pk_test_51I8iY9KpSAlYsXlJ2cb1fwnDrF9n8FTBWBYP99hD1YztYrPcT9Pq6dSwsxofOSBAvRJOLdeJtjKqLRlthN142OMk00IfiRcYat");
import AuthRoute from "./util/auth-route"
import AuthRouteBoot from "./util/auth-route-boot"
// import AuthRouteWithFaliure from "./util/auth-route"

let authenticated;
const token = window.localStorage.FBIdToken

if(token) {
  const decodedToken = jwtDecode(token)
  if(decodedToken.exp * 1000 < Date.now()){
    // window.location.href = "/sign-in"
    authenticated = false
  }
  else {
    authenticated = true
  }
}
else {
  authenticated = false
}

let validPayment; 
if(window.localStorage.subscriptionStatus === "active" || window.localStorage.subscriptionStatus === "trialing") {
  validPayment = true
}
else {
  validPayment = false 
  console.log("validPayment: " + validPayment)
}

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path ='/' component = {Pages.LandingPage} />
        <Route exact path ='/index.html' component = {Pages.LandingPage} />
        {/* <Route exact path ='/' component = {Pages.LandingPage}></Route>
        <Route exact path ='/index.html' component = {Pages.LandingPage}></Route> */}
        
        
        <Route exact path ='/submit-film-payment'>
        {/* <Elements stripe={stripePromise}> */}
          {/* <Pages.SubmitFilmPayment /> */}
          {/* </Elements> */}
        </Route>
        
        <Route exact path ='/about-us.html' component = {Pages.AboutUs}/>
        <Route exact path ='/about-us' component = {Pages.AboutUs} />
        
        <Route exact path ='/festiv-video-service' component = {Pages.FestivVideoService} />
        <Route exact path ='/festiv-video-service.html' component = {Pages.FestivVideoService} />

        <Route exact path ='/film-submission-guidelines' component = {Pages.FilmSubmissionGuidelines} />
        <Route exact path ='/film-submission-guidelines.html' component = {Pages.FilmSubmissionGuidelines} />

        <Route exact path ='/filmmaker-revenue-participation' component = {Pages.FilmmakerRevenueParticipation} />
        <Route exact path ='/filmmaker-revenue-participation.html' component = {Pages.FilmmakerRevenueParticipation} />
        
        <Route exact path ='/forgot-password' component = {Pages.ForgotPassword} />
        <Route exact path ='/forgot-password.html' component = {Pages.ForgotPassword} />

        <Route exact path ='/how-it-works' component = {Pages.HowItWorks} />
        <Route exact path ='/how-it-works.html' component = {Pages.HowItWorks} />

        <Route exact path ='/privacy-policy' component = {Pages.PrivacyPolicy} />
        <Route exact path ='/privacy-policy.html' component = {Pages.PrivacyPolicy} />

        <AuthRoute exact path ='/sign-in' component = {Pages.SignIn} authenticated = {authenticated} successPath = "/subscriber-homepage"/>
        <AuthRoute exact path ='/sign-in.html' component = {Pages.SignIn} authenticated = {authenticated} successPath = "/subscriber-homepage"/>

        <Route exact path ='/sign-up' component = {Pages.SignUp} />
        <Route exact path ='/sign-up.html' component = {Pages.SignUp} />

        <Route exact path ='/sign-up-filmmaker' component = {Pages.SignUpFilmmaker} />
        <Route exact path ='/sign-up-filmmaker.html' component = {Pages.SignUpFilmmaker} />

        <Route exact path ='/sign-up-distributor' component = {Pages.SignUpDistributor} />
        <Route exact path ='/sign-up-distributor.html' component = {Pages.SignUpDistributor} />

        <Route exact path ='/submit-films' component = {Pages.SubmitFilms} />
        <Route exact path ='/submit-films.html' component = {Pages.SubmitFilms} />
        
        <Route exact path ='/terms-of-use' component = {Pages.TermsOfUse} />
        <Route exact path ='/terms-of-use.html' component = {Pages.TermsOfUse} />

        <Route exact path ='/payment-faliure' component = {Pages.PaymentFaliure} />
        <Route exact path ='/payment-faliure.html' component = {Pages.PaymentFaliure} />

        <Route exact path ='/payment-success' component = {Pages.PaymentSuccess} />
        <Route exact path ='/payment-success.html' component = {Pages.PaymentSuccess} />

        <Route exact path ='/select-film-submission' component = {Pages.SelectFilmSubmission} />
        
        <Route exact path ='/checkout' component = {Pages.Checkout} />
        <Route exact path ='/checkout.html' component = {Pages.Checkout} />

        {/* PROTECTED PAGES  */}
          {/* <AuthRouteWithFaliure exact path ='/account.html' component = {Pages.Account} authenticated = {authenticated} faliurePath = "/sign-in"/>
          <AuthRouteWithFaliure exact path ='/account' component = {Pages.Account} authenticated = {authenticated} faliurePath = "/sign-in"/> */}
          <AuthRouteBoot exact path ='/update-payment-info.html' component = {Pages.UpdatePaymentInfo} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {true}/>
          <AuthRouteBoot exact path ='/update-payment-info' component = {Pages.UpdatePaymentInfo} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {true}/>

          <AuthRouteBoot exact path ='/account.html' component = {Pages.Account} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/account' component = {Pages.Account} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>

          <AuthRouteBoot exact path ='/update-account.html' component = {Pages.UpdateAccount} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/update-account' component = {Pages.UpdateAccount} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>

          
          {/* <Route exact path ='/subscriber-homepage.html' component = {Pages.SubscriberHomepage}/> */}
          {/* <Route exact path ='/subscriber-homepage' component = {Pages.SubscriberHomepage}/> */}

          <AuthRouteBoot exact path ='/subscriber-homepage.html' component = {Pages.SubscriberHomepage} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/subscriber-homepage' component = {Pages.SubscriberHomepage} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>

          {/* <Route exact path ='/screening-room-crappy-birthday.html' component = {Pages.CrappyBirthday}/>
          <Route exact path ='/screening-room-crappy-birthday' component = {Pages.CrappyBirthday}/> */}

          <AuthRouteBoot exact path ='/screening-room-crappy-birthday.html' component = {Pages.CrappyBirthday} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/screening-room-crappy-birthday' component = {Pages.CrappyBirthday} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>

          <AuthRouteBoot exact path ='/screening-room-evie.html' component = {Pages.Evie} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/screening-room-evie' component = {Pages.Evie}authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>

          <AuthRouteBoot exact path ='/screening-room-ivote.html' component = {Pages.Ivote} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/screening-room-ivote' component = {Pages.Ivote} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>

          <AuthRouteBoot exact path ='/screening-room-lost-and-found.html' component = {Pages.LostAndFound} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/screening-room-lost-and-found' component = {Pages.LostAndFound} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          
          <AuthRouteBoot exact path ='/screening-room-out-with-a-bang.html' component = {Pages.OutWithABang} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/screening-room-out-with-a-bang' component = {Pages.OutWithABang} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          
          <AuthRouteBoot exact path ='/screening-room-the-god-chair.html' component = {Pages.TheGodChair} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          <AuthRouteBoot exact path ='/screening-room-the-god-chair' component = {Pages.TheGodChair} authenticated = {authenticated} faliurePath = "/sign-in" validPayment= {validPayment}/>
          {/* END OF PROTECTED PAGES */}
      </Switch>
    </Router>
    )
}

export default App;
