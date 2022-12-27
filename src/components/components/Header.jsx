import global from "../../resources/global.json";
import logo from "../../resources/logo.webp";
import { Link } from "react-router-dom";

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
				zIndex: 999,
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
				<Link to="/" className="nav-button">
					Home
				</Link>
				<Link to="/edizione-2022" className="nav-button">
					Edizione 2022
				</Link>
				<Link to="/blog" className="nav-button">
					Blog
				</Link>
				<Link to="/team-2023" className="nav-button">
					Team 2023
				</Link>
			</div>
		</header>
	);
}
