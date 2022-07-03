import Poster from "./assets/Poster.png"
import { MovieCard } from "./components/MovieCard"
import { ShuffleAngular } from "phosphor-react"
import { useEffect, useState } from "react"
import axios from "axios"

interface MovieData {
  title: string;
  overview: string;
  img: string | null;
}

interface MovieResponse {
  results: {
    title: string;
    poster_path: string;
    overview: string;
  }[]
}

function App() {  
  const [movie, setMovie] = useState<MovieData>()

  const BASE_URL = "https://api.themoviedb.org/3/"
  const QUERY = "trending/movie/day"
  const API_KEY = "5bde8cd7e4a94469b5a88bc4ccf2104f"
  const LANGUAGE = "language=pt-BR"

  async function generateRandomMovie(){
    const page = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
    const movieId = Math.floor(Math.random() * (19 - 0 + 1)) + 0

    await axios.get<MovieResponse>(`${BASE_URL}${QUERY}?api_key=${API_KEY}&${LANGUAGE}&page=${page}`)
    .then(response => {
      const movie = response.data.results[movieId]
      setMovie({
        img: movie.poster_path,
        overview: movie.overview,
        title: movie.title
      })}
    )
    .catch(err => {console.log(err)})
    
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen h-full bg-gradient-to-tr from-[#1E46A3] via-black to-[#C12A23] gap-8 py-5">
      <ShuffleAngular 
        size={60} 
        weight="bold" 
        className="text-white"
      />

      <h1 className="font-bold text-4xl text-center">
        Não sabe oque assistir?
      </h1>

      {movie && 
        <MovieCard 
          description={movie?.overview}
          img={movie?.img}
          title={movie?.title}
        />
      }
      

      <button
        onClick={() => { generateRandomMovie() }}
        className="flex items-center bg-bg-button py-4 px-8 text-black font-bold gap-4 border-2  border-[#1A1A1A] rounded-md"
      >
        <ShuffleAngular 
          size={24} 
          weight="bold" 
          className="text-black"
        />
        Encontrar filme
      </button>

      <span className="text-center text-xs">
        Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
      </span>

    </div>
  )
}

export default App
