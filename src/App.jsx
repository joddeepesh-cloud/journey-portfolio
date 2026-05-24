import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import MovingCar from "./components/MovingCar";

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#0d0d0d" />
    </mesh>
  );
}

function Road() {
  return (
    <group>

      {/* Main road */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, 0]}
      >
        <planeGeometry args={[8, 60]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* White center line */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 0]}
      >
        <planeGeometry args={[0.2, 60]} />
        <meshStandardMaterial color="white" />
      </mesh>

    </group>
  );
}

function District({ position, color, name }) {
  return (
    <group position={position}>

      {/* Building */}
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[5, 6, 5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 8, 0]}
        fontSize={0.7}
        color="white"
        anchorX="center"
      >
        {name}
      </Text>

    </group>
  );
}

export default function App() {
  return (
    <Canvas
      camera={{
        position: [0, 6, 15],
        fov: 60
      }}
    >
      <color attach="background" args={["#050816"]} />

      <ambientLight intensity={1} />

      <pointLight
        position={[10, 10, 10]}
        intensity={30}
      />

      <Ground />
      <Road />

      <District
        position={[-12,0,-15]}
        color="hotpink"
        name="GitHub"
      />

      <District
        position={[12,0,-15]}
        color="cyan"
        name="Skills"
      />

      <District
        position={[-12,0,15]}
        color="orange"
        name="Projects"
      />

      <District
        position={[12,0,15]}
        color="purple"
        name="Certificates"
      />

      <MovingCar />

      <OrbitControls />
    </Canvas>
  );
}