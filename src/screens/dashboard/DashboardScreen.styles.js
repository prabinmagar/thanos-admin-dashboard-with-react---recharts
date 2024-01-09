import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const DashboardScreenWrap = styled.main`
  margin-top: 20px;
  .area-row {
    margin-bottom: 20px;
    display: grid;
    gap: 20px;

    ${media.xxxl`
      margin-bottom: 16px;
      gap: 16px;
    `}

    ${media.xl`
      margin-bottom: 16px;
      gap: 14px;
    `}

    ${media.sm`
      margin-bottom: 12px;
      gap: 12px;
    `}

    &.ar-one {
      grid-template-columns: 4fr 3fr;

      ${media.lg`
        grid-template-columns: 100%;
      `}
    }

    &.ar-two {
      grid-template-columns: 3fr 2fr 2fr;

      ${media.lg`
        grid-template-columns: repeat(2, 1fr);
      `}

      ${media.md`
        grid-template-columns: 100%;
      `}
    }
  }
`;
