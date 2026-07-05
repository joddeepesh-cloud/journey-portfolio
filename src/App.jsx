import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import MovingCar from "./components/MovingCar";
import Gate from "./components/Gate";

  function Building({ x, z, color, height }) {
  return (
    <mesh position={[x, height / 2, z]}>
      <boxGeometry args={[4, height, 4]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}


function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#0d0d0d" />
    </mesh>
  );
}

function Road({ position, width, length, rotation }) {
  return (
    <mesh
      rotation={rotation}
      position={position}
    >
      <planeGeometry args={[width, length]} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
}

function District({ position, color, name }) {
  return (
    <group position={position}>
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[5, 6, 5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[0, 10, 0]}
        fontSize={2}
        color={color}
        anchorX="center"
      >
        {name}
      </Text>
    </group>
  );
}

function StreetLight({ x, z }) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 6]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh position={[0, 6.5, 0]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial
          color="yellow"
          emissive="yellow"
        />
      </mesh>
    </group>
  );
}

function MotivationBoard() {
  return (
    <group position={[0, 0, 35]}>
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[10, 5, 0.5]} />
        <meshStandardMaterial
          color="hotpink"
          emissive="hotpink"
        />
      </mesh>

      <Text
        position={[0, 4, 0.5]}
        fontSize={0.5}
        color="white"
        anchorX="center"
      >
        Consistency  beats Motivation
      </Text>
    </group>
  );
}

function DirectionBoard({ position, text, color }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[8, 3, 0.3]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[0, 0, 0.2]}
        fontSize={0.5}
        color="white"
        anchorX="center"
      >
        {text}
      </Text>
    </group>
  )
}

function SkillTower({ x, z, color, label, height }) {
  return (
    <group>

      <mesh position={[x, height / 2, z]}>
        <boxGeometry args={[3, height, 3]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[x, height + 2, z]}
        fontSize={0.8}
        color="white"
        anchorX="center"
      >
        {label}
      </Text>

    </group>
  )
}
function LaneMarking({ x, z, rotation }) {
  return (
    <mesh
      rotation={rotation}
      position={[x, 0.03, z]}
    >
      <planeGeometry args={[0.3, 3]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

function TrafficLight({ x, z }) {
  return (
    <group position={[x,0,z]}>

      <mesh position={[0,3,0]}>
        <cylinderGeometry args={[0.15,0.15,6]} />
        <meshStandardMaterial color="gray"/>
      </mesh>

      <mesh position={[0,6,0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial
          color="red"
          emissive="red"
        />
      </mesh>

      <mesh position={[0,5.2,0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial
          color="yellow"
          emissive="yellow"
        />
      </mesh>

      <mesh position={[0,4.4,0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial
          color="green"
          emissive="green"
        />
      </mesh>

    </group>
  );
}

function Tree({x,z}) {
  return (
    <group>

      <mesh position={[x,2,z]}>
        <cylinderGeometry args={[0.3,0.4,4]} />
        <meshStandardMaterial color="#6b3f1d"/>
      </mesh>

      <mesh position={[x,5,z]}>
        <sphereGeometry args={[2]} />
        <meshStandardMaterial
          color="green"
        />
      </mesh>

    </group>
  )
}

function WelcomeBoard() {
  return (
    <Text
      position={[0,10,60]}
      fontSize={3}
      color="cyan"
      anchorX="center"
    >
      Welcome to Deepesh City
    </Text>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 12, 25], fov: 75 }}>

      <color attach="background" args={["#050816"]} />

      <ambientLight intensity={1} />

      <pointLight
        position={[10, 20, 10]}
        intensity={50}
      />

      <Ground />

      {/* Main Road */}

      <Road
        position={[0, 0.01, 0]}
        width={8}
        length={120}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Cross Road 1 */}

      <Road
        position={[0, 0.02, -20]}
        width={8}
        length={60}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />

      {/* Cross Road 2 */}

      <Road
        position={[0, 0.02, 20]}
        width={8}
        length={60}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />

      {/* Districts */}

      <District
        position={[-25, 0, -20]}
        color="cyan"
        name="Skill Street"
      />

      <District
        position={[25, 0, -20]}
        color="purple"
        name="Project City"
      />

      <District
        position={[-25, 0, 20]}
        color="orange"
        name="Achievement District"
      />

      <District
        position={[25, 0, 20]}
        color="hotpink"
        name="Fun Zone"
      />

      {/* Motivation */}

      <MotivationBoard />

      {/* Street Lights */}

      <StreetLight x={-5} z={-40} />
      <StreetLight x={5} z={-40} />

      <StreetLight x={-5} z={0} />
      <StreetLight x={5} z={0} />

      <StreetLight x={-5} z={40} />
      <StreetLight x={5} z={40} />

      {/* Gates */}

      <Gate
  position={[-25,0,-12]}
  color="cyan"
  title="Skill Street"
/>

<Gate
  position={[25,0,-12]}
  color="purple"
  title="Project City"
/>

<Gate
  position={[-25,0,28]}
  color="orange"
  title="Achievements"
/>

<Gate
  position={[25,0,28]}
  color="hotpink"
  title="Fun Zone"
/>

{/* Skill Street Buildings */}
<Building x={-28} z={-15} color="cyan" height={8} />
<Building x={-20} z={-18} color="cyan" height={12} />
<Building x={-22} z={-8} color="cyan" height={6} />

{/* Project City Buildings */}
<Building x={28} z={-15} color="purple" height={10} />
<Building x={20} z={-18} color="purple" height={14} />
<Building x={22} z={-8} color="purple" height={8} />

{/* Achievement District Buildings */}
<Building x={-28} z={20} color="orange" height={12} />
<Building x={-20} z={25} color="orange" height={8} />
<Building x={-24} z={32} color="orange" height={15} />

{/* Fun Zone Buildings */}
<Building x={28} z={20} color="hotpink" height={12} />
<Building x={20} z={25} color="hotpink" height={8} />
<Building x={24} z={32} color="hotpink" height={15} />


<DirectionBoard
  position={[-20,4,-12]}
  text="Skills Street"
  color="cyan"
/>

<DirectionBoard
  position={[20,4,-12]}
  text="Projects City"
  color="purple"
/>

<DirectionBoard
  position={[-20,4,12]}
  text="Achievement District"
  color="orange"
/>

<DirectionBoard
  position={[20,4,12]}
  text="Fun Zone"
  color="hotpink"
/>

{/* Skill Street Buildings */}

<SkillTower
  x={-35}
  z={-15}
  color="cyan"
  label="React"
  height={10}
/>

<SkillTower
  x={-30}
  z={-25}
  color="yellow"
  label="JavaScript"
  height={14}
/>

<SkillTower
  x={-20}
  z={-20}
  color="green"
  label="Python"
  height={12}
/>

<SkillTower
  x={-25}
  z={-35}
  color="orange"
  label="C++"
  height={9}
/>

<SkillTower
  x={-15}
  z={-30}
  color="hotpink"
  label="Open Source"
  height={16}
/>

<Text
  position={[-25, 2, -10]}
  fontSize={2}
  color="cyan"
>
  Skills Street
</Text>

{/* Main Road Lane Markings */}

{Array.from({ length: 20 }).map((_, i) => (
  <LaneMarking
    key={"main" + i}
    x={0}
    z={-55 + i * 6}
    rotation={[-Math.PI / 2, 0, 0]}
  />
))}

{/* Cross Road Top */}

{Array.from({ length: 10 }).map((_, i) => (
  <LaneMarking
    key={"cross1" + i}
    x={-27 + i * 6}
    z={-20}
    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
  />
))}

{/* Cross Road Bottom */}

{Array.from({ length: 10 }).map((_, i) => (
  <LaneMarking
    key={"cross2" + i}
    x={-27 + i * 6}
    z={20}
    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
  />
))}

<TrafficLight x={4} z={-20}/>
<TrafficLight x={-4} z={-20}/>

<TrafficLight x={4} z={20}/>
<TrafficLight x={-4} z={20}/>

<Tree x={-12} z={-40}/>
<Tree x={12} z={-40}/>

<Tree x={-12} z={0}/>
<Tree x={12} z={0}/>

<Tree x={-12} z={40}/>
<Tree x={12} z={40}/>

<WelcomeBoard/>

      <MovingCar />

     { /* <OrbitControls /> */ }
    </Canvas>
  );
}