function menuHamburguer() {
    const hamburguerElement = document.querySelector('.hamburguer');
    const modalElement = document.querySelector('#modal');
    const closeButtonElement = document.querySelector('.closemenu');
    function openModal() {
       event.preventDefault();
        modalElement.classList.add('on');
    }
    hamburguerElement.addEventListener('click',openModal);
    function closeModal() {
        event.preventDefault();
        modalElement.classList.remove('on');
    }
    closeButtonElement.addEventListener('click',closeModal);
}
// menuHamburguer();