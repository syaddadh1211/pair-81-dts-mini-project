import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePlayed from "./pages/MoviePlayed";
import MovieSelected from "./pages/MovieSelected";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { bgcolor } from "@mui/system";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="played" element={<MoviePlayed />} />
        <Route path="selected/:movieId" element={<MovieSelected />} />
        <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
      </Routes>
    </>
  );
}

export default App;
