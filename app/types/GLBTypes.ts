import * as THREE from "three"
import { GLTF } from "three-stdlib"

export type LaurierModel = GLTF & {
    nodes: {
        Curve: THREE.Mesh
    }
}

export type StarsModel = GLTF & {
    nodes: {
        Curve011: THREE.Mesh
    }
}

export type InnerlinesModel = GLTF & {
    nodes: {
        Circle: THREE.Mesh
    }
}

export type TripleLinesModel = GLTF & {
    nodes: {
        Circle001: THREE.Mesh
    }
}

export type ClouModel = GLTF & {
    nodes: {
      Sphere: THREE.Mesh
    }
  }
