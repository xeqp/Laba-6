

function tap() {
    let fnum = document.getElementById('first').value;
    let snum = document.getElementById('second').value;
    let vopros = document.getElementById('vopros');
    let sum = Number(fnum) + Number(snum);

    vopros.innerHTML = sum;
}