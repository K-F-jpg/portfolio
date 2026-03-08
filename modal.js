console.log('hello world');
const container = document.getElementById('content-container');
const modalImage = document.getElementById('modal-image');
const modal = document.getElementById('modal');
const description = document.getElementById('image-description');
const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');
const close = document.getElementById('close');

const imagery = container.querySelectorAll('img');

for (let i=0; i<imagery.length; i++) {
    imagery[i].addEventListener('click', function() {
        modalImage.src = imagery[i].src;
        description.textContent = imagery[i].getAttribute('description');
        modal.classList.remove('no-display');
    });

    left.addEventListener('click', function() {
        console.log('i have been clicked.');
    })

    right.addEventListener('click', function() {
        console.log('i have also been clicked.');
    })
}

close.addEventListener('click', function() {
    modal.classList.add('no-display');
})