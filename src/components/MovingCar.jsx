import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import Car from "./Car"

export default function MovingCar() {
  const carRef = useRef()
  const { camera } = useThree()

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  })

  window.onkeydown = (e) => {
    keys.current[e.key.toLowerCase()] = true
  }

  window.onkeyup = (e) => {
    keys.current[e.key.toLowerCase()] = false
  }

  useFrame(() => {
    if (!carRef.current) return

    // WASD movement
    if (keys.current.w)
      carRef.current.position.z -= 0.1

    if (keys.current.s)
      carRef.current.position.z += 0.1

    if (keys.current.a)
      carRef.current.position.x -= 0.1

    if (keys.current.d)
      carRef.current.position.x += 0.1

    // Camera follows car
    camera.position.x = carRef.current.position.x
    camera.position.y = 3
    camera.position.z = carRef.current.position.z + 8

    camera.lookAt(
      carRef.current.position.x,
      0,
      carRef.current.position.z
    )
  })

  return (
    <group ref={carRef}>
      <Car />
    </group>
  )
}