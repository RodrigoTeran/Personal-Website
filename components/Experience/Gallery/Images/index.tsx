// Shimmer image
import Shimmer from "../../../Shimmer/index";
import { INDEXES, arrIndexes, INDEXES_IMAGES } from "../../experience.types";

// Translation
import useTranslation from "next-translate/useTranslation";
import { Fragment } from "react";

type PropsMain = {
  projectIndex: INDEXES;
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
      {arrIndexes.map((element: number, index: number) => {
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
  projectIndex: INDEXES;
  dimensionsMinis_width: number;
  dimensionsMinis_height: number;
  liIndex: INDEXES_IMAGES;
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
      {arrIndexes.map((element: number, index: number) => {
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
