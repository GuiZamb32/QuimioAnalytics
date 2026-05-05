/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Verde - Accent
        'verde-accent': '#04BDA2',
        'verde-medium': '#098c78',
        'verde-deep': '#04BDA2',
        
        // Azul - Primary Actions & Buttons
        'azul-dark': '#034C94',
        'azul-primary': '#016FE1',
        'azul-light': '#157eef',
        
        // Vermelho - Alert & High Price
        'vermelho-deep': '#520a0a',
        'vermelho-medium': '#8c0909',
        'vermelho-alert': '#bd0404',
        
        // Backgrounds & Surfaces
        'preto-deep': '#0d0d0d',
        'preto-pure': '#111111',
        'preto-elevated': '#191919',
        'cinza-dark': '#424242',
        'cinza-muted': '#737373',
        'branco-text': '#eaeaea',
      },
    },
  },
  plugins: [],
}