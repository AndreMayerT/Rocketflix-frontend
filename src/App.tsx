import "./App.css"
import axios from "axios"

function App() {
  async function getRandomMovie() {
    await axios
      .get("http://localhost:3333/movie")
      .then(function (response) {
        console.log(response.data.title)
        console.log(response.data.img)
        console.log(response.data.overview)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  getRandomMovie()
  return <div className="App"></div>
}

export default App
