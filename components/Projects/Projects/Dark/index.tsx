// Components
import Overview from "../../Overview/index";
import Description from "../../Description/index";

type Props = {
  choosenProject: 0 | 1 | 2 | 3;
};

export default function DarkProgrammingLanguage({ choosenProject }: Props) {
  return (
    <>
      {/* Only when project is Algorithms */}
      {choosenProject == 3 && (
        <>
          <Overview
            nameOfProject="01. Programming language"
            srcImg="/images/projects/dark.png"
            linkProject="https://dark-language.vercel.app"
            linkRepository="https://github.com/RodrigoTeran/Dark-Programming-Language"
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
            arrayTech={["React.js", "Moo", "Nearley", "Sass"]}
            isLeft
            width={460}
            height={250}
          >
            <Description
              description={() => {
                return (
                  <p>
                    I developed DARK, a new <span>programming language</span>
                    &nbsp;that can be used from the browser. Its syntax is
                    inspired by javascript and python.
                  </p>
                );
              }}
              challenges={() => {
                return (
                  <p>
                    This project taught me how to create a programming language
                    from scratch. How to create <span>data structures</span>,
                    and why professional languages are the way they are...
                  </p>
                );
              }}
              solution={() => {
                return (
                  <p>
                    For this project, I had to learn how to&nbsp;
                    <span>analyze the text</span>&nbsp;that the user writes, and
                    thus be able to convert it to language that the machine
                    understands. The most difficult thing was to implement
                    functionalities that do not exist in the language that I
                    used to code this programming language.
                  </p>
                );
              }}
              arrayFeatures={[
                "IDE in the browser",
                "Language documentation",
                "Loops",
                "Conditionals",
                "Data structures",
                "Functional programming",
              ]}
            />
          </Overview>
        </>
      )}
    </>
  );
}
