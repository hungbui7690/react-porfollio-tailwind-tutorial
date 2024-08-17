/*
  Setup Tailwind with Vite
  1. Installation:
    ~~ npm create vite@latest my-project -- --template react
    ~~ npm install -D tailwindcss postcss autoprefixer
    ~~ npx tailwindcss init -p
    ~~ npm i nanoid react-icons

  2. tailwind.config.js
  3. index.css
    -> Add the Tailwind directives to your CSS
    -> Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.
  

****************************

  Extension
- Tailwind CSS   : IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
- Tailwind Fold  : https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold



*/

function App() {
  return <h1 className='text-3xl font-bold'>Hello world!</h1>
}

export default App
