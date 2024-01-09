import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";

export const CustomerWrap = styled.div`
  ${BlockWrapStyles}

  .area-chart {
    width: 100%;
    height: 250px;

    // recharts custom
    .recharts-legend-item {
      &:first-child {
        border-right: 1px solid ${(props) => props.theme.colors.frenchGray};
        padding-right: 12px;
      }
    }

    .recharts-legend-wrapper {
      border-top: 1px solid ${(props) => props.theme.colors.aliceBlue};
    }

    /* custom legend */
    .custom-legend-item-text-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: -4px;

      .custom-legend-item-text {
        &:last-child {
          font-size: 13px;
          color: ${(props) => props.theme.colors.cadet};
          font-weight: 500;
        }
      }
    }
  }
`;
