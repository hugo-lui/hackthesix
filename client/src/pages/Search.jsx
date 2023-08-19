import React, { useState } from "react";
import SearchBox from "../components/search/SearchBox";
import Items from "../components/search/Items";

const Search = () => {
  const [items, setItems] = useState({});

  const callback = (data) => {
    setItems(data);
    console.log("callback test ");
    console.log(items);
  };

  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-2xl font-semibold mb-6">
          Search for GPUs
        </h1>
        <div className="max-w-xl w-full">
          <SearchBox callback={callback} />
        </div>

        {items &&
          items.length > 0 &&
          items.map((item, index) => <Items key={index} link={item.names} />)}
      </div>
      <Items />
    </section>
  );
};

export default Search;
