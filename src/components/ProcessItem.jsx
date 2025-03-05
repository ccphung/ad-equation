import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

function ProcessItem({ file, title, desc }) {
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
      <motion.div
        className="flex justify-center items-center"
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          className="w-16"
          src={`/images/icons/${file}.svg`}
          alt="handshake"
        />
        <div className="ml-4">
          <h5 className="font-bold text-stone-600">{title}</h5>
          <p className="text-stone-500">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProcessItem;
