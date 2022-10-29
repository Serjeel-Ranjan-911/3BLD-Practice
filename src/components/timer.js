import { useEffect, useState } from "react";

function Timer(props) {
	const [startTime, setStartTime] = useState(Date.now());
	const [timerDisplay, setTimerDisplay] = useState({
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		setStartTime(Date.now());
		setTimerDisplay({
			minutes: 0,
			seconds: 0,
		});

		const interval = setInterval(() => {
			updateTimer();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [props.resetTimer]);

	const updateTimer = () => {
		let timeElapsed = Date.now() - startTime;
		let minutes = Math.floor(timeElapsed / 60000);
		let seconds = Math.floor((timeElapsed % 60000) / 1000);
		setTimerDisplay({ minutes, seconds });
	};

	return (
		<>
			<div className="timer">
				<p className="timerDisplay">
					{timerDisplay.minutes}:{timerDisplay.seconds}
				</p>
			</div>
		</>
	);
}

export default Timer;
