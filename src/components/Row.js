import {React,useState,useEffect} from 'react'
import instance from '../instance'
import'./Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchurl,isLargeRow}) {
    const [movies,setMovies]=useState([])

   
    
  useEffect(() => {
    async function fetchData (){
        const request = await instance.get(fetchurl)
        setMovies(request.data.results)
    }
  fetchData()
  }, [])
  
 console.log(movies);
  
  return (
 <div className='row'>
    <h2 style={{textAlign:"left"}}>{title}</h2>
    <div className='row__posters'>
      {movies.map((movie)=>(
       <div>
        <img
        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
        key={movie.id}
         src={ `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` }
        alt={movie.name}/>
        <p>{movie?.name||movie?.title}</p>
            
       
   </div>
    )
                
    )


}
<div>
                  
                  
                </div>
     
 </div>
 </div>

  )  }
export default Row