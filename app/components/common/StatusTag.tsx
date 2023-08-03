// https://github.com/jimengio/jimo-basics/blob/master/src/status-tag.tsx

import React, { type FC } from "react";
import { css, cx } from "emotion";

let StatusTag: FC<{
  /** normal/disabled, false by defaut, which means normal */
  disabled?: boolean;
  normalText?: string;
  disabledText?: string;
  /** special method for overwritting display text */
  text?: string;
  className?: string;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */

  let text = props.text;
  if (text == null) {
    text = props.disabled === false ? props.normalText || StatusTag.defaultProps.normalText : props.disabledText || StatusTag.defaultProps.disabledText;
  }

  return <div className={cx(styleTag, props.disabled ? styleDisabled : null, props.className)}>{text}</div>;
});

StatusTag.defaultProps = {
  normalText: "Normal",
  disabledText: "Disabled",
};

export default StatusTag;

let styleTag = css`
  font-size: 14px;
  display: inline-block;
  min-width: 56px;
  padding: 0 8px;
  height: 22px;
  background: hsl(90, 100%, 96%);
  border: 1px solid hsl(94, 70%, 74%);
  color: hsl(100, 77%, 44%);
  text-align: center;
`;

let styleDisabled = css`
  color: hsl(357, 91%, 55%);
  background: hsl(4, 100%, 97%);
  border: 1px solid hsl(3, 100%, 81%);
`;