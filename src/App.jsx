import React, { useState } from "react";
import ReactDOM from "react-dom/client";


const App = () => {
  
  return (
    <div>
      <h2>Hello World!</h2>
    </div>
  );

};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App/>);
