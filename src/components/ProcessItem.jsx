import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import AnimatedBorderCircle from "./AnimatedBorderCircle";

function ProcessItem({ file, title, desc, size, delay, duration }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div className="m-8 " ref={containerRef}>
      <motion.div className="flex flex-col justify-center items-center">
        <AnimatedBorderCircle duration={duration}>
          <img
            className={`h-${size} `}
            src={`/images/icons/${file}.svg`}
            alt="handshake"
          />
        </AnimatedBorderCircle>

        <motion.div
          className="ml-4"
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay, duration: 0.5 }}
        >
          <h5 className="font-bold text-stone-600">{title}</h5>
          <p className="text-stone-500">{desc}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProcessItem;
