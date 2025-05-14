import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-brikk')
export class XBrikk extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: var(--sl-color-neutral-50);
      border-radius: var(--sl-border-radius-large);
      margin-bottom: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .stat-card {
      padding: 1.5rem;
      background: var(--sl-color-neutral-50);
      border-radius: var(--sl-border-radius-medium);
      text-align: center;
    }
  `;

  render() {
    return html`
      <div class="container">
        <!-- Hero Section -->
        <div class="hero">
          <sl-avatar
            image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            style="--size: 8rem; margin-bottom: 1rem;"
          ></sl-avatar>
          <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Willkommen</h1>
          <p style="color: var(--sl-color-neutral-600); margin-bottom: 2rem;">
            Eine moderne UI mit Shoelace Web Components
          </p>
          <sl-button variant="primary" size="large">
            Los geht's
            <sl-icon slot="suffix" name="arrow-right"></sl-icon>
          </sl-button>
        </div>

        <!-- Card Grid -->
        <div class="grid">
          <sl-card class="card-overview">
            <div slot="header">
              <sl-icon name="star-fill"  style="font-size: 1.5rem; color: var(--sl-color-amber-500);"></sl-icon>
              <strong>Feature 1</strong>
            </div>
            <p>Beschreibung des ersten Features</p>
            <div slot="footer">
              <sl-button variant="primary" size="small">Mehr</sl-button>
            </div>
          </sl-card>

          <sl-card class="card-overview">
            <div slot="header">
              <sl-icon name="lightning-charge-fill"  style="font-size: 1.5rem; color: var(--sl-color-blue-500);"></sl-icon>
              <strong>Feature 2</strong>
            </div>
            <p>Beschreibung des zweiten Features</p>
            <div slot="footer">
              <sl-button variant="primary" size="small">Mehr</sl-button>
            </div>
          </sl-card>
        </div>

        <!-- Stats -->
        <div class="stats">
          <div class="stat-card">
            <sl-icon name="heart-fill"  style="font-size: 2rem; color: var(--sl-color-pink-500);"></sl-icon>
            <h3>25.6K</h3>
            <p style="color: var(--sl-color-neutral-600);">Likes</p>
            <sl-badge variant="success">+21%</sl-badge>
          </div>

          <div class="stat-card">
            <sl-icon name="graph-up"  style="font-size: 2rem; color: var(--sl-color-emerald-500);"></sl-icon>
            <h3>2.6M</h3>
            <p style="color: var(--sl-color-neutral-600);">Besucher</p>
            <sl-badge variant="success">+14%</sl-badge>
          </div>
        </div>
      </div>
    `;
  }
}
