'use client';

export default function HomePage(){
  return(
    <div>
      <h1>Welcome to Razorpay</h1>
      <button
  onClick={async () => {
  try {
    const response = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 5000 }),
    });

    const data = await response.json();
    console.log("Order created:", data);

    const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: 5000,
  currency: "INR",
  name: "My Razorpay Test",
  description: "Test Transaction",
  order_id: data.orderId,
  handler: function (response) {
    console.log("Payment Success:", response);
  },
  prefill: {
    name: "Test User",
    email: "test@example.com",
    contact: "9999999999",
  },
  theme: {
    color: "#3399cc",
  },
  method: {
    upi: true
  }
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