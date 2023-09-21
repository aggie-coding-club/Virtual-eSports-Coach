import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const Earth = () => {
  const gltf = useLoader(GLTFLoader, './planet/scene.gltf')
  return <primitive object={gltf.scene} scale={3}/>
};
const Ball = (props) => {
  const [decal] = useTexture(['/planet/textures/Planet_baseColor.png']);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry map={decal}/>
        <meshBasicMaterial
          map={decal}
        />
      </mesh>
    </Float>
  );
};
const Atmosphere =()=>{
  const [decal] = useTexture([planetpng]);
    return (
      <mesh>
        <sphereGeometry attach="geom" args={[7, 32, 32]} />
        <meshBasicMaterial attach="mat" map={decal}/>
      </mesh>
    );
}
const ThreePlayGround = () => {
  return (
    <div>
      <div className="row container"><Canvas
    style={{width: `100%`, height: `300px`, position: `relative` }}
    className="col"
      frameloop='demand'
      dpr={[1, 5]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
      <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={1.57}
        />
        <Earth/>
      </Suspense>
      

      <Preload all />
    </Canvas><Canvas
      frameloop='demand'
      className="col mt-5"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls enableZoom={false} />
        <Ball/>
      </Suspense>
      

      <Preload all />
    </Canvas></div></div>
  );
};






export default ThreePlayGround;