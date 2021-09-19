import { animate } from './raf';

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
    }

    document.addEventListener('click', e => {
        e.target.closest('#open-menu') && toggleModal(-100, 0);
        e.target.closest('#close-menu') && toggleModal(0, -100);
    })

};
export default handleModal;