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
        <div className='h-screen flex items-center justify-center'>
          <card className='flex flex-col rounded-lg shadow-lg w-1/2  bg-white'>
            <div className='flex justify-center'>
              <img src={crimeScene} />
            </div>
            <p className='text-center text-gray-800 text-4xl mt-8'>
              Death Details
            </p>
            The Deceased
            <p className='text-center text-gray-700 font-light'>{data.death}</p>
          </card>
        </div>
      )}
    </section>
  );
};

export default DeathGrid;
