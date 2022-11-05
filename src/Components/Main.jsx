import "./CSS/main.css";

function Main() {
  return (
    <main id="main">
      <div id="discover">
        <h1>Discover</h1>
        <div className="discover gallery">
          <div className="discover-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
              alt="SM NWH"
            />
            <div className="text">
              <p className="name">
                {" "}
                <b> Spider-Man No Way Home </b>
              </p>
              <p className="genre">Action, Adventure, Science Fiction</p>
              <p className="description">
                Peter Parker is unmasked and no longer able to separate his
                normal life from the high-stakes of being a super-hero.
              </p>
              <div className="rating">Rating : 8.9</div>
            </div>
          </div>
          <div className="discover-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
              alt="SM NWH"
            />
            <div className="text">
              <p className="name">
                {" "}
                <b> Spider-Man No Way Home </b>
              </p>
              <p className="genre">Action, Adventure, Science Fiction</p>
              <p className="description">
                Peter Parker is unmasked and no longer able to separate his
                normal life from the high-stakes of being a super-hero.
              </p>
              <div className="rating">Rating : 8.9</div>
            </div>
          </div>
        </div>
      </div>
      <div id="popular-main">
        <h1>Popular</h1>
        <div className="popular-main gallery">
          <div className="popular-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
              alt="Game of Thrones"
            />
          </div>
          <div className="popular-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
              alt="Game of Thrones"
            />
          </div>
          <div className="popular-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
              alt="Game of Thrones"
            />
          </div>
          <div className="popular-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
              alt="Game of Thrones"
            />
          </div>
        </div>
      </div>
      <div id="category-main">
        <h1>Hollywood</h1>
        <div className="category-main gallery">
          <div className="category-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
              alt="Black Adam"
            />
          </div>
          <div className="category-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
              alt="Black Adam"
            />
          </div>
          <div className="category-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
              alt="Black Adam"
            />
          </div>
          <div className="category-main-card">
            <img
              src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
              alt="Black Adam"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export { Main };
