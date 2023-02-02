function random(x, y) {
  return (x + (Math.random() * (y - x)));
}
for (let i = 0; i < 200; i++) {
  document.body.innerHTML += '<div class="star" style="animation-duration:' + random(10, 50) + 's;  top:' + random(0, 100) + '%;left:' + random(0, 100) + '%;"></div>'
}
window.onload = function () {
  window.setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
  }, 1000);
};
var typed = new Typed('.typed', {
  strings: ["Постамент", "Препоясать", "Ночной", "Качалка", "Седобородый", "Гран-при", "Гранатометчик", "Трепет"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true,
});

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.menu').classList.add('menu_open');
  document.querySelector('.menu_mobile').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
})
document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.menu').classList.remove('menu_open');
  document.querySelector('.menu_mobile').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active')
})