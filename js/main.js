var avatar = document.querySelector("input[name='avatar']");
var imgSrc = document.querySelector('.avatar-image');

avatar.addEventListener('input', function (event) {
  imgSrc.setAttribute('src', event.target.value);
});

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
});
