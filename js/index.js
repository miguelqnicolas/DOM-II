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
imageContentEnter.forEach(function(iteration) {
    iteration.addEventListener('mouseenter', () => {
        iteration.style.transform ='scale(1.05)';
        iteration.style.transition = 'all 0.3s';
    });
});

const imageContentLeave = document.querySelectorAll('.img-content');
imageContentLeave.forEach(function(iteration) {
    iteration.addEventListener('mouseleave', () => {
        iteration.style.transform ='scale(1)';
        iteration.style.transition = 'all 0.3s';
    });
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
        iteration.preventDefault();
    });
});