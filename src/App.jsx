import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Car from "./components/Car"

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1,0]}>
        <planeGeometry args={[50,50]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.9,0]}>
        <planeGeometry args={[6,50]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position:[0,4,15] }}>
      <ambientLight intensity={1.5}/>
      <directionalLight position={[5,5,5]}/>

      <Ground />
      <Car />

      <OrbitControls />
    </Canvas>
  )
}