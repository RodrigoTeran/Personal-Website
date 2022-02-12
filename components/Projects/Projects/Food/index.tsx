// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function Diet({ choosenProject }: Props) {
  return (
    <>
      {/* Only when project is Data Science */}
      {choosenProject == 1 && (
        <>
          <Overview
            nameOfProject="01. Diet modelling"
            srcImg="/images/projects/diet.png"
            linkProject="https://colab.research.google.com/drive/1SkcMnMptugo4Q_wCwjcszIrgDPDY1ge_?usp=sharing"
            linkRepository={undefined}
            maintenance={() => {
              return (
                <p>
                  This software is mantained in&nbsp;
                  <a
                    href="https://colab.research.google.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Google Colab"
                  >
                    Google Colab
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
                    I developed this mathematical model using linear regression
                    for estimating the quantity of calories that any food
                    aports&nbsp;<span>based on its nutrients</span>.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    This project was difficult to make because I needed to&nbsp;
                    <span>collect all the data</span>.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    I collected <span>3 months</span> worth of data of my daily
                    diet and store them in Excel. Then, I cleaned the data so I
                    can start making the mathematical model.
                  </p>
                );
              }}
              arrayFeatures={["Cleaning of data", "Visualization of data"]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
