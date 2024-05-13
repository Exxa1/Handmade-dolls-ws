

// Extracted function to make the custom css colors able to use opacity with tailwind
function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

// Use the css variables defined in custom-tailwind.css to make custom tailwind classes
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'amatic-sc': ['Amatic SC', 'sans-serif'], // Add your custom font here
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted')
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-bg'),
          button: withOpacity('--color-button'),
          'button-hover': withOpacity('--color-button-hover')
        }
      },
      colors: {
        Feldgrau: {
          50: '#f6f7f7',
          100: '#e0e7e5',
          200: '#c1cecb',
          300: '#9aaeaa',
          400: '#748d87',
          500: '#586f6b',
          600: '#475a57',
          700: '#3b4a48',
          800: '#323d3b',
          900: '#2c3533',
          950: '#161d1c',
        },
        Linen: {
          50: '#fff9f1',
          100: '#ffeed5',
          200: '#fed8aa',
          300: '#fdbc74',
          400: '#fb953c',
          500: '#f97716',
          600: '#ea5c0c',
          700: '#c2440c',
          800: '#9a3612',
          900: '#7c2f12',
          950: '#431507',
        },
        Tumbleweed: {
          50: '#faf5f2',
          100: '#f4e9e0',
          200: '#e7d1c1',
          300: '#d4aa8e',
          400: '#c88d6f',
          500: '#bc7253',
          600: '#ae6048',
          700: '#914c3d',
          800: '#753f37',
          900: '#5f362f',
          950: '#331a17',
        },      
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

