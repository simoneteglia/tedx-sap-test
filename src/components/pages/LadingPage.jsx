import Title from "../components/Title";
import Award3D from "../components/Award3D";

import global from "../../resources/global.json";
import { useEffect } from "react";

export default function LandingPage() {
	useEffect(() => console.log("landing page"));

	return (
		<section
			style={{
				display: "flex",
				backgroundColor: global.COLORS.BLACK,
				height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
				marginTop: global.UTILS.NAV_HEIGHT,
			}}
		>
			<Title />
			<Award3D />
		</section>
	);
}
