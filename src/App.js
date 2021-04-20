import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Content from "./Containers/Content";
import Carousel from "./Containers/Carousel";
import React, { createContext, useState } from "react";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Content />
        <Carousel />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
