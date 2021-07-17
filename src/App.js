import GameComponent from "./GameComponent";
import Header from "./Header";

function App() {
  return (
    <div className="App center">
      <Header title="Tic-tac-toe" description="Built with react." />
      <GameComponent />
    </div>
  );
}

export default App;
