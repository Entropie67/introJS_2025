

let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    let img = document.querySelector('#lss');
    if (img.style.display == 'none') {
        img.style.display = 'block';
    }else{
        img.style.display = 'none';
    }
});
// ------------------------

let boite = document.querySelector('#images');

for (let i = 0; i < 10; i++) {
    boite.innerHTML  += `<p>coucou ${i}</p>`;
}