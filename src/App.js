import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import axios from "axios";

const App = () => {
 

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
      </header>
    </div>
  );
};

export default App;
