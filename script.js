
let boite = document.querySelector('#images');

for (let i = 0; i < 12; i++) {
    let img = document.createElement('img');
    img.src = 'images/1.jpg';
    img.id = `img${i}`;
    img.addEventListener('click', () => {
        alert("bip");
    });
    boite.appendChild(img);
}


