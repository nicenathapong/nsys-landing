import { motion } from "framer-motion";
import { ReactNode } from "react";

const animations = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
};

export default function AnimatedPage({ children }: { children: ReactNode }) {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.25,
            }}
            className="relative w-full"
        >
            {children}
        </motion.div>
    );
}
