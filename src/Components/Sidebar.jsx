function Sidebar() {
  return (
    <aside id="sidebar">
      <h1 id="title">Gflix</h1>
      <div id="menu">
        <h5>Menu</h5>
        <div className="menu-list">
          {" "}
          <img src="../../assets/home.png" alt="home" /> Home
        </div>
        <div className="menu-list">
          <img src="../../assets/favorite.png" alt="favorite" />
          Favorite
        </div>
        <div className="menu-list">
          <img src="../../assets/purchase.png" alt="purchase" />
          Purchase
        </div>
        <div className="menu-list">
          <img src="../../assets/reminder.png" alt="reminder" />
          Reminder
        </div>
      </div>
      <div id="others">
        <h5>Others</h5>
        <div className="others-list"><img src="../../assets/playlist.png" alt="playlist" />Playlist</div>
        <div className="others-list"><img src="../../assets/live.png" alt="live" />Live</div>
        <div className="others-list"><img src="../../assets/bookmark.png" alt="bookmark" />Bookmarks</div>
        <div className="others-list"><img src="../../assets/settings.png" alt="settings" />Settings</div>
      </div>
    </aside>
  );
}

export { Sidebar };
