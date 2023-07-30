import React from "react";
import { classNames } from "~/utils";
import { HorizontalPositions, VerticalPositions } from "tremor/lib";
import type { Color, HorizontalPosition, VerticalPosition } from "tremor/lib";
import { border, spacing, getColorClassNames } from "tremor/lib";
import { colorPalette } from "tremor/lib";

const parseDecorationAlignment = (decorationAlignment: string) => {
  if (!decorationAlignment) return "";
  switch (decorationAlignment) {
    case HorizontalPositions.Left:
      return border.lg.left;
    case VerticalPositions.Top:
      return border.lg.top;
    case HorizontalPositions.Right:
      return border.lg.right;
    case VerticalPositions.Bottom:
      return border.lg.bottom;
    default:
      return "";
  }
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  decoration?: HorizontalPosition | VerticalPosition | "";
  decorationColor?: Color;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { decoration = "", decorationColor, children, className, ...other } = props;
  return (
    <div
      ref={ref}
      className={classNames(
        // common
        "relative w-full text-left ring-1 rounded-tremor-default",
        // light
        "bg-tremor-background ring-tremor-ring shadow-tremor-card",
        // dark
        "dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card",
        // brand
        decorationColor
          ? getColorClassNames(decorationColor, colorPalette.border).borderColor
          : "border-tremor-brand dark:border-dark-tremor-brand",
        parseDecorationAlignment(decoration),
        spacing.threeXl.paddingAll,
        className ?? "",
      )}
      {...other}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;