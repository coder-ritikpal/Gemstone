// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./components/Loading";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage"
import NotFoundPage from "./pages/NotFoundPage";

// Redirects to "/" if page was reloaded and not on home
const ForceHomeRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.performance &&
      performance.getEntriesByType("navigation")[0]?.type === "reload"
    ) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    }
  }, []);

  return null;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ForceHomeRedirect />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
    </>
  );
};

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone ? (
        <Loading onComplete={() => setLoadingDone(true)} />
      ) : (
        <Router>
          <AppRoutes />

          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />
        </Router>
      )}
    </>
  );
}

export default App;
