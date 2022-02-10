// Styles
import styles from "./info.module.scss";

// Icons
import Icon from "../../Icons";

export default function Info() {
  return (
    <div className={styles.info}>
      <h3>Uniforms</h3>
      <div>
        <p>
          I developed a sales tracking software for a mexican school. The
          software organizes all the sales in tables and stores them in a
          database. Also the system allows to sale from the platform.
        </p>
        <ul>
          <li>
            React.js / Typescript
            <Icon.ITagIcon />
          </li>
          <li>
            Node.js
            <Icon.ITagIcon />
          </li>
          <li>
            Framer Motion
            <Icon.ITagIcon />
          </li>
          <li>
            MongoDB
            <Icon.ITagIcon />
          </li>
        </ul>
        <span>
          <a
            href="https://uniformate-bien.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            title="Go to Uniforms website"
          >
            Link <Icon.Link />
          </a>
        </span>
      </div>
    </div>
  );
}
