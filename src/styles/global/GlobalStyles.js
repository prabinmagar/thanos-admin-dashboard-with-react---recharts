import { createGlobalStyle } from "styled-components";
import { media } from "../theme/theme";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    body{
        font-family: ${(props) => props.theme.typography.fontFamily};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.6;
        background: ${(props) => props.theme.colors.seasalt};
    }

    html {
        scroll-behavior: smooth;
    }

    ul {
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
        max-width: 100%;
    }
    button{
        border: none;
        outline: 0;
        background-color: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }

    /* page settings */
    .page-wrapper{
        min-height: 100vh;
        display: flex;
        width: 100%;
    }

    .content-wrapper{
        flex: 1;
        max-width: 1600px;
        margin-right: auto;
        margin-left: auto;
    }

    .scrollbar{
        &::-webkit-scrollbar{
            width: 6px;
            height: 6px;
        }

        &::-webkit-scrollbar-track {
            background-color: #fff;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 100vh !important;
            background-color: #e9e9e9;
            outline: 1px solid rgba(0, 0, 0, 0.02);
            outline-offset: -1px;
        }
    }
    .content-area{
        margin: 16px;

        ${media.xs`
            margin: 12px;
        `}
    }

    .text{
        color: ${(props) => props.theme.colors.gray700};
    }

    /* recharts related tooltip customization */
    // global recharts tooltip customization
    .recharts-default-tooltip, .custom-recharts-tooltip {
      padding: 4px 8px !important;
      box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.05) !important;
      background-color: ${(props) => props.theme.colors.white}!important;
    }

    .recharts-tooltip-item-list {
      *, li {
        font-size: 13px;
        font-family: inherit !important;
        opacity: 0.9;
        color: ${(props) => props.theme.colors.gray700};
        text-transform: capitalize;
      }
    }

    .recharts-tooltip-label {
      color: ${(props) => props.theme.colors.cadet};
      font-size: 14px;
      font-weight: 600;
    }

    // recharts legen customization
    .recharts-default-legend {
      margin-top: 16px !important;
    }

    .recharts-legend-item {
        display: inline-flex !important;
        align-items: flex-start!important;
    }

    .recharts-legend-item-text {
      text-transform: capitalize;
      color: #a5a3ae !important;
      padding-left: 4px;
      font-size: 14px;
    }
`;
