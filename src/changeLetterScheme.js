import { useEffect, useState } from "react";
import { colors, cornerStickers, edgeStickers } from "./letterScheme.js";
import {
	colors as defaultColors,
	cornerStickers as defaultCornerStickers,
	edgeStickers as defaultEdgeStickers,
} from "./defaultLetterScheme.js";

function ChangeLetterScheme(props) {
	const [colorScheme, setColorScheme] = useState(colors);
	const [cornerScheme, setCornerScheme] = useState(cornerStickers);
	const [edgeScheme, setEdgeScheme] = useState(edgeStickers);

	const saveScheme = () => {
		//save colorScheme on localstorage
		localStorage.setItem("colors", JSON.stringify(colorScheme));
		alert("Color scheme saved!");
		//refresh the page after saving
		window.location.reload();
	};
	const resetScheme = () => {
		//reset colorScheme to default
		localStorage.setItem("colors", JSON.stringify(defaultColors));
		alert("Color scheme reset!");
		//refresh the page after saving
		window.location.reload();
	};
	return (
		<div>
			<button className="backButton" onClick={props.spawnMenu} type="button">
				Back
			</button>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr 1fr",
					gridTemplateRows: "1fr 1fr 1fr",
				}}
			>
				<div
					style={{
						backgroundColor: colorScheme["U"],
						width: "200px",
						height: "200px",
						gridColumn: 2,
						gridRow: 1,
						display: "grid",
						gridItemsTemplateColumns: "1fr 1fr 1fr",
						gridItemsTemplateRows: "1fr 1fr 1fr",
					}}
				>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 1 }}>
						{cornerScheme["UBL"]}
					</div>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 3 }}>
						{cornerScheme["UBR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 1 }}>
						{cornerScheme["UFL"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 3 }}>
						{cornerScheme["UFR"]}
					</div>

					<div className="sticker" style={{ gridRow: 1, gridColumn: 2 }}>
						{edgeScheme["UB"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 3 }}>
						{edgeScheme["UR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 2 }}>
						{edgeScheme["UF"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 1 }}>
						{edgeScheme["UL"]}
					</div>

					<div className="sticker" style={{ gridRow: 2, gridColumn: 2 }}>
						<input
							type="color"
							value={colorScheme["U"]}
							style={{
								border: "none",
								width: "100%",
								height: "100%",
								outline: "none",
								borderStyle: "none",
								backgroundColor: colorScheme["U"],
							}}
							onChange={(e) => {
								setColorScheme({
									...colorScheme,
									U: e.target.value,
								});
							}}
						></input>
					</div>
				</div>
				<div
					style={{
						backgroundColor: colorScheme["L"],
						width: "200px",
						height: "200px",
						gridColumn: 1,
						gridRow: 2,
						display: "grid",
						gridItemsTemplateColumns: "1fr 1fr 1fr",
						gridItemsTemplateRows: "1fr 1fr 1fr",
					}}
				>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 1 }}>
						{cornerScheme["LUB"]}
					</div>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 3 }}>
						{cornerScheme["LUF"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 1 }}>
						{cornerScheme["LDB"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 3 }}>
						{cornerScheme["LDF"]}
					</div>

					<div className="sticker" style={{ gridRow: 1, gridColumn: 2 }}>
						{edgeScheme["LU"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 3 }}>
						{edgeScheme["LF"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 2 }}>
						{edgeScheme["LD"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 1 }}>
						{edgeScheme["LB"]}
					</div>

					<div className="sticker" style={{ gridRow: 2, gridColumn: 2 }}>
						<input
							type="color"
							value={colorScheme["L"]}
							style={{
								border: "none",
								width: "100%",
								height: "100%",
								outline: "none",
								borderStyle: "none",
								backgroundColor: colorScheme["L"],
							}}
							onChange={(e) => {
								setColorScheme({
									...colorScheme,
									L: e.target.value,
								});
							}}
						></input>
					</div>
				</div>

				<div
					style={{
						backgroundColor: colorScheme["F"],
						width: "200px",
						height: "200px",
						gridColumn: 2,
						gridRow: 2,
						display: "grid",
						gridItemsTemplateColumns: "1fr 1fr 1fr",
						gridItemsTemplateRows: "1fr 1fr 1fr",
					}}
				>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 1 }}>
						{cornerScheme["FUL"]}
					</div>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 3 }}>
						{cornerScheme["FUR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 1 }}>
						{cornerScheme["FDL"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 3 }}>
						{cornerScheme["FDR"]}
					</div>

					<div className="sticker" style={{ gridRow: 1, gridColumn: 2 }}>
						{edgeScheme["FU"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 3 }}>
						{edgeScheme["FR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 2 }}>
						{edgeScheme["FD"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 1 }}>
						{edgeScheme["FL"]}
					</div>

					<div className="sticker" style={{ gridRow: 2, gridColumn: 2 }}>
						<input
							type="color"
							value={colorScheme["F"]}
							style={{
								border: "none",
								width: "100%",
								height: "100%",
								outline: "none",
								borderStyle: "none",
								backgroundColor: colorScheme["F"],
							}}
							onChange={(e) => {
								setColorScheme({
									...colorScheme,
									F: e.target.value,
								});
							}}
						></input>
					</div>
				</div>

				<div
					style={{
						backgroundColor: colorScheme["R"],
						width: "200px",
						height: "200px",
						gridColumn: 3,
						gridRow: 2,
						display: "grid",
						gridItemsTemplateColumns: "1fr 1fr 1fr",
						gridItemsTemplateRows: "1fr 1fr 1fr",
					}}
				>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 1 }}>
						{cornerScheme["RUF"]}
					</div>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 3 }}>
						{cornerScheme["RUB"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 1 }}>
						{cornerScheme["RDF"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 3 }}>
						{cornerScheme["RDB"]}
					</div>

					<div className="sticker" style={{ gridRow: 1, gridColumn: 2 }}>
						{edgeScheme["RU"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 3 }}>
						{edgeScheme["RB"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 2 }}>
						{edgeScheme["RD"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 1 }}>
						{edgeScheme["RF"]}
					</div>

					<div className="sticker" style={{ gridRow: 2, gridColumn: 2 }}>
						<input
							type="color"
							value={colorScheme["R"]}
							style={{
								border: "none",
								width: "100%",
								height: "100%",
								outline: "none",
								borderStyle: "none",
								backgroundColor: colorScheme["R"],
							}}
							onChange={(e) => {
								setColorScheme({
									...colorScheme,
									R: e.target.value,
								});
							}}
						></input>
					</div>
				</div>

				<div
					style={{
						backgroundColor: colorScheme["B"],
						width: "200px",
						height: "200px",
						gridColumn: 4,
						gridRow: 2,
						display: "grid",
						gridItemsTemplateColumns: "1fr 1fr 1fr",
						gridItemsTemplateRows: "1fr 1fr 1fr",
					}}
				>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 1 }}>
						{cornerScheme["BUL"]}
					</div>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 3 }}>
						{cornerScheme["BUR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 1 }}>
						{cornerScheme["BDL"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 3 }}>
						{cornerScheme["BDR"]}
					</div>

					<div className="sticker" style={{ gridRow: 1, gridColumn: 2 }}>
						{edgeScheme["BU"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 3 }}>
						{edgeScheme["BR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 2 }}>
						{edgeScheme["BD"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 1 }}>
						{edgeScheme["BL"]}
					</div>

					<div className="sticker" style={{ gridRow: 2, gridColumn: 2 }}>
						<input
							type="color"
							value={colorScheme["B"]}
							style={{
								border: "none",
								width: "100%",
								height: "100%",
								outline: "none",
								borderStyle: "none",
								backgroundColor: colorScheme["B"],
							}}
							onChange={(e) => {
								setColorScheme({
									...colorScheme,
									B: e.target.value,
								});
							}}
						></input>
					</div>
				</div>

				<div
					style={{
						backgroundColor: colorScheme["D"],
						width: "200px",
						height: "200px",
						gridColumn: 2,
						gridRow: 3,
						display: "grid",
						gridItemsTemplateColumns: "1fr 1fr 1fr",
						gridItemsTemplateRows: "1fr 1fr 1fr",
					}}
				>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 1 }}>
						{cornerScheme["DFL"]}
					</div>
					<div className="sticker" style={{ gridRow: 1, gridColumn: 3 }}>
						{cornerScheme["DFR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 1 }}>
						{cornerScheme["DBL"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 3 }}>
						{cornerScheme["DBR"]}
					</div>

					<div className="sticker" style={{ gridRow: 1, gridColumn: 2 }}>
						{edgeScheme["DF"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 3 }}>
						{edgeScheme["DR"]}
					</div>
					<div className="sticker" style={{ gridRow: 3, gridColumn: 2 }}>
						{edgeScheme["DB"]}
					</div>
					<div className="sticker" style={{ gridRow: 2, gridColumn: 1 }}>
						{edgeScheme["DL"]}
					</div>

					<div className="sticker" style={{ gridRow: 2, gridColumn: 2 }}>
						<input
							type="color"
							value={colorScheme["D"]}
							style={{
								border: "none",
								width: "100%",
								height: "100%",
								outline: "none",
								borderStyle: "none",
								backgroundColor: colorScheme["D"],
							}}
							onChange={(e) => {
								setColorScheme({
									...colorScheme,
									D: e.target.value,
								});
							}}
						></input>
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					jusitfyContent: "center",
				}}
			>
				<p className="instructions">Click on centers to change face color</p>
				<button type="button" className="saveButton" onClick={saveScheme}>
					SAVE
				</button>
				<button
					style={{
						backgroundColor: "#ff5191",
					}}
					type="button"
					className="saveButton"
					onClick={resetScheme}
				>
					RESET DEFAULT
				</button>
			</div>
		</div>
	);
}

export default ChangeLetterScheme;
