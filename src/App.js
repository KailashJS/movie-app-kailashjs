import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import MovieDetail from "../src/components/MovieDetail/MovieDetail";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route path="/*" Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
