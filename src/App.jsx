import "./App.css";
import React from "react";
import { Container } from "./Components/Container/Container";
import { Header } from "./Components/Header/Header";
import { GoodsOnPage } from "./Components/GoodsOnPage/GoodsOnPage";
import { Cart } from "./Components/Cart/Cart";
function App() {
  return (
    <Container>
      <Cart />
      <Header />
      <GoodsOnPage />
    </Container>
  );
}

export default App;
