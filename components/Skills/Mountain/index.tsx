// Modules
import { Fragment, useEffect, useRef, useState } from "react";

// Shimmer
import Shimmer from "../../Shimmer/index";

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
  // Delimitations
  const delimitation: number = 890;

  return (
    <div
      className={styles.flag}
      style={{
        top: y2
          ? window.innerWidth < delimitation
            ? y2 + "%"
            : y + "%"
          : y + "%",
        left: x2
          ? window.innerWidth < delimitation
            ? x2 + "%"
            : x + "%"
          : x + "%",
      }}
    >
      <Shimmer
        src={`/images/skills/${imgSrc}`}
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
  color: "mountain-1" | "mountain-2" | "white";
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
      let widthMountain: any = getComputedStyle(mountainRef.current).width;
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
  const mountainRef = useRef<any>(null);
  const mountainShapeRef = useRef<any>(null);

  // Delimitations
  const delimitation: number = 890;
  const top1: number = 200;
  const top2: number = 400;

  return (
    <section
      className={styles.mountain}
      ref={mountainRef}
      style={{
        zIndex: zIndex,
        left: x + "%",
        top:
          window.innerWidth < delimitation
            ? zIndex == 1
              ? `${top1}px`
              : zIndex == 2
              ? `${top2}px`
              : "0px"
            : y + "%",
        transitionDelay: delay + "ms",
        color:
          window.innerWidth < delimitation
            ? zIndex == 2
              ? "#000"
              : "#FFF"
            : "#FFF",
      }}
    >
      <h4>{title}</h4>
      <div
        className={`${styles.mountain_shape} ${styles[color]}`}
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
              />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
