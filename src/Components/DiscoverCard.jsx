function DiscoverCard({ src, name, genre, description, rating }) {
  return (
    <div className="discover-card">
      <img src={src} alt={name} />
      <div className="text">
        <p className="name">
          <b>{name}</b>
        </p>
        <p className="genre">{genre}</p>
        <p className="description">{`${description.splice(0, 200)}...`}</p>
        <div className="rating">Rating : {rating}</div>
      </div>
    </div>
  );
}

export { DiscoverCard }
