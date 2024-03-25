// URL de base du serveur
const MYURL = 'https://webmobui-24-exa-backend-0e9cf2cbd0e5.herokuapp.com'

function loadJSON(url) {
    return fetch(url).then((answer) => {
        return answer.json();
    });
}

function loadAnnonces() {
    const url = `${MYURL}/api/annonces`;
    return loadJSON(url);
}

function loadCategories() {
    const url = `${MYURL}/api/categories`;
    return loadJSON(url);
}

function loadAdsCategorie(id) {
    const url = `${MYURL}/api/categories/${id}/annonces`;
    return loadJSON(url);
}

function loadAnnonce(id) {
    const url = `${MYURL}/api/annonces/${id}`;
    return loadJSON(url);
}

export { loadAnnonces, loadCategories, loadAdsCategorie, loadAnnonce }