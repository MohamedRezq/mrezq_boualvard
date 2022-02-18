module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: '#C3922C',
        brownish: '#603A18',
        stonish: '#707070',
      },
      fontSize: {
        sm: ['14px', '1.25rem'],
        base: ['16px', '1.5rem'],
        "large": ['18px', '1.75rem'],
        "xl": ['20px', '1.75rem'],
        '2xl': ['24px', '2rem'],
        '3xl': ['30px', '2.25rem'],
        '4xl': ['36px', '2.5rem'],
        '5xl': ['48px', '1'],
      },
    },
  },
  plugins: [],
}
