import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";

export const TargetRealityWrap = styled.div`
  ${BlockWrapStyles}

  .bar-chart {
    width: 100%;
    height: 180px;
  }

  .block-foot {
    .legend-info {
      margin-top: 16px;
    }

    .legend-info-item {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:first-child {
        .info-item-icon {
          background-color: #e2fff3;
        }
        .info-item-val {
          color: ${(props) => props.theme.colors.emerald};
          font-weight: 600;
        }
      }

      &:last-child {
        margin-bottom: 0;
        .info-item-icon {
          background-color: #fff4de;
        }
        .info-item-val {
          color: ${(props) => props.theme.colors.orange};
          font-weight: 600;
        }
      }

      .info-item-icon {
        min-width: 40px;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 20px;
        }
      }
    }

    .info-item-l {
      display: flex;
      align-items: flex-start;
      column-gap: 10px;
    }

    .info-item-title {
      font-size: 14px;
      color: ${(props) => props.theme.colors.cadet};
    }

    .info-item-subtitle {
      font-size: 13px;
      color: ${(props) => props.theme.colors.ashgray};
    }
  }
`;
