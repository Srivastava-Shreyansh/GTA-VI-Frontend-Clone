import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState("");

  // Zero-latency precision center dot motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for trailing outer reticle
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest('a, button, [data-cursor], input, select, textarea');
      
      if (clickable) {
        setIsHovered(true);
        setHoverText(clickable.getAttribute('data-cursor-text') || "");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        setIsVisible(false);
      }
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Spring trailing outer reticle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 flex items-center justify-center"
          animate={{
            width: isHovered ? 54 : 36,
            height: isHovered ? 54 : 36,
            borderColor: isHovered ? "#00F0FF" : "#FF007F",
            boxShadow: isHovered 
              ? "0 0 15px #00F0FF, inset 0 0 8px #00F0FF" 
              : "0 0 10px #FF007F, inset 0 0 5px #FF007F",
            scale: isActive ? 0.8 : 1
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Crosshair Notch Accents */}
          {['top', 'bottom', 'left', 'right'].map((pos) => (
            <motion.div
              key={pos}
              className={`absolute bg-current ${pos === 'top' || pos === 'bottom' ? 'w-[2px] h-[6px]' : 'w-[6px] h-[2px]'}`}
              style={{
                top: pos === 'top' ? -6 : pos === 'left' || pos === 'right' ? 'calc(50% - 1px)' : 'auto',
                bottom: pos === 'bottom' ? -6 : 'auto',
                left: pos === 'left' ? -6 : pos === 'top' || pos === 'bottom' ? 'calc(50% - 1px)' : 'auto',
                right: pos === 'right' ? -6 : 'auto',
                color: isHovered ? '#00F0FF' : '#FF007F',
                boxShadow: isHovered ? "0 0 8px #00F0FF" : "0 0 8px #FF007F",
              }}
            />
          ))}
        </motion.div>

        {/* Hover Text */}
        <AnimatePresence>
          {hoverText && isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 45, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute left-0 top-0 -translate-y-1/2 whitespace-nowrap text-[#00F0FF] font-bold text-xs tracking-[0.2em] uppercase mix-blend-screen"
              style={{ textShadow: "0 0 8px #00F0FF" }}
            >
              {hoverText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Zero-latency precision center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: mouseX, y: mouseY, opacity: isVisible ? 1 : 0 }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
          animate={{
            scale: isActive ? 0.5 : 1,
            backgroundColor: isHovered ? "#00F0FF" : "#FF007F",
            boxShadow: isHovered ? "0 0 10px #00F0FF" : "0 0 10px #FF007F"
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
