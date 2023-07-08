import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./view/screens/landing page/landing_page";
import Register from "./view/screens/register/register_screen";
import Login from "./view/screens/login/login_screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
