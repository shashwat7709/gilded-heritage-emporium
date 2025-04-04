import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./index.html",
		"./src/**/*.{js,jsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#D4AF37',
				input: '#FFF5E1',
				ring: '#D4AF37',
				background: '#FFF5E1',
				foreground: '#2C1810',
				primary: {
					DEFAULT: '#C41E3A',
					light: '#D64D66',
					dark: '#8B1529'
				},
				secondary: {
					DEFAULT: '#D4AF37',
					foreground: '#FFF5E1'
				},
				destructive: {
					DEFAULT: '#881337',
					foreground: '#FFF5E1'
				},
				muted: {
					DEFAULT: '#FFF5E1',
					foreground: '#2C1810'
				},
				accent: {
					DEFAULT: '#0C6B58',
					light: '#1A8870',
					dark: '#0A4F42'
				},
				popover: {
					DEFAULT: '#FFF5E1',
					foreground: '#2C1810'
				},
				card: {
					DEFAULT: '#FFF5E1',
					foreground: '#2C1810'
				},
				text: {
					DEFAULT: '#2C1810',
					light: '#FFF5E1'
				},
				saffron: '#FF9933',
				indianRed: '#C41E3A',
				peacockBlue: '#0C6B58',
				gold: '#D4AF37',
				maroon: '#800000',
				turmeric: '#FFC72C',
				mehendi: '#2D5A27',
				lotus: '#FE85A0'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slow-shine': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.5s ease-out forwards',
				'slow-shine': 'slow-shine 8s ease infinite'
			},
			backgroundImage: {
				'texture-pattern': "url('/texture-pattern.jpg')",
				'hero-bg': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/hero-bg.jpg')",
				'paisley-pattern': "url('/patterns/paisley.png')",
				'mandala-light': "url('/patterns/mandala-light.png')",
				'mandala-dark': "url('/patterns/mandala-dark.png')",
				'border-pattern': "url('/patterns/border.png')"
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				serif: ["Rozha One", ...fontFamily.serif],
				display: ["Rozha One", ...fontFamily.serif],
				decorative: ["Rozha One", ...fontFamily.serif],
				body: ["Glegoo", ...fontFamily.serif]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
