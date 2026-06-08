import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import MovingCar from "./components/MovingCar";

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#0d0d0d" />
    </mesh>
  );
}

function Road({ position, width, length, rotation }) {
  return (
    <mesh
      rotation={rotation}
      position={position}
    >
      <planeGeometry args={[width, length]} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
}

function District({ position, color, name }) {
  return (
    <group position={position}>
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[5, 6, 5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[0, 8, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
      >
        {name}
      </Text>
    </group>
  );
}

function StreetLight({ x, z }) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 6]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh position={[0, 6.5, 0]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial
          color="yellow"
          emissive="yellow"
        />
      </mesh>
    </group>
  );
}

function MotivationBoard() {
  return (
    <group position={[0, 0, 35]}>
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial
          color="hotpink"
          emissive="hotpink"
        />
      </mesh>

      <Text
        position={[0, 4, 0.5]}
        fontSize={0.5}
        color="white"
        anchorX="center"
      >
        Consistency  beats Motivation
      </Text>
    </group>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 12, 25], fov: 75 }}>

      <color attach="background" args={["#050816"]} />

      <ambientLight intensity={1} />

      <pointLight
        position={[10, 20, 10]}
        intensity={50}
      />

      <Ground />

      {/* Main Road */}

      <Road
        position={[0, 0.01, 0]}
        width={8}
        length={120}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Cross Road 1 */}

      <Road
        position={[0, 0.02, -20]}
        width={8}
        length={60}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />

      {/* Cross Road 2 */}

      <Road
        position={[0, 0.02, 20]}
        width={8}
        length={60}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />

      {/* Districts */}

      <District
        position={[-25, 0, -20]}
        color="cyan"
        name="Skill Street"
      />

      <District
        position={[25, 0, -20]}
        color="purple"
        name="Project City"
      />

      <District
        position={[-25, 0, 20]}
        color="orange"
        name="Achievement District"
      />

      <District
        position={[25, 0, 20]}
        color="hotpink"
        name="Fun Zone"
      />

      {/* Motivation */}

      <MotivationBoard />

      {/* Street Lights */}

      <StreetLight x={-5} z={-40} />
      <StreetLight x={5} z={-40} />

      <StreetLight x={-5} z={0} />
      <StreetLight x={5} z={0} />

      <StreetLight x={-5} z={40} />
      <StreetLight x={5} z={40} />

      <MovingCar />

      <OrbitControls />
    </Canvas>
  );
}