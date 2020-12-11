# \<kemet-scroll-snap>

## Installation
```bash
npm i @kemet/kemet-scroll-snap
```

## Usage
```js
import '@kemet/kemet-scroll-snap/kemet-scroll-snap.js';
import '@kemet/kemet-scroll-snap-slide/kemet-scroll-snap-slide.js';
import '@kemet/kemet-scroll-snap/kemet-scroll-snap-paginator.js'; // optional
```

```html
<kemet-scroll-snap>
  <div slot="slides">
    <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>[your content here]</kemet-scroll-snap-slide>
  </div>
  <div slot="pagination">
    <kemet-scroll-snap-paginator></kemet-scroll-snap-paginator>
  </div>
</kemet-scroll-snap>
```

[Go here for docs](http://kemet.online/scrollsnap).

