import React from 'react'

export default function Objects() {
  return (
    <group>
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="red"/>
        </mesh>
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="blue"/>
        </mesh>
    </group>  
  )
}
