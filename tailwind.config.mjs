/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'main-background': '#2D3250',
			'card-background': '#424769',
			'card-border': '#7077A1',
			'text-hover': '#F6B17A',
			'white': '#FFFFFF',
			'black': '#000000',
		}
	},
	plugins: [],
}
