import React from "react";
import Grid from "../components/Grid";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";

const Characters = () => {
  const { data, error, isPending } = useFetch(
    "https://www.breakingbadapi.com/api/characters"
  );

  return (
    <section>
      <Search />
      <div>
        {isPending && <p className='text-4xl text-center py-32'>Loading...</p>}
        {error && <p className='text-2xl text-center py-32'>Error! {error}</p>}
        <section>
          {data && (
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {data.map((item) => (
                <li
                  key={item.name}
                  className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
                >
                  <div className='flex-1 flex flex-col p-8'>
                    <img
                      className='w-52 h-52 flex-shrink-0 mx-auto rounded'
                      src={item.img}
                      alt=''
                    />
                    <h3 className='mt-5 text-gray-900 text-sm font-medium'>
                      {item.name}
                    </h3>
                    <dl className='mt-1 flex-grow flex flex-col justify-between'>
                      <dt className='sr-only'>Title</dt>
                      <dd className='text-gray-500 text-sm'>{item.nickname}</dd>

                      {/* <dd className='mt-3'>asd</dd> */}
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </section>
  );
};

export default Characters;
