import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
  })
  return (
    <mesh {...props} ref={mesh} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default Box
