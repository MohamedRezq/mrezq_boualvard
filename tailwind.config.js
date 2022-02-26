module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: '#C3922C',
        goldenLight: '#DD9933',
        brownish: '#603A18',
        stonish: '#707070',
        grayish: "#F5F5F5"
      },
      fontSize: {
        xxs: ['11px', '1rem'],
        sm: ['14px', '1.25rem'],
        base: ['16px', '1.5rem'],
        "large": ['18px', '1.75rem'],
        "xl": ['20px', '1.75rem'],
        '2xl': ['24px', '2rem'],
        '3xl': ['30px', '2.25rem'],
        '4xl': ['36px', '2.5rem'],
        '5xl': ['48px', '1'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}
