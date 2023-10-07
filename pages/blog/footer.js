const Footer = () => {
    return (
     

<footer className="bg-gray-300 rounded-lg shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="/img/logo.png" className="w-20 h-20" alt="Solicoders Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Solicoders</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.nasa.gov/about/" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="https://www.nasa.gov/news/" className="mr-4 hover:underline md:mr-6">News & Events</a>
                </li>
                <li>
                    <a href="https://www.nasa.gov/technology/" className="mr-4 hover:underline md:mr-6 ">Technology</a>
                </li>
                <li>
                    <a href="https://www.nasa.gov/nasatv/" className="hover:underline">Nasa tv</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.nasa.gov/" className="hover:underline">Nasa</a>. All Rights Reserved.</span>
    </div>
</footer>



    );
  };
  
  export default Footer;
  