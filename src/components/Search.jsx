import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit} className='bg-black'>
          <input placeholder='Search..' type='text' onChange={handleChange} />
        </form>
      </div>
    </section>
  );
};

export default Search;
