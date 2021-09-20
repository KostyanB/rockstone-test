import './css/style.css';
import 'element-closest-polyfill';
import handleModal from './modules/handleModal';

// время анимации модального меню
const modalAnimTime = 300;
// управление откр/закр модального меню
handleModal(modalAnimTime);
