

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

for (let i = 0; i < 12; i++) {
    boite.innerHTML  += `<h2>Image ${i}</h2>`;
    boite.innerHTML  += `<img src="images/${i}.jpg">`;
}