import React from "react";
import Search from "../components/Search";
import Grid from "../components/Grid";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, error, isPending } = useFetch(
    "https://www.abreakingbadapi.com/api/characters?limit=8"
  );

  // if (isPending) {
  //   return <h2 className='text-5xl text-center py-32'>Loading...</h2>;
  // }
  // if (error) {
  //   return <h3 className='text-2xl text-center py-32'>Error! {error}</h3>;
  // }

  return (
    <main>
      <section>
        <Search />
      </section>
      <div>
        {isPending && <p className='text-4xl text-center py-32'>Loading...</p>}
        {error && <p className='text-2xl text-center py-32'>Error! {error}</p>}
      </div>
      <section>{data && <Grid data={data} />}</section>
    </main>
  );
};

export default Home;
