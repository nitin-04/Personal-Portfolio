import { useEffect, useRef, useState } from "react";
import "../App.css";

const Cursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const touchMediaQuery = window.matchMedia("(pointer: coarse), (hover: none)");
    setIsTouchDevice(touchMediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsTouchDevice(e.matches);
    };

    if (touchMediaQuery.addEventListener) {
      touchMediaQuery.addEventListener("change", handleMediaChange);
    } else {
      touchMediaQuery.addListener(handleMediaChange);
    }

    if (touchMediaQuery.matches) {
      return () => {
        if (touchMediaQuery.removeEventListener) {
          touchMediaQuery.removeEventListener("change", handleMediaChange);
        } else {
          touchMediaQuery.removeListener(handleMediaChange);
        }
      };
    }

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

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
      if (touchMediaQuery.removeEventListener) {
        touchMediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        touchMediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" data-cursor-dot />
      <div ref={cursorOutlineRef} className="cursor-outline" data-cursor-outline />
    </>
  );
};

export default Cursor;
