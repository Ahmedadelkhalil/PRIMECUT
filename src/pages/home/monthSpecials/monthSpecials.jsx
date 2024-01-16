import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./monthSpecials.css";
import SpecialOfferCard from "./specialOfferCard";

const MonthSpecials = () => {
  const sentence = "THIS MONTH'S SPECIAL";
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const sentenceAnimation = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const characterAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);
  return (
    <div className="monthSpecial_container">
      <motion.h1
        className="monthSpecial_title text-center"
        initial="hidden"
        animate={animation}
        variants={sentenceAnimation}
      >
        {sentence.split("").map((char, indx) => {
          return (
            <motion.span key={indx} ref={ref} variants={characterAnimation}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
      {/* ----------------------------------------- */}
      <SpecialOfferCard />
    </div>
  );
};

export default MonthSpecials;
