import { useEffect, useRef } from "react";
import "../App.css";
const CanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let radius = 20;
    let growing = true;

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (growing) {
        radius += 0.5;
        if (radius >= 150) growing = false;
      } else {
        radius -= 0.5;
        if (radius <= 20) growing = true;
      }

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = "Yellow";
      ctx.fill();
      ctx.closePath();

      setTimeout(() => requestAnimationFrame(animate), 20);
    };

    canvas.width = 800;
    canvas.height = 600;
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
