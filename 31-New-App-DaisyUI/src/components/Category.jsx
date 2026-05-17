import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext';

function Category({className}) {

  const {setNews,fetchNews} = useNewsContext();
  const Category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  const handleClick =async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
      setNews(data.articles)
      console.log(data.articles)
  }
  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5`}>
          {Category.map((category) => (
            <button 
            onClick={handleClick} 
            value={category} 
            className="btn btn-primary" 
            key={category}>
              {category}
              </button>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Category