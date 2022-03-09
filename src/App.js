import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header title="FinProH8" />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
