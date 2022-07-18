const getPublicStripeKey = options => {
    return window
      .fetch(`https://us-central1-festiv-fd5c6.cloudfunctions.net/payments/public-key`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(data => {
        if (!data || data.error) {
          console.log("API error:", { data });
          throw Error("API Error");
        } else {
          return data.publicKey;
        }
      });
  };
  
  const api = {
    getPublicStripeKey: getPublicStripeKey,
  };
  
  export default api;
  