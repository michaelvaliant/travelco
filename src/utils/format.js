// Fungsi untuk memformat harga menjadi format uang
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

// Fungsi untuk memformat string (contoh: kapitalisasi huruf pertama)
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
