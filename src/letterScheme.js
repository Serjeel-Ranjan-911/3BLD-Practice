let colors = {
	U: "#fff700",
	L: "#fc742b",
	F: "#003d7a",
	R: "#ab1a00",
	B: "#72ff30",
	D: "#d1e8ff",
};
//retrieve colors from local storage
if (localStorage.getItem("colors")) {
	colors = JSON.parse(localStorage.getItem("colors"));
}

let cornerStickers = {
	UBL: "A",
	UBR: "B",
	UFR: "C",
	UFL: "D",
	LUB: "E",
	LUF: "F",
	LDF: "G",
	LDB: "H",
	FUL: "I",
	FUR: "J",
	FDR: "K",
	FDL: "L",
	RUF: "M",
	RUB: "N",
	RDB: "O",
	RDF: "P",
	BUL: "Q",
	BUR: "R",
	BDR: "S",
	BDL: "T",
	DFL: "U",
	DFR: "V",
	DBR: "W",
	DBL: "X",
};

//retrieve cornerStickers from local storage
if (localStorage.getItem("cornerStickers")) {
	cornerStickers = JSON.parse(localStorage.getItem("cornerStickers"));
}

let edgeStickers = {
	UB: "A",
	UR: "B",
	UF: "C",
	UL: "D",
	LU: "E",
	LF: "F",
	LD: "G",
	LB: "H",
	FU: "I",
	FR: "J",
	FD: "K",
	FL: "L",
	RU: "M",
	RB: "N",
	RD: "O",
	RF: "P",
	BU: "Q",
	BR: "R",
	BD: "S",
	BL: "T",
	DF: "U",
	DR: "V",
	DB: "W",
	DL: "X",
};

//retrieve edgeStickers from local storage
if (localStorage.getItem("edgeStickers")) {
	edgeStickers = JSON.parse(localStorage.getItem("edgeStickers"));
}

export { colors, cornerStickers, edgeStickers };
