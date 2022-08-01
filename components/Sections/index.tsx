// Modules
import { useRef } from "react";

// Styles
import styles from "./sections.module.scss";

// Hooks
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

type Props = {
  text: string;
  className?: string;
  screenPercentage?: number;
};

export default function HeaderSections({
  text,
  className,
  screenPercentage,
}: Props) {
  // Ref
  const refHeader = useRef<any>(null);

  // Hook animation
  useAnimationsScroll({
    componentsList: [
      {
        element: refHeader,
        screenPercentage: screenPercentage ? screenPercentage : 0.5,
        notAppearClass: styles.not,
      },
    ]
  });

  return (
    <div ref={refHeader} className={`${className} ${styles.container}`}>
      <div></div>
      <h2>{text}</h2>
    </div>
  );
}
