import React from "react";
import { getColorClassNames, colorPalette } from "tremor/lib";
import type { Color } from "tremor/lib";
import { classNames } from "~/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: Color;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { color, className, children } = props;
  return (
    <p
      ref={ref}
      className={classNames(
        // common
        "text-[0.875rem]",
        color
          ? getColorClassNames(color, colorPalette.text).textColor
          : classNames(
              // light
              getColorClassNames("neutral", colorPalette.text).textColor,
              // dark
              `dark:${getColorClassNames("neutral", colorPalette.darkText).textColor}`,
            ),
            
        className ?? "",
      )}
    >
      {children}
    </p>
  );
});

Text.displayName = "Text";

export default Text;