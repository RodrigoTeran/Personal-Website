// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function LearnToDrive({ choosenProject }: Props) {
  return (
    <>
      {/* Only when project is Machine Learning */}
      {choosenProject == 0 && (
        <>
          <Overview
            nameOfProject="01. Learn to drive"
            srcImg="/images/projects/learnToDrive.png"
            linkProject={undefined}
            linkRepository="https://github.com/RodrigoTeran/Machine-Learning-with-Pygame"
            maintenance={() => {
              return (
                <p>
                  This software is not mantained in a server.
                  <br />
                  So it can't be used.
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
                    I developed a 2D driving simulator that&nbsp;
                    <span>operates by itself</span>.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    This project was difficult to make because I needed to
                    establish how <span>sensitive</span> the car would have to
                    be to make <span>decisions</span>.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    I needed to generate many car generations with&nbsp;
                    <span>different variables</span>. Also, I generate a
                    function that measures the efficiency of each car,
                    called&nbsp;<span>fitness</span>.
                  </p>
                );
              }}
              arrayFeatures={["Dynamic map generation"]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
