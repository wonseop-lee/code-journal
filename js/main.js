var avatarInput = document.querySelector("input[name='avatar']");
var imgSrc = document.querySelector('.avatar-image');

avatarInput.addEventListener('input', function (event) {
  imgSrc.setAttribute('src', event.target.value);
});

var form = document.querySelector('form');

var username = document.querySelector("input[name='username']");
var fullname = document.querySelector("input[name='fullname']");
var loca = document.querySelector("input[name='location']");
var bio = document.querySelector('#bio');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.username = username.value;
  data.profile.fullName = fullname.value;
  data.profile.location = loca.value;
  data.profile.avatarUrl = avatarInput.value;
  data.profile.bio = bio.value;
});
