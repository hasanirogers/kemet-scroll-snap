```js script
import { html } from '@open-wc/demoing-storybook';
import '../kemet-scroll-snap.js';

export default {
  title: 'KemetScrollSnap',
  component: 'kemet-scroll-snap',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# KemetScrollSnap

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add kemet-scroll-snap
```

```js
import 'kemet-scroll-snap/kemet-scroll-snap.js';
```

```js preview-story
export const Simple = () => html`
  <kemet-scroll-snap></kemet-scroll-snap>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <kemet-scroll-snap title="Hello World"></kemet-scroll-snap>
`;
```
