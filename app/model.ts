import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function loadGlbMOdel(scene: THREE.Scene, glbPath: string) {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    glbPath,
    // called when the resource is loaded
    function (gltf) {
      scene.add(gltf.scene);

      gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
    }
  );
}

export function loadObjModel(
  scene: THREE.Scene,
  mtlPath: string,
  objPath: string,
  options: {
    smooth: boolean;
    receiveShadow: boolean;
    castShadow: boolean;
  } = { smooth: false, receiveShadow: true, castShadow: true }
): Promise<THREE.Object3D> {
  const { smooth, receiveShadow, castShadow } = options;
  return new Promise((resolve) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(mtlPath, (mtlParseResult) => {
      //   const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult)
      mtlParseResult.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtlParseResult);
      objLoader.load(objPath, (obj) => {
        console.log(`${objPath}:`, obj);
        console.log(`${mtlPath}:`, mtlParseResult);
        obj.position.y = 0;
        obj.position.x = 3.5;
        obj.receiveShadow = true;
        obj.castShadow = true;
        scene.add(obj);

        resolve(obj);
      });
    });
  });
}
