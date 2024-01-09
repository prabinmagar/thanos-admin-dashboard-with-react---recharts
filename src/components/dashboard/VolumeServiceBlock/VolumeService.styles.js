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

    .recharts-legend-item-text {
      text-transform: capitalize;
      color: #a5a3ae !important;
      padding-left: 4px;
      font-size: 14px;
      margin-top: -2px;
    }

    .recharts-tooltip-label {
      color: ${(props) => props.theme.colors.cadet};
      font-size: 14px;
      font-weight: 600;
    }

    .recharts-default-legend {
      margin-top: 16px !important;
    }

    .recharts-legend-wrapper {
      border-top: 1px solid ${(props) => props.theme.colors.aliceBlue};
      margin-bottom: -16px;
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
