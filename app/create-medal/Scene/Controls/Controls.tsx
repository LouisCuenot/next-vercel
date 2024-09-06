import { OrbitControls } from '@react-three/drei'
import React from 'react'

const Controls = () => {
  return (
    <OrbitControls
        enablePan={true}
        maxDistance={10}
    />
  )
}

export default Controls