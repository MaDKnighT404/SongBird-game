import './index.html';
import './index.scss';

import { preloadImages, preloadVoises } from './modules/helpers/preload';
import { addButtonsEventListeners } from './modules/eventListeners'; 
import {changeLanguage} from './modules/changeLanguage';

preloadImages();
preloadVoises();

addButtonsEventListeners();
changeLanguage ();
