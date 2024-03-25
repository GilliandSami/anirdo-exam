import { loadAnnonces, loadAdsCategorie, loadAnnonce } from "../api";
import { setItem, getItem, getItems, removeItem } from "../lib/local-storage";

const adsList = document.querySelector('.annonces');
const listSectionTitle = document.querySelector('#section-annonces h4');

function displayAdsArray(ads) {
    adsList.innerHTML = '';

    ads.forEach((ad) => {
        const adElement = document.createElement('annonce-item');

        adElement.setAttribute('href', `#annonces-${ad.id}`);
        adElement.setAttribute('star', !!getItem(ad.id));
        adElement.setAttribute('image', ad.image_url);
        adElement.setAttribute('titre', ad.title);
        adElement.setAttribute('price', ad.price);

        adElement.addEventListener('star_click', () => {
            if (getItem(ad.id)) {
                removeItem(ad.id);
            } else {
                setItem(ad.id, ad);
            }

            adElement.setAttribute('star', !!getItem(ad.id));
        });

        adsList.insertAdjacentElement('afterbegin', adElement);
    });
}

function displayAds() {
    loadAnnonces().then((ads) => {
        listSectionTitle.innerHTML = `Dernières annonces (${ads.length})`;
        displayAdsArray(ads);
    })
}

function displayAdsCategorie(id) {
    loadAdsCategorie(id).then((ads) => {
        console.log(ads);
        listSectionTitle.innerHTML = `Catégories > ${ads[0].category.name} (${ads[0].category.count})`;
        displayAdsArray(ads);
    })
}

function displayUneAnnonce(id) {
    loadAnnonce(id).then((ad) => {
        const imgAnnonce = document.querySelector('.img-annonce');
        const titreAnnonce = document.querySelector('.annonce-details-section-details h4');
        const prixAnnonce = document.querySelector('.annonce-details-section-details h6');
        const descAnnonce = document.querySelector('.annonce-details-section-details p');

        imgAnnonce.src = ad.image_url;
        titreAnnonce.innerHTML = `Annonces > ${ad.title}`;
        prixAnnonce.innerHTML = `${ad.price}`;
        descAnnonce.innerHTML = ad.description;
    })
}

function displayFavoriteAds() {
    const allAds = getItems();

    listSectionTitle.innerHTML = `Intéressantes (${allAds.length})`;
    displayAdsArray(allAds);
}

export { displayAds, displayAdsCategorie, displayUneAnnonce, displayFavoriteAds };