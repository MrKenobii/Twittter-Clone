import React from "react";
import Container from "./layout/Container";
import Widgets from "./layout/Widgets";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";


const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
};

export default App;
