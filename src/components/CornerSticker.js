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
			{...props.restProps}
			style={{
				display: "inline-block",
			}}
		>
			<div
				style={{
					position: "relative",
					width: "150px",
					height: "140px",
					display: "inline-block",
					...props.restStyle,
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
						transform: "rotateX(45deg) rotateZ(45deg) translate(-50%, -50%)",
						borderRadius: "15px 0 0 0",
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
						transform:
							"rotateX(45deg) rotateZ(-45deg) rotateY(90deg) translate(50%, -50%)",
						borderRadius: "0 15px 0 0",
					}}
				></div>
				<div
					className={activeColor === props.piece[2] ? "stickerGlow" : ""}
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
					}}
				></div>
			</div>
		</div>
	);
}

export default CornerSticker;
