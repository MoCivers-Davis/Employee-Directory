import React from "react";
import "../header/header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
      <h4>Click on carrots to filter by heading or use the search box to narrow your results.</h4>
    </header>
  );
}

export default header;