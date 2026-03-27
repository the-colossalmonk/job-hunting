import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 28;

    // Minimal particle dust
    const particleCount = 500;
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const particles = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x222244, size: 0.18, transparent: true, opacity: 0.6 }));
    scene.add(particles);

    // Refined wireframe sphere
    const sph = new THREE.Mesh(
      new THREE.IcosahedronGeometry(9, 3),
      new THREE.MeshBasicMaterial({ color: 0x111133, wireframe: true, transparent: true, opacity: 0.22 })
    );
    sph.position.set(14, -3, -8);
    scene.add(sph);

    const sph2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4.5, 2),
      new THREE.MeshBasicMaterial({ color: 0x0a0a22, wireframe: true, transparent: true, opacity: 0.16 })
    );
    sph2.position.set(-15, 6, -12);
    scene.add(sph2);

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    let t = 0;
    let animationFrameId;

    const loop = () => {
      animationFrameId = requestAnimationFrame(loop);
      t += 0.004;
      tx += (mx - tx) * 0.04;
      ty += (my - ty) * 0.04;
      
      sph.rotation.x = t * 0.12;
      sph.rotation.y = t * 0.09;
      
      sph2.rotation.x = -t * 0.17;
      sph2.rotation.z = t * 0.11;
      
      camera.position.x += (tx * 1.5 - camera.position.x) * 0.025;
      camera.position.y += (-ty * 1.5 - camera.position.y) * 0.025;
      
      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      pg.dispose();
      sph.geometry.dispose();
      sph.material.dispose();
      sph2.geometry.dispose();
      sph2.material.dispose();
    };
  }, []);

  return <canvas id="bg" ref={canvasRef}></canvas>;
}
