import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#F7F7F7',
				secoundry: '#FFD8A9',
				third: '#F1A661',
				forth: '#E38B29',
				darkprimary: '#222c31',
				darksecoundry: '#854836',
				darkthird: '#FFB22C',
				darkforth: '#F7F7F7',
				textColor: '#2a5d63',
			},
			animation: {
				fadeIn: 'fadeIn 0.7s ease-in-out forwards',
				'slide-in-down': 'slideInDown 0.6s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInDown: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			boxShadow: {
				'custom-light': '0px 0px 20px #71C9CE',
				'custom-dark': '0px 0px 10px #175a87',
				glow: '0 0 10px rgba(255, 150, 255, 0.5)',
				'inner-glow': 'inset 0 2px 4px rgba(0, 0, 0, 0.6)',
			},
		},
	},
	darkMode: 'class', // Enable dark mode using class-based approach
	plugins: [],
};

export default config;
