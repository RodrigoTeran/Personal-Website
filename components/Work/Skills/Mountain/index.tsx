import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

// Styles
import styles from "./mountain.module.scss";

type PropsFlag = {
  x: number;
  y: number;
  imgSrc: any;
  alt: string;
  x2?: number;
  y2?: number;
};

function Flag({ x, x2, y, y2, imgSrc, alt }: PropsFlag) {
  return (
    <div
      className={styles.flag}
      style={{
        top: y2 ? (window.innerWidth < 890 ? y2 + "%" : y + "%") : y + "%",
        left: x2 ? (window.innerWidth < 890 ? x2 + "%" : x + "%") : x + "%",
      }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={40}
        height={25}
        priority
        className={styles.flag_img}
        objectFit="contain"
      />
      <div className={styles.flag_alt}>{alt}</div>
    </div>
  );
}

type PropsMountain = {
  arrayImgs: Array<PropsFlag>;
  title: string;
  color: string;
  zIndex: number;
  x: number;
  y: number;
  delay: number;
};

export default function Mountain({
  arrayImgs,
  title,
  color,
  zIndex,
  x,
  y,
  delay,
}: PropsMountain) {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [, setIsRerender] = useState<number>(0);
  const handleResize = () => {
    setIsRerender((p) => p + 1);
    if (mountainRef.current) {
      var widthMountain: any = getComputedStyle(mountainRef.current).width;
      widthMountain = parseFloat(
        widthMountain.substring(0, widthMountain.length - 2)
      );
      mountainRef.current.style.borderRadius = `${widthMountain / 2}px ${
        widthMountain / 2
      }px 0 0`;
      mountainShapeRef.current.style.borderRadius = `${widthMountain / 2}px ${
        widthMountain / 2
      }px 0 0`;
    }
  };
  const mountainRef = useRef(null);
  const mountainShapeRef = useRef(null);
  return (
    <section
      className={styles.mountain}
      ref={mountainRef}
      style={{
        zIndex: zIndex,
        left: x + "%",
        top:
          window.innerWidth < 890
            ? zIndex == 1
              ? "200px"
              : zIndex == 2
              ? "400px"
              : "0px"
            : y + "%",
        transitionDelay: delay + "ms",
        color:
          window.innerWidth < 890 ? (zIndex == 2 ? "#000" : "#FFF") : "#FFF",
      }}
    >
      <h4>{title}</h4>
      <div
        className={styles.mountain_shape}
        style={{
          backgroundColor: color,
        }}
        ref={mountainShapeRef}
      >
        {arrayImgs.map((img, index) => {
          return (
            <Fragment key={index}>
              <Flag
                imgSrc={img.imgSrc}
                x={img.x}
                y={img.y}
                alt={img.alt}
                x2={img.x2}
                y2={img.y2}
              ></Flag>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
