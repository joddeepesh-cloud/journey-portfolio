import { useGLTF } from "@react-three/drei"

function Car() {
  const car = useGLTF("/models/car.glb")

  return (
    <primitive
      object={car.scene}
      scale={6}
      position={[0,-0.8,0]}
      rotation={[0, Math.PI, 0]}
    />
  )
}

export default Car