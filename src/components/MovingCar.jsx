import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import Car from "./Car"

export default function MovingCar() {
  const carRef = useRef()

  useFrame(() => {
    if (carRef.current) {
      carRef.current.position.z -= 0.03

      // Reset for endless road feeling
      if (carRef.current.position.z < -20) {
        carRef.current.position.z = 20
      }
    }
  })

  return (
    <group ref={carRef}>
      <Car />
    </group>
  )
}