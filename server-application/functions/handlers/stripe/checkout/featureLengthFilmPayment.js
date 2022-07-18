// const stripe = require('stripe')("pk_live_51I8iY9KpSAlYsXlJbkvjrwVQ2B4bysNq3KD9meck08kVGP3MQLRnQNwBRGdkBgd9ta8Tvhx2LLXeIcBsOeoUwrNc00UZLqNaME");

// const YOUR_DOMAIN = 'http://localhost:3000/checkout';

// const product = stripe.products.retrieve(
//   'prod_Ioq9zbndnB93M2'
// );

// exports.featureLengthFilmPayment = (req, res) => {
//   const session = stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price: "price_1IDCTYKpSAlYsXlJ3GcsoVmS",
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: YOUR_DOMAIN + "/payment-success",
//     cancel_url: YOUR_DOMAIN + "/payment-faliure",
//   }).then(res=> {return res.json({id: session.id})
//   .catch(err => {return res.json({error: err.error})})
//   })
//   };