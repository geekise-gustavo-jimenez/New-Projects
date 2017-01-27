var snOpen = document.getElementById("sn-open");
var sn = document.getElementById("sn");
var snClose = document.getElementById("sn-close");
// console.log(snClose);
// console.log(snOpen);
// console.log(sn);

snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);

function snAnimOpen() {
  sn.classList.add("open")
}

function snAnimClose() {
  sn.classList.remove("open")
}

if (true) {

}
