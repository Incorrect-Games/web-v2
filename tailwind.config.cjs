module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
