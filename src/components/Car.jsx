function Car() {
  return (
    <group position={[0,0,0]} scale={2}>

      {/* Body */}
      <mesh position={[0,0,0]}>
        <boxGeometry args={[4,1,2]} />
        <meshStandardMaterial color="cyan" />
      </mesh>

      {/* Top */}
      <mesh position={[0,1,0]}>
        <boxGeometry args={[2.5,1,2]} />
        <meshStandardMaterial color="cyan" />
      </mesh>

      {/* Wheels */}
      <mesh position={[-1.5,-0.7,1]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[1.5,-0.7,1]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[-1.5,-0.7,-1]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>

      <mesh position={[1.5,-0.7,-1]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>

    </group>
  )
}

export default Car