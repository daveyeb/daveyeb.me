"use client";

import * as THREE from "three";

import { useEffect, useRef, useCallback } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadObjModel } from "../model";

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
  }

function Me() {
  const refContainer = useRef(null);
  const refRenderer = useRef()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])


  useEffect(() => {
    // === THREE.JS CODE START ===
    const { current: container } = refContainer;

    if (container) {
        console.log("here")
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      var scene = new THREE.Scene();
    //   var camera = new THREE.PerspectiveCamera(
    //     75,
    //     scW / scH,
    //     0.1,
    //     1000
    //   );
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      refRenderer.current = renderer
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      container.appendChild(renderer.domElement)

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )

      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadObjModel(scene, 'david.vox.mtl', 'david.obj')


      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
      camera.position.z = 5;

      let req = null
      let frame = 0
      var animate = function () {
        req =  requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
            const p = initialCameraPosition
            const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
  
            camera.position.y = 10
            camera.position.x =
              p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
            camera.position.z =
              p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
            camera.lookAt(target)
          } else {
            controls.update()
          }

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return <div className=" w-full h-full mt-6" ref={refContainer}></div>;
}

export default Me;
