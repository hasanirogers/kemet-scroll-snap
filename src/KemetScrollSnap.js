import { html, css, LitElement } from 'lit-element';

export class KemetScrollSnap extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      :host([pagination="left"]),
      :host([pagination="right"]) {
        flex-direction: row;
      }

      :host([pagination="none"]) .pagination {
        display: none;
      }

      :host([pagination="top"]) .pagination,
      :host([pagination="left"]) .pagination {
        order: -1;
      }

      .pagination {
        color: var(--kemet-scroll-snap-pagination-color, #007dc1);
        font-size: var(--kemet-scroll-snap-pagination-size, 4rem);
        text-shadow: var(--kemet-scroll-snap-pagination-shadow, 1px 1px 1px rgba(0,0,0,0.5));
        margin: auto;
        padding: 0;
        display: flex;
        gap: var(--kemet-scroll-snap-pagination-gap, 0.5rem);
        position: relative;
        top: var(--kemet-scroll-snap-pagination-topoffset, -2.5rem);
        list-style: none;
      }

      .pagination li {
        cursor: pointer;
      }

      ::slotted([slot="slides"]) {
        display: flex;
        gap: var(--kemet-scroll-snap-gap, 0);
        scroll-snap-type: x mandatory;

        overflow-x: scroll;
      }

      /* vertical */

      :host([axis="vertical"]) ::slotted([slot="slides"]) {
        flex-direction: column;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
      }
    `;
  }

  static get properties() {
    return {
      axis: {
        type: String,
        reflect: true
      },
      pagination: {
        type: String,
        reflect: true
      },
      isTouchDevice: {
        type: Boolean,
        reflect: true,
      },
      slides: {
        type: Array
      },
      paginationIcon: {
        type: String
      }
    };
  }

  constructor() {
    super();

    this.axis = 'horizontal';
    this.pagination = 'bottom';
    this.isTouchDevice = 'ontouchstart' in document.documentElement;
    this.slides = [];
    this.paginationIcon = '•';
  }

  firstUpdated() {
    this.setFocusedSlides();
  }

  updated() {
    this.setVerticalAttribute();
  }

  render() {
    return html`
      <slot name="slides"></slot>
      <ul class="pagination">${this.makePagination()}</ul>
    `;
  }

  setFocusedSlides() {
    // reference: https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/
    // reference: https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/
    const slides = this.querySelectorAll('kemet-scroll-snap-slide');
    const container = this.querySelector('[slot="slides"]');

    const options = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;

        if (entry.intersectionRatio >= 0.5) {
          target.focused = true;

        } else {
          target.focused = false;
        }
      });

      this.makeSlides();
    }

    const observer = new IntersectionObserver(callback, options);

    slides.forEach((slide) => {
      observer.observe(slide);
    });
  }

  makePagination() {
    return this.slides.map((slide, index) => {
      if (!slide.focused) {
        return html`<li @click=${() => this.focusSlide(index)}>
          ${this.paginationIcon}
        </li>`;
      }

      return null;
    });
  }

  makeSlides() {
    const slides = [];

    this.querySelectorAll('kemet-scroll-snap-slide').forEach((element, index) => {
      const slide = element;

      slide.index = index;

      slides.push({
        id: index,
        focused: slide.focused
      });
    });

    this.slides = slides;
  }

  focusSlide(index) {
    const activeSlide = this.querySelector(`kemet-scroll-snap-slide[index="${index}"]`);
    activeSlide.scrollIntoView({behavior: 'smooth'});
  }

  setVerticalAttribute() {
    if (this.axis === 'vertical') {
      document.querySelector('html').setAttribute('kemet-scroll-snap-axis', 'vertical')
    }
  }
}
