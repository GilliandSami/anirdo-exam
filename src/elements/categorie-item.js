class CategorieItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
            `<a href=${this.getAttribute('href')}>
            <img src=${this.getAttribute('icon')}  class="categories__box__icon" />

            <div class="categories__box__name">${this.getAttribute('name')}</div>
            <div class="categories__box__count">${this.getAttribute('count')} éléments</div>
        </a>`
    }
}

customElements.define('categorie-item', CategorieItem);