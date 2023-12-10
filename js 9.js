function position_1() {
    let ufo = document.getElementById('ufo');
    let asteroid = document.getElementById('asteroid');
    let spaceship = document.getElementById('spaceship');
    ufo.style.left = '130px';
    asteroid.style.left = '210px';
    spaceship.style.left = '80px';
}

function position_2() {
    let ufo = document.getElementById('ufo');
    let asteroid = document.getElementById('asteroid');
    let spaceship = document.getElementById('spaceship');
    ufo.style.left = '190px';
    asteroid.style.left = '60px';
    spaceship.style.left = '140px';
}

function position_3() {
    let ufo = document.getElementById('ufo');
    let asteroid = document.getElementById('asteroid');
    let spaceship = document.getElementById('spaceship');
    ufo.style.left = '60px';
    asteroid.style.left = '140px';
    spaceship.style.left = '210px';
}

function position() {
    setTimeout(() => position_1(), 500);
    setTimeout(() => position_2(), 1000);
    setTimeout(() => position_3(), 1500)
}

function pos() {
    setInterval(() => position(), 1500)
}