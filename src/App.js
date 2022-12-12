import Award3D from "./components/Award3D";
import Header from "./components/Header";
import Title from "./components/Title";
import global from "./resources/global.json";

function App() {
	return (
		<>
			<Header />
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
		</>
	);
}

export default App;
