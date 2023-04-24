import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const Skybox = () => {
  const gltf = useLoader(GLTFLoader, './skybox-v3.glb')
  return <primitive object={gltf.scene} scale={3}/>
};

const SkyboxCanvas = () => {
  return (
    
      <div ><Canvas
    style={{width: `100%`,height:'100%',position: `fixed`, zIndex:-10,display: "flex", marginTop:'-100px' }}
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
        <Skybox/>
      </Suspense>
      

      <Preload all />
    </Canvas></div>
  );
};






export default SkyboxCanvas;