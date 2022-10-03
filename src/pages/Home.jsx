import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Grid from "../components/Grid";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { data, error, isLoading } = useFetch(
    "https://www.breakingbadapi.com/api/characters?limit=8"
  );

  return (
    <main>
      <section>
        <Search />
      </section>
      <div>Hello</div>
      <section>
        <Grid data={data} />
      </section>
    </main>
  );
};

export default Home;
