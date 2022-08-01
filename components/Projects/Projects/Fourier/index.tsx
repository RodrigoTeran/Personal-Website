// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function Fourier({ choosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/fourier");

  return (
    <>
      {/* Only when project is Algorithms */}
      {choosenProject == 3 && (
        <>
          <Overview
            nameOfProject={t("fourier-nameOfProject")}
            srcImg="/images/projects/fourier.png"
            linkProject="https://fourier-transforms-canvas.vercel.app"
            linkRepository="https://github.com/RodrigoTeran/Fourier-Transforms-Canvas"
            maintenance={() => {
              return (
                <p>
                  {t("fourier-maintenance")}&nbsp;
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
            arrayTech={["React.js", "Typescript", "Sass", t("fourier-tech")]}
            width={460}
            height={250}
          >
            <Description
              description={() => {
                return (
                  <p>
                    {t("fourier-description-1")}
                    &nbsp;<span>{t("fourier-description-2")}</span>
                    &nbsp;{t("fourier-description-3")}
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    {t("fourier-challenges-1")}
                    &nbsp;
                    <span>{t("fourier-challenges-2")}</span>&nbsp;
                    {t("fourier-challenges-3")}
                    &nbsp;
                    <span>{t("fourier-challenges-4")}</span>.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    {t("fourier-solution-1")}
                    &nbsp;
                    <span>{t("fourier-solution-2")}</span>
                    {t("fourier-solution-3")}
                  </p>
                );
              }}
              arrayFeatures={[t("fourier-features-1"), t("fourier-features-2")]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
