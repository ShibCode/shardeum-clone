import React, { useEffect } from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <div className="h-[100vh] bg-white"></div>
    </>
  );
};

export default App;
