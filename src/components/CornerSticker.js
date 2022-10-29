import { useEffect, useState } from "react";
import { colors } from "../letterScheme.js";

function CornerSticker(props) {
	const [firstColor, setFirstColor] = useState(null);
	const [secondColor, setSecondColor] = useState(null);
	const [thirdColor, setThirdColor] = useState(null);
	const [activeColor, setActiveColor] = useState(null);

	useEffect(() => {
		console.log(props);
		setFirstColor(colors[props.piece[0][0]]);
		setSecondColor(colors[props.piece[1][0]]);
		setThirdColor(colors[props.piece[2][0]]);
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
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: firstColor,
					position: "absolute",
					top: "25px",
					left: "25px",
					transform: "rotateX(45deg) rotateZ(45deg) translate(-50%, -50%)",
					borderRadius: "15px 0 0 0",
					boxShadow:
						activeColor === props.piece[0] ? "#ff159a 0px 0px 20px 4px" : "",
				}}
			></div>
			<div
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: secondColor,
					position: "absolute",
					top: "25px",
					left: "25px",
					transform:
						"rotateX(45deg) rotateZ(-45deg) rotateY(90deg) translate(50%, -50%)",
					borderRadius: "0 15px 0 0",
					boxShadow:
						activeColor === props.piece[1]
							? "rgb(255 21 154) 10px -4px 16px 4px"
							: "",
				}}
			></div>
			<div
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: thirdColor,
					position: "absolute",
					top: "25px",
					left: "25px",
					transform:
						"rotateX(45deg) rotateZ(45deg) rotateY(-90deg) translate(-50%, -50%)",
					borderRadius: "15px 0 0 0",
					boxShadow:
						activeColor === props.piece[2]
							? "rgb(255 21 154) -10px -4px 16px 4px"
							: "",
				}}
			></div>
		</div>
	);
}

export default CornerSticker;
