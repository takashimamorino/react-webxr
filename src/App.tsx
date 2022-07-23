import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import Model from './components/Model'

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-5, 0, 0]} />
      <Model position={[0, -1, 0]} />
    </Canvas>
  )
}

export default App
