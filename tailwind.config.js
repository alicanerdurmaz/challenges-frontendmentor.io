module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        material: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
        'material-lg': '0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)',
      },
      transitionTimingFunction: {
        material: 'cubic-bezier(.25,.8,.25,1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
