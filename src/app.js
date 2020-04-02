import React from "react";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Table from "./components/table/table";
// import User from "./components/user/user";


function App() {
  return (
    <div>
      <Header />
      <br></br>
      <Search />
      <br></br>
      <Table />
      {/* <User />   */}
    </div>
  );
}

export default App;