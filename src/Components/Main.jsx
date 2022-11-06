import { useData } from "../Context/DataContext";
import { Card } from "./Card";
import "./CSS/main.css";
import { DiscoverCard } from "./DiscoverCard";

function Main() {
  const { discoverTV, popularMovies, genreMovie, selectedGenre } = useData();

  return (
    <main id="main">
      <div id="category-main">
        <h1>{selectedGenre?.name}</h1>
        <div className="category-main gallery">
          {genreMovie.map((item) => (
            <Card key={item.id} src={item.poster_path} name={item.title} />
          ))}
        </div>
      </div>
      <div id="discover">
        <h1>Discover</h1>
        <div className="discover gallery">
          {discoverTV.map((item) => (
            <DiscoverCard
              key={item.id}
              src={item.poster_path}
              name={item.name}
              description={item.overview}
              rating={item.vote_average}
            />
          ))}
        </div>
      </div>
      <div id="popular-main">
        <h1>Popular</h1>
        <div className="popular-main gallery">
          {popularMovies.map((item) => (
            <Card key={item.id} src={item.poster_path} name={item.title} />
          ))}
        </div>
      </div>
    </main>
  );
}
export { Main };
