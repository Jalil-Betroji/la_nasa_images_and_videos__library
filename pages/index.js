import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const executeSearch = () => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}`;
    axios.get(apiUrl)
      .then((response) => {
        if (response.data.collection && response.data.collection.items) {
          setData(response.data.collection.items);
        } else {
          console.error('Invalid API response:', response.data);
        }
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    executeSearch();
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for images..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-700 rounded-md w-80  text-black"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={item.links[0].href}>
              <img className="rounded-t-lg w-full h-80 " src={item.links[0].href} alt={item.data[0].title} />
            </a>
            <div className="p-5">
              <a href={item.links[0].href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.data[0].title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.data[0].description.slice(0, 75) + (item.data[0].description.length > 25 ? '...' : '')}
              </p>
              <a href={item.links[0].href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm mt-4">
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === index + 1 ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;