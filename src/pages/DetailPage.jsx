import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTicketDetails } from "../api/pokeapi";
import { formatCurrency } from "../utils/format";
import "../styles/DetailPage.css";

const DetailPage = () => {
  const { name } = useParams(); // Nama tiket
  const [ticketDetails, setTicketDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getTicketDetails = async () => {
      try {
        const data = await fetchTicketDetails(name);
        setTicketDetails(data);
      } catch (error) {
        console.error("Error fetching ticket details", error);
        setError(true); // Atur error jika API gagal
      } finally {
        setLoading(false);
      }
    };
    getTicketDetails();
  }, [name]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { ticketDetails } }); // Kirim detail tiket ke halaman checkout
  };

  if (loading) return <div className="loading">Loading ticket details...</div>;
  if (error)
    return (
      <div className="error">
        <p>Failed to fetch ticket details. Please try again later.</p>
      </div>
    );

  return (
    <div className="detail-page">
      <h2>Ticket Details</h2>
      {ticketDetails ? (
        <div className="ticket-card">
          <img
            src={ticketDetails.image || "https://via.placeholder.com/300"}
            alt={ticketDetails.name}
            className="ticket-image"
          />
          <div className="ticket-info">
            <p>
              <strong>Name:</strong> {ticketDetails.name.toUpperCase()}
            </p>
            <p>
              <strong>Type:</strong> {ticketDetails.type}
            </p>
            <p>
              <strong>Price:</strong> {formatCurrency(ticketDetails.price)}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {ticketDetails.description || "No description available."}
            </p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="no-details">No details available</p>
      )}
    </div>
  );
};

export default DetailPage;
