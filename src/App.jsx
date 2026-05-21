import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Car from "./components/Car"

function Ground() {
  return (
    <>
      {/* Ground */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]}>
        <planeGeometry args={[80,80]} />
        <meshStandardMaterial color="#111"/>
      </mesh>

      {/* Road */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1.9,0]}>
        <planeGeometry args={[10,80]} />
        <meshStandardMaterial color="#333"/>
      </mesh>

      {/* Road line */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1.8,0]}>
        <planeGeometry args={[0.3,80]} />
        <meshStandardMaterial color="white"/>
      </mesh>
    </>
  )
}

function Building({x,z,height,color}) {
  return (
    <mesh position={[x,height/2-2,z]}>
      <boxGeometry args={[3,height,3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{position:[0,3,10],fov:75}}>

      <ambientLight intensity={1}/>

      <pointLight
        position={[5,5,5]}
        intensity={10}
        color="cyan"
      />

      <pointLight
        position={[-5,5,5]}
        intensity={10}
        color="purple"
      />

      <Ground/>

      <Car/>

      {/* Buildings */}
      <Building x={-8} z={-5} height={6} color="cyan"/>
      <Building x={8} z={-5} height={8} color="purple"/>

      <Building x={-8} z={5} height={5} color="pink"/>
      <Building x={8} z={5} height={10} color="blue"/>

      <OrbitControls/>

    </Canvas>
  )
}