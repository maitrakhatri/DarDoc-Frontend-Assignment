function DiscoverCard({ src, name, description, rating }) {
  return (
    <div className="discover-card">
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${src}`} alt={name} />
      <div className="text">
        <p className="name">
          <b>{name}</b>
        </p>
        <p className="description">{`${description.slice(0,200)}....`}</p>
        <div className="rating">Rating : {rating}</div>
      </div>
    </div>
  );
}

export { DiscoverCard }
