# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


when user will click on the LightModeIcon, toggleTheme function will be called with 'light' as argument.
when user will click on the DarkModeIcon, toggleTheme function will be called with 'dark' as argument.

Now, suppose think, if user comes on page first time and the theme will be light because its is by default in useState.
Now, if user will click on the LightModeIcon, toggleTheme function will be called with 'light' as argument.
and toggleTheme function will take a light as an argument and setTheme hook function get executed and setTheme function is taking prevTheme as an argument and prevTheme is light and it will return dark so theme will be set to dark.

Now, if user will click on the DarkModeIcon, toggleTheme function will be called with 'dark' as argument.
and toggleTheme function will take a dark as an argument and setTheme hook function get executed and setTheme function is taking prevTheme as an argument and prevTheme is dark and it will return light so theme will be set to light.
means light ---> dark ---> light ---> dark ---> light.