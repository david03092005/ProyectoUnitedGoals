import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from './ImgParallaxHome.module.css'

function ImgParallaxHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  // Creamos un valor de y que varía entre -50 y 50 según el scrollYProgress
  const y = useTransform(scrollYProgress, [0, 1], [-100, 60]);
  // Creamos un valor de scale que varía entre 1.2 y 1 según el scrollYProgress
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);


  return (
    <section>
      <div ref={ref}>
        <figure className={styles.progress}>
          <motion.img
            src="Imagen1Home.png" // Ruta a tu imagen
            style={{ y, scale }}
          />
        </figure>
      </div>
    </section >
  );
}

export default ImgParallaxHome;