import { useEffect, useState } from "react";
import { corners } from "./pieces.js";
import { cornerStickers } from "./letterScheme.js";
import CornerSticker from "./components/CornerSticker.js";
import Timer from "./components/timer.js";
import { playSuccessSound, playFailureSound } from "./sounds.js";

function GameCorner(props) {
	const [gameState, setGameState] = useState({
		gameActive: false,
		gameSize: props.gameSize,
		sequence: [],
		score: 0,
		penalty: 0,
		activeSticker: null,
	});

	const [countDown, setCountDown] = useState(0);
	const [gameReport, setGameReport] = useState(null);
	const [startTime, setStartTime] = useState(Date.now());

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [gameState]);

	const startGame = () => {
		if (gameState.gameActive) return;

		setGameReport(null);
		setStartTime(Date.now());

		console.log("Starting game...");
		setCountDown(3);
		setTimeout(() => setCountDown(2), 1000);
		setTimeout(() => setCountDown(1), 2000);
		setTimeout(() => setCountDown(0), 3000);

		setTimeout(() => {
			//generating random numbers and store them in sequence
			let newSequence = [];
			for (let i = 0; i < gameState.gameSize; i++) {
				newSequence.push(Math.floor(Math.random() * 8));
			}
			setGameState({
				...gameState,
				gameActive: true,
				sequence: newSequence,
				current: 0,
				score: 0,
				penalty: 0,
				activeSticker: corners[newSequence[0]][Math.floor(Math.random() * 3)],
			});
		}, 3100);
	};

	const stopGame = () => {
		setGameReport({
			score: gameState.score,
			penalty: gameState.penalty,
			time: {
				minutes: Math.floor((Date.now() - startTime) / 60000),
				seconds: Math.floor(((Date.now() - startTime) % 60000) / 1000),
			},
			count: gameState.gameSize,
		});
		setGameState({
			...gameState,
			gameActive: false,
			score: gameState.score + 1,
			activeSticker: null,
		});
	};

	const handleKeyDown = (event) => {
		//start the game when the user presses space
		if (event.key === " " && !gameState.gameActive) {
			//start game on space press
			return startGame();
		}

		if (gameState.gameActive) {
			if (event.key.toUpperCase() === cornerStickers[gameState.activeSticker]) {
				playSuccessSound();
				if (gameState.current === gameState.gameSize - 1) {
					//game over

					stopGame();
					return;
				}
				return setGameState({
					...gameState,
					current: gameState.current + 1,
					score: gameState.score + 1,
					activeSticker:
						corners[gameState.sequence[gameState.current + 1]][
							Math.floor(Math.random() * 3)
						],
				});
			} else {
				playFailureSound();
				return setGameState({
					...gameState,
					penalty: gameState.penalty + 1,
				});
			}
		}
	};

	return (
		<>
			<button className="backButton" onClick={props.spawnMenu} type="button">
				Back
			</button>
			{countDown === 0 && !gameState.gameActive && (
				<p className="startgame">Press SPACE to start</p>
			)}
			{countDown > 0 && <p className="countNumber">{countDown}</p>}
			{gameState.gameActive && (
				<CornerSticker
					piece={corners[gameState.sequence[gameState.current]]}
					activeColor={gameState.activeSticker}
				/>
			)}
			{gameState.gameActive && (
				<div className="scoreBoard">
					<>
						<p className="score">
							Hit: +{gameState.score} Miss: -{gameState.penalty}
						</p>
						<Timer resetTimer={gameState.gameActive} />
					</>
				</div>
			)}
			{gameReport && (
				<div className="gameReport">
					<p className="reportText">
						Total Time - {gameReport?.time?.minutes} min :{" "}
						{gameReport?.time?.seconds} sec
					</p>
					<p className="reportText">
						Accuracy -{" "}
						{(
							(gameReport.score * 100) /
							(gameReport.score + gameReport.penalty)
						).toFixed(1)}
						%
					</p>
					<p className="reportText">Count - {gameReport.count} </p>
					<p className="reportText">
						Avg time -{" "}
						{(60 * gameReport?.time?.minutes + gameReport?.time?.seconds) /
							gameReport.count}{" "}
						sec
					</p>
				</div>
			)}

			{gameState.gameActive && (
				<div
					style={{
						position: "absolute",
						bottom: "10px",
						left: "10px",
						display: "flex",
						jusitfyContent: "center",
					}}
				>
					<p className="instructions">Type the letter of glowing sticker</p>
				</div>
			)}
		</>
	);
}

export default GameCorner;
