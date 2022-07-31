// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function LearnToDrive({ choosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/learnToDrive");

  return (
    <>
      {/* Only when project is Machine Learning */}
      {choosenProject == 0 && (
        <>
          <Overview
            nameOfProject={t("learnToDrive-nameOfProject")}
            srcImg="/images/projects/learnToDrive.png"
            linkProject={undefined}
            linkRepository="https://github.com/RodrigoTeran/Machine-Learning-with-Pygame"
            maintenance={() => {
              return (
                <p>
                  {t("learnToDrive-maintenance-1")}
                  <br />
                  {t("learnToDrive-maintenance-2")}
                </p>
              );
            }}
            arrayTech={["Python", "Numpy", "PyGame", "Scipy"]}
            isLeft
            width={460}
            height={200}
          >
            <Description
              description={() => {
                return (
                  <p>
                    {t("learnToDrive-description-1")}
                    &nbsp;
                    <span>{t("learnToDrive-description-2")}</span>.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    {t("learnToDrive-challenges-1")}&nbsp;
                    <span>{t("learnToDrive-challenges-2")}</span>&nbsp;
                    {t("learnToDrive-challenges-3")}&nbsp;
                    <span>{t("learnToDrive-challenges-4")}</span>.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    {t("learnToDrive-solution-1")}&nbsp;
                    <span>{t("learnToDrive-solution-2")}</span>
                    {t("learnToDrive-solution-3")}&nbsp;
                    <span>{t("learnToDrive-solution-4")}</span>.
                  </p>
                );
              }}
              arrayFeatures={[t("learnToDrive-features-1")]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
