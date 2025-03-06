import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner"; // Ton loader

const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Questions = lazy(() => import("./pages/Questions"));
const Mission = lazy(() => import("./pages/Mission"));
const YourHunter = lazy(() => import("./pages/YourHunter"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/ma-mission" element={<Mission />} />
              <Route
                path="/votre-chasseur-immobilier"
                element={<YourHunter />}
              />
              <Route path="/questions-frequentes" element={<Questions />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
