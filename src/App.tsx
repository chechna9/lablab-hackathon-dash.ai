import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./view/screens/landing page/landing_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
