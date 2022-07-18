// import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';


// const PAYMENT_CARD_STYLE = {
//   style: {
//     base: {
//       color: "#32325d",
//       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//       fontSmoothing: "antialiased",
//       backgroundColor: "green",
//       fontSize: "16px",
//       "::placeholder": {
//         color: "#aab7c4",
//       },
//     },
//     invalid: {
//       color: "#fa755a",
//       iconColor: "#fa755a",
//     },
//   },
// };


// function CardSection() {
//   return(<label>
//     Card details
//     <CardElement options={PAYMENT_CARD_STYLE} />
//     </label>)
// } 

// export default function SubmitFilmPayment() {
//   var stripe = Stripe('pk_test_51I8iY9KpSAlYsXlJ2cb1fwnDrF9n8FTBWBYP99hD1YztYrPcT9Pq6dSwsxofOSBAvRJOLdeJtjKqLRlthN142OMk00IfiRcYat');
//   const stripe = useStripe();
//   const elements = useElements();

//   function checkoutButtonSubmitHandler() {
    
//     stripe.redirectToCheckout({
//       // Make the id field from the Checkout Session creation API response
//       // available to this file, so you can provide it as argument here
//       // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
//       sessionId: '{{CHECKOUT_SESSION_ID}}'
//     }).then(function (result) {
//       // If `redirectToCheckout` fails due to a browser or network
//       // error, display the localized error message to your customer
//       // using `result.error.message`.
//       // REDIRECT TO CHECKOUT HERE!!!!!!!
//     });
//   };
//   }

  

    


//   return (
//     <form onSubmit={handleSubmit}>
//       <CardSection />
//       <button disabled={!stripe}>Confirm order</button>
//     </form>
//   );


    
// } 

