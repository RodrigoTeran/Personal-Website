// Modules
import { useRef } from "react";

// Styles
import styles from "./about.module.scss";

// Hook
import { useAnimationsScroll } from "../../hooks/useAnimationsScroll";

// Components
import Code from "./Code/index";
import Question from "./Questions/index";

export default function AboutMe() {
  // Ref
  const aboutInfoRef = useRef<any>(null);

  const percentage: number = .65;
  const delay: number = 200;

  // Hook animation
  useAnimationsScroll({
    componentsList: [
      {
        element: aboutInfoRef,
        screenPercentage: percentage,
        notAppearClass: styles.not,
      },
    ]
  });

  return (
    <section className={styles.about}>
      <Code />
      <div ref={aboutInfoRef} className={`${styles.about_info}`}>
        <Question
          style={{
            ["--delay-number" as any]: `${0 * delay}ms`,
          }}
          align="left"
          question="What I do"
        >
          <p>
            I build interactive and powerful web platforms, servers and machine
            learning models.
          </p>
        </Question>
        <Question
          style={{
            ["--delay-number" as any]: `${1 * delay}ms`,
          }}
          align="right"
          question="What is my experience"
        >
          <p>
            I have 4 years of experience with web technologies working as a
            freelance and intern software engineer.&nbsp;
            <span>Go to experience.</span>
          </p>
        </Question>
        <Question
          style={{
            ["--delay-number" as any]: `${2 * delay}ms`,
          }}
          align="left"
          question="What I've done"
        >
          <p>
            I have built web e-commerce platforms, sales tracking software,
            CRMs, AI software, etc.<br/><span>Go to projects.</span>
          </p>
        </Question>
      </div>
    </section>
  );
}
