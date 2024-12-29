import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2";

// Fungsi untuk mengambil daftar transportasi (Pokémon)
export const fetchTransportOptions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon?limit=10`); // Ambil 10 Pokémon pertama
    return response.data.results; // Mengembalikan array Pokémon
  } catch (error) {
    console.error("Error fetching transport options:", error);
    throw error;
  }
};

// Fungsi untuk mengambil detail tiket (data spesifik Pokémon)
export const fetchTicketDetails = async (pokemonName) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return {
      name: response.data.name,
      price: response.data.base_experience * 10, // Harga tiket berdasarkan base experience
      type: response.data.types.map((type) => type.type.name).join(", "), // Jenis transportasi
    };
  } catch (error) {
    console.error("Error fetching ticket details:", error);
    throw error;
  }
};
