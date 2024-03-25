import { loadCategories } from "../api";

const categorieList = document.querySelector('.categories');

function displayCategories() {
    loadCategories().then((categories) => {
        categorieList.innerHTML = '';

        categories.forEach((categorie) => {
            const categorieElement = document.createElement('categorie-item');

            categorieElement.setAttribute('href', `#categories-${categorie.id}`);
            categorieElement.setAttribute('icon', categorie.icon_url);
            categorieElement.setAttribute('name', categorie.name);
            categorieElement.setAttribute('count', categorie.count);

            categorieList.insertAdjacentElement("afterbegin", categorieElement);
        });
    })
}

export { displayCategories }