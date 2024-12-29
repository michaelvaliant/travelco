import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/DEFAULT";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Hapus script saat komponen di-unmount
    };
  }, []);

  return null;
};

export default Chatbot;
