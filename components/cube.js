"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Cube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(100, 100); // small cube

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial(); // colorful for fun
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 👇 Tilt the cube at the start
    cube.rotation.x = 0.5; // radians (~30 degrees)
    cube.rotation.y = 0.8; // radians (~45 degrees)

    camera.position.z = 3;

    // Manual rotation on drag
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    const rotationSpeed = 0.01;

    const onMouseDown = (e) => {
      isMouseDown = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - mouseX;
      const deltaY = e.clientY - mouseY;
      cube.rotation.y += deltaX * rotationSpeed;
      cube.rotation.x += deltaY * rotationSpeed;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-pointer"
      style={{ width: "60px", height: "60px" }}
    />
  );
};

export default Cube;