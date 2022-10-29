import { useState } from "react";
import "./App.css";
import "./background.css";
import GameCorner from "./gameCorner";
import GameEdge from "./gameEdge";
import ChangeLetterScheme from "./changeLetterScheme";

function App() {
	const [menuItemSelected, setMenuItemSelected] = useState(-1);
	const [numberOfPieces, setNumberOfPieces] = useState(10);

	const spawnMenu = () => {
		setMenuItemSelected(-1);
	};

	return (
		<>
      {/* for background */}
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			
      <div className="App">
				{menuItemSelected === -1 && (
					<div className="menu">
						<p style={{
							fontSize: "2rem",
							fontWeight: "bold",
							color: "white",
							textAlign: "center",
						}}>Practice Letter Identification for 3BLD</p>
						<button
							onClick={() => setMenuItemSelected(0)}
							className="mainMenuButton"
						>
							Change/View Color/Letter Scheme
						</button>
						<button
							onClick={() => setMenuItemSelected(1)}
							className="mainMenuButton"
						>
							Start Corner
						</button>
						<button
							onClick={() => setMenuItemSelected(2)}
							className="mainMenuButton"
						>
							Start Edges
						</button>
						<p className="para1">Enter Length of Game</p>
						<input
							className="mainMenuInput"
							type="number"
							placeholder="Number of Pieces"
							value={numberOfPieces}
							onChange={(e) => setNumberOfPieces(e.target.value)}
						></input>
					</div>
				)}
        
				{menuItemSelected === 0 && <ChangeLetterScheme spawnMenu={spawnMenu} />}
				{menuItemSelected === 1 && (
					<GameCorner gameSize={numberOfPieces} spawnMenu={spawnMenu} />
				)}
				{menuItemSelected === 2 && (
					<GameEdge gameSize={numberOfPieces} spawnMenu={spawnMenu} />
				)}
			</div>
		</>
	);
}

export default App;
