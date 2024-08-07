tailwind.config = {
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      xs: '6px',
      DEFAULT: '8px',
      sm: '10px',
      md: '12px',
      lg: '40px',
      xl: '60px',
      xxl: '100px',
      full: '50%',
    },
    fontFamily: {
      body: ['Helvetica'],
      second: ['Inter'],
    },
    fontSize: {
      mini: ['10px', '140%'],
      xs: ['12px', '133%'],
      sm: ['14px', '20px'],
      base: ['16px', '137%'],
      md: ['18px', '28px'],
      lg: ['22px', '118%'],
      '2lg': ['24px', '125%'],
      xl: ['28px', '121%'],
      xxl: ['30px', '113%'],
      '2xl': ['48px', '112%'],
    },
    extend: {
      boxShadow: {
        DEFAULT: '0 -4px 10px 0 rgba(0, 0, 0, 0.06);',
        md: '0px 0px 10px 0px rgba(0, 0, 0, 0.10);',
      },
      colors: {
        dark: '#000',
        dark_grey: '#a0a0a0',
        dark_20: 'rgba(0, 0, 0, 0.2)',
        dark_blue: 'rgb(7, 22, 44)',
        light_grey: '#f5f5f5',
        light_green: '#f2faf4',
        light_red: '#fbecf1',
        white: '#fff',
        primary: '#013fec',
        primary_20: 'rgba(1, 63, 236, 0.2)',
        light_blue: '#f2f5fe',
        green: '#009b22',
        danger: '#ff0056',
        danger_20: 'rgba(255, 0, 86, 0.2)',
        warning: '#ff7e46',
        line_blue: '#dce2fb',
        line_grey: '#e4e4e4',
        yellow: '#ff4',
        pink: '#fc6c8f',
        violet: '#9568ec',
        transparent: 'transparent',
        text_grey: '#6e789c',
        placeholder_text: '#b4b8c9',
        input_inactive: '#e4e9f8',
        hover_social_btn: '#EAEEFA',
        hover_table_col: '#F9FBFF',
      },
    },
    screens: {
      xs: '450px',
      sm: '640px',
      md: '769px',
      '2md': '930px',
      lg: '992px',
      '2lg': '1100px',
      xl: '1232px',
      xxl: '1400',
    },
  },
  variants: {
    extend: { textColor: ['peer-disabled'], backgroundColor: ['peer-disabled'] },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('peer-disabled', '.peer:disabled ~ &');
    },
  ],
};
