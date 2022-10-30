import { useState, useEffect } from "react";
import { colors } from "../letterScheme.js";

function EdgeSticker(props) {
	const [firstColor, setFirstColor] = useState(null);
	const [secondColor, setSecondColor] = useState(null);
	const [activeColor, setActiveColor] = useState(null);

	useEffect(() => {
		console.log(props);
		setFirstColor(colors[props.piece[0][0]]);
		setSecondColor(colors[props.piece[1][0]]);
		setActiveColor(props.activeColor);
	}, [props]);

	return (
		<div
			style={{
				position: "relative",
				width: "150px",
				height: "150px",
				display: "inline-block",
				transform: `rotateZ(${Math.floor(Math.random() * 360)}deg)`,
			}}
		>
			<div
				className={activeColor === props.piece[0] ? "stickerGlow" : ""}
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: firstColor,
					position: "absolute",
					top: "25px",
					left: "25px",
					transformStyle: "flat",
					transform: "rotateX(45deg) translate(-50%, -50%)",
					borderRadius: "15px 15px 0 0",
				}}
			></div>
			<div
				className={activeColor === props.piece[1] ? "stickerGlow" : ""}
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: secondColor,
					position: "absolute",
					top: "25px",
					left: "25px",
					transformStyle: "preserve-3d",
					transform: "rotateX(-45deg) translate(-50%, 50%)",
					borderRadius: "0 0 15px 15px",
				}}
			></div>
		</div>
	);
}

export default EdgeSticker;
