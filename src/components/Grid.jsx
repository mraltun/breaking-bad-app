import React from "react";

const Grid = ({ characters }) => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {characters.map((person) => (
        <li
          key={person.name}
          className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
        >
          <div className='flex-1 flex flex-col p-8'>
            <img
              className='w-52 h-52 flex-shrink-0 mx-auto rounded'
              src={person.img}
              alt=''
            />
            <h3 className='mt-5 text-gray-900 text-sm font-medium'>
              {person.name}
            </h3>
            <dl className='mt-1 flex-grow flex flex-col justify-between'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-gray-500 text-sm'>{person.nickname}</dd>

              {/* <dd className='mt-3'>asd</dd> */}
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Grid;
