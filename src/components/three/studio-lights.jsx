import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    <group name='lights'>
      {/* Reflections: the aluminium body mostly shows what it reflects, so these panels do most of the work */}
      <Environment resolution={256}>
        <group>
          {/* Key: big softbox overhead for a smooth sheen across the lid and keyboard deck */}
          <Lightformer form='rect' intensity={4} position={[0, 10, 0]} rotation-x={Math.PI / 2} scale={[12, 12, 1]} />
          {/* Left & right strip lights: crisp vertical highlights along the edges */}
          <Lightformer form='rect' intensity={8} position={[-10, 2, 0]} rotation-y={Math.PI / 2} scale={[20, 2, 1]} />
          <Lightformer form='rect' intensity={8} position={[10, 2, 0]} rotation-y={-Math.PI / 2} scale={[20, 2, 1]} />
          {/* Rim: ring behind the laptop to separate its silhouette from the dark background */}
          <Lightformer form='ring' intensity={3} position={[0, 4, -12]} scale={8} />
          {/* Fill: soft, dim panel in front so the near side never goes fully black */}
          <Lightformer form='rect' intensity={0.8} position={[0, 0, 12]} scale={[12, 6, 1]} />
        </group>
      </Environment>

      {/* Direct light: soft-edged spots (penumbra) wide enough to cover the whole laptop */}
      <ambientLight intensity={0.2} />
      <spotLight position={[-4, 10, 6]} angle={0.45} penumbra={1} decay={0} intensity={Math.PI * 0.8} />
      <spotLight position={[6, 6, -8]} angle={0.5} penumbra={1} decay={0} intensity={Math.PI * 0.4} />
      <spotLight position={[0, -10, 6]} angle={0.5} penumbra={1} decay={0} intensity={Math.PI * 0.15} />
    </group>
  )
}

export default StudioLights
