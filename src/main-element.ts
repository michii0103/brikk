import '@shoelace-style/shoelace/dist/themes/light.css';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './index.css';
import './packages/brikk/components/x-brikk-editor';
import './shoelace-init';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('main-element')
export class MainElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
    }
  `

  render() {
    return html`
      <x-brikk-editor></x-brikk-editor>
    `
  }
}