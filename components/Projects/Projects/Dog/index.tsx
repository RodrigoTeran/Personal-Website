// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function DogFinder({ choosenProject }: Props) {
  return (
    <>
      {/* Only when project is Web development */}
      {choosenProject == 2 && (
        <>
          <Overview
            nameOfProject="01. Dog Finder"
            srcImg="/images/projects/dogFinder.png"
            linkProject="https://dogfinder.com.mx"
            linkRepository={undefined}
            maintenance={() => {
              return (
                <p>
                  This software is mantained in a free&nbsp;
                  <a
                    href="https://www.heroku.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Heroku"
                  >
                    Heroku
                  </a>
                  &nbsp;server, so it might take a few seconds to load.
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
              "Sass",
            ]}
            isLeft
            width={460}
            height={302}
          >
            <Description
              description={() => {
                return (
                  <p>
                    I am created Dog Finder, a web platform that helps find lost
                    pets with&nbsp;<span>artificial intelligence</span>.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    This project taught me how to structure the architecture of
                    a full stack project. How to implement&nbsp;
                    <span>different APIs</span>, databases and functionalities;
                    like google maps, stripe, artificial intelligence, bots,
                    etc.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    For this project, I first made a very detailed structure of
                    the entire platform. Including all the APIs, how and when
                    they would <span>connect</span> with the&nbsp;
                    <span>frontend</span>.
                  </p>
                );
              }}
              arrayFeatures={[
                "OAuth with Google",
                "OAuth with Facebook",
                "Bots",
                "Google Maps",
                "Computer vision",
                "Stripe",
              ]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
