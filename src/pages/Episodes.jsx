import React from "react";
import Grid from "../components/Grid";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";

const Episodes = () => {
  const { data, error, isPending } = useFetch(
    "https://www.breakingbadapi.com/api/episodes"
  );

  return (
    <section>
      <Search />
      <div>
        {isPending && <p className='text-4xl text-center py-32'>Loading...</p>}
        {error && <p className='text-2xl text-center py-32'>Error! {error}</p>}
        <section>{data && <Grid data={data} type={"episodes"} />}</section>
      </div>
    </section>
  );
};

export default Episodes;
