import styled, { css } from "styled-components";
import { media } from "../theme/theme";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BlockTitle = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.cadet};

    ${media.xxl`
      font-size: 18px;
    `}
  }
`;

export const BlockContentWrap = styled.div`
  margin-top: 30px;
  ${media.xxl`
        margin-top: 12px;
  `}
`;

export const BlockWrapStyles = css`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0.25rem 1.125rem rgba(75, 70, 92, 0.1);
  border-radius: 6px;
  padding: 20px;

  ${media.xxxl`
    padding: 12px;
 `}
`;
