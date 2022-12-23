import global from "../../resources/global.json";

export default function BlogPage() {
	return (
		<div
			style={{
				height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
				marginTop: global.UTILS.NAV_HEIGHT,
			}}
		>
			<h1 style={{ color: "#000" }}>BLOG</h1>
		</div>
	);
}
