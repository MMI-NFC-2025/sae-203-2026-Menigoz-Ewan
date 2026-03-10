/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#F29C1F',
                secondary: '#FBBF24',
                accent: '#4CAF50',
                'bg-warm': '#F6F3E9',
            },
        },
    },
    plugins: [],
}