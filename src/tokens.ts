// Marvel Design Tokens
// Colors, typography, and spacing inspired by Marvel Comics branding

export const tokens = {
  colors: {
    primary: {
      red: '#EC1D24',
      redDark: '#B8151B',
      redLight: '#FF4D4D',
    },
    neutral: {
      black: '#0A0A0A',
      blackLight: '#1A1A1A',
      white: '#FFFFFF',
      whiteDark: '#E0E0E0',
      gray: '#808080',
      grayDark: '#404040',
    },
  },

  typography: {
    fontFamily: {
      primary: "'Impact', 'Arial Black', 'Helvetica Neue', sans-serif",
      secondary: "'Arial', 'Helvetica', sans-serif",
      mono: "'Courier New', monospace",
    },
    fontSize: {
      hero: {
        xs: '4rem',
        sm: '6rem',
        md: '8rem',
        lg: '10rem',
        xl: '12rem',
      },
      display: {
        xs: '2.5rem',
        sm: '3rem',
        md: '4rem',
        lg: '5rem',
      },
      heading: {
        xs: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      },
      body: {
        xs: '0.875rem',
        sm: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
      },
      small: {
        xs: '0.75rem',
        sm: '0.875rem',
      },
    },
    fontWeight: {
      bold: 900,
      semiBold: 700,
      medium: 500,
      regular: 400,
      light: 300,
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.8,
    },
  },

  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',  // 2px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
    md: '0 4px 6px rgba(0, 0, 0, 0.5)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.5)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.7)',
    red: '0 4px 15px rgba(236, 29, 36, 0.5)',
    redGlow: '0 0 30px rgba(236, 29, 36, 0.7)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
    slower: '700ms ease-in-out',
  },

  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type Tokens = typeof tokens;
