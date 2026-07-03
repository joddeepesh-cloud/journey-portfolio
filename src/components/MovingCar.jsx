import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Car from "./Car";

export default function MovingCar() {
  const carRef = useRef();
  const angle = useRef(0);
  const { camera } = useThree();

  const keys = useRef({
  w: false,
  a: false,
  s: false,
  d: false,
  arrowup: false,
  arrowdown: false,
  arrowleft: false,
  arrowright: false,
});

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if (keys.current.hasOwnProperty(key)) {
        keys.current[key] = true;
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();

      if (keys.current.hasOwnProperty(key)) {
        keys.current[key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!carRef.current) return;

    const speed = 0.15;

    if (keys.current.w || keys.current.arrowup) {
  carRef.current.position.x -= Math.sin(angle.current) * speed
  carRef.current.position.z -= Math.cos(angle.current) * speed
}

if (keys.current.s || keys.current.arrowdown) {
  carRef.current.position.x += Math.sin(angle.current) * speed
  carRef.current.position.z += Math.cos(angle.current) * speed
}

    if (keys.current.a || keys.current.arrowleft)
  angle.current += 0.04

if (keys.current.d || keys.current.arrowright)
  angle.current -= 0.04

carRef.current.rotation.y = angle.current

    // Camera follows car
    camera.position.x = carRef.current.position.x;
    camera.position.y = 20;
    camera.position.z = carRef.current.position.z + 25;

    camera.lookAt(
      carRef.current.position.x,
      3,
      carRef.current.position.z -10
    );
  });

  return (
    <group ref={carRef} position={[0, 0.5, 0]}>
      <Car />
    </group>
  );
}