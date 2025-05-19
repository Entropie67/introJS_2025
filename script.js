const start = () => {
    console.log('start');
    document.querySelector('#images').innerHTML = '';
    document.querySelector('#gagnante').innerHTML = '<h2>Cartes gagnées</h2>';

    const boite = document.querySelector('#images');
    const cles = Object.keys(personnages);
    let compteur = 0;
    let cartes = [];
    let gagnantAffiche = false;

    for (let i = 0; i < 5; i++) {
        const container = document.createElement('div');
        container.classList.add('card-container');

        const img = document.createElement('img');
        img.src = 'images/dos.png';
        img.classList.add('cards');
        img.id = `img${i}`;

        const stars = document.createElement('div');
        stars.classList.add('stars');

        img.addEventListener('click', () => {
            if (img.src.includes('images/dos.png')) {
                const randomKey = cles[Math.floor(Math.random() * cles.length)];
                const perso = personnages[randomKey];

                cartes.push(randomKey);
                img.src = perso.chemin;
                img.title = `${perso.nom} (${perso.etoiles}★)`;

                stars.innerHTML = '★'.repeat(perso.etoiles) + '☆'.repeat(5 - perso.etoiles);
                if (perso.etoiles === 5) {
                    stars.classList.add('glow-5');
                }

                compteur++;
                if (compteur === 5 && !gagnantAffiche) {
                    const gagnant = verif(cartes);
                    if (gagnant) {
                        const persoGagnant = personnages[gagnant];
                        const imgGagnante = document.createElement('div');
                        imgGagnante.classList.add('card-container');

                        const imgEl = document.createElement('img');
                        imgEl.src = persoGagnant.chemin;
                        imgEl.classList.add('cards');
                        imgEl.title = `${persoGagnant.nom} (${persoGagnant.etoiles}★)`;

                        const starsG = document.createElement('div');
                        starsG.classList.add('stars');
                        starsG.innerHTML = '★'.repeat(persoGagnant.etoiles) + '☆'.repeat(5 - persoGagnant.etoiles);
                        if (persoGagnant.etoiles === 5) {
                            starsG.classList.add('glow-5');
                        }

                        imgGagnante.appendChild(imgEl);
                        imgGagnante.appendChild(starsG);
                        document.querySelector('#gagnante').appendChild(imgGagnante);

                        gagnantAffiche = true;
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
