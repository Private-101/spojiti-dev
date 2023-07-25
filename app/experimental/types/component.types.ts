/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
// Adapted from Source: https://github.com/kripod/react-polymorphic-types/blob/main/index.d.ts
// and https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
import React from "react";

export type Maybe<T> = NonNullable<T> | undefined;

export type Merge<T, U> = Omit<T, keyof U> & U;

export type PropsWithAs<C extends React.ElementType, Props> = Props & { as?: C };

export type PolymorphicComponentPropsWithoutRef<
  C extends React.ElementType,
  Props,
> = Merge<
  C extends keyof JSX.IntrinsicElements
    ? React.PropsWithoutRef<JSX.IntrinsicElements[C]>
    : React.ComponentPropsWithoutRef<C>,
  PropsWithAs<C, Props>
>;

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props,
> = Merge<
  C extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[C]>
    : React.ComponentPropsWithRef<C>,
  PropsWithAs<C, Props>
>;

/**
 * Utility type to create a component that can be used polymorphically
 */
export type PolymorphicExoticComponent<
  C extends React.ElementType = React.ElementType,
  Props = {},
> = Merge<
  React.ExoticComponent<Props & { [key: string]: unknown }>,
  {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    <InstanceC extends React.ElementType = C>(
      props: PolymorphicComponentPropsWithRef<InstanceC, Props>,
    ): React.ReactElement | null;
  }
>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

/**
 * Utility type to create a component that can be used polymorphically with Ref
 */
export type PolymorphicForwardedRefComponent<
  C extends React.ElementType,
  Props,
> = Merge<
  React.ForwardRefExoticComponent<Props & { [key: string]: unknown }>,
  PolymorphicExoticComponent<C, Props>
>;

export function forwardRefWithAs<C extends React.ElementType, Props = {}>(
  render: (
    props: PolymorphicComponentPropsWithoutRef<C, Props>,
    ref: PolymorphicRef<C>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef(render) as PolymorphicForwardedRefComponent<C, Props>;
}