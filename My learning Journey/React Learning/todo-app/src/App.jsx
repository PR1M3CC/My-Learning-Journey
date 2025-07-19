import { useState } from "react";
import { TodoProvider } from "./context";
import Wrapper from "../wrapper";

function App() {
  return (
    <TodoProvider>
      <Wrapper />
    </TodoProvider>
  );
}

export default App;
