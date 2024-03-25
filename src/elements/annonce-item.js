const starClick = new CustomEvent('star_click');

class AnnonceItem extends HTMLElement {
    static observedAttributes = ['star'];

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const starIcon = this.getAttribute('star') == 'true' ? 'star' : 'star_outlined';

        this.innerHTML =
            `<div>
            <div class="annonces__element__buttons">
              <button type="button" class="icon-button starred-button">
                <span class="material-icons">${starIcon}</span>
              </button>
            </div>
            <a href=${this.getAttribute('href')}>
              <img class="annonces__element__image" src=${this.getAttribute('image')} />
              <div class="annonces__element__title">${this.getAttribute('titre')}</div>
              <div class="annonces__element__price">${this.getAttribute('price')}</div>
            </a>
        </div>`

        this.querySelector('.starred-button').addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(starClick);
        })
    }
}

customElements.define('annonce-item', AnnonceItem);