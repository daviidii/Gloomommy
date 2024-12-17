import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  id,
  children,
}: {
  setActive: (item: number) => void;
  active: number | null;
  id: number;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      onMouseEnter={() => setActive(id)}
      className="absolute top-full z-9999 left-1/2 transform pt-1.5"
      style={{ translateX: "-50%" }}
    >
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === id && (
            <div>
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-secondaryContainer text-onSecondaryContainer backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] drop-shadow-lg"
              >
                <motion.div layout className="w-max h-full p-2">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
