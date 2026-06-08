import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Car from "./Car";

export default function MovingCar() {
  const carRef = useRef();
  const { camera } = useThree();

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
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

    if (keys.current.w) {
      carRef.current.position.z -= speed;
    }

    if (keys.current.s) {
      carRef.current.position.z += speed;
    }

    if (keys.current.a) {
      carRef.current.position.x -= speed;
    }

    if (keys.current.d) {
      carRef.current.position.x += speed;
    }

    // Camera follows car
    camera.position.x = carRef.current.position.x;
    camera.position.y = 12;
    camera.position.z = carRef.current.position.z + 18;

    camera.lookAt(
      carRef.current.position.x,
      0,
      carRef.current.position.z
    );
  });

  return (
    <group ref={carRef} position={[0, 0.5, 0]}>
      <Car />
    </group>
  );
}