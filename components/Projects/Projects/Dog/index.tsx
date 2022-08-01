// Translation
import useTranslation from "next-translate/useTranslation";

// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function DogFinder({ choosenProject }: Props) {
  // Language
  const { t } = useTranslation("projects/dog");

  return (
    <>
      {/* Only when project is Web development */}
      {choosenProject == 2 && (
        <>
          <Overview
            nameOfProject={t("dog-nameOfProject")}
            srcImg="/images/projects/dogFinder.png"
            linkProject="https://dogfinder.com.mx"
            linkRepository={undefined}
            maintenance={() => {
              return (
                <p>
                  {t("dog-maintenance-1")}&nbsp;
                  <a
                    href="https://www.heroku.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Heroku"
                  >
                    Heroku
                  </a>
                  &nbsp;{t("dog-maintenance-2")}
                </p>
              );
            }}
            arrayTech={[
              "React.js",
              "Node.js",
              "MongoDB",
              "Flask",
              "OpenCV",
              "Stripe",
              "Puppeteer",
              "Google Maps",
              "Sass"
            ]}
            isLeft
            width={460}
            height={302}
          >
            <Description
              description={() => {
                return (
                  <p>
                    {t("dog-description-1")}&nbsp;
                    <span>{t("dog-description-2")}</span>.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    {t("dog-challenges-1")}&nbsp;
                    <span>{t("dog-challenges-2")}</span>
                    {t("dog-challenges-3")}
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    {t("dog-solution-1")}
                    &nbsp;<span>{t("dog-solution-2")}</span>&nbsp;
                    {t("dog-solution-3")}
                    &nbsp;
                    <span>{t("dog-solution-4")}</span>.
                  </p>
                );
              }}
              arrayFeatures={[
                t("dog-features-1"),
                t("dog-features-2"),
                t("dog-features-3"),
                t("dog-features-4"),
                t("dog-features-5"),
                t("dog-features-6")
              ]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
