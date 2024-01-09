import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const AppBarWrap = styled.div`
  box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
  padding: 14px 24px;
  margin: 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};

  ${media.xxxl`
    padding: 14px 12px;
 `}

  ${media.xxxl`
    margin: 12px;
  `}

  .appbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .appbar-title {
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.cadet};

    ${media.lg`
      display: none;
    `}
  }

  .appbar-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
  }

  .appbar-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${media.lg`
      flex: 1;
    `}
  }

  .sidebar-open-btn {
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.colors.ashgray};
    display: none;

    ${media.xl`
      display: inline-flex;
    `}
  }

  .appbar-search {
    .input-group {
      background-color: #f9fafb;
      border-radius: 6px;
      height: 44px;
      min-width: 320px;
      display: flex;
      align-items: stretch;
      padding: 4px 12px;
      position: relative;

      ${media.lg`
        min-width: 280px;
        margin-right: auto;
        margin-left: 12px;
        height: 40px;
      `}

      ${media.md`
        min-width: auto;
        background: transparent;
        margin-left: 0;
      `}

      .input-icon {
        width: 20px;
        display: inline-flex;
        place-items: center;
      }

      .input-control {
        border: none;
        outline: 0;
        font-size: 15px;
        color: ${(props) => props.theme.colors.gray700};
        padding-right: 12px;
        padding-left: 12px;
        background-color: transparent;

        ${media.md`
          position: absolute;
          top: 100%;
          left: 0;
          width: 260px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          height: 40px;
          border-radius: 4px;
          visibility: hidden;
          opacity: 0;

          &.show-input-control{
            visibility: visible;
            opacity: 1;
          }
        `}

        &::placeholder {
          color: ${(props) => props.theme.colors.ashgray};
        }
      }
    }
  }

  .lang-dropdown {
    position: relative;
    width: 120px;
    height: 40px;
    margin-right: 28px;
    margin-left: 28px;

    ${media.lg`
      margin-right: 12px;
      margin-left: auto;
    `}

    ${media.xs`
      width: 100px;
      margin-right: 0;

      .drop-icon{
        display: none;
      }
    `}

    .drop-selected {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      column-gap: 12px;
      padding: 4px 12px;
      cursor: pointer;
    }

    .drop-selected-text {
      display: flex;
      align-items: center;
      column-gap: 8px;
    }

    .drop-list {
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      padding: 8px 0;
      background-color: ${(props) => props.theme.colors.white};
      box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
      border-radius: 6px;
      visibility: hidden;
      opacity: 0;
      transition: all 300ms ease-in-out;
      z-index: 10;

      &.show {
        visibility: visible;
        opacity: 1;
      }
    }

    .drop-list-wrapper {
      max-height: 200px;
      overflow-y: scroll;
      padding: 6px 12px;
    }

    .drop-item {
      display: flex;
      align-items: center;
      column-gap: 12px;
      padding: 4px 0;
      cursor: pointer;
      transition: all 300ms ease-in-out;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }

    .drop-item-img,
    .drop-selected-img {
      width: 24px;
      min-width: 24px;
      height: 24px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .drop-item-text,
    .drop-selected-text span {
      color: ${(props) => props.theme.colors.cadet};
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  .appbar-icon-btn {
    background: ${(props) => props.theme.colors.floralWhite};
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    ${media.lg`
      width: 36px;
      height: 36px;
    `}

    ${media.xs`
      width: 32px;
      height: 32px;
    `}

    img {
      width: 20px;

      ${media.lg`
        width: 18px;
      `}
    }

    .icon-btn-dot {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.red};
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .profile-dropdown {
    margin-left: 24px;
    cursor: pointer;

    ${media.lg`
      margin-left: 16px;
    `}

    ${media.xs`
      margin-left: 12px;
    `}

    .drop-info {
      display: flex;
      align-items: center;
      column-gap: 16px;

      ${media.lg`
        column-gap: 10px;
      `}
    }

    .info-text-group {
      display: flex;
      flex-direction: column;
      min-width: 80px;
      line-height: 1.4;
      width: 80px;

      ${media.md`
        min-width: auto;
        width: auto;
      `}

      span {
        &:nth-child(1) {
          font-weight: 600;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          ${media.md`
            display: none;
          `}
        }
        &:nth-child(2) {
          font-size: 14px;
          color: ${(props) => props.theme.colors.gray700};

          ${media.lg`
            display: none;
          `}
        }
      }
    }

    .drop-info-img {
      width: 45px;
      height: 45px;
      overflow: hidden;
      border-radius: 100%;

      ${media.lg`
        width: 32px;
        height: 32px;
      `}

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .drop-info-text {
      display: flex;
      align-items: center;
    }
  }

  .drop-icon {
    margin-top: 4px;
    width: 18px;
    min-width: 18px;
  }
`;
