function showText(event, textId) {
    event.preventDefault(); 
    const link = event.currentTarget;

    const img = link.querySelector('img');
    const text = document.getElementById(textId);

    img.classList.add('hide');
    text.classList.add('show');
}
