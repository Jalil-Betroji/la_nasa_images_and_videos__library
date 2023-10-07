
import React, { useState } from 'react';

const Index = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const itemsPerPage = 6;

  const executeSearch = () => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.collection && data.collection.items) {
          setData(data.collection.items);
        } else {
          console.error('Invalid API response:', data);
        }
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
    // For demonstration purposes, setting dummy data
    const dummyData = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      title: `Item ${index + 1}`,
      // ... other properties
    }));
    setData(dummyData);

    // Update hasSearched when search is performed
    setHasSearched(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for images..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-700 rounded-md w-80 text-black mb-4"
        />
        <button
          onClick={() => {
            executeSearch();
            setCurrentPage(1);
          }}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
        >
          Search
        </button>
      </div>

      {hasSearched && searchQuery !== '' && (
        <div className="grid grid-cols-3 gap-4">
          {currentItems.map((item, index) => (
  <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {item.links && item.links[0] && item.links[0].href && item.data && item.data[0] && item.data[0].title && (
      <a href={item.links[0].href}>
        <img className="rounded-t-lg w-full h-80" src={item.links[0].href} alt={item.data[0].title} />
      </a>
    )}
    <div className="p-5">
      {item.links && item.links[0] && item.links[0].href && item.data && item.data[0] && item.data[0].title && (
        <a href={item.links[0].href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.data[0].title}</h5>
        </a>
      )}
      {item.data && item.data[0] && item.data[0].date_created && (
        <p className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-dark">
          <span className='font-semibold'>Date : </span>{item.data[0].date_created.slice(0, 10)}
        </p>
      )}
      {item.data && item.data[0] && item.data[0].description && (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.data[0].description.slice(0, 200) }
        </p>
      )}
     
    </div>
  </div>
))}

        </div>
      )}

      {hasSearched && searchQuery !== '' && (
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm mt-6 mb-6">
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
      )}
    </div>
  );
};

export default Index;
