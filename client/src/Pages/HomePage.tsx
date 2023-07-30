import React, { useState, Suspense, lazy } from "react";
const Popular = lazy(() => import('../Components/Home/Popular'));
const Heading = lazy(() => import('../Components/Home/Heading'));
const RightSidebar = lazy(() => import('../Components/RightSidebar'));

import { BiSearch, BiX } from 'react-icons/bi';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import banner from '../banner.json';
import { notify } from "../Components/Toastify/Toastify";
import { getApi } from "../Api/Requests";
import { Books } from "../Model/Book";
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

  const [search, setSearch] = useState<string>('');
  const [searchError, setSearchError] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Books>({ items: [], totalItems: 0 });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const regex = /^\s*$/;
      if (search === null || regex.test(search)) {
        notify("Search text is empty.", 'warning')
      } else {
        const response = await getApi(`/search?q=${search}&page=${1}`)

        setCurrentPage(1)
        if (response?.totalItems == 0) {
          setSearchError(true)
          setSearchResult({ totalItems: 0, items: [] })
          setTimeout(() => {
            setSearchError(false)
          }, 3000);
        } else {
          setSearchResult(response)
        }
      }
    } catch (error) {
      notify('Error fetching data:' + error, 'error');
    }
  }

  const pageNumbers = [];
  const limit = searchResult?.totalItems;
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i < 1) {
      continue;
    }
    if (i > limit) {
      break;
    }
    pageNumbers.push(i);
  }

  const searchMovie = async (value: number) => {
    setCurrentPage(value)
    try {
      const searchResponse = await getApi(`/search?q=${search}&page=${value}`);
      if (searchResponse?.totalItems == 0) {
        setSearchError(true)
        setSearchResult({ totalItems: 0, items: [] })
        setTimeout(() => {
          setSearchError(false)
        }, 3000);
      } else {
        setSearchResult(searchResponse)
      }
    } catch (error) {
      notify('Error fetching data:' + error, 'error');
    }
  }

  return (
    <>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
        <div className='flex-1 md:ml-[120px] lg:ml-[150px] md:pr-3 lg:pr-0 md:px-0 px-2'>
          <SearchForm search={search} setSearch={setSearch} handleSubmit={handleSubmit} setSearchResult={setSearchResult} />
          {searchError && <h1>Book not found</h1>}
          {search != '' && searchResult.items && searchResult?.totalItems !== 0 && !searchError ?
            <>
              <Heading title={'Search Result'} />
              <div className="flex flex-col gap-6">
                {
                  searchResult?.items?.map(book => {
                    const author = book.volumeInfo.authors?.length > 0 ? book.volumeInfo.authors[0] : 'Unknown';
                    return (
                      <Link to={book.volumeInfo.previewLink} key={book.id} target="_blank">
                        <div className="search gap-8 justify-between border-b-[1px] border-gray-400/20 pb-5 cursor-pointer">
                          <div className="book">
                            <div className="book__cover">
                              <img className="book__cover-img" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                            </div>
                            <div className="book__pages"></div>
                          </div>
                          <div className=" flex-1">
                            <h3 className="text-[20px] mb-1 truncate text-ellipsis w-[54vw]"><b>{book.volumeInfo.title}</b></h3>
                            <p>{author}</p>
                          </div>
                          <h4>{book.volumeInfo.publishedDate?.slice(0, 4)}</h4>
                        </div>
                      </Link>
                    )
                  })
                }
                {
                  searchResult.totalItems > 20 &&
                  <nav className=''>
                    <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
                      {
                        currentPage - 1 >= 1 && <li>
                          <button onClick={() => searchMovie(currentPage - 1)} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 ">
                            <MdKeyboardArrowLeft className="w-5 h-5" />
                          </button>
                        </li>
                      }

                      {
                        pageNumbers.map(page => {
                          return (
                            <li key={page}>
                              <button onClick={() => searchMovie(page)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === page && 'bg-gray-300'}`} disabled={currentPage === page && true}>{page}</button>
                            </li>
                          )
                        })
                      }
                      {
                        currentPage + 1 <= limit && <li>
                          <button onClick={() => searchMovie(currentPage + 1)} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                            <MdKeyboardArrowRight className="w-5 h-5" />
                          </button>
                        </li>
                      }
                    </ul>
                  </nav>
                }
              </div>
            </>
            : (<div className='mt-10 md:mt-16 relative'>
              <h1 className='text-[50px] leading-[61px] md:text-[70px] md:leading-[81px]'>
                {banner?.title} <br className='hidden md:block' /> {banner?.subName}
              </h1>
              <p className='md:w-1/2 mt-4'>
                {banner?.description}
              </p>
              <img src='/book.png' alt='' className='relative -z-10 md:z-0 mt-5 md:mt-0 md:absolute lg:w-[650px] lg:top-[-50px] lg:right-[-350px] md:top-[110px] md:right-[-5px] md:w-[340px] md:pr-0 pr-4 ' />
              <button className=' -mt-10 mb-0 md:mb-[55px] mx-auto md:mx-0 z-20 bg-gray-700 text-gray-100 py-2 px-5 rounded-full md:mt-8 flex items-center gap-1 text-[14px]'>
                Start Reading
                <BsBoxArrowInUpRight className='h-4 w-4 text-white' />
              </button>
            </div>)}

          <Popular />
        </div>
      </Suspense>
      <RightSidebar searchResult={searchResult} search={search} searchError={searchError} />
    </>
  );
}

const SearchForm: React.FC<any> = ({ search, setSearch, handleSubmit, setSearchResult }) => {

  const handleChange = (e: any) => {
    const { value } = e.target
    setSearch(value)
  }

  const clearSearch = () => {
    setSearch('')
    setSearchResult([])
  }

  return (
    <form className='flex h-10 mt-5' onSubmit={handleSubmit}>
      <label htmlFor='voice-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <BiSearch className='w-4 h-4 text-gray-700' />
        </div>
        <input
          type='text'
          value={search}
          onChange={handleChange}
          className='border-b-[1px] outline-none text-gray-900 bg-transparent text-sm focus:border-b-[1px] focus:border-gray-400/50 block w-full pl-10 p-2.5'
          placeholder='Search book name...'
        />
        <button type='button' className='absolute inset-y-0 right-0 flex items-center pr-3' onClick={clearSearch}>
          <BiX className='w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' />
        </button>
      </div>
      <button type='submit' className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#b573f7]  rounded-lg border border-[#b573f7]  hover:bg-[#a257ed] focus:ring-4 focus:outline-none focus:ring-[#d8b2ff]'>
        Search
      </button>
    </form>
  );
};

export default HomePage;
