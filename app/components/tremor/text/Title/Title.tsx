import React from "react";
import { getColorClassNames, colorPalette } from "tremor/lib";
import type { Color } from "tremor/lib";
import { classNames } from "~/utils";

export interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: Color;
}

const Title = React.forwardRef<HTMLParagraphElement, TitleProps>((props, ref) => {
  const { color, children, className, ...other } = props;
  return (
    <p
      ref={ref}
      className={classNames(
        // common
        "font-medium text-[1.125rem]",
        color
          ? getColorClassNames(color, colorPalette.darkText).textColor
          : "text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",
        className ?? "",
      )}
      {...other}
    >
      {children}
    </p>
  );
});

Title.displayName = "Title";

export default Title;