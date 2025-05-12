

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


let imgs = document.querySelector('#images');

// Une petite boucle :

for (let i = 0; i < 10; i++) {
    imgs.innerHTML += `<p>Images ${i}</p>`;
    imgs.innerHTML += `<img src="images/${i}.jpg">`;
}