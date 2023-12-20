## Complete App
instagram clone

### Create Next App using tailwind CSS
    npx create-next-app@latest insta-clone

### Installation

``` sh
√ Would you like to use ESLint? Yes
```

### Run the development server:

```sh
pnpm run dev
```

### Install Tailwind CSS with Next.js

```sh
npm install -D tailwindcss postcss autoprefixer
```

```sh
npx tailwindcss init -p
```

#### Open `tailwind.config.js` and add following code in module.exports
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
#### Add globals.css

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install node_modules

``` sh
pnpm i
```
 ### create icon 
resource [Generate Favicons](https://favicon.io/)

### tailwindcss/forms
https://github.com/tailwindlabs/tailwindcss-forms

```sh
pnpm install -D @tailwindcss/forms
```
 ### Add ttailwind.config.js
```js
plugins: [
    require('@tailwindcss/forms'),
  ],
```

#### Install Hero Icon
```sh
pnpm install @heroicons/react@v1
```

### minifaker

 ```sh
 pnpm i minifaker
```

### Scrollbar Plugin for Tailwind CSS
https://www.npmjs.com/package/tailwind-scrollbar

```sh
pnpm i tailwind-scrollbar
```

 ### Add ttailwind.config.js

 ```js
 plugins: [
    ......
    require('tailwind-scrollbar'),
  ]
 ```

 ### Install next-auth
https://next-auth.js.org/

```sh
pnpm add next-auth
```

### FireBase

https://firebase.google.com/

 After created the project on firebase

```sh
pnpm install firebase
```

### cloud google 
https://cloud.google.com/