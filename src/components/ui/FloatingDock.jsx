import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
    </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(Infinity);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    let lastTime;
    let direction = 1;
    const speed = 50;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      container.scrollLeft += direction * speed * delta;

      if (container.scrollLeft <= 0) direction = 1;
      else if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      )
        direction = -1;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Transparent fade-out gradients */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-transparent/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-transparent via-transparent/80 to-transparent pointer-events-none z-10" />

      <motion.div
        ref={containerRef}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-20 items-center gap-12 overflow-x-auto scrollbar-hide py-2"
      >
        {duplicatedItems.map((item, index) => (
          <IconContainer
            key={`${item.title}-${index}`}
            mouseX={mouseX}
            item={item}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </motion.div>
    </div>
  );
};

const IconContainer = ({ mouseX, item, hoveredItem, setHoveredItem }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useSpring(useTransform(distance, [-150, 0, 150], [1, 1.5, 1]), {
    damping: 10,
    stiffness: 200,
  });

  const opacity = useSpring(
    useTransform(distance, [-150, -50, 0, 50, 150], [0.5, 0.8, 1, 0.8, 0.5]),
    { damping: 10, stiffness: 100 }
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative flex h-16 w-16 items-center justify-center"
      onMouseEnter={() => setHoveredItem(item.title)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <a href={item.href} className="flex items-center justify-center">
        <div className="h-8 w-8">{item.icon}</div>
      </a>

      <AnimatePresence>
        {hoveredItem === item.title && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute bottom-full text-xl text-gray-500 font-medium"
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
