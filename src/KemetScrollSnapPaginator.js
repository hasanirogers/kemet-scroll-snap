import { html, css, LitElement } from 'lit-element';

export class KemetScrollSnapPaginator extends LitElement {
  static get properties() {
    return {
      slides: {
        type: Array,
      },
      icon: {
        type: String
      },
      useNumberPages: {
        type: Boolean,
        reflect: true
      },
      useLabelPages: {
        type: Boolean,
        reflect: true
      }
    }
  }

  constructor() {
    super();

    this.slides = [];
    this.icon = '•';
    this.useNumberPages = false;
    this.useLabelPages = false;

    const scrollSnapElement = this.closest('kemet-scroll-snap');

    if(scrollSnapElement) {
      scrollSnapElement.addEventListener('kemet-scroll-snap-make-slides', (event) => {
        this.slides = event.detail;
      });
    }
  }

  static get styles() {
    return css`
      :host {
        margin: auto;
      }
    `;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul>${this.makePagination()}</ul>
    `;
  }

  makePagination() {
    let counter = 0;

    if (this.slides) {
      return this.slides.map((slide) => {
        if (!slide.focused) {
          // eslint-disable-next-line no-multi-assign
          counter = counter += 1;

          return html`
            <li>
              <a @click=${() => this.slideLink(slide.id)} aria-label="${slide.label}">
                ${this.pageDisplay(slide, counter)}
              </a>
            </li>
          `
        }

        return null;
      });
    }

    return null;
  }

  pageDisplay(slide, visibleIndex) {
    if (this.useNumberPages) {
      return visibleIndex;
    }

    if (this.useLabelPages) {
      return slide.label;
    }

    return this.icon;
  }

  slideLink(index) {
    this.dispatchEvent(new CustomEvent('kemet-scroll-snap-focus', {
      bubbles: true,
      composed: true,
      detail: index
    }));
  }
}
