import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";
import { media } from "../../../styles/theme/theme";

export const TopProductsWrap = styled.div`
  ${BlockWrapStyles};
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100vh !important;
    background-color: #e9e9e9;
    outline: 1px solid rgba(0, 0, 0, 0.02);
    outline-offset: -1px;
  }

  .tbl-products {
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 500px;

      td,
      th {
        padding: 12px 16px;
        font-size: 14px;

        ${media.lg`
          padding: 8px 10px;
        `}
      }

      thead {
        th {
          border-bottom: 1px solid ${(props) => props.theme.colors.aliceBlue};
          color: ${(props) => props.theme.colors.gray700};
          font-weight: 400;
          text-align: left;

          &:nth-child(3) {
            min-width: 140px;
          }
        }
      }

      tbody {
        td {
          color: ${(props) => props.theme.colors.gray700};
          border-bottom: 1px solid ${(props) => props.theme.colors.aliceBlue};
        }

        tr {
          &:nth-child(1) {
            .tbl-progress-bar {
              background-color: ${(props) => props.theme.colors.columbiaBlue};

              .bar-fill {
                background-color: ${(props) => props.theme.colors.dodgerBlue};
              }
            }

            .tbl-badge {
              background-color: ${(props) => props.theme.colors.aliceBlue};
              color: ${(props) => props.theme.colors.dodgerBlue};
              border: 1px solid ${(props) => props.theme.colors.dodgerBlue};
            }
          }

          &:nth-child(2) {
            .tbl-progress-bar {
              background-color: ${(props) => props.theme.colors.aquamarine};
              color: ${(props) => props.theme.colors.emerald};

              .bar-fill {
                background-color: ${(props) => props.theme.colors.emerald};
              }
            }

            .tbl-badge {
              background-color: ${(props) => props.theme.colors.nyanza};
              color: ${(props) => props.theme.colors.emerald};
              border: 1px solid ${(props) => props.theme.colors.emerald};
            }
          }

          &:nth-child(3) {
            .tbl-progress-bar {
              background-color: ${(props) => props.theme.colors.mauve};
              color: ${(props) => props.theme.colors.violet};

              .bar-fill {
                background-color: ${(props) => props.theme.colors.violet};
              }
            }

            .tbl-badge {
              background-color: ${(props) => props.theme.colors.palePurple};
              color: ${(props) => props.theme.colors.violet};
              border: 1px solid ${(props) => props.theme.colors.violet};
            }
          }

          &:nth-child(4) {
            .tbl-progress-bar {
              background-color: ${(props) => props.theme.colors.sunset};
              color: ${(props) => props.theme.colors.orange};

              .bar-fill {
                background-color: ${(props) => props.theme.colors.orange};
              }
            }

            .tbl-badge {
              background-color: ${(props) => props.theme.colors.latte};
              color: ${(props) => props.theme.colors.orange};
              border: 1px solid ${(props) => props.theme.colors.orange};
            }
          }
        }

        .tbl-progress-bar {
          min-width: 180px;
          height: 5px;
          border-radius: 100vh;
          overflow: hidden;
          position: relative;

          ${media.lg`
            min-width: auto;
          `}

          .bar-fill {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            border-radius: 100vh;
          }
        }

        .tbl-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 45px;
          height: 24px;
          border: 1px solid transparent;
          border-radius: 6px;
        }
      }
    }
  }
`;
