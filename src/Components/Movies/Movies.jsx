import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function Movies() {
  let [movies, setMovies] = useState([]);
  async function getTrendingMovies() {
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=834ef42787b85563c504475a969b1446');
    console.log(data.results);
    setMovies(data.results);
  }
  useEffect(() => {
    getTrendingMovies()
  }, []);
  return (
    <div>
      <Header title={'Trending'} height={70} />
    
      <div className=" row justify-content-center pt-5 " style={{boxSizing:'border-box' , marginRight:0}}>

{
        movies.length === 0 ? <Loading /> :
    
         movies.map((movie,index) => {
            return <div className="card m-3 col-md-3 " key={index} style={{ width: '300px',height:'500px' }}>
              <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} className="card-img-top mt-1" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title.split(" ").slice(0,3).join('')}</h5>
                <p className="card-text">Vote : {movie.vote_average}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          })
        
        
 }
    
       </div>
     
    </div>
  )
}
