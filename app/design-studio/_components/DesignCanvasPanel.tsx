import { useRef, useState } from "react";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  OrbitControls,
  useCursor,
  Text,
  Sphere,
  Decal,
  useTexture,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";

interface TexturedSphereProps {
  text: string;
}

const TexturedSphere = ({ text }: TexturedSphereProps) => {
  return (
    <mesh>
      <Sphere args={[1, 32, 32]} receiveShadow castShadow>
        <meshStandardMaterial color="white" />
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
          <meshStandardMaterial
            roughness={0.6}
            transparent
            polygonOffset
            polygonOffsetFactor={-10}
          >
            <RenderTexture
              sourceFile={"/inkscape-path-functions.png"}
              attach="map"
              anisotropy={16}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} />
              <color attach="background" args={["#af2041"]} />

              <Text
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                fontSize={1}
                color="black"
              >
                {text}
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </Decal>
      </Sphere>
    </mesh>
  );
};

interface Sphere2Props extends MeshProps {}

const Sphere2 = (props: Sphere2Props) => {
  const meshRef = useRef();
  const [hovered, hover] = useState(false);
  const texture = useTexture("/inkscape-path-functions.png");

  useCursor(hovered);
  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color={hovered ? "teal" : "goldenrod"} />
      <Decal position={[0, 0, 1]} map={texture} />
      {/* 
      <Decal position={[0, 0, 1]} scale={0.75}>
        <meshStandardMaterial
          roughness={0.6}
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
        >
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera
              makeDefault
              manual
              aspect={0.9 / 0.25}
              position={[0, 0, 5]}
            />
            <color attach="background" args={["#af2041"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <Text rotation={[0, Math.PI, 0]} fontSize={4} color="white">
              Hello World
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal> */}
    </mesh>
  );
};

export const DesignCanvasPanel = () => {
  return (
    <div className="flex-grow order-1 md:order-2">
      <div style={{ height: "calc(100vh - 8rem)" }}>
        <Canvas shadows camera={{ position: [10, 0, 10], fov: 15 }}>
          <ambientLight intensity={0.25} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -5, -10]} />
          <group position={[0, 0, 0]}>
            <TexturedSphere text="hello world" />
          </group>
          {/* <group position={[0, 0, 0]}>
            <Center>
              <Sphere2 position={[0, 0, 0]} />
            </Center>
            <AccumulativeShadows
              frames={80}
              color="black"
              opacity={1}
              scale={12}
              position={[0, 0.04, 0]}
            >
              <RandomizedLight
                amount={8}
                radius={5}
                ambient={0.5}
                position={[5, 5, -10]}
                bias={0.001}
              />
            </AccumulativeShadows>
          </group> */}
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </div>
  );
};
