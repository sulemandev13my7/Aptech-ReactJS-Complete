import React, { useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { useNewsContext } from '../context/NewsContext';
import Loader from '../components/Loader';

function News({ className }) {

  const { news, setNews, fetchNews, loading } = useNewsContext();

  // load data on initial render
  useEffect(() => {
    (async () => {
      const data = await fetchNews()
      setNews(data.articles)
      console.log(data)
    })()
  }, [])

  if (loading) return <Loader/>;
  
  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-5 ${className}`}>
        {news.map((newDetails,index) => {
          if(!newDetails.urlToImage) return null;
          return (
            <>
              <NewsCard key={index} details={newDetails}/>
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

function NewsCard({details}) {

  return (
    <>
      <div className="card bg-base-200 shadow-sm">
        <figure>
          <img
          className='w-full aspect-video object-contain'
            src={details?.urlToImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2">{details?.title}</h2>
          <p className='line-clamp-3'>{details.description}</p>
          <div className="card-actions justify-end mt-4">
            <button onClick={()=>window.open(details.url)} className="btn badge-outline">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default News