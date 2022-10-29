export const playSuccessSound = () => {
	const successSound = new Audio("/success.mp3");
	successSound.play();
};

export const playFailureSound = () => {
	const failureSound = new Audio("/fail.mp3");
	failureSound.play();
};
