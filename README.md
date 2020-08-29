# \<kemet-scroll-snap>

[Go here for docs](http://kemet.online/scrollsnap).

## Installation
```bash
npm i @kemet/kemet-scroll-snap
```

## Usage
```js
import '@kemet/kemet-scroll-snap/kemet-scroll-snap.js';
import '@kemet/kemet-scroll-snap-slide/kemet-scroll-snap-slide.js';
```

```html
<kemet-scroll-snap>
  <div slot="slides">
    <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
  </div>
</kemet-scroll-snap>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
