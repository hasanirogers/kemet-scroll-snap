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
      hideFocusedLinks: {
        type: Boolean
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
    this.hideFocusedLinks = false;
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
        // eslint-disable-next-line no-multi-assign
        counter = counter += 1;

        if (slide.focused) {
          return html`
            <li><span>${this.pageDisplay(slide, counter)}</span></li>
          `;
        }

        return html`
          <li>
            <a @click=${() => this.slideLink(slide.id)} aria-label="${slide.label}">
              ${this.pageDisplay(slide, counter)}
            </a>
          </li>
        `;
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
