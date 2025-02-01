import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UsercontextProvider from "./context/Usercontext.jsx"; // Fixed import
import { CaptainContext } from "./context/Captaincontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
    <UsercontextProvider> {/* Use correct provider name */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsercontextProvider>
    </CaptainContext>

  </StrictMode>
);
