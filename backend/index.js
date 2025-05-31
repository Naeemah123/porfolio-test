require("dotenv").config();

const express=require("express");
const cors=require("cors");
const Razorpay=require("razorpay");

const app=express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/create-order",async(req,res)=>{
const {amount}=req.body;

try {
    // Set up the order options that will be sent to Razorpay
    const options = {
      amount: amount,          // Amount in paise (₹50 = 5000)
      currency: "INR",         // Currency type
      receipt: "receipt_order_74394", // Unique order ID
      payment_capture: 1,      // 1 means auto-capture after success
    };

    // Create the Razorpay order
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id });
}
catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});