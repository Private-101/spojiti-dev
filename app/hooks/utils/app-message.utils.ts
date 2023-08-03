import { css } from "emotion";

export function scrollToElement(x: HTMLElement) {
    let f = (x as any).scrollIntoViewIfNeeded.bind(x);
    if (typeof f === "function") {
      f();
    } else {
      x.scrollIntoView();
    }
  }
  
export const shellStylePopupBackground = css`
  position: fixed;
  min-height: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: hsla(0, 0%, 0%, 0.4);
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const shellStylePopupCard = css`
  margin: 16px auto 16px;
  text-align: left;
  background-color: white;
  padding: 16px 16px 32px 16px;
  width: 100%;
  max-width: 600px;
`;

export const subTextColor = "#666666";

export const mainTextColor = "#101010";

export const greenColor = "#3abe5f";

export const redColor = "#f2536e";

export const grayColor = "#828282";

export const darkGrayColor = "#333";

export enum EColorScheme {
  Purple = "hsla(215, 100%, 35%, 1)",
  White = "white",
  Empty = "#ccc",
}

export enum EDeviceStateColor {
  Working = "#184478",
  Breakdown = "#E51C23",
  Maintaining = "#FF9800",
  Disabled = "#FF9800",
}