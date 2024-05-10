module.exports = {
	purge: ['./views/**/*.ejs', './public/**/*.html'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
	content: [
        "./node_modules/flowbite/**/*.js"
    ]
}
