let name = document.getElementById('omar');
let direction = 1;
let position = 0;

setInterval(function() {
  if (position >= 200) {
    direction = -1;
  } else if (position <= 0) {
    direction = 1;
  }
  position += direction * 10;
  name.style.left = position + 'px';
}, 100);
