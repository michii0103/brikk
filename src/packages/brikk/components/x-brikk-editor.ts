import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-brikk-editor')
export class XBrikkEditor extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
    }
  `;

  render() {
    return html`
      <div class="flex h-screen w-full bg-base-100">
        <!-- Toolbar -->
        <sl-card class="w-16 border-r border-base-300 bg-base-200 p-2">
          <div class="flex flex-col gap-2">
            <sl-tooltip content="Text hinzufügen">
              <sl-button variant="text" size="small">
                <sl-icon name="type"></sl-icon>
              </sl-button>
            </sl-tooltip>
            
            <sl-tooltip content="Bild hinzufügen">
              <sl-button variant="text" size="small">
                <sl-icon name="image"></sl-icon>
              </sl-button>
            </sl-tooltip>

            <sl-tooltip content="Container hinzufügen">
              <sl-button variant="text" size="small">
                <sl-icon name="box"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </div>
        </sl-card>

        <!-- Canvas -->
        <div class="flex-1 overflow-auto p-4">
          <sl-card class="h-full w-full">
            <div class="h-full w-full rounded-lg border-2 border-dashed border-base-300 p-4">
              <!-- Hier kommt später der Canvas-Inhalt -->
            </div>
          </sl-card>
        </div>

        <!-- Properties Sidebar -->
        <sl-card class="w-64 border-l border-base-300 bg-base-200 p-4">
          <div class="flex flex-col gap-4">
            <sl-input label="Name" placeholder="Element Name"></sl-input>
            <sl-select label="Typ" placeholder="Element Typ auswählen">
              <sl-option value="text">Text</sl-option>
              <sl-option value="image">Bild</sl-option>
              <sl-option value="container">Container</sl-option>
            </sl-select>
            <sl-input type="color" label="Farbe"></sl-input>
            <sl-input type="number" label="Größe" min="0" max="100"></sl-input>
          </div>
        </sl-card>
      </div>
    `;
  }
}