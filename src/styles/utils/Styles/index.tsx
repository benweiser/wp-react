export const UNIT_WHITELIST: ReadonlyArray<string> = [
  "px",
  "rem",
  "em",
  "fr",
  "vh",
  "vw"
];

export interface Sizes {
  readonly lg: string;
  readonly md: string;
  readonly sm: string;
  readonly xs: string;
  readonly xl: string;
}

export const getSpacing = (size: string, unit: string = "rem") => {
  if (UNIT_WHITELIST.indexOf(unit) === -1) {
    return;
  }
  const baseline = unit === "px" ? 16 : 1;
  const sizes: Sizes = {
    lg: `${baseline * 1.2}${unit}`,
    md: `${baseline}${unit}`,
    sm: `${baseline * 0.8}${unit}`,
    xl: `${baseline * 1.4}${unit}`,
    xs: `${baseline * 0.6}${unit}`
  };

  return sizes[size];
};

interface Styles {
  /** Large spacer for padding/margin */
  readonly V_LG: string;
  /** Medium spacer for padding/margin */
  readonly V_MD: string;
  readonly V_SM: string;
  readonly V_XL: string;
  readonly V_XS: string;
}

export const S: Styles = {
  V_LG: getSpacing("lg"),
  V_MD: getSpacing("md"),
  V_SM: getSpacing("sm"),
  V_XL: getSpacing("xl"),
  V_XS: getSpacing("xs")
};

export default S;
