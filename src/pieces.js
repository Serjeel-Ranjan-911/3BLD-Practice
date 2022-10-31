import { colors, stickers } from "./letterScheme.js";

const corners = [
	["UBL", "BUR", "LUB"],
	["UBR", "RUB", "BUL"],
	["UFR", "FUR", "RUF"],
	["UFL", "LUF", "FUL"],
	["DFL", "FDL", "LDF"],
	["DFR", "RDF", "FDR"],
	["DBR", "BDL", "RDB"],
	["DBL", "LDB", "BDR"],
];

const edges = [
	["UB", "BU"],
	["UR", "RU"],
	["UF", "FU"],
	["UL", "LU"],
	["DF", "FD"],
	["DR", "RD"],
	["DB", "BD"],
	["DL", "LD"],
	["FL", "LF"],
	["FR", "RF"],
	["BL", "RB"],
	["BR", "LB"],
];

export { corners, edges };
