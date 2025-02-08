
import  { useEffect, useRef } from "react";
import "../App.css"; 

const Cursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Move cursor dot immediately
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      // Smoothly animate cursor outline
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          [{ left: `${posX}px`, top: `${posY}px` }],
          { duration: 500, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" data-cursor-dot />
      <div ref={cursorOutlineRef} className="cursor-outline" data-cursor-outline />
    </>
  );
};

export default Cursor;
