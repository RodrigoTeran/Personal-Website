// Modules
import { useRef } from "react";

// Styles
import styles from "./code.module.scss";

// Hook
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

// Translations
import useTranslation from "next-translate/useTranslation";

// Components
import HeaderSections from "../../Sections/index";
import {
  Code_const,
  Code_comment,
  Code_createObject,
  Code_equal,
  Code_new,
  Code_person,
  Code_iconPurple,
  Code_completeString,
  Code_semicolon,
  Code_property,
  Code_superGreen,
} from "./Declarations/index";

export default function Code() {
  // Ref
  const code = useRef<any>(null);

  const percentage: number = 0.45;
  const delay: number = 80;

  // Hook animation
  useAnimationsScroll({
    componentsList: [
      {
        element: code,
        screenPercentage: percentage,
        notAppearClass: styles.not,
      },
    ],
  });

  // Translation
  const { t } = useTranslation("common");

  return (
    <div className={styles.code}>
      <HeaderSections
        screenPercentage={percentage + 0.13}
        text={t("nav-link-1")}
        className={styles.h2}
      />
      <div ref={code} className={`${styles.code_container}`}>
        <div
          style={{
            ["--delay-number" as any]: `${0 * delay}ms`,
          }}
        >
          <Code_comment text="Life" />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${1 * delay}ms`,
          }}
        >
          <Code_const />
          <Code_createObject text="Rodrigo" />
          &nbsp;
          <Code_equal />
          <Code_new />
          <Code_person />
          <Code_iconPurple icon="(" />
          <Code_completeString text="Rodrigo Terán" />
          <Code_iconPurple icon=")" />
          <Code_semicolon />
        </div>
        <div>&nbsp;</div>
        <div
          style={{
            ["--delay-number" as any]: `${2 * delay}ms`,
          }}
        >
          <Code_property name="Rodrigo" property="age" />
          &nbsp;
          <Code_equal />
          <Code_superGreen number="20" />
          <Code_semicolon />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${3 * delay}ms`,
          }}
        >
          <Code_property name="Rodrigo" property="major" />
          &nbsp;
          <Code_equal />
          <Code_completeString text="BS. Computer Science" />
          <Code_semicolon />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${4 * delay}ms`,
          }}
        >
          <Code_property name="Rodrigo" property="interests" />
          &nbsp;
          <Code_equal />
          <Code_iconPurple icon="[" />
          <Code_completeString text="Web" />
          <Code_semicolon specify="," />
          &nbsp;
          <Code_completeString text="Machine Learning" />
          <Code_iconPurple icon="]" />
          <Code_semicolon />
        </div>
        <div>&nbsp;</div>
        <div
          style={{
            ["--delay-number" as any]: `${5 * delay}ms`,
          }}
        >
          <Code_comment text="Hobbies" />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${6 * delay}ms`,
          }}
        >
          <Code_property name="Rodrigo" property="sport" />
          &nbsp;
          <Code_equal />
          <Code_completeString text="Calisthenics" />
          <Code_semicolon />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${7 * delay}ms`,
          }}
        >
          <Code_property name="Rodrigo" property="isBookLover" />
          &nbsp;
          <Code_equal />
          <Code_superGreen number="true" />
          <Code_semicolon />
        </div>
        <div>&nbsp;</div>
        <div
          style={{
            ["--delay-number" as any]: `${8 * delay}ms`,
          }}
        >
          <Code_comment text="Career" />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${9 * delay}ms`,
          }}
        >
          <Code_const specify="while" />
          <Code_iconPurple icon="(" />
          <Code_createObject text="!" />
          <Code_property name="Rodrigo" property="isSuccessful" />
          <Code_iconPurple icon="(" />
          <Code_iconPurple icon=")" />
          <Code_iconPurple icon=")" />
          &nbsp;
          <Code_semicolon specify="{" />
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${10 * delay}ms`,
          }}
        >
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Code_createObject text="try" />
            &nbsp;
            <Code_semicolon specify="{" />
          </span>
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${11 * delay}ms`,
          }}
        >
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Code_property name="Rodrigo" property="work" />
            <Code_iconPurple icon="(" />
            <Code_iconPurple icon=")" />
            <Code_semicolon />
          </span>
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${12 * delay}ms`,
          }}
        >
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Code_semicolon specify="}" />
            &nbsp;
            <Code_createObject text="catch" />
            <Code_iconPurple icon="(" />
            <Code_semicolon specify="error" />
            <Code_iconPurple icon=")" />
            &nbsp;
            <Code_semicolon specify="{" />
          </span>
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${13 * delay}ms`,
          }}
        >
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Code_property name="Rodrigo" property="learn" />
            <Code_iconPurple icon="(" />
            <Code_semicolon specify="error" />
            <Code_iconPurple icon=")" />
            <Code_semicolon />
          </span>
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${14 * delay}ms`,
          }}
        >
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Code_semicolon specify="}" />
          </span>
        </div>
        <div
          style={{
            ["--delay-number" as any]: `${15 * delay}ms`,
          }}
        >
          <Code_semicolon specify="}" />
          <Code_semicolon />
        </div>
      </div>
    </div>
  );
}
