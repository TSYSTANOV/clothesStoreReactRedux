import "./App.css";
import React from "react";
import { Container } from "./Components/Container/Container";
import { Header } from "./Components/Header/Header";
import { GoodsOnPage } from "./Components/GoodsOnPage/GoodsOnPage";
import { Cart } from "./Components/Cart/Cart";
import { Compare } from "./Components/Compare/Compare";
function App() {
  return (
    <Container>
      <Compare/>
      <Cart />
      <Header />
      <GoodsOnPage />
    </Container>
  );
}

export default App;
