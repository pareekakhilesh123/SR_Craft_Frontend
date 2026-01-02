import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GalleryPage from "../pages/GalleryPage";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
