function Sidebar() {
  return (
    <aside id="sidebar">
      <h1 id="title">Gflix</h1>
      <div id="menu">
        <h5>Menu</h5>
        <div className="menu-list">Home</div>
        <div className="menu-list">Favorite</div>
        <div className="menu-list">Purchase</div>
        <div className="menu-list">Reminder</div>
      </div>
      <div id="others">
        <h5>Others</h5>
        <div className="others-list">Playlist</div>
        <div className="others-list">Live</div>
        <div className="others-list">Bookmarks</div>
        <div className="others-list">Settings</div>
      </div>
    </aside>
  );
}

export { Sidebar }
