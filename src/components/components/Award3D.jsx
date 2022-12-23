import { applyProps, Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import {
	Center,
	OrbitControls,
	useGLTF,
	Environment,
	Html,
} from "@react-three/drei";
import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";

import global from "../../resources/global.json";

export default function Award3D() {
	const [distanceX, setDistanceX] = useState(0);
	const [distanceY, setDistanceY] = useState(0);

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove);
	}, []);

	function handleMouseMove(e) {
		const { clientX, clientY } = e;
		let distanceX =
			((clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;

		setDistanceX(distanceX);

		let distanceY =
			((clientY - window.innerHeight / 2) / (window.innerHeight / 2)) *
			100;

		setDistanceY(distanceY);
	}

	return (
		<div
			style={{
				width: "40vw",
			}}
		>
			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
				{/* <color attach="background" args={["goldenrod"]} /> */}
				{/* <Suzi scale={2.5} distanceX={distanceX} distanceY={distanceY} /> */}
				<Asterisk distanceX={distanceX} distanceY={distanceY} />
				<Lights />
			</Canvas>
		</div>
	);
}

function Suzi(props) {
	useFrame(() => {
		scene.position.x = -props.distanceX / 1000;
		scene.position.y = props.distanceY / 1000 - 2;
		scene.position.y += 0.05 * Math.sin(Date.now() / 1000);

		scene.rotation.y = props.distanceX / 1500;
		scene.rotation.x = props.distanceY / 1500;
	});

	const { scene, materials } = useGLTF(
		"https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-high-poly/model.gltf"
	);
	React.useLayoutEffect(() => {
		applyProps(materials.default, {
			color: "silver",
			roughness: 0,
			normalMap: new THREE.CanvasTexture(
				new FlakesTexture(),
				THREE.UVMapping,
				THREE.RepeatWrapping,
				THREE.RepeatWrapping
			),
			"normalMap-flipY": false,
			"normalMap-repeat": [40, 40],
			normalScale: [0.05, 0.05],
		});
	});

	return <primitive object={scene} {...props} />;
}

function Asterisk(props) {
	const groupRef = useRef();
	const width = 0.7;
	const height = 3.8;

	useFrame(() => {
		groupRef.current.position.x = -props.distanceX / 400;
		groupRef.current.position.y = props.distanceY / 400;
		groupRef.current.position.y += 0.05 * Math.sin(Date.now() / 1000);

		groupRef.current.rotation.y = props.distanceX / 200;
		groupRef.current.rotation.x = props.distanceY / 200;
	});
	return (
		<group ref={groupRef}>
			<mesh>
				<boxGeometry args={[width, height, 0.5]} />
				<meshStandardMaterial color={global.COLORS.RED} />
			</mesh>
			<mesh rotation={[0, 0, Math.PI / 3.3]}>
				<boxGeometry args={[width, height, 0.5]} />
				<meshStandardMaterial color={global.COLORS.RED} />
			</mesh>
			<mesh rotation={[0, 0, -Math.PI / 3.3]}>
				<boxGeometry args={[width, height, 0.5]} />
				<meshStandardMaterial color={global.COLORS.RED} />
			</mesh>
		</group>
	);
}

const Lights = () => {
	return (
		<>
			<Environment preset="sunset" />
		</>
	);
};
