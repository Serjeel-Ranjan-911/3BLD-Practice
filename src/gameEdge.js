import { useEffect, useState } from "react";
import { edges } from "./pieces.js";
import { edgeStickers } from "./letterScheme.js";
import EdgeSticker from "./components/EdgeSticker.js";
import Timer from "./components/timer.js";
import { playSuccessSound, playFailureSound } from "./sounds.js";

function GameCorner(props) {
	const [gameState, setGameState] = useState({
		gameActive: false,
		gameSize: props.gameSize,
		sequence: [],
		score: 0,
		penalty: 0,
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
				newSequence.push({
					piece: Math.floor(Math.random() * 12),
					sticker: Math.floor(Math.random() * 2),
					rotation: Math.floor(Math.random() * 360),
				});
			}
			setGameState({
				...gameState,
				gameActive: true,
				sequence: newSequence,
				current: 0,
				score: 0,
				penalty: 0,
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
		});
	};

	const handleKeyDown = (event) => {
		//start the game when the user presses space
		if (event.key === " " && !gameState.gameActive) {
			//start game on space press
			return startGame();
		}

		if (gameState.gameActive) {
			if (
				event.key.toUpperCase() ===
				edgeStickers[
					edges[gameState.sequence[gameState.current].piece][
						gameState.sequence[gameState.current].sticker
					]
				]
			) {
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
				<div
					style={{
						transform: "translate(25%, 0)",
					}}
				>
					<EdgeSticker
						piece={edges[gameState.sequence[gameState.current].piece]}
						activeColor={
							edges[gameState.sequence[gameState.current].piece][
								gameState.sequence[gameState.current].sticker
							]
						}
						restStyle={{
							marginRight: "10rem",
							transform: `rotateZ(${
								gameState.sequence[gameState.current].rotation
							}deg)`,
						}}
						restProps={{
							className: "activePiece",
						}}
					/>

					{gameState.current + 1 < gameState.gameSize && (
						<EdgeSticker
							piece={edges[gameState.sequence[gameState.current + 1].piece]}
							activeColor={
								edges[gameState.sequence[gameState.current + 1].piece][
									gameState.sequence[gameState.current + 1].sticker
								]
							}
							restStyle={{
								marginRight: "7rem",
								transform: `rotateZ(${
									gameState.sequence[gameState.current + 1].rotation
								}deg) scale(0.7)`,
							}}
						/>
					)}

					{gameState.current + 2 < gameState.gameSize && (
						<EdgeSticker
							piece={edges[gameState.sequence[gameState.current + 2].piece]}
							activeColor={
								edges[gameState.sequence[gameState.current + 2].piece][
									gameState.sequence[gameState.current + 2].sticker
								]
							}
							restStyle={{
								marginRight: "7rem",
								transform: `rotateZ(${
									gameState.sequence[gameState.current + 2].rotation
								}deg) scale(0.7)`,
							}}
						/>
					)}
				</div>
			)}
			{gameState.gameActive && (
				<div className="scoreBoard">
					<>
						<p className="score">
							Hit: {gameState.score} Miss: {gameState.penalty}
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
