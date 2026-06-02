"use client";

import { useState } from "react";

export default function EtsyFeeCalculator() {
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [cost, setCost] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const salePrice = parseFloat(price) || 0;
    const shippingPrice = parseFloat(shipping) || 0;
    const itemCost = parseFloat(cost) || 0;

    const transactionFee = (salePrice + shippingPrice) * 0.065;
    const paymentFee = (salePrice + shippingPrice) * 0.03 + 0.25;
    const listingFee = 0.2;

    const totalFees = transactionFee + paymentFee + listingFee;
    const profit = salePrice + shippingPrice - totalFees - itemCost;

    setResult({
      transactionFee,
      paymentFee,
      listingFee,
      totalFees,
      profit,
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily: "Avenir Next, Inter, sans-serif",
        color: "#102033",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#04786b", fontWeight: "800" }}>
          ← Back to Home
        </a>

        <h1 style={{ fontSize: "48px", fontWeight: "900", marginTop: "28px" }}>
          Etsy Fee Calculator
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.7" }}>
          Calculate Etsy transaction fees, payment processing fees, listing
          fees, and estimated profit for your Etsy listings.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            marginTop: "24px",
          }}
        >
          <input
            type="number"
            placeholder="Sale Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Shipping Charged"
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Item Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={calculate}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "14px",
              border: "none",
              background: "#00bfa6",
              color: "white",
              fontSize: "18px",
              fontWeight: "900",
            }}
          >
            Calculate Profit
          </button>

          {result && (
            <div style={{ marginTop: "24px" }}>
              <p>Transaction Fee: ${result.transactionFee.toFixed(2)}</p>
              <p>Payment Fee: ${result.paymentFee.toFixed(2)}</p>
              <p>Listing Fee: ${result.listingFee.toFixed(2)}</p>
              <p>Total Fees: ${result.totalFees.toFixed(2)}</p>

              <h2 style={{ color: "#04786b" }}>
                Estimated Profit: ${result.profit.toFixed(2)}
              </h2>
            </div>
          )}

          <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
            }}
          >
            <h2>How to Calculate Etsy Fees</h2>

            <p>1. Enter your Etsy sale price.</p>
            <p>2. Enter the shipping amount charged to the customer.</p>
            <p>3. Enter your product cost.</p>
            <p>4. Click Calculate Profit.</p>
            <p>
              5. Review your estimated Etsy transaction fee, payment fee,
              listing fee, total fees, and profit.
            </p>

            <h2>Why Use an Etsy Fee Calculator?</h2>

            <p>
              Etsy sellers pay transaction fees, payment processing fees, and
              listing fees. Understanding your costs can help you price products
              correctly and improve profitability.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>Does this include Etsy listing fees?</h3>
            <p>
              Yes. This calculator includes the standard Etsy listing fee,
              transaction fee, and estimated payment processing fee.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. PixelMint tools are free and require no signup.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  boxSizing: "border-box",
};
