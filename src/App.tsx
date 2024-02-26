import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Details from "./pages/Details/Details";
import Loader from "./components/Loader/Loader";
function App() {

  const Home = lazy(() => import("./pages/Home/Home"));


  return (
    <Router>
      <>
        <Header />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        </Suspense>
      </>
    </Router>
  );
}

export default App;
