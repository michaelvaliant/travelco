import React, { useEffect, useState } from "react";
import { fetchTransportOptions } from "../api/pokeapi";
import { useNavigate } from "react-router-dom";
import "../styles/SearchPage.css";

const SearchPage = () => {
  const [transportOptions, setTransportOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getTransportOptions = async () => {
      try {
        const data = await fetchTransportOptions();
        setTransportOptions(data);
      } catch (error) {
        console.error("Error fetching transport options");
      } finally {
        setLoading(false);
      }
    };
    getTransportOptions();
  }, []);

  const handleSelect = (name) => {
    navigate(`/details/${name}`); // Navigasi ke halaman detail
  };

  if (loading) return <div>Loading transport options...</div>;

  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <div className="search-page__list">
        {/* Contoh data tiket */}
        <div className="search-page__item">
          <h2>Pikachu</h2>
          <button onClick={() => handleSelect("pikachu")}>View Details</button>
        </div>
        <div className="search-page__item">
          <h2>Charizard</h2>
          <button onClick={() => handleSelect("charizard")}>
            View Details
          </button>
        </div>
        <div className="search-page__item">
          <h2>Bulbasaur</h2>
          <button onClick={() => handleSelect("bulbasaur")}>
            View Details
          </button>
        </div>
        <div className="search-page__item">
          <h2>Squirtle</h2>
          <button onClick={() => handleSelect("squirtle")}>View Details</button>
        </div>
        <div className="search-page__item">
          <h2>Jigglypuff</h2>
          <button onClick={() => handleSelect("jigglypuff")}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
