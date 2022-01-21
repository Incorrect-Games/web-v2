module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /(bg|text|via|border)-(amber|rose|blue|indigo)-(400|500)/,
		},
		// Regex pattern doesn't support opacity colors Sadge
		"bg-rose-400/10",
		"bg-rose-400/20",

		"bg-amber-400/10",
		"bg-amber-400/20",

		"bg-blue-400/10",
		"bg-blue-400/20",

		"bg-indigo-400/10",
		"bg-indigo-400/20",

		"via-rose-400/10",
		"via-rose-400/20",

		"via-amber-400/10",
		"via-amber-400/20",

		"via-blue-400/10",
		"via-blue-400/20",

		"via-indigo-400/10",
		"via-indigo-400/20",
	],
	theme: {
		container: {
			center:true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1148px",
				"2xl": "1264px"
			},
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '4rem',
				'2xl': '4rem',
			}
		},
		fontFamily: {
			'title': ["Poppins", "sans-serif"],
			'body': ["Nunito", "sans-serif"],
		},
    	extend: {},
  	},
  	plugins: [
		require('@tailwindcss/typography'),
	  ],
}
