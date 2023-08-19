import React from 'react';
import SearchBox from '../components/search/SearchBox';

const Search = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white text-2xl font-semibold mb-6">
          Search for TicketMaster events
        </h1>
        <div className="max-w-xl w-full">
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default Search;
