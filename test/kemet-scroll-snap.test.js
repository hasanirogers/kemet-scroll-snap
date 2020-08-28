import { html, fixture, expect } from '@open-wc/testing';

import '../kemet-scroll-snap.js';

describe('KemetScrollSnap', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <kemet-scroll-snap></kemet-scroll-snap>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <kemet-scroll-snap></kemet-scroll-snap>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <kemet-scroll-snap title="attribute title"></kemet-scroll-snap>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <kemet-scroll-snap></kemet-scroll-snap>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
