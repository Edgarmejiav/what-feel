/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'custom-gradient': 'radial-gradient(circle at 50% 50%, rgba(200, 200, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 25%, transparent 25%)',

            },
            animation: {
                "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)"
            }
        },
    },
    plugins: [],
}
