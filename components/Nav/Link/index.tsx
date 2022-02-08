// Modules
import Link from "next/link";
import { motion } from "framer-motion";

// Styles
import styles from "./link.module.scss";

// Icons
import Icon from "../../Icons/index";

// Languages
import useTranslation from "next-translate/useTranslation";

// Variants
import { elementVariants } from "../../animations/variants/stagger";

type Props = {
  linkType: "contact" | "about" | "experience" | "projects" | "lang" | "skills";
  text?: string;
  goto?: () => any;
};

export default function LinkNav({ linkType, text, goto }: Props) {
  const { t, lang } = useTranslation("common");

  return (
    <motion.div
      variants={elementVariants}
      className={styles.link}
      onClick={goto}
    >
      <div className={`${styles.link_svg}`}>
        {linkType == "about" && <Icon.User className={styles.link_svg_icon} />}
        {linkType == "contact" && (
          <Icon.PaperPlane className={styles.link_svg_icon} />
        )}
        {linkType == "experience" && (
          <Icon.PeopleCarry className={styles.link_svg_icon} />
        )}
        {linkType == "projects" && (
          <Icon.Briefcase className={styles.link_svg_icon} />
        )}
        {linkType == "lang" && (
          <Link href="/" locale={lang == "es" ? "en" : "es"}>
            <a title={t("title-a")}>
              {lang == "es" && (
                <Icon.MexicoFlag className={styles.link_svg_flag} />
              )}
              {lang == "en" && (
                <Icon.UsaFlag className={styles.link_svg_flag} />
              )}
              <Icon.ChevronDown className={styles.link_svg_chevron} />
            </a>
          </Link>
        )}

        {linkType == "skills" && (
          <Icon.Tools className={styles.link_svg_icon} />
        )}
      </div>
      {text && <div className={styles.link_text}>{text}</div>}
    </motion.div>
  );
}
