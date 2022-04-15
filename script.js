const image = document.getElementById('image');
const flag = document.getElementById('flag');
function clickAlert() {
  alert("That's me!");
}
function clickAlert2() {
    alert("That's the Non-Binary Pride flag!");
}

image.addEventListener('click', clickAlert);
flag.addEventListener('click', clickAlert2);
