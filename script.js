
let boite = document.querySelector('#images');

for (let i = 0; i < 12; i++) {
    let img = document.createElement('img');
    img.src = 'images/1.jpg';
    img.id = `img${i}`;
    img.addEventListener('click', () => {
        let nombre = Math.floor(Math.random() * 10) + 1;
        console.log(nombre);
        img.src = `images/${nombre}.jpg`;

    });
    boite.appendChild(img);
}


