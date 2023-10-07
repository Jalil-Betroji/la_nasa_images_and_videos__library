NASA Image Search App

 
 <============================Code fetch data from api =================================>

  ```const executeSearch = () => {
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
  ```



 <===========================Our team=================================>


Team: Soufiane Boukhar, Hamid achaou, Jalil betroji



 <===========================Description app=================================>


The NASA Image Search App is a web application that allows users to search for NASA imagery based on keywords and view the search results in a grid. It is built with React, JavaScript, and Tailwind CSS.

How to use the app

Go to http://localhost:3000 in your web browser.
Enter keywords in the search bar and click the "Search" button.
View the search results as a grid of images with titles.
Use the pagination controls to navigate between pages of search results.
Additional features

The app can be expanded by implementing the following features:

Pagination for navigating through multiple pages of search results.
The ability to filter search results by image type (e.g., photos, videos).
Improved user interface with better styling and responsiveness.
Deployment to a hosting service of your choice.
Error handling and feedback for cases where the API request fails.
Challenge

Implement the additional features listed above.

My thoughts

The NASA Image Search App is a well-written and easy-to-use application. It is a great example of how to build a web application with React, JavaScript, and Tailwind CSS. The additional features listed above would make the app even more useful and enjoyable to use.

I am impressed with the work that team S Soufiane Boukhar, Hamid achaou, Jalil betroji have done on this app. It is a great example of teamwork and collaboration.