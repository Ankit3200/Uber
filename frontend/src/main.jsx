import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UsercontextProvider from "./context/Usercontext.jsx";
import CaptaincontextProvider from "./context/Captaincontext.jsx"; // ✅ Fixed Import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptaincontextProvider> {/* ✅ Correct Provider Usage */}
      <UsercontextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsercontextProvider>
    </CaptaincontextProvider>
  </StrictMode>
);
