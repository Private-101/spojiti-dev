import { l, t, c } from '../../helpers'
import type { Utility } from '../../types'
import type { CSSRuleObject } from 'tailwindcss/types/config';

const imposter: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'imposter')}`]: {
          position: 'absolute',
          [l(options, 'top')]: '50%',
          [l(options, 'left')]: '50%',
          transform: 'translate(-50%, -50%)',

          overflow: 'auto',

          [l(options, 'maxWidth')]: `calc(100% - ${t(
            theme,
            'baseSpacing',
          )} * 2)`,
          [l(options, 'maxHeight')]: `calc(100% - ${t(
            theme,
            'baseSpacing',
          )} * 2)`,

          'dialog&': {
            padding: '0',
            margin: '0',
          },
          // TODO: the following causes unknown errors...
          // TODO: casting as CSSRuleObject works?
          [`&.${c(options, 'imposter')}_fixed`]: {
            position: 'fixed',
          } as CSSRuleObject,
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'imposter')}_m`]: (value) => ({
          [`&.${c(options, 'imposter')}`]: {
            [l(options, 'maxWidth')]: `calc(100% - ${value} * 2)`,
            [l(options, 'maxHeight')]: `calc(100% - ${value} * 2)`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
  ],
}

export default imposter