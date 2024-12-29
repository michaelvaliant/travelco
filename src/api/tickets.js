import axios from "axios";

const API_BASE_URL = "https://api.example.com/tickets"; // Ganti dengan API pilihan Anda

export const fetchTickets = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};
