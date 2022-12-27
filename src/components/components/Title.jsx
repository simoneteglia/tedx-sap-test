import global from "../../resources/global.json";
import "../../index.css";

export default function Title() {
	return (
		<div
			style={{
				width: "60vw",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "50px",
			}}
		>
			<h1
				style={{
					fontSize: "120px",
					maxWidth: "6ch",
					color: "#000",
					fontFamily: "Akira",
				}}
			>
				BACK 2 ZERO
			</h1>
		</div>
	);
}
