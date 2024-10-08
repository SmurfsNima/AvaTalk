/** @type  {import('tailwindcss').Config} */

export  default  {

	content: ["./index.html",  "./src/**/*.{js,ts,jsx,tsx}"],

	theme:  {

		extend:  {

			colors:  {

				"primary-color":  "#5B21B6",
				
				"text-primary":"#374151",

				"secondary-color":  "#253343",

				"placeholder-color":  "#92A7C1",

				"input-color":  "#F5F7FA",

			"black-custom":"#000000"

			},
      fontFamily: {
        'poppins' :['Poppins']
      }
		},

	},

	plugins: [],

};
