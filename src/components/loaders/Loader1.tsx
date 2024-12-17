import { motion } from "framer-motion";

const style = {
  width: 20,
  height: 20,
  opacity: 1,
  margin: 8,
  borderRadius: 900,
  display: "inline-block",
  background: "#8D4A5D",
};

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 20,
  },
};

const Loader1 = () => {
  return (
    <div>
      <motion.div
        style={style}
        variants={variants}
        initial={"start"}
        animate={"end"}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
          duration: 0.3,
          delay: 0,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={"start"}
        animate={"end"}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
          duration: 0.3,
          delay: 0.2,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={"start"}
        animate={"end"}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
          duration: 0.3,
          delay: 0.4,
        }}
      />
    </div>
  );
};

export default Loader1;
