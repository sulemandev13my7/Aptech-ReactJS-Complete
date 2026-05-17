import { useEffect, useState } from "react"
    import Wrapper from './Wrapper'
    import { useNewsContext } from '../context/NewsContext';

    function Navbar({className}) {

        const {setNews,fetchNews} = useNewsContext();

        const searchNews = (e)=>{
            let timer = null;
            const searchValue = e.target.value;
            if(!searchValue) return;

            clearTimeout(timer);

            timer = setTimeout(async () => {
                const data = await fetchNews(`/everything?q=${searchValue}`)
                setNews(data.articles)
            },1000)
        }

        

        return (
            <>
            <div className={`bg-base-200 ${className}`}>

            <Wrapper>
            <div className="navbar shadow-sm ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Salman News</a>
                </div>
                <div className="flex gap-2">
                    <input onChange={searchNews}  type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Salman"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNuvdA60X9tQmlPWSA2qd2ZojccIVAes_HA&s" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </Wrapper>
            </div>
            </>
        )

    }
    export default Navbar