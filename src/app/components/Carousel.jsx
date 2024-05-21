"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

import Image from "next/image";

function Carousel() {
  const [contador, setContador] = useState(12);
  var listrutas = [];

  for (let i = 1; i < contador; i++) {
    let rutabase = "/images/avril/";
    let rutafoto = `mes${i}.jpg`;
    let rutafinal = rutabase + rutafoto;

    listrutas.push(rutafinal);
  }

  const [emblaref, emblaApi] = useEmblaCarousel({ loop: false });

  //funcionalidad de los botones
  //boton prev
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      return emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  //boton next
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      return emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  return (
    <div className={styles.embla}>
      <div className={styles.embla_viewport} ref={emblaref}>
        <div className={styles.embla_container}>
          {listrutas.map((ruta, index) => {
            console.log(ruta);
            return (
              <div className={styles.embla_slide} key={index}>
                <Image
                  width={450}
                  height={600}
                  style={{ width: "100%", height: "100%" }}
                  src={ruta}
                  alt={index}
                  className={styles.imagen}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.btn_group}>
        <button
          className={[styles.embla_prev, styles.btn].join(" ")}
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className={[styles.embla_next, styles.btn].join(" ")}
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
