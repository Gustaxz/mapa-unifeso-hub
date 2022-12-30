/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'giorno-pallete-100': '#f2e8cf',
                'giorno-pallete-200': '#a7c957',
                'giorno-pallete-300': '#6a994e',
                'giorno-pallete-400': '#bc4749',
                'giorno-pallete-500': '#386641',
            },
            flex: {
                2: '2 2 2',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
        require('@tailwindcss/line-clamp'),
    ],
}
