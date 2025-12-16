// PoemSlider.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const poems = [
  {
    text: "The best way to find yourself is to lose yourself in the service of others. ",
    author: "Mahatma Gandhi",
  },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honourable, to be compassionate, to have it make some difference that you have lived well.", 
    author: "Ralph Waldo Emerson" },
  {
    text: "Children are the living messages we send to a time we will not see.",
    author: "John F. Kennedy",
  },
  { text: "There can be no keener revelation of a society's soul than the way it treats its children",
     author: "Nelson Mandela" },
   {
    text: "It is easier to build strong children than to repair broken men.",
    author: "Frederick Douglass",
  },
];

const PoemSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % poems.length);
    }, 4000); // Change every 4s
    return () => clearInterval(timer);
  }, []);

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  return (
    <div style={{ position: "relative", height: "100px", overflow: "hidden" }}>
      <AnimatePresence>
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          <div>"{poems[index].text}"</div>
          <div
            style={{
              fontSize: "1rem",
              textAlign: "right",
              marginTop: "5px",
              color: "#555",
            }}
          >
            — {poems[index].author}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PoemSlider;
