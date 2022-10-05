import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharGrid = () => {
  const { deathId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const { data, error, isPending } = useFetch(
  //   "https://www.breakingbadapi.com/api/deaths"
  // );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.breakingbadapi.com/api/deaths`
        );
        const data = await response.json();
        const newDeath = data.find(
          (death) => String(death.death_id) === deathId
        );
        setData(newDeath);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2 className='text-5xl text-center py-32'>Loading...</h2>;
  }

  if (error) {
    return <h3 className='text-2xl text-center py-32'>Error! {error}</h3>;
  }

  return (
    <div>
      {data && (
        <section>
          <div className='flex justify-center items-center'></div>
        </section>
      )}
    </div>
  );
};

export default CharGrid;
