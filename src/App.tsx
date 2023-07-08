import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./view/screens/landing page/landing_page";
import Register from "./view/screens/register/register_screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
