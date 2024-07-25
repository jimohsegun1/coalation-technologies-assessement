// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store"; // Ensure this path is correct
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#F6F7F8] h-full">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
