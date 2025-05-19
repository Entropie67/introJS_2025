const start = () => {
    console.log('start');
    document.querySelector('#images').innerHTML = '';
    document.querySelector('#gagnante').innerHTML = '<h2>Cartes gagnées</h2>';

    const boite = document.querySelector('#images');
    const cles = Object.keys(personnages);
    let compteur = 0;
    let cartes = [];

    for (let i = 0; i < 5; i++) {
        const container = document.createElement('div');
        container.classList.add('card-container');

        const img = document.createElement('img');
        img.src = 'images/dos.png';
        img.classList.add('cards');
        img.id = `img${i}`;

        const stars = document.createElement('div');
        stars.classList.add('stars');
        stars.innerHTML = ''; // vide au départ

        img.addEventListener('click', () => {
            if (img.src.includes('images/dos.png')) {
                const randomKey = cles[Math.floor(Math.random() * cles.length)];
                const perso = personnages[randomKey];

                cartes.push(randomKey);
                img.src = perso.chemin;
                img.title = `${perso.nom} (${perso.etoiles}★)`;

                // Ajouter les étoiles visuelles
                stars.innerHTML = '★'.repeat(perso.etoiles) + '☆'.repeat(5 - perso.etoiles);

                compteur++;
                if (compteur === 5) {
                    const gagnant = verif(cartes);
                    if (gagnant) {
                        const persoGagnant = personnages[gagnant];
                        const imgGagnante = document.createElement('div');
                        imgGagnante.classList.add('card-container');
                        imgGagnante.innerHTML = `
                            <img class="cards" src="${persoGagnant.chemin}" title="${persoGagnant.nom} (${persoGagnant.etoiles}★)">
                            <div class="stars">★`.repeat(persoGagnant.etoiles) + `☆`.repeat(5 - persoGagnant.etoiles) + `</div>`;
                        document.querySelector('#gagnante').appendChild(imgGagnante);
                    }
                }
            } else {
                alert('Tricheur !');
            }
        });

        container.appendChild(img);
        container.appendChild(stars);
        boite.appendChild(container);
    }
};

const verif = (tab) => {
    const compte = {};
    for (let id of tab) {
        compte[id] = (compte[id] || 0) + 1;
        if (compte[id] >= 3) return id;
    }
    return false;
};

document.querySelector('#btn').addEventListener('click', () => {
    start();
});


