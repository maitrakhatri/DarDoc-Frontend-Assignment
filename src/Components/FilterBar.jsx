function FilterBar() {
  return (
    <aside id="FilterBar">
      <div id="profile">
        <div className="profile-details">
          <img src="https://i.pravatar.cc/300" alt="Maitra K" />
          <p>Maitra K</p>
        </div>

        <div className="icon-group">
          <img
            className="icon"
            src="https://img.icons8.com/ios/50/FFFFFF/visit.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/50/FFFFFF/appointment-reminders--v1.png"
          />
        </div>
      </div>
      <div id="search">
        <input type="text" placeholder="Search" />
      </div>
      <div id="categories">
        <button>Hoolywood</button>
        <button>Disney</button>
        <button>Pixar</button>
        <button>Viu</button>
        <button>Universal Studios</button>
        <button>Netflix</button>
        <button>Bollywood</button>
      </div>
      <div id="popular">
        <h3>Popular TV Shows</h3>
        <div className="popular-card">
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg"
            alt="House of the Dragon"
          />
          <div className="details">
            <p className="title">
              <b> House of the Dragon </b>
            </p>
            <p className="description">
              The Targaryen dynasty is at the absolute apex of its power, with
              more than 15 dragons under their yoke.
            </p>
          </div>
        </div>
        <div className="popular-card">
          <img
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg"
            alt="House of the Dragon"
          />
          <div className="details">
            <p className="title">
              <b> House of the Dragon</b>
            </p>
            <p className="description">
              The Targaryen dynasty is at the absolute apex of its power, with
              more than 15 dragons under their yoke.
            </p>
          </div>
        </div>
      </div>
      <div id="popular-actors">
        <h3>Popular Actors</h3>
        <div className="actor-card">
          <img src="https://i.pravatar.cc/300" alt="Chris Hemsworth" />
          <div className="details">
            <p className="bold">Chris Hemsworth</p>
            <p className="text-small" >Australian</p>
          </div>
          <div className="followers">
            <p>56M</p>
            <p className="text-small">Followers</p>
          </div>
        </div>
        <div className="actor-card">
          <img src="https://i.pravatar.cc/300" alt="Chris Hemsworth" />
          <div className="details">
            <p className="bold">Chris Hemsworth</p>
            <p className="text-small">Australian</p>
          </div>
          <div className="followers">
            <p>56M</p>
            <p className="text-small">Followers</p>
          </div>
        </div>
        <div className="actor-card">
          <img src="https://i.pravatar.cc/300" alt="Chris Hemsworth" />
          <div className="details">
            <p className="bold">Chris Hemsworth</p>
            <p className="text-small">Australian</p>
          </div>
          <div className="followers">
            <p>56M</p>
            <p className="text-small">Followers</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { FilterBar };
