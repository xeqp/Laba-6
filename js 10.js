function tap() {
    let korpus = document.getElementById('button');
    korpus.style.borderRadius = '10px 10px 100px 100px';
    korpus.style.transition = '1s'

    let machta = document.getElementById('machta');
    machta.style.transform = 'rotate(90deg)';
    machta.style.left = '157.5px';
    machta.style.top = '168px';
    machta.style.transition = '1s';

    let lparus = document.getElementById('lparus');
    setTimeout(function() {lparus.style.borderRight = '50px solid white';
    lparus.style.borderBottom = '70px solid white'; 
    lparus.style.transition = '1s'}, 1000);

    let rparus = document.getElementById('rparus');
    setTimeout(function() {rparus.style.borderLeft = '30px solid white';
    rparus.style.borderBottom = '70px solid white'; 
    rparus.style.transition = '1s'}, 1000);

    let karabl = document.getElementById('karabl');

    setTimeout(function(){
    let start = Date.now();
    let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    if (timePassed >= 7000) {
    clearInterval(timer);
    return;
    }
    draw(timePassed);
    }, 5);
    function draw(timePassed) {
    karabl.style.left = timePassed / 5 + 'px';
    }}, 2000)
}