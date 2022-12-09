# Foodeliveries

A front-end food delivery app, built with JavaScript, Vite, React, TypeScript, React Router, Material UI, Vitest and React Testing Library

## Demo Link

Access to site demo at [foodeliveries.netlify.app](https://foodeliveries.netlify.app/)

## Screenshots

![home and cart page](./screenshots/home_and_cart_pages.jpg)

## Installation and Setup Instructions

### ⚠️ Prerequisite:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

### ⌨️ Commands:

Installation:

`npm install`

To Run Test Suite:

`npm run test`

To Run Coverage Test Suite:

`npm run test:coverage`

To Start Development Server:

`npm run dev`

To Visit App:

On your console if you have run command `npm run dev` and Ctrl-leftClick on `http://localhost:5173/`

## Reflection

The project was created with the aim of integrating a school of web development and also the use of front-end technologies learned so far either through documentation and/or lessons/tutorials.

The application is a food delivery service, the data is hardcoded to avoid having to launch an API. The website is for demonstration purposes and is not made to be in production.

What took me the most time was finding a good "folder structure", coming from Angular which is a complete modern platform that has its own folder structure and provides all the necessary libraries to make a good SPA. It was a challenge 🥲.

Initially I launched the project with `create-react-app`, but I found myself very quickly limited by the configuration and the build speed. I needed a fully configurable environment for eslint, prettier, testing libraries (vitest and react testing library) and directory aliases for module imports. That's why I migrated to `vite`.

## Main Libraries

The application was made with:

- vite
- vitest
- typescript
- react
- react router dom
- @mui
- @testing-library/react
- eslint
- prettier
