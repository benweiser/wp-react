declare namespace StyledSystem {
  export interface BaseTheme {
    breakpoints?: number[];
    space?: number[];
    fontSizes?: number[];
    colors?: {
      [name: string]: string;
    };
  }

  type ResponsiveValue<T> = T | (T | null)[];

  //
  // Core
  //

  export type SpaceValue = string | number;
  export type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

  export interface SpaceProps {
    m?: ResponsiveSpaceValue;
    mt?: ResponsiveSpaceValue;
    mr?: ResponsiveSpaceValue;
    mb?: ResponsiveSpaceValue;
    ml?: ResponsiveSpaceValue;
    mx?: ResponsiveSpaceValue;
    my?: ResponsiveSpaceValue;
    p?: ResponsiveSpaceValue;
    pt?: ResponsiveSpaceValue;
    pr?: ResponsiveSpaceValue;
    pb?: ResponsiveSpaceValue;
    pl?: ResponsiveSpaceValue;
    px?: ResponsiveSpaceValue;
    py?: ResponsiveSpaceValue;
  }

  export function space(...args: any[]): any;

  export type WidthValue = number | string;
  export type ResponsiveWidthValue = ResponsiveValue<WidthValue>;

  export interface WidthProps {
    width?: ResponsiveWidthValue;
  }

  export function width(...args: any[]): any;

  export type MaxWidthValue = number | string;

  export type ResponsiveMaxWidthValue = ResponsiveValue<MaxWidthValue>;

  export interface MaxWidthProps {
    maxWidth?: ResponsiveMaxWidthValue;
  }

  export type MinWidthValue = number | string;
  export type ResponsiveMinWidthValue = ResponsiveValue<MinWidthValue>;

  export interface MinWidthProps {
    minWidth?: ResponsiveMinWidthValue;
  }

  export function minWidth(...args: any[]): any;
  export type FontFamilyValue = string;
  export interface FontFamilyProps {
    fontFamily?: FontFamilyValue;
  }

  export type HeightValue = number | string;
  export type ResponsiveHeightValue = ResponsiveValue<HeightValue>;
  export interface HeightProps {
    height?: ResponsiveHeightValue;
  }

  export function height(...args: any[]): any;

  export type MaxHeightValue = number | string;
  export type ResponsiveMaxHeightValue = ResponsiveValue<MaxHeightValue>;
  export interface MaxHeightProps {
    maxHeight?: ResponsiveMaxHeightValue;
  }

  export function maxHeight(...args: any[]): any;

  export type MinHeightValue = number | string;

  export type ResponsiveMinHeightValue = ResponsiveValue<MinHeightValue>;
  export interface MinHeightProps {
    minHeight?: ResponsiveMinHeightValue;
  }

  export function minHeight(...args: any[]): any;

  export type SizeValue = number;
  export type ResponsiveSizeValue = ResponsiveValue<SizeValue>;
  export interface SizeProps {
    size?: ResponsiveSizeValue;
  }
  export function size(...args: any[]): any;

  export type RatioValue = number | string;
  export interface RatioProps {
    ratio?: RatioValue;
  }
  export function ratio(...args: any[]): any;
  export type FontSizeValue = number | string;

  export type ResponsiveFontSizeValue = ResponsiveValue<FontSizeValue>;

  export interface FontSizeProps {
    fontSize?: ResponsiveFontSizeValue;
  }
  export function fontSize(...args: any[]): any;
  export type LineHeightValue = string;

  export interface LineHeightProps {
    lineHeight?: LineHeightValue;
  }

  export function lineHeight(...args: any[]): any;

  export type ColorValue = string;
  export type ResponsiveColorValue = ResponsiveValue<ColorValue>;

  export interface ColorProps {
    color?: ResponsiveColorValue;
    bg?: ResponsiveColorValue;
  }

  export function color(...args: any[]): any;

  export type zIndexValue = number;
  export function zIndex(...args: any[]): any;

  export type PositionValue =
    | "absolute"
    | "sticky"
    | "fixed"
    | "static"
    | "relative";

  export type ResponsivePositionValue = ResponsiveValue<PositionValue>;
  export function position(...args: any[]): any;

  export type TopValue = string | number;
  export type ResponsiveTopValue = ResponsiveValue<TopValue>;
  export function top(...args: any[]): any;
  export type LeftValue = string | number;
  export type ResponsiveLeftValue = ResponsiveValue<LeftValue>;
  export function left(...args: any[]): any;
  export type RightValue = string | number;
  export type ResponsiveRightValue = ResponsiveValue<RightValue>;
  export function right(...args: any[]): any;
  export type BottomValue = string | number;
  export type ResponsiveBottomValue = ResponsiveValue<BottomValue>;
  export function bottom(...args: any[]): any;
  //
  // Extras
  //

  export type TextAlignValue =
    | "left"
    | "right"
    | "center"
    | "justify"
    | "justify-all"
    | "start"
    | "end"
    | "match-parent";
  export type ResponsiveTextAlignValue = ResponsiveValue<TextAlignValue>;

  export interface TextAlignProps {
    align?: ResponsiveTextAlignValue;
  }

  export function textAlign(...args: any[]): any;

  export type FontWeightValue =
    | "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;

  export interface FontWeightProps {
    fontWeight?: FontWeightValue;
  }

  export function fontWeight(...args: any[]): any;

  export type LetterSpacingValue = string;

  export interface LetterSpacingProps {
    letterSpacing?: LetterSpacingValue;
  }

  export function letterSpacing(...args: any[]): any;

  export type DisplayValue =
    | "block"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "inline"
    | "table"
    | "inline-table"
    | "grid"
    | "initial"
    | "inherit"
    | "none"
    | "inline-grid";

  export type ResponsiveDisplayValue = ResponsiveValue<DisplayValue>;

  export interface DisplayProps {
    display?: ResponsiveDisplayValue;
  }

  export function display(...args: any[]): any;

  export type AlignContentValue =
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "stretch";

  export type ResponsiveAlignContentValue = ResponsiveValue<AlignContentValue>;
  export function alignContent(...args: any[]): any;

  export type AlignItemsValue =
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center";
  export type ResponsiveAlignItemsValue = ResponsiveValue<AlignItemsValue>;

  export interface AlignItemsProps {
    align?: ResponsiveAlignItemsValue;
  }

  export function alignItems(...args: any[]): any;

  export type JustifyContentValue =
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center";
  export type ResponsiveJustifyContentValue = ResponsiveValue<
    JustifyContentValue
  >;

  export interface JustifyContentProps {
    justify?: ResponsiveJustifyContentValue;
  }

  export function justifyContent(...args: any[]): any;

  export type FlexWrapValue = "nowrap" | "wrap" | "wrap-reverse";

  export interface FlexWrapProps {
    wrap?: boolean;
  }

  export function flexWrap(...args: any[]): any;

  export type FlexDirectionValue =
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";
  export type ResponsiveFlexDirectionValue = ResponsiveValue<
    FlexDirectionValue
  >;

  export interface FlexDirectionProps {
    flexDirection?: ResponsiveFlexDirectionValue;
  }

  export function flexDirection(...args: any[]): any;

  export type FlexValue = string;
  export type ResponsiveFlexValue = ResponsiveValue<FlexValue>;

  export interface FlexProps {
    flex?: ResponsiveFlexValue;
  }

  export function flex(...args: any[]): any;

  export type AlignmentValue =
    | "auto"
    | "normal"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe center"
    | "unsafe center";
  export type ResponsiveAlignmentValue = ResponsiveValue<AlignmentValue>;

  export interface AlignSelfProps {
    alignSelf?: ResponsiveAlignmentValue;
  }

  export function alignSelf(...args: any[]): any;
  export function justifySelf(...args: any[]): any;

  /**  Flex Basis Props */
  export type FlexBasisValue = string | number;
  export type ResponsiveFlexBasisValue = ResponsiveValue<FlexBasisValue>;

  export function flexBasis(...args: any[]): any;

  /** Borders */
  export type BorderValue = string;
  export type ResponsiveBorderValue = ResponsiveValue<BorderValue>;
  export function border(...args: any[]): any;
  export function borderTop(...args: any[]): any;
  export function borderLeft(...args: any[]): any;

  export function borderRight(...args: any[]): any;

  export function borderBottom(...args: any[]): any;
  export function borderColor(...args: any[]): any;

  /** Border Radius */

  export type BorderRadiusValue = number;

  export interface BorderRadiusProps {
    borderRadius?: BorderRadiusValue;
  }

  export function borderRadius(...args: any[]): any;

  export type BorderColorValue = string;

  export interface BorderColorProps {
    borderColor?: BorderColorValue;
  }

  export function borderColor(...args: any[]): any;

  export type BorderWidthValue = number;

  export interface BorderWidthProps {
    borderWidth?: BorderWidthValue;
    borderTop?: BorderValue;
    borderRight?: BorderValue;
    borderBottom?: BorderValue;
    borderLeft?: BorderValue;
  }

  export function borderWidth(...args: any[]): any;

  export type BoxShadowValue = number;

  export interface BoxShadowProps {
    boxShadow?: BoxShadowValue;
  }

  export function boxShadow(...args: any[]): any;

  export type PseudoStyleValue = {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    boxShadow?: number;
  };

  export type HoverValue = PseudoStyleValue;

  export interface HoverProps {
    hover?: HoverValue;
  }

  export function hover(...args: any[]): any;

  export type FocusValue = PseudoStyleValue;

  export interface FocusProps {
    focus?: FocusValue;
  }

  export function focus(...args: any[]): any;

  export type ActiveValue = PseudoStyleValue;

  export interface ActiveProps {
    active?: ActiveValue;
  }

  export function active(...args: any[]): any;

  export type DisabledValue = PseudoStyleValue;

  export interface DisabledProps {
    disabledStyle?: DisabledValue;
  }

  export function disabled(...args: any[]): any;

  //
  // Utilities
  //

  export function theme(keys: string): any;

  export function cleanElement(component: any): any;

  export function removeProps(props: any): any;

  //
  // Low-level style functions
  //

  export interface LowLevelStyleFunctionArguments {
    prop: string;
    cssProperty: string;
    key?: string;
    numberToPx?: boolean;
  }

  export function style(args: LowLevelStyleFunctionArguments): any;

  export function responsiveStyle(args: LowLevelStyleFunctionArguments): any;

  export function pseudoStyle(args: LowLevelStyleFunctionArguments): any;
}

declare namespace JSX {
  export interface IntrinsicAttributes {
    // [elemName: string]: any;
    m?: StyledSystem.ResponsiveSpaceValue;
    mt?: StyledSystem.ResponsiveSpaceValue;
    mr?: StyledSystem.ResponsiveSpaceValue;
    mb?: StyledSystem.ResponsiveSpaceValue;
    ml?: StyledSystem.ResponsiveSpaceValue;
    mx?: StyledSystem.ResponsiveSpaceValue;
    my?: StyledSystem.ResponsiveSpaceValue;
    p?: StyledSystem.ResponsiveSpaceValue;
    pt?: StyledSystem.ResponsiveSpaceValue;
    pr?: StyledSystem.ResponsiveSpaceValue;
    pb?: StyledSystem.ResponsiveSpaceValue;
    pl?: StyledSystem.ResponsiveSpaceValue;
    px?: StyledSystem.ResponsiveSpaceValue;
    py?: StyledSystem.ResponsiveSpaceValue;
    width?: StyledSystem.ResponsiveWidthValue;
    fontSize?: StyledSystem.ResponsiveFontSizeValue;
    fontFamily?: StyledSystem.FontFamilyValue;
    color?: StyledSystem.ResponsiveColorValue;
    lineHeight?: StyledSystem.LineHeightValue;
    textAlign?: StyledSystem.TextAlignValue;
    fontWeight?: StyledSystem.FontWeightValue;
    letterSpacing?: StyledSystem.LetterSpacingValue;
    display?: StyledSystem.ResponsiveDisplayValue;
    maxWidth?: StyledSystem.ResponsiveMaxWidthValue;
    minWidth?: StyledSystem.ResponsiveMinWidthValue;
    height?: StyledSystem.ResponsiveHeightValue;
    maxHeight?: StyledSystem.ResponsiveMaxHeightValue;
    minHeight?: StyledSystem.ResponsiveMinHeightValue;
    size?: StyledSystem.ResponsiveSizeValue;
    ratio?: StyledSystem.RatioValue;
    alignItems?: StyledSystem.ResponsiveAlignItemsValue;
    justifyContent?: StyledSystem.ResponsiveJustifyContentValue;
    flexDirection?: StyledSystem.ResponsiveFlexDirectionValue;
    flexBasis?: StyledSystem.ResponsiveFlexBasisValue;
    flex?: StyledSystem.ResponsiveFlexValue;
    alignSelf?: StyledSystem.ResponsiveAlignmentValue;
    justifySelf?: StyledSystem.ResponsiveAlignmentValue;
    borderRadius?: StyledSystem.BorderRadiusProps;
    border?: StyledSystem.ResponsiveBorderValue;
    borderTop?: StyledSystem.ResponsiveBorderValue;
    borderLeft?: StyledSystem.ResponsiveBorderValue;
    borderRight?: StyledSystem.ResponsiveBorderValue;
    borderBottom?: StyledSystem.ResponsiveBorderValue;
    borderColor?: StyledSystem.ResponsiveBorderValue;
    borderWidth?: StyledSystem.ResponsiveBorderValue;
    position?: StyledSystem.ResponsivePositionValue;
    zIndex?: StyledSystem.zIndexValue;
    top?: StyledSystem.TopValue;
    left?: StyledSystem.LeftValue;
    right?: StyledSystem.RightValue;
    bottom?: StyledSystem.BottomValue;
  }
}

declare module "styled-system" {
  export = StyledSystem;
}
