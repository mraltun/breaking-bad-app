import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Grid from "../components/Grid";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?limit=8`
      );
      setCharacters(response.data);
      console.log(characters);
    };

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <Search />
      </section>
      <div>Hello</div>
      <section>
        <Grid characters={characters} />
      </section>
    </main>
  );
};

export default Home;
