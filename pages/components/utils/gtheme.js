import styles from "../../../public/govuk/main.module.css";

const columns = {
    full: styles["govuk-grid-column-full"],
    half: styles["govuk-grid-column-one-half"],
    onethird: styles["govuk-grid-column-one-third"],
    twothird: styles["govuk-grid-column-two-thirds"],
    onequarter: styles["govuk-grid-column-one-quarter"],
    threequarter: styles["govuk-grid-column-three-quarters"],
  };
  
  const desktop = {
    full: styles["govuk-grid-column-full-from-desktop"],
    half: styles["govuk-grid-column-one-half-from-desktop"],
    onethird: styles["govuk-grid-column-one-third-from-desktop"],
    twothird: styles["govuk-grid-column-two-thirds-from-desktop"],
    onequarter: styles["govuk-grid-column-one-quarter-from-desktop"],
    threequarter: styles["govuk-grid-column-three-quarters-from-desktopS"],
  };
  
  const width = {
    full: styles["govuk-!-width-full"],
    threequarters: styles["govuk-!-width-three-quarters"],
    twothirds: styles["govuk-!-width-two-thirds"],
    half: styles["govuk-!-width-one-half"],
    onethird: styles["govuk-!-width-one-third"],
    onequarter: styles["govuk-!-width-one-quarter"],
  };
  
  const paddingBottom = {
    1: styles["govuk-!-padding-bottom-1"],
    2: styles["govuk-!-padding-bottom-2"],
    3: styles["govuk-!-padding-bottom-3"],
    4: styles["govuk-!-padding-bottom-4"],
    5: styles["govuk-!-padding-bottom-5"],
    6: styles["govuk-!-padding-bottom-6"],
    7: styles["govuk-!-padding-bottom-7"],
    8: styles["govuk-!-padding-bottom-8"],
    9: styles["govuk-!-padding-bottom-9"],
  };
  
  const marginBottom = {
    1: styles["govuk-!-margin-bottom-1"],
    2: styles["govuk-!-margin-bottom-2"],
    3: styles["govuk-!-margin-bottom-3"],
    4: styles["govuk-!-margin-bottom-4"],
    5: styles["govuk-!-margin-bottom-5"],
    6: styles["govuk-!-margin-bottom-6"],
    7: styles["govuk-!-margin-bottom-7"],
    8: styles["govuk-!-margin-bottom-8"],
    9: styles["govuk-!-margin-bottom-9"],
  };
  
  const marginTop = {
    1: styles["govuk-!-margin-top-1"],
    2: styles["govuk-!-margin-top-2"],
    3: styles["govuk-!-margin-top-3"],
    4: styles["govuk-!-margin-top-4"],
    5: styles["govuk-!-margin-top-5"],
    6: styles["govuk-!-margin-top-6"],
    7: styles["govuk-!-margin-top-7"],
    8: styles["govuk-!-margin-top-8"],
    9: styles["govuk-!-margin-top-9"],
  };
  
  const compose = {
    columns,
    desktop,
    width,
    marginTop,
    marginBottom,
    paddingBottom,
  };

  export default compose