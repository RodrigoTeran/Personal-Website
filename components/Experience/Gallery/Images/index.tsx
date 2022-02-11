// Shimmer image
import Shimmer from "../../../Shimmer/index";

// Translation
import useTranslation from "next-translate/useTranslation";
import { Fragment } from "react";

type PropsMain = {
  projectIndex: 0 | 1 | 2 | 3 | 4;
  dimensionsMain_width: number;
  dimensionsMain_height: number;
};

export function ImagesMain({
  projectIndex,
  dimensionsMain_width,
  dimensionsMain_height,
}: PropsMain) {
  // Translation
  const { t } = useTranslation("experience");

  return (
    <>
      {/* So change is instant */}
      {[0, 1, 2, 3, 4].map((element: number, index: number) => {
        if (element == projectIndex) {
          return (
            <Fragment key={index}>
              <Shimmer
                src={`/images/experience/work-${projectIndex + 1}.png`}
                alt={t(`work-${projectIndex + 1}-info-title`)}
                width={dimensionsMain_width}
                height={dimensionsMain_height}
                priority
              />
            </Fragment>
          );
        }
      })}
    </>
  );
}

type PropsMini = {
  projectIndex: 0 | 1 | 2 | 3 | 4;
  dimensionsMinis_width: number;
  dimensionsMinis_height: number;
  liIndex: 1 | 2 | 3 | 4;
};

export function ImagesMini({
  projectIndex,
  dimensionsMinis_width,
  dimensionsMinis_height,
  liIndex,
}: PropsMini) {
  // Translation
  const { t } = useTranslation("experience");

  return (
    <>
      {/* So change is instant */}
      {[0, 1, 2, 3, 4].map((element: number, index: number) => {
        if (element == projectIndex) {
          return (
            <Fragment key={index}>
              <Shimmer
                src={`/images/experience/work-${projectIndex + 1}-mini-${liIndex}.png`}
                alt={t(`work-${projectIndex + 1}-info-title`)}
                width={dimensionsMinis_width}
                height={dimensionsMinis_height}
                priority
              />
            </Fragment>
          );
        }
      })}
    </>
  );
}
