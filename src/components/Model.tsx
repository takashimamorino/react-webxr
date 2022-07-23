import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const Model = (props: JSX.IntrinsicElements['group']) => {
  const gltf = useLoader(GLTFLoader, '/models/CesiumMan.gltf')

  return (
    <group {...props}>
      <primitive object={gltf.scene} />
    </group>
  )
}

export default Model
