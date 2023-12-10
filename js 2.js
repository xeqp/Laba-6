function func() {
    var elem = document.querySelectorAll('.pr')
    for (var i = 0; i < elem.length; i++) {
        elem[i].innerHTML = i + 1
    } 
}