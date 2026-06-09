import { Text } from "@react-three/drei";

export default function Gate({ position, color, title }) {
  return (
    <group position={position}>
      {/* Left pillar */}
      <mesh position={[-3, 2.5, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Right pillar */}
      <mesh position={[3, 2.5, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      {/* Top beam */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[7, 1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[0, 5, 1]}
        fontSize={0.6}
        color="white"
        anchorX="center"
      >
        {title}
      </Text>
    </group>
  );
}