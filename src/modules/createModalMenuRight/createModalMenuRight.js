import { modalListRightDb } from "./modalListRightDb";

const createModalMenuRight = () => {
    const modalList = document.querySelector('.right-modal__list');

    modalList.textContent = '';

    modalListRightDb.forEach(item => {
        const { name, title, hasNote, noteQuantity, hasOffer } = item;
        const li = document.createElement('li');
        li.classList.add('right-modal__item');
        li.innerHTML = `
            <div class="right-modal__item_label">
                <img src="images/icons/${name}.svg" alt="${name}" />
            </div>
            <button class="right-modal__item_btn">${title}</button>
        `;
        const itemNote = document.createElement('div');
        itemNote.classList.add('right-modal__item_note');
        if (hasNote) {
            itemNote.innerHTML = `
                <div class="right-modal__item_notification">${noteQuantity}</div>
            `;
        }
        if (hasOffer) {
            itemNote.innerHTML = `
                <img src="images/icons/sale.svg" alt="sale" />
            `;
        }
        li.append(itemNote);
        modalList.append(li);
    });

};
export default createModalMenuRight;