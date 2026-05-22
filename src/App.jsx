import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, Text } from "@react-three/drei";

function Car() {
  const { scene } = useGLTF("/models/car.glb");

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, 0.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

function Building({ x, z, height, color, label }) {
  return (
    <group position={[x, height / 2, z]}>
      <mesh>
        <boxGeometry args={[2, height, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <Text
        position={[0, height / 2 + 1, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
      >
        {label}
      </Text>
    </group>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 8, 18], fov: 60 }}>
      
      {/* Background */}
      <color attach="background" args={["#0d1117"]} />

      {/* Lights */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 10, 5]} intensity={2} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#1f1f1f" />
      </mesh>

      {/* Road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[6, 50]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Center line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[0.3, 50]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Car */}
      <Car />

      {/* Buildings */}

      <Building
        x={-8}
        z={-8}
        height={8}
        color="cyan"
        label="Skills"
      />

      <Building
        x={8}
        z={-2}
        height={10}
        color="purple"
        label="Projects"
      />

      <Building
        x={-8}
        z={6}
        height={7}
        color="hotpink"
        label="GitHub"
      />

      <Building
        x={8}
        z={12}
        height={9}
        color="orange"
        label="Certificates"
      />

      <OrbitControls />
    </Canvas>
  );
}