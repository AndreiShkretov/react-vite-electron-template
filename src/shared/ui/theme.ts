import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    danger: "#e74c3c",
    background: "#f5f5f5",
    text: "#333",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    body {
      font-size: 14px;
    }
  }
`;
