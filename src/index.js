import './elements/annonce-item.js';
import './elements/categorie-item.js';

import { displayAds, displayAdsCategorie, displayFavoriteAds, displayUneAnnonce } from './sections/annonces.js';
import { displayCategories } from './sections/categories.js';
import { displaySection, activateLink } from './helpers.js'


const routeur = () => {
  const hash = window.location.hash || '#home'
  const hashs = hash.split('-')

  activateLink(hashs[0])

  switch (hashs[0]) {
    case '#latest':
      displaySection('annonces');
      displayAds();
      break;
    case '#annonces':
      displaySection('annonce-details');
      displayUneAnnonce(hashs[1]);
      break
    case '#categories':
      if (hashs[1]) {
        displaySection('annonces');
        displayAdsCategorie(hashs[1]);
      } else {
        displaySection('categories')
        displayCategories();
      }
      break;

    case '#starred':
      displaySection('annonces')
      displayFavoriteAds();
      break;

    case '#account':
      displaySection('account')
      break;
  }
}

window.addEventListener('hashchange', routeur);

routeur();
