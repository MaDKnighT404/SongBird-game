import './gallery.scss';
import { birdsData } from './modules/birds';
import { createGalleryItem } from './modules/blocks/createGalleryItem';
import { changeLanguage } from './modules/changeLanguage';


for (let i = 0; i < birdsData.length; i++) {
  for (let j = 0; j < birdsData.length; j++) {
    createGalleryItem (i, j);
  }
}

changeLanguage();

