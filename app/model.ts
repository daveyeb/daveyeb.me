import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'



export function loadObjModel(
  scene: THREE.Scene,
  mtlPath: string,
  objPath: string,
  options: {
    smooth: boolean
    receiveShadow: boolean
    castShadow: boolean
  } = { smooth: false, receiveShadow: true, castShadow: true }
): Promise<THREE.Object3D> {
  const { smooth, receiveShadow, castShadow } = options
  return new Promise(resolve => {
    const mtlLoader = new MTLLoader()
    mtlLoader.load(mtlPath, mtlParseResult => {
    //   const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult)
      mtlParseResult.preload()
      const objLoader = new OBJLoader()
      objLoader.setMaterials(mtlParseResult)
      objLoader.load(objPath, obj => {
        console.log(`${objPath}:`, obj)
        console.log(`${mtlPath}:`, mtlParseResult)
        obj.position.y = 0
        obj.position.x = 3.5
        obj.receiveShadow = true
        obj.castShadow = true
        scene.add(obj)


        resolve(obj)
      })
    })
  })
}
