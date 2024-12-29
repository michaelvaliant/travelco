export const generateToken = (user) => {
  // Simulasi pembuatan token (bukan implementasi nyata)
  return btoa(JSON.stringify(user));
};

export const parseToken = (token) => {
  try {
    return JSON.parse(atob(token));
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token && parseToken(token);
};
