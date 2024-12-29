import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/format";
import "../styles/CheckoutPage.css"; // Tambahkan import CSS

const CheckoutPage = () => {
  const { state } = useLocation(); // Ambil data dari navigasi
  const navigate = useNavigate();

  if (!state || !state.ticketDetails) {
    navigate("/search");
    return null;
  }

  const { ticketDetails } = state;

  const handlePayment = () => {
    alert(`Payment successful for ${ticketDetails.name}!`);
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p>
        <strong>Name:</strong> {ticketDetails.name.toUpperCase()}
      </p>
      <p>
        <strong>Type:</strong> {ticketDetails.type}
      </p>
      <p>
        <strong>Price:</strong> {formatCurrency(ticketDetails.price)}
      </p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default CheckoutPage;
