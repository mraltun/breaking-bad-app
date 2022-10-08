import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import crimeScene from "../assets/crime-scene.jpg";

const DeathGrid = () => {
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
        console.log(newDeath);
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
    <section>
      {data && (
        <div className='flex items-center justify-center min-h-screen'>
          <div className='flex flex-col rounded-lg shadow-lg w-1/2  bg-white'>
            <div className='flex justify-center'>
              <img src={crimeScene} alt='' className='w-full h-52' />
            </div>
            <h1 className='text-center text-gray-800 text-5xl mt-5 mb-6'>
              Death Details
            </h1>
            <p className='text-center text-gray-800 '>Deceased: {data.death}</p>
            <p className='text-center text-gray-800 '>
              Killer: {data.responsible}
            </p>
            <p className='text-center text-gray-800 '>
              Cause of death: {data.cause}
            </p>
            <p className='text-center text-gray-800 '>
              Season: {data.season} Episode: {data.episode}
            </p>
            <p className='text-center text-gray-800 '>
              Last words: "{data.last_words}"
            </p>
            <p className='text-center text-gray-800  mb-10'>
              How many deaths: {data.number_of_deaths}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeathGrid;
