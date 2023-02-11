function showPage() {
    document.getElementById('pages').classList.toggle('showPage');
}

window.onload = function() {
    var temp = window.location = this.find("a").attr("href");
    document.getElementsByClassName("linked").click(temp);
}