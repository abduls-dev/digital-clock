import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	// Initialize state for current time and theme
	const [currentTime, setCurrentTime] = useState("");
	const [isNightMode, setIsNightMode] = useState(false);

	// Function to update the current time
	const updateTime = () => {
		const now = new Date().toLocaleTimeString();
		setCurrentTime(now);
	};

	// useEffect to set the time on component mount and update every second
	useEffect(() => {
		updateTime(); // Set time on page load
		const intervalId = setInterval(updateTime, 1000); // Update time every second

		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	// useEffect to apply the correct theme class to the body
	useEffect(() => {
		if (isNightMode) {
			document.body.classList.add("night");
			document.body.classList.remove("day");
		} else {
			document.body.classList.add("day");
			document.body.classList.remove("night");
		}
	}, [isNightMode]);

	// Function to toggle night mode
	const toggleNightMode = () => {
		setIsNightMode(!isNightMode);
	};

	return (
		<div className="App">
			<h1>Live Clock</h1>
			<h2>{currentTime}</h2>
			<button onClick={updateTime}>Update Time Manually</button>
			<div className="toggle-container">
				<label className="switch">
					<input
						type="checkbox"
						checked={isNightMode}
						onChange={toggleNightMode}
					/>
					<span className="slider round"></span>
				</label>
				<span>{isNightMode ? "Night Mode" : "Day Mode"}</span>
			</div>
		</div>
	);
};

export default App;
