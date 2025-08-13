import daisyui from 'daisyui';
const tailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark', 'light', 'cupcake'],
  },
};

export default tailwindConfig;
