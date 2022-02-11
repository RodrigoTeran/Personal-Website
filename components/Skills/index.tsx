// Styles
import styles from "./skills.module.scss";

// Components
import HeaderSections from "../Sections/index";

export default function Skills() {
  // Animations
  const percentage: number = 0.45;

  return (
    <section className={styles.skills}>
      <div>
        <HeaderSections text="Skills" screenPercentage={percentage + 0.13} />
      </div>
    </section>
  );
}
