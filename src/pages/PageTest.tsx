import React, { useState } from 'react';

type PageProps = {
  navigateTo: (page: string) => void;
  closePage: () => void;
};

const Home: React.FC<PageProps> = ({ navigateTo, closePage }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Home Page</h2>
      <button
        className='text-base bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-full'
        onClick={() => navigateTo('about')}
      >
        Go to About Page
      </button>
      <button
        className='text-base bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full ml-2'
        onClick={closePage}
      >
        Close
      </button>
    </div>
  );
};

const About: React.FC<PageProps> = ({ navigateTo, closePage }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>About Page</h2>
      <button
        className='text-base bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-full'
        onClick={() => navigateTo('home')}
      >
        Go to Home Page
      </button>
      <button
        className='text-base bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full ml-2'
        onClick={closePage}
      >
        Close
      </button>
    </div>
  );
};

const PageTest: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isPageOpen, setIsPageOpen] = useState<boolean>(true);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const closePage = () => {
    setIsPageOpen(false);
  };

  const openPage = () => {
    setIsPageOpen(true);
  };

  return (
    <div>
      {isPageOpen ? (
        <>
          {currentPage === 'home' && <Home navigateTo={navigateTo} closePage={closePage} />}
          {currentPage === 'about' && <About navigateTo={navigateTo} closePage={closePage} />}
        </>
      ) : (
        <div>
          <h2 className='text-2xl font-bold'>Page Closed</h2>
          <button
            className='text-base bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full'
            onClick={openPage}
          >
            Open Page
          </button>
        </div>
      )}
    </div>
  );
};

export default PageTest;
