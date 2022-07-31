// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function Diet({ choosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/diet");

  return (
    <>
      {/* Only when project is Data Science */}
      {choosenProject == 1 && (
        <>
          <Overview
            nameOfProject={t("diet-nameOfProject")}
            srcImg="/images/projects/diet.png"
            linkProject="https://colab.research.google.com/drive/1SkcMnMptugo4Q_wCwjcszIrgDPDY1ge_?usp=sharing"
            linkRepository={undefined}
            maintenance={() => {
              return (
                <p>
                  {t("diet-maintenance-1")}&nbsp;
                  <a
                    href="https://colab.research.google.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title={t("diet-maintenance-2")}
                  >
                    {t("diet-maintenance-2")}
                  </a>
                  .
                </p>
              );
            }}
            arrayTech={["Python", "Pandas", "Sklearn", "Matplotlib"]}
            isLeft
            width={400}
            height={275}
          >
            <Description
              description={() => {
                return (
                  <p>
                    {t("diet-description-1")}&nbsp;
                    <span>{t("diet-description-2")}</span>.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    {t("diet-challenges-1")}&nbsp;
                    <span>{t("diet-challenges-2")}</span>.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    {t("diet-solution-1")}&nbsp;
                    <span>{t("diet-solution-2")}</span>&nbsp;
                    {t("diet-solution-3")}
                  </p>
                );
              }}
              arrayFeatures={[t("diet-features-1"), t("diet-features-2")]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
