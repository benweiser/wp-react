import { css, injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

export default () => injectGlobal`
${styledNormalize}
${StyledGlobal}
`;

const StyledGlobal = css`
  body {
    background: #fff;
  }
`;
