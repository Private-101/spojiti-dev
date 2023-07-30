import { l, t, c, filterObjectKeys } from '../../helpers'
import type { Utility } from '../../types'
import type { CSSRuleObject } from 'tailwindcss/types/config';

const sidebar: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'sidebar')}`]: {
            // TODO: the following causes unknown errors...
            // TODO: casting as CSSRuleObject works?
          display: 'flex',
          flexWrap: 'wrap',
          gap: t(theme, 'baseSpacing'),

          // side
          // TODO: the following causes unknown errors...
          // TODO: casting as CSSRuleObject works?
          '& > :first-child': {
            flexGrow: '1',
          } as CSSRuleObject,

          
          // content
          // TODO: the following causes unknown errors...
          // TODO: casting as CSSRuleObject works?
          '& > :last-child': {
            flexBasis: '0',
            flexGrow: '999',
            [l(options, 'minWidth')]: t(theme, 'sidebarMainMinWidth'),
          } as CSSRuleObject,
        },
        // sidebar on the right
        [`.${c(options, 'sidebar')}-end`]: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: t(theme, 'baseSpacing'),

          // side
          '& > :last-child': {
            flexGrow: '1',
          },

          // content
          '& > :first-child': {
            flexBasis: '0',
            flexGrow: '999',
            [l(options, 'minWidth')]: '66.666667%',
          },
        },
        // adjacent elements adopt their natural height
        [`.${c(options, 'sidebar')}_no-stretch`]: {
          [`&.${c(options, 'sidebar')}, &.${c(
            options,
            'sidebar',
          )}-end`]: {
            alignItems: 'flex-start',
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'sidebar')}_space`]: (value) => ({
          [`&.${c(options, 'sidebar')}, &.${c(
            options,
            'sidebar',
          )}-end`]: {
            gap: `${value}`,
          },
        }),
      },
      {
        values: theme('space') || {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'sidebar')}_side-w`]: (value) => ({
          [`&.${c(options, 'sidebar')}`]: {
            // TODO: the following causes unknown errors...
            // TODO: casting as CSSRuleObject works?
            '& > :first-child': {
              flexBasis: `${value}`,
            },
          },
          [`&.${c(options, 'sidebar')}-end`]: {
            // TODO: the following causes unknown errors...
            // TODO: casting as CSSRuleObject works?
            '& > :last-child': {
              flexBasis: `${value}`,
            },
          } as CSSRuleObject,
        }),
      },
      {
        values: theme('width')
          ? filterObjectKeys(
              theme('width'),
              (key) => !key.includes('/'),
            )
          : {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'sidebar')}_main-min-w`]: (value) => ({
          [`&.${c(options, 'sidebar')}`]: {
            // TODO: the following causes unknown errors...
            // TODO: casting as CSSRuleObject works?
          '& > :last-child': {
             [l(options, 'minWidth')]: `${value}`,
            },
          },
          [`&.${c(options, 'sidebar')}-end`]: {
            // TODO: the following causes unknown errors...
            // TODO: casting as CSSRuleObject works?
           '& > :first-child': {
              [l(options, 'minWidth')]: `${value}`,
            },
          } as CSSRuleObject,
        }),
      },
      {
        values: theme('width')
          ? filterObjectKeys(theme('width'), (key) =>
              key.includes('/'),
            )
          : {},
      },
    ],
  ],
}

export default sidebar