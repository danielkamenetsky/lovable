import React, { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // More varied characters for authentic Matrix look
    const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const characters = (katakana + latin + nums).split("");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 20;
    const columns = Math.ceil(canvas.width / fontSize);

    // Initialize drops at random positions above the screen
    const drops = Array(columns).fill(0).map(() => -Math.floor(Math.random() * 100));
    
    // Track character change timing for each column
    const changeChar = Array(columns).fill(0);
    
    // Store current character for each position
    const currentChars = Array(columns).fill('');

    const draw = () => {
      // Darker fade effect for better contrast
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Brighter green for better visibility
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Change character periodically for each column
        if (Math.random() > 0.98 || !currentChars[i]) {
          currentChars[i] = characters[Math.floor(Math.random() * characters.length)];
        }

        // First character in stream is brighter
        if (drops[i] === 0) {
          ctx.fillStyle = "#FFF";
        } else {
          ctx.fillStyle = "#0F0";
        }

        ctx.fillText(
          currentChars[i],
          i * fontSize,
          drops[i] * fontSize
        );

        // Reset with random delay when reaching bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default MatrixRain;