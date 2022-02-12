// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function Fourier({ choosenProject }: Props) {
  return (
    <>
      {/* Only when project is Algorithms */}
      {choosenProject == 3 && (
        <>
          <Overview
            nameOfProject="02. Complex numbers in canvas"
            srcImg="/images/projects/fourier.png"
            linkProject="https://fourier-transforms-canvas.vercel.app"
            linkRepository="https://github.com/RodrigoTeran/Fourier-Transforms-Canvas"
            maintenance={() => {
              return (
                <p>
                  This software is mantained in&nbsp;
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
            arrayTech={["React.js", "Typescript", "Sass", "lot of math..."]}
            width={460}
            height={250}
          >
            <Description
              description={() => {
                return (
                  <p>
                    I developed this <span>Fourier Series</span> viewer. On this
                    page you can make the drawing you want, and then the Fourier
                    series that draw that drawing you made are calculated.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    This project was difficult as it needed to handle&nbsp;
                    <span>complex</span>&nbsp;numbers, integrals and being able
                    to draw on the canvas in a&nbsp;
                    <span>fast and efficient way</span>.
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    That's why I used TypeScript, since with variable types it
                    is <span>safer to write code</span>, and thus no calculation
                    goes wrong.
                  </p>
                );
              }}
              arrayFeatures={["Canvas for drawing", "Vector animations"]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
