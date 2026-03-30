/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
/** @type {import('tailwindcss').Config} */
export default {
  // ... tu configuración de content, theme, etc.
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: true, // Esto carga todos los temas por defecto de DaisyUI incluyendo synthwave
    darkTheme: "dark"
  },
}