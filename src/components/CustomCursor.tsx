
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerStatus = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const clickable = hoveredElement?.matches('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      setIsPointer(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handlePointerStatus);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handlePointerStatus);
    };
  }, [position]);

  const ringStyle = {
    width: isPointer ? '40px' : '30px',
    height: isPointer ? '40px' : '30px',
    transform: `translate(${position.x - (isPointer ? 20 : 15)}px, ${position.y - (isPointer ? 20 : 15)}px)`,
  };

  const dotStyle = {
    width: isPointer ? '5px' : '8px',
    height: isPointer ? '5px' : '8px',
    transform: `translate(${position.x - (isPointer ? 2.5 : 4)}px, ${position.y - (isPointer ? 2.5 : 4)}px)`,
  };

  return (
    <>
      <div className="custom-cursor cursor-ring" style={ringStyle}></div>
      <div className="custom-cursor cursor-dot" style={dotStyle}></div>
    </>
  );
};

export default CustomCursor;
