'use client';

export default function HomePage(){
  return(
    <div>
      <h1>Welcome to Razorpay</h1>
      <button
  onClick={async () => {
  try {
    const response = await fetch("https://your-backend.onrender.com/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 5000 }),
    });

    const data = await response.json();
    console.log("Order created:", data);

    const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,  // Your Razorpay Key ID
  amount: 5000,                                  // Amount in paise (₹50.00)
  currency: "INR",
  name: "My Razorpay Test",
  description: "Test Transaction",
  order_id: data.orderId,                        // Razorpay order id created on backend
  handler: function (response) {
    console.log("Payment Success:", response);
    // Add your payment success handling logic here
  },
  prefill: {
    name: "Test User",
    email: "test@example.com",
    contact: "9999999999",
  },
  notes: {
    address: "Some address here",               // Optional extra data you can send
  },
  theme: {
    color: "#3399cc",
  },
  modal: {
    ondismiss: function () {
      console.log("Checkout form closed");
    },
    escape: true,                                // Allow closing checkout on ESC key
    backdropclose: false,                        // Disable closing by clicking outside modal
  },
  method: {
    card: true,
    netbanking: true,
    upi: true,
    wallet: true,
    emi: true,
    paylater: true,
  },
  // Or alternatively to enable only UPI payments (like Google Pay), use:
  // methods: ['upi'],
};



    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Error creating order or opening Razorpay:", error);
  }
}}

>
  Pay 50
</button>

    </div>
  )
}
