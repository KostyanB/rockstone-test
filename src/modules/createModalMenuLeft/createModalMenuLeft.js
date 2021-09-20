import { modalListLeftDb } from "./modalListLeftDb";

const createModalMenuLeft = () => {
    const modalNav = document.querySelector('.left-modal__nav');

    modalNav.textContent = '';

    modalNav.innerHTML = modalListLeftDb.reduce((elem, { name, title }) => (
        elem + `
            <div class="left-modal__menu-elem">
                <button class="left-modal__menu-btn ${name}">
                    <img src="images/icons/${name}.svg" alt="${title}" />
                    <span>${title}</span>
                </button>
                <div class="left-modal__label left-modal__label_main"></div>
            </div>
        `
    ), '');
};
export default createModalMenuLeft;