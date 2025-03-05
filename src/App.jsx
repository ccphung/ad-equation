import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Questions from "./pages/Questions";
import Mission from "./pages/Mission";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ma-mission" element={<Mission />} />
        <Route path="/questions-frequentes" element={<Questions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
