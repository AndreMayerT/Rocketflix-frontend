import "./movieCard.css"

export function MovieCard(props: any) {
  return (
    <div className="Card">
      <img src={props.img} alt="movie poster" />
      <div className="info">
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  )
}
