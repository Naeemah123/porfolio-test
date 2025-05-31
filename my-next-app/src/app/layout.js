import Script from "next/script";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>My Razorpay Test</title>
      </head>
      <body>
        {/* Add Razorpay script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
        
        {/* Render all the pages here */}
        {children}
      </body>
    </html>
  );
}
