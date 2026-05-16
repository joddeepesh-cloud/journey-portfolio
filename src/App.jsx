import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"

function Box() {
  const boxRef = useRef()

  useFrame(() => {
    boxRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={boxRef} position={[0,0,0]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-1,0]}>
      <planeGeometry args={[20,20]} />
      <meshStandardMaterial />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ position:[0,3,8] }}>
      <ambientLight intensity={1}/>
      <directionalLight position={[5,5,5]}/>

      <Box />
      <Ground />

      <OrbitControls />
    </Canvas>
  )
}

export default App