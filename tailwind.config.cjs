/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				page: '#040719',
			},
		},
	},
	plugins: [],
	mode: 'jit',
}
