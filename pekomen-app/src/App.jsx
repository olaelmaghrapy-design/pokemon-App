import { useState } from "react";
import PokemonApplication from "./PokemonApplication";
import "./App.css";
function App() {
  const [started, setstarted] = useState(false);
  return (
    <div>
    

      <button onClick={() => setstarted(true)}>Start Pekomen App</button>
      {started && <PokemonApplication />}
      
    </div>
  );
}
export default App;
