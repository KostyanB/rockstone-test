import { animate } from './animate';
import createModalMenuRight from './createModalMenuRight/createModalMenuRight';
import createModalMenuLeft from './createModalMenuLeft/createModalMenuLeft';

const handleModal = time => {
    const modalMenu = document.getElementById('modal-menu');

    const toggleModal = (start, stop) => {
        animate({
            duration: time,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const pos = start + (stop - start) * progress;
                modalMenu.style.transform = `translateX(${pos}%)`;
            },
        });
    };

    const createModalMenu = () => {
        createModalMenuRight();
        createModalMenuLeft();
        toggleModal(-100, 0);
    };

    document.addEventListener('click', e => {
        e.target.closest('#open-menu') && createModalMenu();
        e.target.closest('#close-menu') && toggleModal(0, -100);
    });

};
export default handleModal;