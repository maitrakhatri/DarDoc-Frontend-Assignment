import "./App.css";
import { Main, Sidebar, FilterBar } from "./Components";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <FilterBar />
    </div>
  );
}

export default App;
