import { Logo } from "./components/Logo"
import { MovieCard } from "./components/MovieCard"

function App() {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gradient-to-tr from-[#1E46A3] via-black to-[#C12A23]">
      <Logo />
      <h1>Não sabe oque assistir?</h1>
      <MovieCard />
      <button
        className="flex items-center"
      >
        <Logo />
        Encontrar filme
      </button>
      <span className="">
      Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
      </span>
    </div>
  )
}

export default App
