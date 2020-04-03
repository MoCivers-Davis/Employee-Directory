import React from "react";
import "../search/search.css";


function search({startSearch}) {
    return (
      <form className="search text-center">
          <label />Search <input onChange = {e => startSearch(e)}/>
      </form>
    )
}
export default search;