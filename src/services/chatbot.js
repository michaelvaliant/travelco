export const loadChatbot = () => {
  const script = document.createElement("script");
  script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/DEFAULT";
  script.async = true;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  document.body.appendChild(script);
};

export const removeChatbot = () => {
  const scripts = document.querySelectorAll("script[src*='tawk.to']");
  scripts.forEach((script) => document.body.removeChild(script));
};
