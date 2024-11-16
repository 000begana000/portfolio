import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";

const ThreeParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, stats, material;
    let mouseX = 0,
      mouseY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    // Initialize the Three.js Scene
    const init = () => {
      // Camera
      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000
      );
      camera.position.z = 1000;

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);

      // Geometry and Particles
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const sprite = new THREE.TextureLoader().load(
        "textures/sprites/disc.png"
      );

      for (let i = 0; i < 10000; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;
        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      material = new THREE.PointsMaterial({
        size: 35,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
      });
      material.color.setHSL(1.0, 0.3, 0.7);

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Stats
      stats = new Stats();
      mountRef.current.appendChild(stats.dom);

      // GUI
      const gui = new GUI();
      gui.add(material, "sizeAttenuation").onChange(() => {
        material.needsUpdate = true;
      });

      // Event Listeners
      document.body.style.touchAction = "none";
      document.body.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onWindowResize);

      // Animation Loop
      renderer.setAnimationLoop(animate);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = (event) => {
      if (event.isPrimary === false) return;

      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const animate = () => {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const h = ((360 * (1.0 + time)) % 360) / 360;
      material.color.setHSL(h, 0.5, 0.5);

      renderer.render(scene, camera);
      stats.update();
    };

    init();

    return () => {
      mountRef.current.innerHTML = ""; // Cleanup
      window.removeEventListener("resize", onWindowResize);
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div
      className="background"
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Push it behind other content
        overflow: "hidden",
      }}
    />
  );
};

export default ThreeParticles;