const start = () => {
    console.log('start');
    document.querySelector('#images').innerHTML = '';
    let boite = document.querySelector('#images');
    let compteur = 0;
    let cartes = []; // tableau vide
    for (let i = 0; i < 5; i++) {
        let img = document.createElement('img');
        img.src = 'images/dos.png';
        img.id = `img${i}`;
        img.classList.add('cards');
        img.classList.add(i);
        img.addEventListener('click', () => {
            if (img.src.includes('images/dos.png')) {
                let nombre = Math.floor(Math.random() * 10) + 1;
                cartes.push(nombre); // On ajoute la carte
                console.log(cartes);
                img.src = `images/${nombre}.png`;
                compteur++;
                if (compteur == 5){
                    let v = verif(cartes);
                    console.log(v);
                    let ga = document.querySelector('#gagnante');
                    ga.innerHTML += `<img class="cards" src="images/${v}.png">`
                }
            }else {
                alert('Tricheur !');
            }
        });
        boite.appendChild(img);
    }
}


const verif = (tab) => {
        let tabcompteur = [0, 0, 0, 0, 0];
        for (let i = 0; i < tab.length; i++) {
            for (let j = 0; j < tab.length; j++) {
                if (tab[j] == tab[i]){
                    tabcompteur[i] += 1;
                    if (tabcompteur[i] >= 3){
                        return tab[i];
                    }
                }
            }
        }
        return false;
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    //location.reload();
    start();
});


