import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedBorderCircle({ children, size = 110, duration }) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ strokeDashoffset: 0 });
    }
  }, [isInView, controls]);

  return (
    <div className="relative flex justify-center items-center" ref={ref}>
      <svg
        className="absolute"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#6970B2"
          strokeWidth="5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={controls}
          transition={{ duration, ease: "easeInOut" }}
        />
      </svg>
      <div className="w-[230px] h-[230px] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default AnimatedBorderCircle;
