// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function DarkProgrammingLanguage({ choosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/dark");

  return (
    <>
      {/* Only when project is Algorithms */}
      {choosenProject == 3 && (
        <>
          <Overview
            nameOfProject={t("dark-nameOfProject")}
            srcImg="/images/projects/dark.png"
            linkProject="https://dark-language.vercel.app"
            linkRepository="https://github.com/RodrigoTeran/Dark-Programming-Language"
            maintenance={() => {
              return (
                <p>
                  {t("dark-maintenance")}&nbsp;
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Vercel"
                  >
                    Vercel
                  </a>
                  .
                </p>
              );
            }}
            arrayTech={["React.js", "Moo", "Nearley", "Sass"]}
            isLeft
            width={460}
            height={250}
          >
            <Description
              description={() => {
                return (
                  <p>
                    {t("dark-description-1")}&nbsp;
                    <span>{t("dark-description-2")}</span>
                    &nbsp;
                    {t("dark-description-3")}
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    {t("dark-challenges-1")}&nbsp;
                    <span>{t("dark-challenges-2")}</span>
                    {t("dark-challenges-3")}
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    {t("dark-solution-1")}&nbsp;
                    <span>{t("dark-solution-2")}</span>&nbsp;
                    {t("dark-solution-3")}
                  </p>
                );
              }}
              arrayFeatures={[
                t("dark-features-1"),
                t("dark-features-2"),
                t("dark-features-3"),
                t("dark-features-4"),
                t("dark-features-5"),
                t("dark-features-6")
              ]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
