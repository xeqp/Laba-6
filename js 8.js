function procent() {
    let span = document.getElementById('span');
    let progress = document.getElementById('progress');
    progress.value = +progress.value+ + 5;
    span.innerHTML = progress.value;
}