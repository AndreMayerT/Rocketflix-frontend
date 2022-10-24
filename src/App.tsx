import "./App.css"
import axios from "axios"
import logo from "./android-chrome-192x192.png"
import smallLogo from "./favicon-32x32.png"
import { MovieCard } from "./components/MovieCard/movieCard"
import { useState } from "react"
import notFoundPoster from "./Poster.png"

function App() {
  const [movieInfo, setMovieInfo]: any = useState()

  async function getData() {
    let title = ""
    let img = ""
    let overview = ""

    await axios
      .get("https://rocketflix-backendd.herokuapp.com/movie")
      .then(function (response) {
        title =
          response.data.title ||
          "Oops, today is not the day to watch films. Let's code!"
        img = response.data.img || notFoundPoster
        overview = response.data.overview

        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    setMovieInfo(<MovieCard title={title} img={img} overview={overview} />)
  }
  return (
    <div className="App">
      <header>
        <img className="logoTop" src={logo} alt="logo icon" />
        <h1>Don't know what to watch?</h1>
      </header>

      <div className="movie">{movieInfo}</div>
      <button
        onClick={() => {
          getData()
        }}
      >
        <img src={smallLogo} alt="small logo icon" /> <h3>Find movie</h3>
      </button>

      <p className="instruction">
        Click on "Find movie" and we will bring the information of a movie to
        watch today.
      </p>
    </div>
  )
}

export default App
