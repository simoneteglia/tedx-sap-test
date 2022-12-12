import global from "../resources/global.json";
import logo from "../resources/logo.webp";

export default function Header() {
	return (
		<header
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				backgroundColor: "#fff",
				width: "100vw",
				height: global.UTILS.NAV_HEIGHT,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<img src={logo} height="60px" style={{ paddingLeft: "60px" }} />
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "50%",
					paddingRight: "60px",
					fontSize: "1.1em",
				}}
			>
				<p className="nav-button">Home</p>
				<p className="nav-button">Partner</p>
				<p className="nav-button">Come Partecipare</p>
				<p className="nav-button">Edizione 2022</p>
				<p className="nav-button">Blog</p>
				<p className="nav-button">Team 2022</p>
			</div>
		</header>
	);
}
