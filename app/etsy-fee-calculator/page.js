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

    const etsyFee = (salePrice + shippingPrice) * 0.065;
    const paymentFee = (salePrice + shippingPrice) * 0.03 + 0.25;

    const totalFees = etsyFee + paymentFee;

    const profit =
      salePrice +
      shippingPrice -
      totalFees -
      itemCost;

    setResult({
      etsyFee,
      paymentFee,
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
        fontFamily:
          "Avenir Next, Inter, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <a
          href="/"
          style={{
            color: "#04786b",
            fontWeight: "800",
          }}
        >
          ← Back to Home
        </a>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            marginTop: "28px",
            color: "#102033",
          }}
        >
          Etsy Fee Calculator
        </h1>

        <p
          style={{
            color: "#516174",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Calculate Etsy fees, payment processing fees,
          and estimated profit for your Etsy listings.
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
            onChange={(e) =>
              setPrice(e.target.value)
            }
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "14px",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="number"
            placeholder="Shipping Charged"
            value={shipping}
            onChange={(e) =>
              setShipping(e.target.value)
            }
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "14px",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="number"
            placeholder="Item Cost"
            value={cost}
            onChange={(e) =>
              setCost(e.target.value)
            }
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
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
    5. Review your estimated Etsy fees, payment processing fees, and profit.
  </p>

  <h2>Why Use an Etsy Fee Calculator?</h2>

  <p>
    Etsy sellers pay transaction fees, payment processing fees, and listing
    fees. Understanding your costs can help you price products correctly and
    improve profitability.
  </p>

  <h2>Frequently Asked Questions</h2>

  <h3>Does this include Etsy listing fees?</h3>
  <p>
    This calculator currently estimates Etsy transaction fees and payment
    processing fees. Etsy listing and relisting fees may also apply.
  </p>

  <h3>Is PixelMint free?</h3>
  <p>Yes. PixelMint tools are free and require no signup.</p>
</div>
            
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <p>
                Etsy Fee: $
                {result.etsyFee.toFixed(2)}
              </p>

              <p>
                Payment Fee: $
                {result.paymentFee.toFixed(2)}
              </p>

              <p>
                Total Fees: $
                {result.totalFees.toFixed(2)}
              </p>

              <h2
                style={{
                  color: "#04786b",
                }}
              >
                Estimated Profit: $
                {result.profit.toFixed(2)}
              </h2>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
