import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import MovingCar from "./components/MovingCar"

function Road() {
  return (
    <>
      {/* Ground */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.2,0]}>
        <planeGeometry args={[100,300]} />
        <meshStandardMaterial color="#111"/>
      </mesh>

      {/* Road */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.1,0]}>
        <planeGeometry args={[8,300]} />
        <meshStandardMaterial color="#333"/>
      </mesh>

      {/* Lane markings */}
      {Array.from({length:15}).map((_,i)=>(
        <mesh
          key={i}
          rotation={[-Math.PI/2,0,0]}
          position={[0,0,i*20-140]}
        >
          <planeGeometry args={[0.3,8]} />
          <meshStandardMaterial color="white"/>
        </mesh>
      ))}
    </>
  )
}

function Zone({x,z,color,title}) {
  return (
    <group>
      <mesh position={[x,2,z]}>
        <boxGeometry args={[4,4,4]}/>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
      </mesh>

      <Text
        position={[x,5,z]}
        fontSize={0.8}
        color="white"
        anchorX="center"
      >
        {title}
      </Text>
    </group>
  )
}

export default function App() {
  return (
    <Canvas camera={{position:[0,3,8],fov:75}}>

      <ambientLight intensity={1}/>

      <pointLight
        position={[5,5,5]}
        intensity={15}
        color="cyan"
      />

      <pointLight
        position={[-5,5,5]}
        intensity={15}
        color="purple"
      />

      <Road/>

      <MovingCar/>

      {/* Portfolio Zones */}

      <Zone
        x={-8}
        z={-20}
        color="cyan"
        title="Skills"
      />

      <Zone
        x={8}
        z={-40}
        color="purple"
        title="Projects"
      />

      <Zone
        x={-8}
        z={-60}
        color="hotpink"
        title="GitHub"
      />

      <Zone
        x={8}
        z={-80}
        color="orange"
        title="Certificates"
      />

      <OrbitControls
        enablePan={false}
      />

    </Canvas>
  )
}