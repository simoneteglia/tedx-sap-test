import Title from "../components/Title";

import global from "../../resources/global.json";
import { useEffect } from "react";

import "../../index.css";

export default function LandingPageGradient() {
	useEffect(() => console.log("landing page"));

	return (
		<section
			className="gradient-background"
			style={{
				display: "flex",
				minHeight: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
				marginTop: global.UTILS.NAV_HEIGHT,
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				padding: "20px",
			}}
		>
			<h1
				className="title-text"
				style={{
					fontSize: "9em",
					maxWidth: "6ch",
					fontFamily: "Akira",
					textAlign: "center",
				}}
			>
				BACK 2 ZERO
			</h1>
			<div
				style={{
					fontFamily: "Akira",
					backgroundColor: "#000",
					color: "#fff",
					padding: "1em",
					fontSize: "25px",
					borderRadius: ".2em",
					cursor: "pointer",
				}}
			>
				Scopri di piu
			</div>
		</section>
	);
}
