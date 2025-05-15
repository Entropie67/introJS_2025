
let boite = document.querySelector('#images');

for (let i = 0; i < 5; i++) {
    let img = document.createElement('img');
    img.src = 'images/dos.png';
    img.id = `img${i}`;
    img.classList.add('cards');
    img.addEventListener('click', () => {
        let nombre = Math.floor(Math.random() * 10) + 1;
        console.log(nombre);
        img.src = `images/${nombre}.png`;

    });
    boite.appendChild(img);
}


