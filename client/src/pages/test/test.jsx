import React from 'react';
import './style.css'
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber'

function Planet() {
  return ( 
    <mesh>
      <sphereGeometry attach="geom" args={[5, 32, 32]} />
      <meshBasicMaterial attach="mat" map="../../../../public/planet/textures/Planet_baseColor.png" />
    </mesh>
  )
}

function Atmosphere() {
    return (
      <mesh>
        <sphereGeometry attach="geom" args={[7, 32, 32]} />
        <meshBasicMaterial attach="mat" map="../../../../public/planet/textures/Clouds_baseColor.png"/>
      </mesh>
    );
}

export default function Test() {
  return (
    <Canvas>
      <Planet angle={0.3} />
      <Atmosphere angle={0.3} />
    </Canvas>
  );
}