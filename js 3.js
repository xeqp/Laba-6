var a = 'жирный.';
b = a.bold();

function tap() {
    var text = document.getElementById('text');
    text.innerHTML = 'Изменился и стал  ' + b;
}