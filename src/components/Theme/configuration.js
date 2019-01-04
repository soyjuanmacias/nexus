import { rgba } from 'polished';
import { css } from 'styled-components';

export default {
  /** Breakpoints */
  /* By content */
  '--column-4': '',
  '--column-8': 'screen and (min-width: 480px)',
  '--column-12': 'screen and (min-width: 840px)',

  /* By level */
  '--level-1': '',
  '--level-2': 'screen and (min-width: 600px)',
  '--level-3': 'screen and (min-width: 1600px)',

  /* By size */
  '--screen-small': 'screen and (min-width: 600px)',
  '--screen-medium': 'screen and (min-width: 960px)',
  '--screen-large': 'screen and (min-width: 1280px)',
  '--screen-xlarge': 'screen and (min-width: 1920px)',

  /** Colors */
  /* Primary palette */
  '--color-main': '#9500ff',
  '--color-primary': '#0084ff',
  '--color-secondary': '#02c0f9',

  /* Secondary palette */
  '--color-blueish-white': '#f5f7fa',
  '--color-dark': '#063454',
  '--color-dark-night': '#000f19',
  '--color-light': '#ffffff',

  /* Facebook palette */
  '--color-alert': '#f03d25',
  '--color-success': '#4bcc1f',
  '--color-trust': '#0084ff',

  /** Fonts */
  '--font-extra-large': css`
    font-size: 4.4rem;
    letter-spacing: 0;
    line-height: 4.8rem;
  `,
  '--font-large': css`
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 2.4rem;
  `,
  '--font-medium': css`
    font-size: 1.4rem;
    letter-spacing: 0;
    line-height: 2rem;
  `,
  '--font-small': css`
    font-size: 1.2rem;
    letter-spacing: 0;
    line-height: 1.6rem;
  `,

  /* Opacity */
  '--font-opacity-10': css`
    color: ${rgba('#000f19', 0.1)}; // dark-night
  `,
  '--font-opacity-20': css`
    color: ${rgba('#000f19', 0.2)}; // dark-night
  `,
  '--font-opacity-40': css`
    color: ${rgba('#000f19', 0.4)}; // dark-night
  `,
  '--font-opacity-60': css`
    color: ${rgba('#000f19', 0.6)}; // dark-night
  `,
  '--font-opacity-80': css`
    color: ${rgba('#000f19', 0.8)}; // dark-night
  `,
  '--font-opacity-100': css`
    color: #000f19; // dark-night
  `,

  /* Weight */
  '--font-weight-book': 400,
  '--font-weight-medium': 500,
  '--font-weight-demi': 600,
};
