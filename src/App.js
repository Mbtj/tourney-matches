import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import playerData from "./data/playerData";
import matchData from "./data/matchData";

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList {...playerData}/>
      <MatchList {...matchData}/>
    </div>
  );
}

export default App;