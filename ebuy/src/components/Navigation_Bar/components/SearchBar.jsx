import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const [SearchValue, setSearchValue] = useState("");
  console.log(props.fontSize);

  const SearchValueChanged = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <li className="nav-item w-100">
      <div className="input-group w-100 p-0">
        <div className="form-outline d-flex col-12 col-sm-11 h-100 pt-2">
          <input
            value={SearchValue}
            onChange={SearchValueChanged}
            type="search"
            id="form1"
            class="nav-input nav-progressive-attribute w-100"
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              color: "black",
            }}
          />
        </div>
        <button
          id="search-button"
          type="button"
          className="btn btn-outline-* d-none d-sm-block col-sm-1"
        >
          <SearchIcon style={{ fontSize: Number(props.fontSize) }} />
        </button>
      </div>
    </li>
  );
};

export default SearchBar;
