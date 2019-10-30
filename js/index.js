// mouseenter and mouseleave, difference between this and mouseover?

const busEnter = document.querySelector('.intro img');
busEnter.addEventListener('mouseenter', () => {
    busEnter.style.transform ='scale(1.05)';
    busEnter.style.transition = 'all 0.3s';
});

const busLeave = document.querySelector('.intro img');
busLeave.addEventListener('mouseleave', () => {
    busLeave.style.transform ='scale(1)';
    busLeave.style.transition = 'all 0.3s';
});

const imageContentEnter = document.querySelectorAll('.img-content');
imageContentEnter[1].addEventListener('mouseenter', () => {
    imageContentEnter[1].style.transform ='scale(1.05)';
    imageContentEnter[1].style.transition = 'all 0.3s';
});

const imageContentLeave = document.querySelectorAll('.img-content');
imageContentLeave[1].addEventListener('mouseleave', () => {
    imageContentLeave[1].style.transform ='scale(1)';
    imageContentLeave[1].style.transition = 'all 0.3s';
});

const destinationLeave = document.querySelector('.content-destination img')
destinationLeave.addEventListener('mouseenter', () => {
    destinationLeave.style.transform ='scale(1.05)';
    destinationLeave.transition = 'all 0.3s';
});

const destinationEnter = document.querySelector('.content-destination img')
destinationEnter.addEventListener('mouseleave', () => {
    destinationEnter.style.transform ='scale(1)';
    destinationEnter.style.transition = 'all 0.3s';
});

// click

const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(iteration) {
    iteration.addEventListener('click', () => {
        iteration.textContent = 'Signed Up!';
        iteration.style.background = 'white';
        iteration.style.color = '#17A2B8';
        iteration.preventDefault();
    });
});

// keydown

const body = document.querySelector('body');
body.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 68) {
      body.style.background = '#141d26';
      body.style.color = 'whitesmoke';
    }
});

// wheel, not working

// imageContentLeave[0].addEventListener('wheel', zoom);

// load

window.addEventListener('load', (event) => {
    alert('This website uses cookies.');
  });

//