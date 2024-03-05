import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";

export const VolumeServiceWrap = styled.div`
  ${BlockWrapStyles}

  .stacked-bar-chart {
    width: 100%;
    height: 250px;
    margin-bottom: 20px;

    .recharts-legend-item {
      display: inline-flex !important;
      align-items: flex-start;

      &:first-child {
        border-right: 1px solid ${(props) => props.theme.colors.frenchGray};
        padding-right: 12px;
      }
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
