import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import crimeScene from "../assets/crime-scene.jpg";
// import useFetch from "../hooks/useFetch";

const Deaths = () => {
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
          "https://www.breakingbadapi.com/api/deaths"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
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
    <div className='px-10 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5'>
      {data &&
        data.map((death) => (
          <div className='' key={death.death_id}>
            <Link
              to={`${death.death_id}`}
              className='flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md'
            >
              <img
                src={crimeScene}
                alt='Crime Scene logo'
                className='h-36 object-cover rounded-tl-md rounded-tr-md'
              />

              <div className='px-3 py-2'>
                <h3 className='font-semibold'>{death.death}</h3>
                <p>Season {death.season}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Deaths;
